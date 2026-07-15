"use client";

import Link from "next/link";
import { useState } from "react";

import productCatalog from "@/data/productCatalog.json";
import Container from "@/components/common/Container";
import CartSidebar from "@/components/common/CartSidebar";
import { comparisonStyles } from "@/styles/styles";

const allProducts = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

/*
 * Lấy một sản phẩm có dữ liệu comparison
 * để tạo cấu trúc các nhóm General, Product,
 * Dimensions và Warranty.
 */
const comparisonTemplateProduct = allProducts.find(
  (product) =>
    Array.isArray(product.comparison) &&
    product.comparison.length > 0
);

const comparisonSections =
  comparisonTemplateProduct?.comparison.map((section) => ({
    key: section.key,
    title: section.title,
    rows: section.rows.map((row) => ({
      key: row.key,
      label: row.label,
    })),
  })) ?? [];

/*
 * Mặc định hiển thị Asgaard Sofa và Outdoor Sofa Set
 * vì hai sản phẩm này đã có thông số comparison.
 */
const initialCompareProducts = [9, 10]
  .map((id) =>
    allProducts.find(
      (product) => String(product.id) === String(id)
    )
  )
  .filter(Boolean);

function getProductUrl(product) {
  return `/product/${product.id}`;
}

function getProductImage(product) {
  return (
    product.images?.thumbnail ||
    product.image ||
    "/images/furniro-hero.png"
  );
}

function getProductPrice(product) {
  if (product.priceDisplay) {
    return product.priceDisplay;
  }

  if (typeof product.price === "string") {
    return product.price;
  }

  if (typeof product.price === "number") {
    const currency = product.currency || "IDR";

    const locale =
      currency === "INR"
        ? "en-IN"
        : currency === "VND"
          ? "vi-VN"
          : "id-ID";

    return new Intl.NumberFormat(locale, {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(product.price);
  }

  return "-";
}

/*
 * product.comparison hiện là mảng:
 *
 * comparison: [
 *   {
 *     key: "general",
 *     rows: [
 *       {
 *         key: "salesPackage",
 *         value: "1 sectional sofa"
 *       }
 *     ]
 *   }
 * ]
 *
 * Vì vậy cần tìm nhóm trước, rồi tìm dòng.
 */
function getComparisonValue(product, sectionKey, rowKey) {
  if (!Array.isArray(product.comparison)) {
    return "-";
  }

  const section = product.comparison.find(
    (item) => item.key === sectionKey
  );

  if (!section || !Array.isArray(section.rows)) {
    return "-";
  }

  const row = section.rows.find(
    (item) => item.key === rowKey
  );

  return row?.value || "-";
}

function RatingStars({ rating = 0 }) {
  const roundedRating = Math.round(Number(rating) || 0);

  return (
    <span
      className="flex gap-[2px] text-[20px] leading-none"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < roundedRating
              ? "text-[#FFC700]"
              : "text-[#D9D9D9]"
          }
        >
          ★
        </span>
      ))}
    </span>
  );
}

function ProductHeaderCard({ product, onRemove }) {
  const productUrl = getProductUrl(product);
  const image = getProductImage(product);
  const price = getProductPrice(product);
  const rating = Number(product.rating || 0);
  const reviews = product.reviews || 0;

  return (
    <article
      className={`${comparisonStyles.productColumn} relative`}
    >
      <button
        type="button"
        onClick={() => onRemove(product.id)}
        className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-[14px] leading-none text-white transition hover:bg-black/55"
        aria-label={`Remove ${product.name}`}
      >
        ×
      </button>

      {/* Ảnh dẫn tới /product/id */}
      <Link
        href={productUrl}
        className={comparisonStyles.productImageBox}
      >
        <img
          src={image}
          alt={product.name}
          className={comparisonStyles.productImage}
        />
      </Link>

      {/* Tên dẫn tới /product/id */}
      <Link href={productUrl}>
        <h2 className="mt-[18px] text-[24px] font-medium leading-[126.5%] text-black transition hover:text-[#B88E2F]">
          {product.name}
        </h2>
      </Link>

      <p className="mt-[6px] text-[18px] font-medium leading-[27px] text-black">
        {price}
      </p>

      <div className="mt-[7px] flex items-center gap-[7px]">
        <span className="text-[18px] font-medium leading-[27px] text-black">
          {rating || "-"}
        </span>

        <RatingStars rating={rating} />

        <span className="mx-[6px] h-[30px] w-px bg-[#9F9F9F]" />

        <span className="text-[13px] leading-[20px] text-[#9F9F9F]">
          {reviews} Review
        </span>
      </div>
    </article>
  );
}

function AddProductBox({
  availableProducts,
  onChooseProduct,
}) {
  return (
    <div className={comparisonStyles.addProductColumn}>
      <h2 className="mb-[14px] text-[24px] font-semibold leading-[126.5%] text-black">
        Add A Product
      </h2>

      <select
        className="h-[39px] w-[242px] rounded-[6px] border-0 bg-[#B88E2F] px-[18px] text-[14px] font-semibold leading-[126.5%] text-white outline-none"
        aria-label="Choose a product"
        value=""
        onChange={(event) =>
          onChooseProduct(event.target.value)
        }
      >
        <option value="" disabled>
          Choose a Product
        </option>

        {availableProducts.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </div>
  );
}

function ComparisonRow({
  row,
  sectionKey,
  products,
  canAddProduct,
}) {
  return (
    <div className={comparisonStyles.rowGrid}>
      <div className={comparisonStyles.rowLabel}>
        {row.label}
      </div>

      {products.map((product) => (
        <div
          key={`${product.id}-${sectionKey}-${row.key}`}
          className={comparisonStyles.rowValue}
        >
          {getComparisonValue(
            product,
            sectionKey,
            row.key
          )}
        </div>
      ))}

      {canAddProduct && (
        <div className="min-h-[59px] border-l border-[#E8E8E8]" />
      )}
    </div>
  );
}

function ComparisonSection({
  section,
  products,
  canAddProduct,
}) {
  return (
    <section>
      <h2 className={comparisonStyles.sectionTitle}>
        {section.title}
      </h2>

      <div>
        {section.rows.map((row) => (
          <ComparisonRow
            key={`${section.key}-${row.key}`}
            row={row}
            sectionKey={section.key}
            products={products}
            canAddProduct={canAddProduct}
          />
        ))}
      </div>
    </section>
  );
}

function AddToCartRow({
  products,
  canAddProduct,
  onAddToCart,
}) {
  return (
    <div className="grid grid-cols-[300px_344px_344px_344px] pt-[36px]">
      <div />

      {products.map((product) => (
        <div
          key={product.id}
          className="border-l border-[#E8E8E8] px-[42px] pb-[60px]"
        >
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className="flex h-[64px] w-[215px] items-center justify-center bg-[#B88E2F] text-[20px] font-normal text-white transition hover:bg-[#9F7928]"
          >
            Add To Cart
          </button>
        </div>
      ))}

      {canAddProduct && (
        <div className="border-l border-[#E8E8E8]" />
      )}
    </div>
  );
}

export default function ProductComparison() {
  const MAX_COMPARE_PRODUCTS = 3;

  const [isCartSidebarOpen, setIsCartSidebarOpen] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [productsToCompare, setProductsToCompare] =
    useState(initialCompareProducts);

  const canAddProduct =
    productsToCompare.length < MAX_COMPARE_PRODUCTS;

  const availableProducts = allProducts.filter(
    (product) =>
      !productsToCompare.some(
        (selectedItem) =>
          String(selectedItem.id) === String(product.id)
      )
  );

  function handleAddToCart(product) {
    const cartProduct = {
      ...product,
      image: getProductImage(product),
      price: getProductPrice(product),
      quantity: product.quantity || 1,
    };

    setSelectedProduct(cartProduct);
    setIsCartSidebarOpen(true);
  }

  function handleChooseProduct(productId) {
    const product = allProducts.find(
      (item) => String(item.id) === String(productId)
    );

    if (!product) {
      return;
    }

    setProductsToCompare((previousProducts) => {
      if (
        previousProducts.length >= MAX_COMPARE_PRODUCTS
      ) {
        return previousProducts;
      }

      const alreadyExists = previousProducts.some(
        (item) =>
          String(item.id) === String(product.id)
      );

      if (alreadyExists) {
        return previousProducts;
      }

      return [...previousProducts, product];
    });
  }

  function handleRemoveProduct(productId) {
    setProductsToCompare((previousProducts) =>
      previousProducts.filter(
        (product) =>
          String(product.id) !== String(productId)
      )
    );
  }

  return (
    <>
      <section className={comparisonStyles.section}>
        <Container
          size="comparison"
          className={comparisonStyles.wrapper}
        >
          <p className={comparisonStyles.mobileHint}>
            Kéo ngang bảng để xem đầy đủ thông tin so sánh sản
            phẩm.
          </p>

          <div className={comparisonStyles.table}>
            <div className={comparisonStyles.topGrid}>
              <div className={comparisonStyles.leftIntro}>
                <h1 className="w-[223px] text-[28px] font-medium leading-[126.5%] text-black">
                  Go to Product page for more Products
                </h1>

                <Link
                  href="/shop"
                  className="mt-[21px] inline-block border-b-2 border-[#727272] text-[20px] font-medium leading-[30px] text-[#727272] transition hover:border-[#B88E2F] hover:text-[#B88E2F]"
                >
                  View More
                </Link>
              </div>

              {productsToCompare.map((product) => (
                <ProductHeaderCard
                  key={product.id}
                  product={product}
                  onRemove={handleRemoveProduct}
                />
              ))}

              {canAddProduct && (
                <AddProductBox
                  availableProducts={availableProducts}
                  onChooseProduct={handleChooseProduct}
                />
              )}
            </div>

            {comparisonSections.map((section) => (
              <ComparisonSection
                key={section.key}
                section={section}
                products={productsToCompare}
                canAddProduct={canAddProduct}
              />
            ))}

            <AddToCartRow
              products={productsToCompare}
              canAddProduct={canAddProduct}
              onAddToCart={handleAddToCart}
            />
          </div>
        </Container>
      </section>

      <CartSidebar
        isOpen={isCartSidebarOpen}
        product={selectedProduct}
        onClose={() => setIsCartSidebarOpen(false)}
      />
    </>
  );
}
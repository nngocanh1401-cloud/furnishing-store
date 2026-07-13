"use client";
import Link from "next/link";
import { useState } from "react";
import productData from "@/data/products.json";
import Container from "@/components/common/Container";
import CartSidebar from "@/components/common/CartSidebar";
import comparisonData from "@/data/comparisonData.json";
import { comparisonStyles } from "@/styles/styles";

const { comparisonSections } = comparisonData;
const allProducts = productData.products ?? productData;

function RatingStars() {
  return (
    <span
      className="text-[20px] leading-none tracking-[2px] text-[#FFC700]"
      aria-label="5 stars"
    >
      ★★★★★
    </span>
  );
}

function ProductHeaderCard({ product, onRemove }) {
  const productUrl = product.productUrl ?? "/product";

  return (
    <article className={`${comparisonStyles.productColumn} relative`}>
      <button
        type="button"
        onClick={() => onRemove(product.id)}
        className="absolute right-3 top-3 z-10 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-[14px] leading-none text-white transition hover:bg-black/55"
        aria-label={`Remove ${product.name}`}
      >
        ×
      </button>
      <Link href={productUrl} className={comparisonStyles.productImageBox}>
        <img
          src={product.image}
          alt={product.name}
          className={comparisonStyles.productImage}
        />
      </Link>
      <Link href={productUrl}>
        <h2 className="mt-[18px] text-[24px] font-medium leading-[126.5%] text-black transition hover:text-[#B88E2F]">
          {product.name}
        </h2>
      </Link>

      <p className="mt-[6px] text-[18px] font-medium leading-[27px] text-black">
        {product.price}
      </p>

      <div className="mt-[7px] flex items-center gap-[7px]">
        <span className="text-[18px] font-medium leading-[27px] text-black">
          {product.rating}
        </span>

        <RatingStars />

        <span className="mx-[6px] h-[30px] w-px bg-[#9F9F9F]" />

        <span className="text-[13px] leading-[20px] text-[#9F9F9F]">
          {product.reviews} Review
        </span>
      </div>
    </article>
  );
}

function AddProductBox({ availableProducts, onChooseProduct }) {
  return (
    <div className={comparisonStyles.addProductColumn}>
      <h2 className="mb-[14px] text-[24px] font-semibold leading-[126.5%] text-black">
        Add A Product
      </h2>

      <select
        className="h-[39px] w-[242px] rounded-[6px] border-0 bg-[#B88E2F] px-[18px] text-[14px] font-semibold leading-[126.5%] text-white outline-none"
        aria-label="Choose a product"
        defaultValue=""
        onChange={(event) => onChooseProduct(event.target.value)}
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

function ComparisonRow({ row, productCount, canAddProduct }) {
  const visibleValues = Array.from({ length: productCount }, (_, index) => {
    return row.values[index] ?? "";
  });

  return (
    <div className={comparisonStyles.rowGrid}>
      <div className={comparisonStyles.rowLabel}>{row.label}</div>

      {visibleValues.map((value, index) => (
        <div key={`${row.label}-${index}`} className={comparisonStyles.rowValue}>
          {value || "-"}
        </div>
      ))}

      {canAddProduct && (
        <div className="min-h-[59px] border-l border-[#E8E8E8]" />
      )}
    </div>
  );
}

function ComparisonSection({ section, productCount, canAddProduct }) {
  return (
    <section>
      <h2 className={comparisonStyles.sectionTitle}>{section.title}</h2>

      <div>
        {section.rows.map((row) => (
          <ComparisonRow
            key={row.label}
            row={row}
            productCount={productCount}
            canAddProduct={canAddProduct}
          />
        ))}
      </div>
    </section>
  );
}

function AddToCartRow({ products, canAddProduct, onAddToCart }) {
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

      {canAddProduct && <div className="border-l border-[#E8E8E8]" />}
    </div>
  );
}

export default function ProductComparison() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const INITIAL_COMPARE_PRODUCTS = 2;
  const MAX_COMPARE_PRODUCTS = 3;

  const [productsToCompare, setProductsToCompare] = useState(
    allProducts.slice(0, INITIAL_COMPARE_PRODUCTS)
  );
// 2 sp hien add product, 3 san pham an add product
  const canAddProduct = productsToCompare.length < MAX_COMPARE_PRODUCTS;

  const availableProducts = allProducts.filter(
    (product) =>
      !productsToCompare.some((item) => Number(item.id) === Number(product.id))
  );
  function handleAddToCart(product) {
    setSelectedProduct(product);
    setIsCartSidebarOpen(true);
  }

  function handleChooseProduct(productId) {
    const product = allProducts.find(
      (item) => Number(item.id) === Number(productId)
    );

    if (!product) return;

    setProductsToCompare((prev) => {
      if (prev.length >= MAX_COMPARE_PRODUCTS) return prev;

      const isExisting = prev.some(
        (item) => Number(item.id) === Number(product.id)
      );

      if (isExisting) return prev;

      return [...prev, product];
    });
  }
  function handleRemoveProduct(productId) {
    setProductsToCompare((prev) =>
      prev.filter((product) => Number(product.id) !== Number(productId))
    );
  }

  return (
    <>
      <section className={comparisonStyles.section}>
        <Container size="comparison" className={comparisonStyles.wrapper}>
          <p className={comparisonStyles.mobileHint}>
            Kéo ngang bảng để xem đầy đủ thông tin so sánh sản phẩm.
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
                key={section.title}
                section={section}
                productCount={productsToCompare.length}
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

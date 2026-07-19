"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import productCatalog from "@/data/productCatalog.json";
import Container from "@/components/common/Container";
import CartSidebar from "@/components/common/CartSidebar";
import { comparisonStyles } from "@/styles/styles";
import {
  getCompareProductIds,
  removeProductFromCompare,
  MAX_COMPARE_PRODUCTS,
} from "@/utils/compareStorage";

const allProducts = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

function hasComparison(product) {
  return Array.isArray(product.comparison) && product.comparison.length > 0;
}

const productsWithComparison = allProducts.filter(hasComparison);

const comparisonTemplateProduct = productsWithComparison[0];

const comparisonSections =
  comparisonTemplateProduct?.comparison.map((section) => ({
    key: section.key,
    title: section.title,
    rows: section.rows.map((row) => ({
      key: row.key,
      label: row.label,
    })),
  })) ?? [];

function getProductUrl(product) {
  return `/product/${product.id}`;
}

function getProductImage(product) {
  return product.image || "/images/furniro-hero.png";
}

function getProductPriceDisplay(product) {
  return product.priceDisplay || product.price || "-";
}

function getComparisonValue(product, sectionKey, rowKey) {
  const section = product.comparison?.find((item) => item.key === sectionKey);
  const row = section?.rows?.find((item) => item.key === rowKey);

  return row?.value || "-";
}

function RatingStars({ rating = 0 }) {
  const roundedRating = Math.round(Number(rating) || 0);

  return (
    <span
      className={comparisonStyles.ratingStars}
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }, (_, index) => (
        <span
          key={index}
          className={
            index < roundedRating
              ? comparisonStyles.starActive
              : comparisonStyles.starInactive
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
  const priceDisplay = getProductPriceDisplay(product);
  const rating = Number(product.rating || 0);
  const reviews = product.reviews || 0;

  return (
    <article className={`${comparisonStyles.productColumn} relative`}>
      <button
        type="button"
        onClick={() => onRemove(product.id)}
        className={comparisonStyles.removeButton}
        aria-label={`Remove ${product.name}`}
      >
        ×
      </button>

      <Link href={productUrl} className={comparisonStyles.productImageBox}>
        <Image
          src={image}
          alt={product.name}
          width={280}
          height={177}
          className={comparisonStyles.productImage}
        />
      </Link>

      <Link href={productUrl}>
        <h2 className={comparisonStyles.productTitle}>{product.name}</h2>
      </Link>

      <p className={comparisonStyles.productPrice}>{priceDisplay}</p>

      <div className={comparisonStyles.ratingRow}>
        <span className={comparisonStyles.ratingNumber}>{rating || "-"}</span>

        <RatingStars rating={rating} />

        <span className={comparisonStyles.ratingDivider} />

        <span className={comparisonStyles.reviewText}>{reviews} Review</span>
      </div>
    </article>
  );
}

function AddProductBox() {
  return (
    <div className={comparisonStyles.addProductColumn}>
      <h2 className={comparisonStyles.addProductTitle}>Add A Product</h2>

      <Link href="/shop" className={comparisonStyles.addProductLink}>
        Choose a Product
      </Link>
    </div>
  );
}

function ComparisonRow({ row, sectionKey, products, canAddProduct }) {
  return (
    <div className={comparisonStyles.rowGrid}>
      <div className={comparisonStyles.rowLabel}>{row.label}</div>

      {products.map((product) => (
        <div
          key={`${product.id}-${sectionKey}-${row.key}`}
          className={comparisonStyles.rowValue}
        >
          {getComparisonValue(product, sectionKey, row.key)}
        </div>
      ))}

      {canAddProduct && <div className={comparisonStyles.emptyColumn} />}
    </div>
  );
}

function ComparisonSection({ section, products, canAddProduct }) {
  return (
    <section>
      <h2 className={comparisonStyles.sectionTitle}>{section.title}</h2>

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

function AddToCartRow({ products, canAddProduct, onAddToCart }) {
  return (
    <div className={comparisonStyles.addToCartGrid}>
      <div />

      {products.map((product) => (
        <div key={product.id} className={comparisonStyles.addToCartColumn}>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            className={comparisonStyles.addToCartButton}
          >
            Add To Cart
          </button>
        </div>
      ))}

      {canAddProduct && <div className={comparisonStyles.emptyCartColumn} />}
    </div>
  );
}

export default function ProductComparison() {
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [productsToCompare, setProductsToCompare] = useState([]);

  const canAddProduct = productsToCompare.length < MAX_COMPARE_PRODUCTS;

  useEffect(() => {
    const storedIds = getCompareProductIds();

    const storedProducts = storedIds
      .map((id) =>
        productsWithComparison.find(
          (product) => Number(product.id) === Number(id)
        )
      )
      .filter(Boolean);

    setProductsToCompare(storedProducts);
  }, []);

  function handleAddToCart(product) {
    const cartProduct = {
      id: product.id,
      name: product.name,
      image: getProductImage(product),
      price: product.price,
      priceDisplay: product.priceDisplay,
      quantity: product.quantity || 1,
    };

    setSelectedProduct(cartProduct);
    setIsCartSidebarOpen(true);
  }

  function handleRemoveProduct(productId) {
    const nextIds = removeProductFromCompare(productId);

    const nextProducts = nextIds
      .map((id) =>
        productsWithComparison.find(
          (product) => Number(product.id) === Number(id)
        )
      )
      .filter(Boolean);

    setProductsToCompare(nextProducts);
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

              {canAddProduct && <AddProductBox />}
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
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";
import ComparisonCartSidebar from "@/components/comparison/ComparisonCartSidebar";
import { compareProducts, comparisonSections } from "@/data/comparisonData";
import { comparisonStyles } from "@/styles/styles";

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

function ProductHeaderCard({ product }) {
  return (
    <article className={comparisonStyles.productColumn}>
      <Link
        href={product.productUrl ?? "/product"}
        className={comparisonStyles.productImageBox}
      >
        <img
          src={product.image}
          alt={product.name}
          className={comparisonStyles.productImage}
        />
      </Link>

      <Link href={product.productUrl ?? "/product"}>
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

function AddProductBox({ onChooseProduct }) {
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
        <option value="/product">Asgaard Sofa</option>
        <option value="/product">Outdoor Sofa Set</option>
        <option value="/shop">View more products</option>
      </select>
    </div>
  );
}

function ComparisonRow({ row }) {
  return (
    <div className={comparisonStyles.rowGrid}>
      <div className={comparisonStyles.rowLabel}>{row.label}</div>

      {row.values.map((value, index) => (
        <div key={`${row.label}-${index}`} className={comparisonStyles.rowValue}>
          {value}
        </div>
      ))}

      <div className="min-h-[59px] border-l border-[#E8E8E8]" />
    </div>
  );
}

function ComparisonSection({ section }) {
  return (
    <section>
      <h2 className={comparisonStyles.sectionTitle}>{section.title}</h2>

      <div>
        {section.rows.map((row) => (
          <ComparisonRow key={row.label} row={row} />
        ))}
      </div>
    </section>
  );
}

function AddToCartRow({ onAddToCart }) {
  return (
    <div className="grid grid-cols-[300px_344px_344px_344px] pt-[36px]">
      <div />

      {compareProducts.map((product) => (
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

      <div className="border-l border-[#E8E8E8]" />
    </div>
  );
}

export default function ProductComparison() {
  const router = useRouter();
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  function handleAddToCart(product) {
    setSelectedProduct(product);
    setIsCartSidebarOpen(true);
  }

  function handleChooseProduct(url) {
    if (!url) return;
    router.push(url);
  }

  return (
    <>
      <ShopBanner title="Product Comparison" current="Comparison" />

      <section className={comparisonStyles.section}>
        <div className="mx-auto max-w-[1332px] px-5 lg:px-0">
          <p className={comparisonStyles.mobileHint}>
            Kéo ngang bảng để xem đầy đủ thông tin so sánh sản phẩm.
          </p>
        </div>

        <div className={comparisonStyles.wrapper}>
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

              {compareProducts.map((product) => (
                <ProductHeaderCard key={product.id} product={product} />
              ))}

              <AddProductBox onChooseProduct={handleChooseProduct} />
            </div>

            {comparisonSections.map((section) => (
              <ComparisonSection key={section.title} section={section} />
            ))}

            <AddToCartRow onAddToCart={handleAddToCart} />
          </div>
        </div>
      </section>

      <FeatureSection />

      <ComparisonCartSidebar
        isOpen={isCartSidebarOpen}
        product={selectedProduct}
        onClose={() => setIsCartSidebarOpen(false)}
      />
    </>
  );
}

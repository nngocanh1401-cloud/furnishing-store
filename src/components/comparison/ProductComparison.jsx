"use client";

<<<<<<< HEAD
import { useState } from "react";
=======
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";
import ComparisonCartSidebar from "@/components/comparison/ComparisonCartSidebar";
>>>>>>> TestTH
import { compareProducts, comparisonSections } from "@/data/comparisonData";
import { comparisonStyles } from "@/styles/styles";

<<<<<<< HEAD
export default function ProductComparison() {
  const [selectedProducts, setSelectedProducts] = useState(
    compareProducts.slice(0, Math.min(2, compareProducts.length))
  );

  const productCount = selectedProducts.length;
  const canAddProduct = productCount < 3;

  const availableProducts = compareProducts.filter(
    (product) => !selectedProducts.some((item) => item.id === product.id)
  );

  const handleRemoveProduct = (productId) => {
    setSelectedProducts((prev) => prev.filter((item) => item.id !== productId));
  };

  const handleAddProduct = (event) => {
    const productId = Number(event.target.value);
    const product = compareProducts.find((item) => item.id === productId);

    if (!product || selectedProducts.length >= 3) return;

    setSelectedProducts((prev) => [...prev, product]);
    event.target.value = "";
  };

  const topGridClass =
    "grid-cols-2 min-[768px]:grid-cols-[160px_repeat(3,minmax(0,1fr))] min-[992px]:grid-cols-[220px_repeat(3,minmax(0,1fr))] min-[1200px]:grid-cols-[300px_344px_344px_344px]";

  const rowGridClass = canAddProduct
    ? "min-[768px]:grid-cols-[160px_repeat(3,minmax(0,1fr))] min-[992px]:grid-cols-[220px_repeat(3,minmax(0,1fr))] min-[1200px]:grid-cols-[300px_344px_344px_344px]"
    : productCount === 3
      ? "min-[768px]:grid-cols-[160px_repeat(3,minmax(0,1fr))] min-[992px]:grid-cols-[220px_repeat(3,minmax(0,1fr))] min-[1200px]:grid-cols-[300px_344px_344px_344px]"
      : "min-[768px]:grid-cols-[180px_repeat(2,minmax(0,1fr))] min-[992px]:grid-cols-[260px_repeat(2,minmax(0,1fr))] min-[1200px]:grid-cols-[300px_344px_344px]";


  const valueGridClass = productCount === 3 ? "grid-cols-3" : "grid-cols-2";

  return (
    <section className="bg-white py-8 font-[Poppins] min-[768px]:py-10">
      <div className="mx-auto max-w-[1332px] px-4 min-[600px]:px-6 min-[1200px]:px-0">
        <div className="overflow-hidden border border-[#E8E8E8] min-[768px]:border-0">
          <div className="border-b border-[#E8E8E8]">
            <div className="grid grid-cols-1 min-[768px]:grid-cols-[160px_repeat(3,minmax(0,1fr))] min-[992px]:grid-cols-[220px_repeat(3,minmax(0,1fr))] min-[1200px]:grid-cols-[300px_344px_344px_344px]">
              <div className="border-b border-[#E8E8E8] px-4 py-6 min-[600px]:px-5 min-[768px]:border-b-0 min-[768px]:px-4 min-[768px]:py-7 min-[992px]:px-5 min-[1200px]:px-[42px] min-[1200px]:pt-[55px]">
                <h2 className="max-w-[260px] text-[22px] font-medium leading-[126.5%] text-black min-[768px]:w-[145px] min-[768px]:text-[18px] min-[992px]:w-[190px] min-[992px]:text-[24px] min-[1200px]:w-[223px] min-[1200px]:text-[28px]">
                  Go to Product page for more Products
                </h2>

                <a
                  href="/shop"
                  className="mt-4 inline-block border-b-2 border-[#727272] text-[16px] font-medium text-[#727272] min-[992px]:text-[18px] min-[1200px]:text-[20px]"
                >
                  View More
                </a>
              </div>

              <div className="flex gap-4 overflow-x-auto px-4 py-4 min-[768px]:contents">
                {selectedProducts.map((product) => (
                  <article
                    key={product.id}
                    className="relative min-w-[190px] border border-[#E8E8E8] p-3 min-[600px]:min-w-[220px] min-[768px]:min-w-0 min-[768px]:border-0 min-[768px]:border-l min-[768px]:px-3 min-[768px]:pb-6 min-[992px]:px-5 min-[1200px]:px-10 min-[1200px]:pb-8"
                  >
                    <button
                      type="button"
                      onClick={() => handleRemoveProduct(product.id)}
                      className="absolute right-2 top-2 flex h-6 w-6 items-center justify-center rounded-full bg-black/35 text-[14px] leading-none text-white transition hover:bg-black/55"
                      aria-label={`Remove ${product.name}`}
                    >
                      ×
                    </button>

                    <div className="mb-3 flex h-[120px] items-center justify-center rounded-[10px] bg-[#F9F1E7] min-[600px]:h-[140px] min-[768px]:h-[105px] min-[992px]:h-[145px] min-[1200px]:mb-[18px] min-[1200px]:h-[177px] min-[1200px]:w-[280px]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="max-h-[105px] max-w-[130px] object-contain min-[600px]:max-h-[125px] min-[600px]:max-w-[170px] min-[768px]:max-h-[95px] min-[768px]:max-w-[120px] min-[992px]:max-h-[130px] min-[992px]:max-w-[185px] min-[1200px]:max-h-[170px] min-[1200px]:max-w-[270px]"
                      />
                    </div>

                    <h3 className="min-h-[42px] text-[15px] font-medium leading-[126.5%] text-black min-[600px]:text-[17px] min-[768px]:min-h-0 min-[768px]:text-[13px] min-[992px]:text-[20px] min-[1200px]:text-[24px]">
                      {product.name}
                    </h3>

                    <p className="mt-2 text-[14px] font-medium text-black min-[768px]:text-[12px] min-[992px]:text-[16px] min-[1200px]:text-[18px]">
                      {product.price}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-1 min-[992px]:gap-2">
                      <span className="text-[13px] font-medium text-black min-[768px]:text-[11px] min-[992px]:text-[16px] min-[1200px]:text-[18px]">
                        {product.rating}
                      </span>

                      <span className="text-[12px] tracking-[1px] text-[#FFC700] min-[768px]:text-[10px] min-[992px]:text-[16px] min-[1200px]:text-[20px] min-[1200px]:tracking-[2px]">
                        ★★★★★
                      </span>

                      <span className="hidden h-[30px] w-px bg-[#9F9F9F] min-[1200px]:block" />

                      <span className="text-[11px] text-[#9F9F9F] min-[768px]:text-[10px] min-[992px]:text-[12px] min-[1200px]:text-[13px]">
                        {product.reviews} Review
                      </span>
                    </div>
                  </article>
                ))}

                {canAddProduct && (
                  <div className="min-w-[190px] border border-[#E8E8E8] px-4 py-6 min-[600px]:min-w-[220px] min-[600px]:px-5 min-[768px]:min-w-0 min-[768px]:border-0 min-[768px]:border-l min-[768px]:px-3 min-[768px]:py-7 min-[992px]:px-5 min-[1200px]:px-10 min-[1200px]:pt-[83px]">
                    <h3 className="mb-3 text-[20px] font-semibold leading-[126.5%] text-black min-[768px]:text-[14px] min-[992px]:text-[20px] min-[1200px]:text-[24px]">
                      Add A Product
                    </h3>

                    <select
                      className="h-[39px] w-full max-w-[242px] rounded-[6px] border-0 bg-[#B88E2F] px-[14px] text-[13px] font-semibold text-white outline-none min-[1200px]:px-[18px] min-[1200px]:text-[14px]"
                      aria-label="Choose a product"
                      defaultValue=""
                      onChange={handleAddProduct}
                      disabled={availableProducts.length === 0}
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

                    <p className="mt-2 text-[12px] text-[#9F9F9F]">
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div>
          {comparisonSections.map((section) => (
            <section
              key={section.title}
              className="mt-8 min-[1200px]:mt-[35px]"
            >
              <h2 className="mb-4 px-4 text-[24px] font-medium leading-[126.5%] text-black min-[600px]:px-5 min-[768px]:mb-[22px] min-[768px]:px-4 min-[768px]:text-[24px] min-[992px]:text-[26px] min-[1200px]:mb-[28px] min-[1200px]:px-[42px] min-[1200px]:text-[28px]">
                {section.title}
              </h2>

              <div>
                {section.rows.map((row) => {
                  const isLongRow =
                    section.title === "Warranty" ||
                    row[0].toLowerCase().includes("warranty") ||
                    row[0].toLowerCase().includes("covered");

                  return (
                    <div
                      key={row[0]}
                      className={`min-[768px]:grid ${rowGridClass}`}
                    >
                      <div
                        className={`bg-[#F9F1E7] px-4 py-3 text-[15px] font-medium leading-[126.5%] text-black min-[600px]:text-[16px] min-[768px]:flex min-[768px]:items-start min-[768px]:bg-white min-[768px]:px-4 min-[768px]:py-3 min-[768px]:text-[13px] min-[992px]:text-[17px] min-[1200px]:px-10 min-[1200px]:text-[20px] ${isLongRow
                          ? "min-[768px]:min-h-[90px] min-[1200px]:min-h-[125px]"
                          : "min-[768px]:min-h-[52px] min-[992px]:min-h-[59px]"
                          }`}
                      >
                        {row[0]}
                      </div>

                      <div className={`grid ${valueGridClass} min-[768px]:contents`}>
                        {selectedProducts.map((product, index) => (
                          <div
                            key={product.id}
                            className={`break-words border-r border-[#E8E8E8] px-4 py-4 text-[14px] leading-[140%] text-black last:border-r-0 min-[600px]:text-[15px] min-[768px]:flex min-[768px]:items-start min-[768px]:border-l min-[768px]:border-r-0 min-[768px]:px-4 min-[768px]:py-3 min-[768px]:text-[13px] min-[768px]:leading-[126.5%] min-[992px]:text-[17px] min-[1200px]:px-10 min-[1200px]:text-[20px] ${isLongRow
                              ? "min-[768px]:min-h-[90px] min-[1200px]:min-h-[125px]"
                              : "min-[768px]:min-h-[52px] min-[992px]:min-h-[59px]"
                              }`}
                          >
                            {row[index + 1] || "—"}
                          </div>
                        ))}
                        {canAddProduct && (
                          <div
                            className={`hidden min-[768px]:block min-[768px]:border-l min-[768px]:border-[#E8E8E8] ${isLongRow
                                ? "min-[768px]:min-h-[90px] min-[1200px]:min-h-[125px]"
                                : "min-[768px]:min-h-[52px] min-[992px]:min-h-[59px]"
                              }`}
                          ></div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}

          <div
            className={`mt-8 grid ${valueGridClass} gap-4 min-[768px]:grid min-[768px]:gap-0 ${rowGridClass}`}
          >
            <div className="hidden min-[768px]:block" />

            {selectedProducts.map((product) => (
              <div
                key={product.id}
                className="min-[768px]:border-l min-[768px]:border-[#E8E8E8] min-[768px]:px-4 min-[1200px]:px-10"
              >
                <button className="h-[52px] w-full rounded-[4px] bg-[#B88E2F] text-[16px] text-white min-[768px]:h-[46px] min-[768px]:text-[14px] min-[992px]:h-[56px] min-[992px]:w-[180px] min-[992px]:text-[18px] min-[1200px]:h-[64px] min-[1200px]:w-[215px] min-[1200px]:text-[20px]">
                  Add To Cart
                </button>
              </div>
            ))}
            {canAddProduct && (
              <div className="hidden min-[768px]:block min-[768px]:border-l min-[768px]:border-[#E8E8E8]"></div>
            )}
          </div>
        </div>
=======
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
      <Link href={product.productUrl} className={comparisonStyles.productImageBox}>
        <img
          src={product.image}
          alt={product.name}
          className={comparisonStyles.productImage}
        />
      </Link>

      <Link href={product.productUrl}>
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
>>>>>>> TestTH
      </div>
    </section >
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
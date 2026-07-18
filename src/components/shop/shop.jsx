import FeatureSection from "@/components/common/FeatureSection";
import ProductGrid from "@/components/common/ProductGrid";
import ShopBanner from "@/components/common/ShopBanner";
import Pagination from "@/components/shop/Pagination";
import productCatalog from "@/data/productCatalog.json";

const products = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

export default function Shop() {
  return (
    <>
      <ShopBanner
        title="Shop"
        current="Shop"
      />

      <section className="bg-[#F9F1E7] px-5 py-6">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins'] text-[16px] text-black">
            Showing 1–{products.length} of{" "}
            {products.length} results
          </p>

          <div className="flex items-center gap-4">
            <span className="font-['Poppins'] text-[16px] text-black">
              Show
            </span>

            <span className="bg-white px-4 py-2 text-[#9F9F9F]">
              {products.length}
            </span>
          </div>
        </div>
      </section>

      <section className="py-[63px]">
        <ProductGrid
          title=""
          products={products}
          showMore={false}
        />

        <Pagination />
      </section>

      <FeatureSection />
    </>
  );
}
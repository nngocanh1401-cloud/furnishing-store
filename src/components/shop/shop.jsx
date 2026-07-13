import FeatureSection from "@/components/common/FeatureSection";
import Pagination from "@/components/shop/Pagination";
import ProductGrid from "@/components/common/ProductGrid";
import ShopBanner from "@/components/common/ShopBanner";
import products from "@/data/products.json";

export default function Shop() {
  return (
    <>
      <ShopBanner title="Shop" current="Shop" />

      <section className="bg-[#F9F1E7] px-5 py-6">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="font-['Poppins'] text-[16px] text-black">
            Showing 1–8 of 8 results
          </p>

          <div className="flex items-center gap-4">
            <span className="font-['Poppins'] text-[16px] text-black">
              Show
            </span>
            <span className="bg-white px-4 py-2 text-[#9F9F9F]">8</span>
          </div>
        </div>
      </section>

      <section className="py-[63px]">
        <ProductGrid title="" products={products} />
        <Pagination />
      </section>

      <FeatureSection />
    </>
  );
}
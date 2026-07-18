import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";
import ShopProductFilter from "@/components/shop/ShopProductFilter";
import productCatalog from "@/data/productCatalog.json";

const products = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

export const metadata = {
  title: "Shop",
  description: "Browse and filter Furniro products by room and price.",
};

export default function ShopPage() {
  return (
    <>
      <ShopBanner title="Shop" current="Shop" />

      <ShopProductFilter products={products} />

      <FeatureSection />
    </>
  );
}
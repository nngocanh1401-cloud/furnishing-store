import ShopFilterBar from "@/components/shop/ShopFilterBar";

import ShopBanner from "@/components/common/ShopBanner";
import ProductGrid from "@/components/common/ProductGrid";
import Pagination from "@/components/common/Pagination";
import FeatureSection from "@/components/common/FeatureSection";

import { products } from "@/data/product";

export const metadata = {
  title: "Shop",
  description: "Shop page of Furniro.",
};

export default function ShopPage() {
  return (
    <>
      <ShopBanner title="Shop" current="Shop" />
      <ShopFilterBar />
      <ProductGrid title="" products={products} showMore={false} />
      <Pagination />
      <FeatureSection />
    </>
  );
}
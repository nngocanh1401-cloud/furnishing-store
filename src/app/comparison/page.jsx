import ProductComparison from "@/components/comparison/ProductComparison";
import ShopBanner from "@/components/common/ShopBanner";
import FeatureSection from "@/components/common/FeatureSection";



export const metadata = {
  title: "Product Comparison",
  description:
    "Compare Furniro furniture products by price, material, dimensions and warranty.",
};

export default function ComparisonPage() {
  return (
    <>
      <ShopBanner title="Product Comparison" current="Comparison" />
      <ProductComparison />
      <FeatureSection />
    </>
  );
}
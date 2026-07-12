import ProductComparison from "@/components/comparison/ProductComparison";
import Breadcrumb from "@/components/common/Breadcrumb";
import ShopBanner from "@/components/common/ShopBanner";
import FeatureSection from "@/components/common/FeatureSection";


export const metadata = {
  title: "Product Comparison",
  description:
    "Compare Furniro furniture products by price, material, dimensions and warranty.",
};

export default function ComparisonPage() {
  return (
    <main>
      <ShopBanner title="Comparison" current="Comparison" />
      <ProductComparison />
      <FeatureSection />
    </main>
  );
}


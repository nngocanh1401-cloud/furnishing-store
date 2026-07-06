import ProductComparison from "@/components/comparison/ProductComparison";
import ShopBanner from "@/components/common/ShopBanner";

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
    </main>
  );
}


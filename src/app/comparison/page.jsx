import ProductComparison from "@/components/comparison/ProductComparison";
import ShopBanner from "@/components/common/ShopBanner";

export const metadata = {
  title: "Product Comparison | Furniro",
  description:
    "Compare furniture products, prices, dimensions and warranty information.",
};

export default function ComparisonPage() {
  return (
    <main>
      <ShopBanner title="Comparison" current="Comparison" />
      <ProductComparison />
    </main>
  );
}

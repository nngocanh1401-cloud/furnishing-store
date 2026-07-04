import ProductComparison from "@/components/comparison/ProductComparison";

export const metadata = {
  title: "Product Comparison | Furniro",
  description:
    "Compare furniture products, prices, dimensions and warranty information.",
};

export default function ComparisonPage() {
  return (
    <main>
      <ProductComparison />
    </main>
  );
}
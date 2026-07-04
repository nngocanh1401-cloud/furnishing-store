import ProductComparison from "@/components/comparison/ProductComparison";

export const metadata = {
  title: "Product Comparison",
  description:
    "Compare Furniro furniture products by price, material, dimensions and warranty.",
};

export default function ComparisonPage() {
  return <ProductComparison />;
}
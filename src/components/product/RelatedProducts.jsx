import ProductGrid from "@/components/common/ProductGrid";

export default function RelatedProducts({ products }) {
  return (
    <ProductGrid
      title="Related Products"
      products={products}
      showMore={true}
    />
  );
}
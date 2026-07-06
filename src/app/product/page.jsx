import ProductBreadcrumb from "@/components/common/ProductBreadcrumb";
import ProductDetail from "@/components/common/ProductDetail";
import ProductTabs from "@/components/common/ProductTabs";
import RelatedProducts from "@/components/common/RelatedProducts";
import FeatureSection from "@/components/common/FeatureSection";
import { products } from "@/data/product";

export const metadata = {
  title: "Product",
  description: "Product detail page of Furniro.",
};

export default function ProductPage() {
  const product = products[0];
  const relatedProducts = products.slice(0, 4);

  return (
    <>
      <ProductBreadcrumb product={product} />
      <ProductDetail product={product} />
      <ProductTabs />
      <RelatedProducts products={relatedProducts} />
      <FeatureSection />
    </>
  );
}
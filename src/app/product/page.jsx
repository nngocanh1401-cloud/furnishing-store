
import ShopBanner from "@/components/common/ShopBanner";
import ProductDetail from "@/components/product/ProductDetail";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/common/FeatureSection";
import products from "@/data/products.json";

export const metadata = {
  title: "Product",
  description: "Product detail page of Furniro.",
};

export default function ProductPage() {
  const product = products[0];
  const relatedProducts = products.slice(0, 4);

  return (
    <>
      <Breadcrumb product={product} />
      <ProductDetail product={product} />
      <ProductTabs />
      <RelatedProducts products={relatedProducts} />
      <FeatureSection />
    </>
  );
}
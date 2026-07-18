import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/common/FeatureSection";
import ProductDetail from "@/components/product/ProductDetail";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";

export default function Product({
  product,
  relatedProducts = [],
}) {
  if (!product) {
    return null;
  }

  return (
    <>
      <section className="bg-[#F9F1E7] px-5 py-8">
        <Breadcrumb
          current={product.name}
          showShop
        />
      </section>

      <ProductDetail product={product} />

      <ProductTabs product={product} />

      <RelatedProducts
        products={relatedProducts}
      />

      <FeatureSection />
    </>
  );
}
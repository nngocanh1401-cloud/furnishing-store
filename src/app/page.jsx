import ProductGrid from "@/components/common/ProductGrid";
import CategorySection from "@/components/home/CategorySection";
import HeroBanner from "@/components/home/HeroBanner";
import InspirationSection from "@/components/home/InspirationSection";
import InteriorGallery from "@/components/home/InteriorGallery";

import homeData from "@/data/homeData.json";
import productCatalog from "@/data/productCatalog.json";

const products = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

export const metadata = {
  title: "Home",
  description: "Furniro furniture store homepage.",
};

export default function HomePage() {
  const productLimit =
    Number(homeData.productsSection?.limit) || 8;

  return (
    <>
      <HeroBanner hero={homeData.hero} />

      <CategorySection browse={homeData.browse} />

      <ProductGrid
        title={
          homeData.productsSection?.title ||
          "Our Products"
        }
        products={products.slice(0, productLimit)}
      />

      <InspirationSection
        content={homeData.inspiration}
      />

      <InteriorGallery
        content={homeData.interiorGallery}
      />
    </>
  );
}
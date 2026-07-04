import ProductGrid from "@/components/common/ProductGrid";
import { products } from "@/data/product";
import CategorySection from "./CategorySection";
import HeroBanner from "./HeroBanner";
import InspirationSection from "./InspirationSection";
import InteriorGallery from "./InteriorGallery";

export default function Home() {
  return (
    <>
      <HeroBanner />
      <CategorySection />
      <ProductGrid title="Our Products" products={products.slice(0, 8)} />
      <InspirationSection />
      <InteriorGallery />
    </>
  );
}
import ProductGrid from "@/components/common/ProductGrid";
import { products } from "@/data/product";
import CategorySection from "../../components/home/CategorySection";
import HeroBanner from "../../components/home/HeroBanner";
import InspirationSection from "../../components/home/InspirationSection";
import InteriorGallery from "../../components/home/InteriorGallery";

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
import ProductGrid from "@/components/common/ProductGrid";
import CategorySection from "@/components/home/CategorySection";
import HeroBanner from "@/components/home/HeroBanner";
import InspirationSection from "@/components/home/InspirationSection";
import InteriorGallery from "@/components/home/InteriorGallery";
import products from "@/data/products.json";

export const metadata = {
  title: "Home",
  description:
    "Discover Furniro's modern furniture collection for your living room, bedroom and dining room.",
};

export default function Page() {
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
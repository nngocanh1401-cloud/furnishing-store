import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";
import Contact from "@/components/contact/contact";

export const metadata = {
  title: "Contact",
  description: "Contact Furniro for furniture support and product information.",
};

export default function ContactPage() {
  return (
    <>
      <ShopBanner title="Contact" current="Contact" />
      <Contact />
      <FeatureSection />
    </>
  );
}
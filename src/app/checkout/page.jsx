import ShopBanner from "@/components/common/ShopBanner";
import Pagination from "@/components/common/Pagination";
import CheckoutSection from "@/components/checkout/CheckoutSection";

export const metadata = {
  title: "Checkout | Furniro",
  description: "Complete your billing information and place your order.",
};

export default function CheckoutPage() {
  return (
    <>
      <ShopBanner title="Checkout" current="Checkout" />
      <CheckoutSection />
      <Pagination />
    </>
  );
}

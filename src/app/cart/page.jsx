import CartSection from "@/components/cart/CartSection";
import ShopBanner from "@/components/common/ShopBanner";

export const metadata = {
  title: "Cart | Furniro",
  description: "Review your cart before checkout.",
};

export default function CartPage() {
  return (
    <main>
      <ShopBanner title="Cart" current="Cart" />
      <CartSection />
    </main>
  );
}
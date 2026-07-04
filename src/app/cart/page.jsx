import CartSection from "@/components/cart/CartSection";

export const metadata = {
  title: "Cart | Furniro",
  description: "Review your furniture cart before checkout.",
};

export default function CartPage() {
  return (
    <main>
      <CartSection />
    </main>
  );
}
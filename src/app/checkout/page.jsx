import CheckoutSection from "@/components/checkout/CheckoutSection";

export const metadata = {
  title: "Checkout | Furniro",
  description: "Complete your billing information and place your order.",
};

export default function CheckoutPage() {
  return (
    <main>
      <CheckoutSection />
    </main>
  );
}
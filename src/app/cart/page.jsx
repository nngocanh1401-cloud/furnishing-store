import ShopBanner from "@/components/common/ShopBanner";

export const metadata = {
  title: "Cart",
  description: "Cart page of Furniro.",
};

export default function CartPage() {
  return <ShopBanner title="Cart" current="Cart" />;
}
import { redirect } from "next/navigation";

export const metadata = {
  title: "Product",
  description: "Choose a product from the Furniro shop.",
};

export default function ProductPage() {
  redirect("/shop");
}
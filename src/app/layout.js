import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "./globals.css";

export const metadata = {
  title: {
    default: "Furniro - Furniture Store",
    template: "%s | Furniro",
  },
  description:
    "Shop modern furniture for living room, bedroom and dining room at Furniro.",
  keywords: [
    "Furniro",
    "furniture",
    "home furniture",
    "living room",
    "bedroom",
    "dining room",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
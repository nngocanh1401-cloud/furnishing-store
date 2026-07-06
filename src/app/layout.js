import { Montserrat, Poppins } from "next/font/google";
import Footer from "@/components/common/Footer";
import Header from "@/components/common/Header";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700"],
});

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
    <html
      lang="en"
      className={`${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}

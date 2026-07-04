//placeholder
import Link from "next/link";
import ShopBanner from "@/components/common/ShopBanner";

export const metadata = {
  title: "Product",
  description: "Product detail page of Furniro.",
};

export default function ProductPage() {
  return (
    <>
      <ShopBanner title="Product" current="Product" />

      <section className="px-5 py-20 font-['Poppins']">
        <div className="mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-2">
          <div className="flex min-h-[420px] items-center justify-center rounded-[10px] bg-[#F9F1E7]">
            <img
              src="/images/black-sofa.jpg"
              alt="Asgaard Sofa"
              className="max-h-[360px] object-contain"
            />
          </div>

          <div>
            <h1 className="text-[42px] font-normal text-black">
              Asgaard Sofa
            </h1>

            <p className="mt-3 text-[24px] font-medium text-[#9F9F9F]">
              Rs. 250,000.00
            </p>

            <p className="mt-6 max-w-[424px] text-[13px] leading-[20px] text-black">
              Setting the bar as one of the loudest speakers in its class, the
              Asgaard sofa is compact, stylish and suitable for modern living
              rooms.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/cart"
                className="flex h-[64px] w-[215px] items-center justify-center rounded-[15px] border border-black text-[20px] text-black transition hover:bg-black hover:text-white"
              >
                Add To Cart
              </Link>

              <Link
                href="/comparison"
                className="flex h-[64px] w-[215px] items-center justify-center rounded-[15px] border border-[#B88E2F] text-[20px] text-[#B88E2F] transition hover:bg-[#B88E2F] hover:text-white"
              >
                Compare
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
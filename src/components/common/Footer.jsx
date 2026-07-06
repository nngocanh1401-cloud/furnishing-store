import Link from "next/link";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t border-[#D9D9D9] bg-white pt-12">
      <Container size="content">
        <div className="grid gap-10 pb-12 md:grid-cols-2 lg:grid-cols-[285px_1fr_1fr_286px] lg:gap-[72px]">
          <div>
            <h2 className="font-['Poppins'] text-[24px] font-bold leading-[36px] text-black">
              Furniro.
            </h2>

            <p className="mt-[50px] max-w-[285px] font-['Poppins'] text-[16px] leading-[24px] text-[#9F9F9F]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#9F9F9F]">
              Links
            </h3>

            <ul className="mt-[55px] space-y-[46px] font-['Poppins'] text-[16px] font-medium leading-[24px] text-black">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/shop">Shop</Link>
              </li>
              <li>
                <Link href="/comparison">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#9F9F9F]">
              Help
            </h3>

            <ul className="mt-[55px] space-y-[46px] font-['Poppins'] text-[16px] font-medium leading-[24px] text-black">
              <li>
                <Link href="/checkout">Payment Options</Link>
              </li>
              <li>
                <Link href="/cart">Returns</Link>
              </li>
              <li>
                <Link href="/contact">Privacy Policies</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#9F9F9F]">
              Newsletter
            </h3>

            <form className="mt-[53px] flex gap-[11px]">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="w-full border-b border-black pb-[3px] font-['Poppins'] text-[14px] leading-[21px] text-black outline-none placeholder:text-[#9F9F9F]"
              />

              <button
                type="submit"
                className="border-b border-black pb-[3px] font-['Poppins'] text-[14px] font-medium leading-[21px] text-black"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] py-[35px]">
          <p className="font-['Poppins'] text-[16px] leading-[24px] text-black">
            2023 furniro. All rights reserved
          </p>
        </div>
      </Container>
    </footer>
  );
}
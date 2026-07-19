import Link from "next/link";

export default function Breadcrumb({ current, showShop = false }) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex w-full items-center justify-start font-[var(--font-poppins)] text-[16px] font-normal leading-[24px] text-black"
    >
      <Link href="/" className="text-[#9F9F9F]">
        Home
      </Link>

      <span className="ml-[14px]">›</span>

      {showShop ? (
        <>
          <Link href="/shop" className="ml-[24px] text-[#9F9F9F]">
            Shop
          </Link>

          <span className="ml-[21px]">›</span>

          <span className="ml-[25px] h-[37px] w-px bg-[#9F9F9F]" />

          <span className="ml-[34px] text-black">
            {current}
          </span>
        </>
      ) : (
        <span className="ml-[24px] text-black">
          {current}
        </span>
      )}
    </nav>
  );
}
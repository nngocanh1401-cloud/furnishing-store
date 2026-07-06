import Link from "next/link";

<<<<<<< HEAD
export default function Breadcrumb({ current }) {
  return (
    <div className="mt-1 flex items-center justify-center gap-2 font-['Poppins'] text-[16px] leading-[24px] text-black">
=======
export default function Breadcrumb({
  current,
  showShop = false,
}) {
  return (
    <div className="flex items-center gap-2 font-['Poppins'] text-[16px] leading-[24px] text-black">
>>>>>>> TestTH
      <Link href="/" className="font-medium">
        Home
      </Link>

      <span>›</span>

<<<<<<< HEAD
      <span className="font-light">{current}</span>
=======
      {showShop ? (
        <>
          <Link href="/shop" className="font-medium text-[#9F9F9F]">
            Shop
          </Link>

          <span>›</span>

          <span>{current}</span>
        </>
      ) : (
        <span>{current}</span>
      )}
>>>>>>> TestTH
    </div>
  );
}
import Link from "next/link";

export default function Breadcrumb({ current }) {
  return (
    <div className="mt-1 flex items-center justify-center gap-2 font-['Poppins'] text-[16px] leading-[24px] text-black">
      <Link href="/" className="font-medium">
        Home
      </Link>

      <span>›</span>

      <span className="font-light">{current}</span>
    </div>
  );
}
import Image from "next/image";
import Link from "next/link";

export default function ShopBanner({ title, current }) {
  return (
    <section className="relative h-[316px] w-full overflow-hidden">
      {/* Background */}
      <Image
        src="/images/shop-banner.jpg"
        alt="Shop Banner"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/40"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        {/* Title */}
        <h1 className="font-['Poppins'] text-[48px] font-medium leading-[72px] text-black">
          {title}
        </h1>

        {/* Breadcrumb */}
        <div className="mt-1 flex items-center gap-2 font-['Poppins'] text-[16px] leading-[24px] text-black">
          <Link href="/" className="font-medium">
            Home
          </Link>

          <span>&gt;</span>

          <span>{current}</span>
        </div>
      </div>
    </section>
  );
}
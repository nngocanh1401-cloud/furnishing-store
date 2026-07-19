import Image from "next/image";
import Link from "next/link";

export default function ShopBanner({
  title = "Shop",
  current = "Shop"
}) {
  return (
    <section className="relative flex h-[316px] items-center justify-center overflow-hidden bg-[#FAF3EA] px-5 text-center">
      {/*Background Image*/}
      <Image
        src="/images/shop-banner.jpg"
        alt="Shop Banner"
        fill
        priority
        sizes="100vw"
        className="z-0 object-cover"
      />

      <div className="absolute inset-0 z-[1] bg-white/50" />
      {/*Overlay*/}
      <div className="absolute inset-0 bg-white/50"></div>
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-['Poppins'] text-[48px] font-medium leading-[72px] text-black">
          {title}
        </h1>

        <div className="mt-0 flex items-center gap-2 text-[16px] leading-[24px]">
          <Link href="/" className="font-medium text-black transition hover:text-[#B88E2F]">
            Home
          </Link>

          <span className="text-black">›</span>

          <span className="font-light text-black">{current}</span>

        </div>
      </div>
    </section>
  );
}

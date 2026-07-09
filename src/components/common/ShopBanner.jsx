import Breadcrumb from "./Breadcrumb";
import Image from "next/image";

export default function ShopBanner({ 
  title = "Shop",
  current = "Shop"
}) {
  return (
    <section className="flex h-[316px] items-center justify-center bg-[#FAF3EA] px-5 text-center">
      {/*Background Image*/}
      <Image
      src="/images/shop-banner.jpg"
      alt="Shop Banner"
      fill
      priority
      className="object-cover"
      />
      {/*Overlay*/}
      <div className="absolute inset-0 bg-white/50"></div>
      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="font-['Poppins'] text-[48px] font-medium leading-[72px] text-black">
          {title}
        </h1>

        <Breadcrumb current={current} />
      </div>
    </section>
  );
}

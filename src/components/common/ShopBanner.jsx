import Link from "next/link";

function SmallLogoMark() {
  return (
    <svg
      width="32"
      height="20"
      viewBox="0 0 50 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M2 30L13.5 7L25 30H17.5L13.5 21L9.5 30H2Z" fill="#B88E2F" />
      <path d="M21 30L32.5 7L48 30H39.5L32.5 19L27.5 30H21Z" fill="#B88E2F" />
    </svg>
  );
}

export default function ShopBanner({ title = "Shop", current = "Shop" }) {
  return (
    <section
      className="relative flex h-[316px] items-center justify-center bg-[#F9F1E7] bg-cover bg-center font-['Poppins']"
      style={{
        backgroundImage: "url('/images/shop-banner.jpg')",
      }}
    >
      <div className="absolute inset-0 bg-white/45 backdrop-blur-[1px]" />

      <div className="relative z-10 flex flex-col items-center text-center">
        <SmallLogoMark />

        <h1 className="mt-2 text-[48px] font-medium leading-[72px] text-black">
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
import Button from "@/components/common/Button";
import { images } from "@/data/images";

export default function HeroBanner() {
  return (
    <section
      className="relative min-h-[716px] bg-cover bg-center"
      style={{ backgroundImage: `url(${images.hero})` }}
    >
      <div className="mx-auto flex min-h-[716px] max-w-[1440px] items-center justify-end px-5 lg:px-[58px]">
        <div className="w-full max-w-[643px] rounded-[10px] bg-[#FFF3E3] px-[39px] pb-[37px] pt-[62px] font-['Poppins']">
          <p className="text-[16px] font-semibold uppercase tracking-[3px] text-[#333333]">
            New Arrival
          </p>

          <h1 className="mt-1 max-w-[559px] text-[clamp(42px,5vw,52px)] font-bold leading-[65px] text-[#B88E2F]">
            Discover Our New Collection
          </h1>

          <p className="mt-[17px] max-w-[546px] text-[18px] font-medium leading-[24px] text-[#333333]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis.
          </p>

          <Button href="/shop" size="hero" className="mt-[46px]">
            BUY NOW
          </Button>
        </div>
      </div>
    </section>
  );
}
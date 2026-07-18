import Link from "next/link";

import Button from "@/components/common/Button";
import { textStyles } from "@/styles/styles";

export default function InspirationSection({
  content,
}) {
  const items = Array.isArray(content?.items)
    ? content.items
    : [];

  const [main, second, third] = items;

  if (!main || !second || !third) {
    return null;
  }

  return (
    <section className="overflow-hidden bg-[#FCF8F3]">
      <div className="relative mx-auto w-full max-w-[1440px] px-5 py-12 lg:h-[670px] lg:px-0 lg:py-0">
        <div className="lg:absolute lg:left-[100px] lg:top-[223px] lg:w-[422px]">
          <h2 className={textStyles.sectionTitle}>
            {content?.title ||
              "50+ Beautiful rooms inspiration"}
          </h2>

          <p className="mt-[7px] max-w-[368px] font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#616161]">
            {content?.description ||
              "Discover beautiful rooms designed to inspire your home."}
          </p>

          <Button
            href={
              content?.buttonHref || "/shop"
            }
            size="inspiration"
            className="mt-[25px]"
          >
            {content?.buttonText ||
              "Explore More"}
          </Button>
        </div>

        <div className="mt-10 flex gap-6 overflow-x-auto pb-4 lg:absolute lg:left-[564px] lg:top-[44px] lg:mt-0 lg:w-[1196px] lg:overflow-visible lg:pb-0">
          <div className="relative h-[500px] w-[360px] shrink-0 overflow-hidden md:h-[582px] md:w-[404px]">
            <img
              src={main.image}
              alt={main.alt}
              className="h-full w-full object-cover"
            />

            <div className="absolute bottom-6 left-6 flex items-end">
              <div className="h-[130px] w-[217px] bg-white/70 px-8 py-8 backdrop-blur-[1.5px]">
                <p className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#616161]">
                  01 — {main.room}
                </p>

                <h3 className="mt-2 font-['Poppins'] text-[28px] font-semibold leading-[34px] text-[#3A3A3A]">
                  {main.title}
                </h3>
              </div>

              <Link
                href={
                  content?.buttonHref || "/shop"
                }
                aria-label="Explore room inspiration"
                className="flex h-12 w-12 items-center justify-center bg-[#B88E2F] text-2xl text-white transition hover:bg-[#9F7928]"
              >
                →
              </Link>
            </div>
          </div>

          <div className="shrink-0">
            <img
              src={second.image}
              alt={second.alt}
              className="h-[420px] w-[320px] object-cover md:h-[486px] md:w-[372px]"
            />

            <div className="mt-10 hidden items-center gap-5 md:flex">
              <span className="flex h-[27px] w-[27px] items-center justify-center rounded-full border border-[#B88E2F]">
                <span className="h-[11px] w-[11px] rounded-full bg-[#B88E2F]" />
              </span>

              <span className="h-[11px] w-[11px] rounded-full bg-[#D8D8D8]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#D8D8D8]" />
              <span className="h-[11px] w-[11px] rounded-full bg-[#D8D8D8]" />
            </div>
          </div>

          <img
            src={third.image}
            alt={third.alt}
            className="h-[420px] w-[320px] shrink-0 object-cover md:h-[486px] md:w-[372px]"
          />
        </div>
      </div>
    </section>
  );
}
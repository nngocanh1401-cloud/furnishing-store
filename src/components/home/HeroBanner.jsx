import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

const FALLBACK_IMAGE =
  "/images/furniro-hero.png";

export default function HeroBanner({ hero }) {
  const image =
    hero?.image || FALLBACK_IMAGE;

  const alt =
    hero?.alt ||
    "Modern Scandinavian interior room";

  const eyebrow =
    hero?.eyebrow || "New Arrival";

  const titleLine1 =
    hero?.titleLine1 || "Discover Our";

  const titleLine2 =
    hero?.titleLine2 || "New Collection";

  const description =
    hero?.description ||
    "Discover beautiful furniture for your home.";

  const buttonText =
    hero?.buttonText || "BUY NOW";

  const buttonHref =
    hero?.buttonHref || "/shop";

  return (
    <section className="relative h-[560px] overflow-hidden md:h-[650px] lg:h-[716px]">
      <img
        src={image}
        alt={alt}
        className="h-full w-full object-cover"
      />

      <div className="absolute inset-0">
        <Container
          size="page"
          className="relative h-full"
        >
          <div className="absolute left-1/2 top-1/2 w-[90%] max-w-[643px] -translate-x-1/2 -translate-y-1/2 rounded-[10px] bg-[#FFF3E3] px-6 py-8 md:w-[643px] lg:left-auto lg:right-[58px] lg:min-h-[443px] lg:translate-x-0 lg:px-[39px] lg:py-[62px]">
            <p className="font-['Poppins'] text-[16px] font-semibold leading-[24px] tracking-[3px] text-[#333333]">
              {eyebrow}
            </p>

            <h1 className="mt-1 font-['Poppins'] text-[clamp(36px,4vw,52px)] font-bold leading-[1.25] text-[#B88E2F]">
              {titleLine1}
              <br />
              {titleLine2}
            </h1>

            <p className="mt-4 max-w-[546px] font-['Poppins'] text-[clamp(16px,1.6vw,18px)] font-medium leading-[1.5] text-[#333333]">
              {description}
            </p>

            <Button
              href={buttonHref}
              size="hero"
              className="mt-8 lg:mt-[46px]"
            >
              {buttonText}
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
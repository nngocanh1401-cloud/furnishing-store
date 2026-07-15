export default function ProductTabs() {
  return (
    <section className="border-y border-[#D9D9D9] px-5 py-12 font-['Poppins']">
      <div className="mx-auto max-w-[1236px]">
        {/* Tabs headings */}
        <div className="flex flex-wrap justify-center gap-12 gap-y-4 text-center text-[18px] md:text-[24px]">

          <button type="button" className="fint-media text-black">
            Description
          </button>

          <button type="button" className="text-[#9F9F9F]">
            Additional Information
          </button>

          <button type="button" className="text-[#9F9F9F]">Reviews [5]</button>
        </div>

        <p className="mx-auto mt-9 max-w-[1026px] text-justify text-[16px] leading-[24px] text-[#9F9F9F]">
          Embodying the raw, wayward spirit of modern furniture, this product combines clean lines,
          comfortable materials, and a timeless design. It is suitable for living rooms, bedrooms,
          and interior spaces with a warm modern style.
        </p>
        <p>
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and
          extended highs for a sound that is both articulate and pronounced.
          The analogue knobs allow you to fine tune the controls to your
          personal preferences while the guitar-influenced leather strap
          enables easy and stylish travel.
        </p>
      </div>

      { /*Product description image */}
      <div className="mt-9 grid grid-cols-1 gap-7 md:grid-cols-2">
          <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[10px] bg-[#F9F1E7] md:h-[348px]">
            <img
              src="/images/sofa-lef.png"
              alt="Asgaard sofa front view"
              className="h-full w-full object-contain"
            />
          </div>

          <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[10px] bg-[#F9F1E7] md:h-[348px]">
            <img
              src="/images/sofa-right.png"
              alt="Asgaard sofa side view"
              className="h-full w-full object-contain"
            />
          </div>
      </div>
    </section>
  );
}
export default function ProductTabs() {
  return (
    <section className="border-y border-[#D9D9D9] px-5 py-12 font-['Poppins']">
      <div className="mx-auto max-w-[1236px]">
        <div className="flex justify-center gap-12 text-[24px]">
          <button className="text-black">Description</button>
          <button className="text-[#9F9F9F]">Additional Information</button>
          <button className="text-[#9F9F9F]">Reviews [5]</button>
        </div>

        <p className="mx-auto mt-9 max-w-[1026px] text-justify text-[16px] leading-[24px] text-[#9F9F9F]">
          Embodying the raw, wayward spirit of modern furniture, this product combines clean lines,
          comfortable materials, and a timeless design. It is suitable for living rooms, bedrooms,
          and interior spaces with a warm modern style.
        </p>
      </div>
    </section>
  );
}
import { SlidersHorizontal } from "lucide-react";

export default function ShopFilterBar() {
  return (
    <section className="bg-[#F9F1E7] font-['Poppins']">
      <div className="mx-auto flex max-w-[1236px] flex-col gap-6 px-5 py-8 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-wrap items-center gap-6">
          <button className="flex items-center gap-2 text-[20px] text-black">
            <SlidersHorizontal size={20} />
            Filter
          </button>

          <span className="hidden h-[37px] w-px bg-[#9F9F9F] md:block"></span>

          <p className="text-[16px] text-black">
            Showing 1–16 of 32 results
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <label className="text-[20px] text-black">Show</label>
          <input
            type="number"
            defaultValue="16"
            className="h-[55px] w-[55px] bg-white text-center text-[20px] text-[#9F9F9F] outline-none"
          />

          <label className="text-[20px] text-black">Sort by</label>
          <select className="h-[55px] w-[188px] bg-white px-4 text-[20px] text-[#9F9F9F] outline-none">
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </div>
    </section>
  );
}
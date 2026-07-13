export default function Pagination() {
  return (
    <div className="flex justify-center bg-white pb-[85px] pt-[40px] font-['Poppins']">
      <div className="flex items-center gap-[38px]">
        <button
          type="button"
          className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#B88E2F] px-4 text-[20px] font-normal text-white transition hover:bg-[#9F7928]"
        >
          1
        </button>

        <button
          type="button"
          className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-4 text-[20px] font-normal text-black transition hover:bg-[#B88E2F] hover:text-white"
        >
          2
        </button>

        <button
          type="button"
          className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-4 text-[20px] font-normal text-black transition hover:bg-[#B88E2F] hover:text-white"
        >
          3
        </button>

        <button
          type="button"
          className="flex h-[60px] min-w-[98px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-6 text-[20px] font-light text-black transition hover:bg-[#B88E2F] hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  );
}
export default function Pagination() {
  return (
    <div className="mt-[70px] flex justify-center gap-[38px]">
      <button className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#B88E2F] px-5 font-['Poppins'] text-[20px] text-white">
        1
      </button>

      <button className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-5 font-['Poppins'] text-[20px] text-black">
        2
      </button>

      <button className="flex h-[60px] min-w-[60px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-5 font-['Poppins'] text-[20px] text-black">
        3
      </button>

      <button className="flex h-[60px] min-w-[98px] items-center justify-center rounded-[10px] bg-[#F9F1E7] px-5 font-['Poppins'] text-[20px] text-black">
        Next
      </button>
    </div>
  );
}
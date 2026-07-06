export const textStyles = {
  sectionTitle:
    "font-['Poppins'] text-[clamp(32px,4vw,40px)] font-bold leading-[1.2] text-[#3A3A3A]",

  sectionSubtitle:
    "font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#616161]",

  productName:
    "font-['Poppins'] text-[24px] font-semibold leading-[29px] text-[#3A3A3A]",

  productDescription:
    "font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#898989]",

  productPrice:
    "font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#3A3A3A]",
};

export const buttonStyles = {
  base:
    "inline-flex items-center justify-center font-['Poppins'] text-[16px] font-semibold leading-[24px] transition duration-200",

  primary:
    "border border-[#B88E2F] bg-[#B88E2F] !text-white hover:border-[#9F7928] hover:bg-[#9F7928]",

  outline:
    "border border-[#B88E2F] bg-white !text-[#B88E2F] hover:bg-[#B88E2F] hover:!text-white",

  dark:
    "border border-black bg-white !text-black hover:bg-black hover:!text-white",
};

export const buttonSizes = {
  default: "h-12 px-9",
  hero: "h-[74px] w-[222px] uppercase",
  showMore: "h-12 w-[245px]",
  inspiration: "h-12 w-[176px]",

  compareAdd: "h-[64px] w-[215px] text-[20px] font-normal",

};

export const layoutStyles = {
  container: "mx-auto w-full px-5 xl:px-0",

  productGrid: "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4",

  categoryGrid:
    "mt-[48px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",

};

export const comparisonStyles = {
  section: "bg-white px-5 py-[34px] lg:px-0",

  wrapper:
    "mx-auto w-full max-w-[1332px] overflow-x-auto font-['Poppins']",

  table: "min-w-[1000px] border-collapse text-left",

  topGrid:
    "grid grid-cols-[300px_344px_344px_344px] border-b border-[#E8E8E8]",

  leftIntro: "px-[42px] pt-[21px] pb-8",

  productColumn:
    "border-l border-[#E8E8E8] px-[39px] pb-[30px]",

  addProductColumn:
    "border-l border-[#E8E8E8] px-[39px] pt-[52px]",

  productImageBox:
    "flex h-[177px] w-[280px] items-center justify-center rounded-[10px] bg-[#F9F1E7] transition hover:opacity-80",

  productImage:
    "max-h-[165px] max-w-[260px] object-contain",

  rowGrid: "grid grid-cols-[300px_344px_344px_344px]",

  rowLabel:
    "min-h-[59px] px-[42px] py-[12px] text-[20px] font-normal leading-[126.5%] text-black",

  rowValue:
    "min-h-[59px] border-l border-[#E8E8E8] px-[42px] py-[12px] text-[20px] font-normal leading-[126.5%] text-black",

  sectionTitle:
    "px-[42px] pb-[28px] pt-[42px] text-[28px] font-medium leading-[126.5%] text-black",

  mobileHint:
    "mb-4 block rounded-md bg-[#FFF3E3] px-4 py-3 text-center text-[14px] text-[#616161] lg:hidden",
};
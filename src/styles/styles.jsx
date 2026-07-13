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

  pageSection: "bg-white py-[98px]",
};

export const formStyles = {
  group: "grid gap-[22px]",

  label:
    "font-['Poppins'] text-[16px] font-medium text-black",

  input:
    "h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 font-['Poppins'] outline-none",

  textarea:
    "h-[120px] rounded-[10px] border border-[#9F9F9F] px-6 py-5 font-['Poppins'] outline-none",

  submit:
    "h-[55px] w-[237px] rounded-[5px] bg-[#B88E2F] font-['Poppins'] text-[16px] text-white transition hover:bg-[#9F7928]",
};

export const contactStyles = {
  title:
    "font-['Poppins'] text-[36px] font-semibold text-black",

  description:
    "mx-auto mt-2 max-w-[644px] font-['Poppins'] text-[16px] text-[#9F9F9F]",

  contentGrid:
    "mt-[82px] grid gap-10 lg:grid-cols-[393px_1fr]",

  infoWrapper:
    "space-y-10 font-['Poppins']",

  infoTitle:
    "text-[24px] font-medium text-black",

  infoText:
    "text-[16px] leading-[24px] text-black",
};

export const shopStyles = {
  filterBar: "bg-[#F9F1E7] font-['Poppins']",

  filterContent:
    "flex flex-col gap-6 py-8 lg:flex-row lg:items-center lg:justify-between",

  filterLeft:
    "flex flex-wrap items-center gap-6",

  filterButton:
    "flex items-center gap-2 text-[20px] text-black",

  divider:
    "hidden h-[37px] w-px bg-[#9F9F9F] md:block",

  filterRight:
    "flex flex-wrap items-center gap-4",

  filterLabel:
    "text-[20px] text-black",

  numberInput:
    "h-[55px] w-[55px] bg-white text-center text-[20px] text-[#9F9F9F] outline-none",

  select:
    "h-[55px] w-[188px] bg-white px-4 text-[20px] text-[#9F9F9F] outline-none",
};

export const comparisonStyles = {
  section: "bg-white py-[34px]",

  wrapper:
    "overflow-x-auto font-['Poppins']",

  table:
    "min-w-[1000px] border-collapse text-left",

  topGrid:
    "grid grid-cols-[300px_344px_344px_344px] border-b border-[#E8E8E8]",

  leftIntro:
    "px-[42px] pb-8 pt-[21px]",

  productColumn:
    "border-l border-[#E8E8E8] px-[39px] pb-[30px]",

  addProductColumn:
    "border-l border-[#E8E8E8] px-[39px] pt-[52px]",

  productImageBox:
    "flex h-[177px] w-[280px] items-center justify-center rounded-[10px] bg-[#F9F1E7] transition hover:opacity-80",

  productImage:
    "max-h-[165px] max-w-[260px] object-contain",

  rowGrid:
    "grid grid-cols-[300px_344px_344px_344px]",

  rowLabel:
    "min-h-[59px] px-[42px] py-[12px] text-[20px] font-normal leading-[126.5%] text-black",

  rowValue:
    "min-h-[59px] border-l border-[#E8E8E8] px-[42px] py-[12px] text-[20px] font-normal leading-[126.5%] text-black",

  sectionTitle:
    "px-[42px] pb-[28px] pt-[42px] text-[28px] font-medium leading-[126.5%] text-black",

  mobileHint:
    "mb-4 block rounded-md bg-[#FFF3E3] px-4 py-3 text-center text-[14px] text-[#616161] lg:hidden",
};

export const singleProductStyles = {
  section:
    "px-5 py-10 font-['Poppins']",

  container:
    "mx-auto grid max-w-[1236px] gap-10 lg:grid-cols-[553px_1fr]",

  mutedText:
    "text-[#9F9F9F]",

  softBackground:
    "bg-[#F9F1E7]",

  actionButton:
    "flex h-[64px] w-[215px] items-center justify-center rounded-[15px] border border-black text-[20px] text-black",

  optionButton:
    "h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-[13px]",

  colorButton:
    "h-[30px] w-[30px] rounded-full",

  meta:
    "space-y-3 text-[16px] leading-[24px] text-[#9F9F9F]",
};
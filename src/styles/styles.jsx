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
};

export const layoutStyles = {
  container: "mx-auto w-full px-5 xl:px-0",

  productGrid: "grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4",

  categoryGrid:
    "mt-[48px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3",
};
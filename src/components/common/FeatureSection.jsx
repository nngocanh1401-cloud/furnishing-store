const features = [
  {
    title: "High Quality",
    description: "crafted from top materials",
    icon: TrophyIcon,
  },
  {
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: WarrantyIcon,
  },
  {
    title: "Free Shipping",
    description: "Order over 150 $",
    icon: ShippingIcon,
  },
  {
    title: "24 / 7 Support",
    description: "Dedicated support",
    icon: SupportIcon,
  },
];

function TrophyIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M13 6H27V15C27 19.4 23.9 23 20 23C16.1 23 13 19.4 13 15V6Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M13 9H7V13C7 17.4 9.8 20 14.2 20"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 9H33V13C33 17.4 30.2 20 25.8 20"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 23V29"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M14 34H26"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M16 29H24L25 34H15L16 29Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function WarrantyIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M20 4L24.4 7.2L29.8 7.6L31.7 12.7L35.5 16.5L33.8 21.7L34.8 27L30.1 29.8L27.3 34.5L22 33.5L16.8 35.2L13 31.4L7.9 29.5L7.5 24.1L4.3 19.7L7.5 15.3L7.9 9.9L13 8L16.8 4.2L20 4Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M14.5 20L18.3 23.8L25.8 16.2"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ShippingIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 10H25V27H5V10Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M25 16H31L35 21V27H25V16Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M11 31C13.2 31 15 29.2 15 27C15 24.8 13.2 23 11 23C8.8 23 7 24.8 7 27C7 29.2 8.8 31 11 31Z"
        stroke="#242424"
        strokeWidth="2.5"
      />
      <path
        d="M29 31C31.2 31 33 29.2 33 27C33 24.8 31.2 23 29 23C26.8 23 25 24.8 25 27C25 29.2 26.8 31 29 31Z"
        stroke="#242424"
        strokeWidth="2.5"
      />
      <path
        d="M12 10V17H20V10"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SupportIcon() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M8 23V20C8 13.4 13.4 8 20 8C26.6 8 32 13.4 32 20V23"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M8 22H12C13.1 22 14 22.9 14 24V29C14 30.1 13.1 31 12 31H10C8.9 31 8 30.1 8 29V22Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M32 22H28C26.9 22 26 22.9 26 24V29C26 30.1 26.9 31 28 31H30C31.1 31 32 30.1 32 29V22Z"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path
        d="M26 32C24.5 33.3 22.4 34 20 34"
        stroke="#242424"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function FeatureSection() {
  return (
    <section className="bg-[#FAF3EA] px-5 py-[38px]">
      <div className="mx-auto grid max-w-[1334px] grid-cols-1 gap-y-8 gap-x-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-[14px]"
            >
              <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center">
                <Icon />
              </div>

              <div>
                <h3 className="font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#242424]">
                  {feature.title}
                </h3>

                <p className="font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#898989]">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
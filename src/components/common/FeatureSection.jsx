const features = [
  {
    title: "High Quality",
    description: "Crafted from top materials",
    icon: "🏆",
  },
  {
    title: "Warranty Protection",
    description: "Over 2 years",
    icon: "✅",
  },
  {
    title: "Free Shipping",
    description: "Order over 150 $",
    icon: "🚚",
  },
  {
    title: "24 / 7 Support",
    description: "Dedicated support",
    icon: "🎧",
  },
];

export default function FeatureSection() {
  return (
    <section className="bg-[#FAF3EA] px-5 py-[70px]">
      <div className="mx-auto grid max-w-[1334px] gap-8 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => (
          <div key={feature.title} className="flex items-center gap-[10px]">
            <span className="text-[40px]">{feature.icon}</span>

            <div>
              <h3 className="font-['Poppins'] text-[25px] font-semibold leading-[38px] text-[#242424]">
                {feature.title}
              </h3>

              <p className="font-['Poppins'] text-[20px] font-medium leading-[30px] text-[#898989]">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
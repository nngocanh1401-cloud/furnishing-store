import Breadcrumb from "./Breadcrumb";

export default function ShopBanner({ title = "Shop", current = "Shop" }) {
  return (
    <section className="flex h-[316px] items-center justify-center bg-[#FAF3EA] px-5 text-center">
      <div>
        <h1 className="font-['Poppins'] text-[48px] font-medium leading-[72px] text-black">
          {title}
        </h1>

        <Breadcrumb current={current} />
      </div>
    </section>
  );
}
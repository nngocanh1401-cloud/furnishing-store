import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";

export default function Checkout() {
  return (
    <>
      <ShopBanner title="Checkout" current="Checkout" />

      <section className="px-5 py-[63px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <div>
            <h2 className="font-['Poppins'] text-[36px] font-semibold text-black">
              Billing details
            </h2>

            <form className="mt-9 grid gap-9">
              <input
                className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6"
                placeholder="First name"
              />
              <input
                className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6"
                placeholder="Last name"
              />
              <input
                className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6"
                placeholder="Street address"
              />
              <input
                className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6"
                placeholder="Phone"
              />
              <input
                className="h-[75px] rounded-[10px] border border-[#9F9F9F] px-6"
                placeholder="Email address"
              />
            </form>
          </div>

          <div className="font-['Poppins']">
            <div className="flex justify-between text-[24px] font-medium">
              <span>Product</span>
              <span>Subtotal</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span className="text-[#9F9F9F]">Asgaard sofa × 1</span>
              <span>Rp 250.000</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Subtotal</span>
              <span>Rp 250.000</span>
            </div>

            <div className="mt-4 flex justify-between">
              <span>Total</span>
              <span className="text-[24px] font-bold text-[#B88E2F]">
                Rp 250.000
              </span>
            </div>

            <hr className="my-8 border-[#D9D9D9]" />

            <p className="text-[16px] text-[#9F9F9F]">
              Make your payment directly into our bank account. Your order will
              not be shipped until the funds have cleared in our account.
            </p>

            <button className="mt-10 h-[64px] w-[318px] rounded-[15px] border border-black text-[20px]">
              Place order
            </button>
          </div>
        </div>
      </section>

      <FeatureSection />
    </>
  );
}
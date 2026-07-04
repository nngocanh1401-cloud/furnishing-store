import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";
import Link from "next/link";

export default function Cart() {
  return (
    <>
      <ShopBanner title="Cart" current="Cart" />

      <section className="px-5 py-[72px]">
        <div className="mx-auto grid max-w-[1240px] gap-8 lg:grid-cols-[1fr_393px]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px] text-left font-['Poppins']">
              <thead className="bg-[#F9F1E7]">
                <tr>
                  <th className="px-4 py-4 font-medium">Product</th>
                  <th className="px-4 py-4 font-medium">Price</th>
                  <th className="px-4 py-4 font-medium">Quantity</th>
                  <th className="px-4 py-4 font-medium">Subtotal</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td className="px-4 py-8 text-[#9F9F9F]">Asgaard sofa</td>
                  <td className="px-4 py-8 text-[#9F9F9F]">Rp 250.000</td>
                  <td className="px-4 py-8">
                    <span className="rounded border border-[#9F9F9F] px-3 py-2">
                      1
                    </span>
                  </td>
                  <td className="px-4 py-8">Rp 250.000</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[#F9F1E7] px-8 py-8 text-center lg:px-[75px]">
            <h2 className="font-['Poppins'] text-[32px] font-semibold text-black">
              Cart Totals
            </h2>

            <div className="mt-[61px] flex justify-between">
              <span className="font-medium">Subtotal</span>
              <span className="text-[#9F9F9F]">Rp 250.000</span>
            </div>

            <div className="mt-[31px] flex justify-between">
              <span className="font-medium">Total</span>
              <span className="text-[20px] font-medium text-[#B88E2F]">
                Rp 250.000
              </span>
            </div>

            <Link
              href="/checkout"
              className="mt-[42px] inline-flex h-[59px] w-[222px] items-center justify-center rounded-[15px] border border-black font-['Poppins'] text-[20px]"
            >
              Check Out
            </Link>
          </div>
        </div>
      </section>

      <FeatureSection />
    </>
  );
}
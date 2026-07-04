import FeatureSection from "@/components/common/FeatureSection";
import ShopBanner from "@/components/common/ShopBanner";

export default function Comparison() {
  return (
    <>
      <ShopBanner title="Comparison" current="Comparison" />

      <section className="px-5 py-[72px]">
        <div className="mx-auto max-w-[1240px]">
          <h2 className="font-['Poppins'] text-[28px] font-medium text-black">
            Product Comparison
          </h2>

          <div className="mt-8 overflow-x-auto">
            <table className="w-full min-w-[900px] border-collapse font-['Poppins']">
              <tbody>
                <tr className="border-b">
                  <td className="p-5 font-medium">Product</td>
                  <td className="p-5">Syltherine</td>
                  <td className="p-5">Leviosa</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5 font-medium">Price</td>
                  <td className="p-5">Rp 2.500.000</td>
                  <td className="p-5">Rp 2.500.000</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5 font-medium">Material</td>
                  <td className="p-5">Wood</td>
                  <td className="p-5">Fabric</td>
                </tr>
                <tr className="border-b">
                  <td className="p-5 font-medium">Warranty</td>
                  <td className="p-5">1 Year</td>
                  <td className="p-5">1 Year</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FeatureSection />
    </>
  );
}
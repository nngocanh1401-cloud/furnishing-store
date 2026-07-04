import { compareProducts, comparisonSections } from "@/data/comparisonData";

export default function ProductComparison() {
  return (
    <section className="bg-white py-8 md:py-10 lg:py-10 font-[Poppins]">
      <div className="mx-auto max-w-[1332px] overflow-x-auto px-4 md:px-6 lg:px-0">
        <div className="min-w-[920px] md:min-w-[1050px] lg:min-w-[1332px]">
          <div className="grid grid-cols-[230px_230px_230px_230px] md:grid-cols-[260px_260px_260px_260px] lg:grid-cols-[300px_344px_344px_344px] border-b border-[#E8E8E8]">
            <div className="px-6 pt-8 pb-8 lg:px-[42px] lg:pt-[55px]">
              <h2 className="mb-4 w-[200px] text-[22px] font-medium leading-[126.5%] text-black lg:w-[223px] lg:text-[28px]">
                Go to Product page for more Products
              </h2>

              <a href="/shop" className="inline-block border-b-2 border-[#727272] text-[18px] font-medium text-[#727272] lg:text-[20px]">
                View More
              </a>
            </div>

            {compareProducts.map((product) => (
              <article key={product.id} className="border-l border-[#E8E8E8] px-6 pb-8 lg:px-10">
                <div className="mb-[18px] flex h-[150px] w-[210px] items-center justify-center rounded-[10px] bg-[#F9F1E7] md:h-[160px] md:w-[230px] lg:h-[177px] lg:w-[280px]">
                  <img src={product.image} alt={product.name} className="max-h-[140px] max-w-[200px] object-contain md:max-h-[150px] md:max-w-[220px] lg:max-h-[170px] lg:max-w-[270px]" />
                </div>

                <h3 className="mb-[6px] text-[20px] font-medium leading-[126.5%] text-black lg:text-[24px]">
                  {product.name}
                </h3>

                <p className="mb-[6px] text-[16px] font-medium text-black lg:text-[18px]">
                  {product.price}
                </p>

                <div className="flex items-center gap-2">
                  <span className="text-[16px] font-medium text-black lg:text-[18px]">{product.rating}</span>
                  <span className="text-[16px] tracking-[1px] text-[#FFC700] lg:text-[20px] lg:tracking-[2px]">★★★★★</span>
                  <span className="h-[30px] w-px bg-[#9F9F9F]" />
                  <span className="text-[13px] text-[#9F9F9F]">{product.reviews} Review</span>
                </div>
              </article>
            ))}

            <div className="border-l border-[#E8E8E8] px-6 pt-12 pb-8 lg:px-10 lg:pt-[83px]">
              <h3 className="mb-[14px] text-[20px] font-semibold leading-[126.5%] text-black lg:text-[24px]">
                Add A Product
              </h3>

              <select className="h-[39px] w-[200px] rounded-[6px] border-0 bg-[#B88E2F] px-[18px] text-[14px] font-semibold text-white lg:w-[242px]" aria-label="Choose a product">
                <option>Choose a Product</option>
                <option>Asgaard Sofa</option>
                <option>Outdoor Sofa Set</option>
              </select>
            </div>
          </div>

          <div className="border-b border-[#E8E8E8]">
            {comparisonSections.map((section) => (
              <section key={section.title} className="mb-[44px] lg:mb-[54px]">
                <h2 className="mt-[30px] mb-[24px] pl-6 text-[24px] font-medium leading-[126.5%] text-black lg:mt-[35px] lg:mb-[28px] lg:pl-[42px] lg:text-[28px]">
                  {section.title}
                </h2>

                {section.rows.map((row) => (
                  <div key={row[0]} className="grid grid-cols-[230px_230px_230px] md:grid-cols-[260px_260px_260px] lg:grid-cols-[300px_344px_344px]">
                    <div className="flex min-h-[59px] items-center px-6 text-[16px] leading-[126.5%] text-black lg:px-10 lg:text-[20px]">{row[0]}</div>
                    <div className="flex min-h-[59px] items-center border-l border-[#E8E8E8] px-6 text-[16px] leading-[126.5%] text-black lg:px-10 lg:text-[20px]">{row[1]}</div>
                    <div className="flex min-h-[59px] items-center border-l border-[#E8E8E8] px-6 text-[16px] leading-[126.5%] text-black lg:px-10 lg:text-[20px]">{row[2]}</div>
                  </div>
                ))}
              </section>
            ))}

            <div className="grid grid-cols-[230px_230px_230px] pb-10 md:grid-cols-[260px_260px_260px] lg:grid-cols-[300px_344px_344px]">
              <div></div>

              <div className="border-l border-[#E8E8E8] px-6 lg:px-10">
                <button className="h-[56px] w-[180px] bg-[#B88E2F] text-[18px] text-white lg:h-[64px] lg:w-[215px] lg:text-[20px]">
                  Add To Cart
                </button>
              </div>

              <div className="border-l border-[#E8E8E8] px-6 lg:px-10">
                <button className="h-[56px] w-[180px] bg-[#B88E2F] text-[18px] text-white lg:h-[64px] lg:w-[215px] lg:text-[20px]">
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
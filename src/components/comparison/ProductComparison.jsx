import { compareProducts, comparisonSections } from "@/data/comparisonData";

export default function ProductComparison() {
  return (
    <section className="bg-white py-8 font-[Poppins] md:py-10 lg:py-10">
      <div className="mx-auto max-w-[1332px] px-4 md:px-6 lg:px-0">
        <div className="overflow-hidden border border-[#E8E8E8] md:border-0">
          <div className="grid grid-cols-2 border-b border-[#E8E8E8] lg:grid-cols-[300px_344px_344px_344px]">
            <div className="col-span-2 border-b border-[#E8E8E8] px-5 py-6 lg:col-span-1 lg:border-b-0 lg:px-[42px] lg:pt-[55px]">
              <h2 className="max-w-[260px] text-[22px] font-medium leading-[126.5%] text-black md:w-[185px] md:text-[22px] lg:w-[223px] lg:text-[28px]">
                Go to Product page for more Products
              </h2>

              <a
                href="/shop"
                className="mt-4 inline-block border-b-2 border-[#727272] text-[16px] font-medium text-[#727272] md:text-[18px] lg:text-[20px]"
              >
                View More
              </a>
            </div>

            {compareProducts.map((product) => (
              <article
                key={product.id}
                className="border-r border-[#E8E8E8] p-3 last:border-r-0 lg:border-l lg:border-r-0 lg:px-10 lg:pb-8"
              >
                <div className="mb-3 flex h-[120px] items-center justify-center rounded-[10px] bg-[#F9F1E7] md:h-[150px] lg:mb-[18px] lg:h-[177px] lg:w-[280px]">                  <img
                  src={product.image}
                  alt={product.name}
                  className="max-h-[105px] max-w-[130px] object-contain md:max-h-[130px] md:max-w-[180px] lg:max-h-[170px] lg:max-w-[270px]"
                />
                </div>

                <h3 className="min-h-[42px] text-[15px] font-medium leading-[126.5%] text-black md:min-h-0 md:text-[18px] lg:text-[24px]">
                  {product.name}
                </h3>

                <p className="mt-2 text-[14px] font-medium text-black md:text-[15px] lg:text-[18px]">
                  {product.price}
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-1 md:gap-2">
                  <span className="text-[13px] font-medium text-black md:text-[15px] lg:text-[18px]">
                    {product.rating}
                  </span>

                  <span className="text-[12px] tracking-[1px] text-[#FFC700] md:text-[14px] lg:text-[20px] lg:tracking-[2px]">
                    ★★★★★
                  </span>

                  <span className="hidden h-[30px] w-px bg-[#9F9F9F] lg:block" />

                  <span className="text-[11px] text-[#9F9F9F] md:text-[12px] lg:text-[13px]">
                    {product.reviews} Review
                  </span>
                </div>
              </article>
            ))}

            <div className="col-span-2 border-t border-[#E8E8E8] px-5 py-6 lg:col-span-1 lg:border-l lg:border-t-0 lg:px-10 lg:pt-[83px]">              <h3 className="mb-3 text-[20px] font-semibold leading-[126.5%] text-black md:text-[20px] lg:text-[24px]">
              Add A Product
            </h3>

              <select
                className="h-[39px] w-full max-w-[242px] rounded-[6px] border-0 bg-[#B88E2F] px-[18px] text-[14px] font-semibold text-white"
                aria-label="Choose a product"
              >
                <option>Choose a Product</option>
                <option>Asgaard Sofa</option>
                <option>Outdoor Sofa Set</option>
              </select>
            </div>
          </div>

          <div>
            {comparisonSections.map((section) => (
              <section key={section.title} className="mt-8 md:mt-[35px]">
                <h2 className="mb-4 px-5 text-[24px] font-medium leading-[126.5%] text-black md:mb-[28px] md:px-6 md:text-[26px] lg:px-[42px] lg:text-[28px]">
                  {section.title}
                </h2>

                <div>
                  {section.rows.map((row) => (
                    <div
                      key={row[0]}
                      className="md:grid md:grid-cols-[220px_1fr_1fr] lg:grid-cols-[300px_344px_344px]"
                    >
                      <div className="bg-[#F9F1E7] px-4 py-3 text-[16px] font-medium leading-[126.5%] text-black md:flex md:min-h-[59px] md:items-center md:bg-white md:px-6 md:text-[17px] lg:px-10 lg:text-[20px]">
                        {row[0]}
                      </div>

                      <div className="grid grid-cols-2 md:contents">
                        <div className="border-r border-[#E8E8E8] px-4 py-4 text-[15px] leading-[140%] text-black md:flex md:min-h-[59px] md:items-center md:border-l md:border-r-0 md:px-6 md:text-[17px] md:leading-[126.5%] lg:px-10 lg:text-[20px]">
                          {row[1]}
                        </div>

                        <div className="px-4 py-4 text-[15px] leading-[140%] text-black md:flex md:min-h-[59px] md:items-center md:border-l md:border-[#E8E8E8] md:px-6 md:text-[17px] md:leading-[126.5%] lg:px-10 lg:text-[20px]">
                          {row[2]}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}

            <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-[220px_1fr_1fr] md:gap-0 lg:grid-cols-[300px_344px_344px]">
              <div className="hidden md:block" />

              <div className="md:border-l md:border-[#E8E8E8] md:px-6 lg:px-10">
                <button className="h-[52px] w-full rounded-[4px] bg-[#B88E2F] text-[16px] text-white md:w-[180px] md:text-[18px] lg:h-[64px] lg:w-[215px] lg:text-[20px]">
                  Add To Cart
                </button>
              </div>

              <div className="md:border-l md:border-[#E8E8E8] md:px-6 lg:px-10">
                <button className="h-[52px] w-full rounded-[4px] bg-[#B88E2F] text-[16px] text-white md:w-[180px] md:text-[18px] lg:h-[64px] lg:w-[215px] lg:text-[20px]">
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
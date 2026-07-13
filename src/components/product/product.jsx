import ProductGrid from "@/components/common/ProductGrid";
import products from "@/data/products.json";

export default function Product() {
  const product = products[0];

  return (
    <>
      <section className="bg-[#F9F1E7] px-5 py-8">
        <div className="mx-auto max-w-[1240px] font-['Poppins'] text-[16px]">
          Home › Shop › <span className="font-medium">{product.name}</span>
        </div>
      </section>

      <section className="px-5 py-[50px]">
        <div className="mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[10px] bg-[#F9F1E7]">
            <img
              src={product.image}
              alt={product.name}
              className="h-[500px] w-full object-cover"
            />
          </div>

          <div className="font-['Poppins']">
            <h1 className="text-[42px] font-normal text-black">
              {product.name}
            </h1>

            <p className="mt-2 text-[24px] font-medium text-[#9F9F9F]">
              {product.price}
            </p>

            <p className="mt-5 max-w-[424px] text-[13px] leading-[20px]">
              Setting the bar as one of the loudest speakers in its class, the
              Kilburn is a compact, stout-hearted hero with a well-balanced
              audio.
            </p>

            <button className="mt-8 h-[64px] w-[215px] rounded-[15px] border border-black text-[20px]">
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      <ProductGrid title="Related Products" products={products.slice(0, 4)} />
    </>
  );
}
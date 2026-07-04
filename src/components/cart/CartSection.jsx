"use client";

import { useState } from "react";
import Link from "next/link";

const cartItem = {
  id: 1,
  name: "Asgaard sofa",
  price: 250000,
  image: "/images/black-sofa.jpg",
};

export default function CartSection() {
  const [quantity, setQuantity] = useState(1);

  const subtotal = cartItem.price * quantity;

  const formatPrice = (price) => {
    return `Rs. ${price.toLocaleString("en-US")}.00`;
  };

  const handleQuantityChange = (event) => {
    const value = Number(event.target.value);
    setQuantity(value < 1 ? 1 : value);
  };

  return (
    <section className="bg-white py-10 font-[Poppins] md:py-14 lg:py-[72px]">
      <div className="mx-auto max-w-[1240px] px-4 md:px-6 lg:px-0">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[817px_393px] lg:gap-[30px]">
          <div className="overflow-x-auto">
            <div className="min-w-[760px] md:min-w-[817px]">
              <div className="grid h-[55px] grid-cols-[110px_170px_170px_105px_145px_60px] items-center bg-[#F9F1E7] text-[14px] font-medium text-black md:grid-cols-[120px_177px_177px_106px_162px_75px] md:text-[16px]">
                <div></div>
                <div>Product</div>
                <div>Price</div>
                <div>Quantity</div>
                <div>Subtotal</div>
                <div></div>
              </div>

              <div className="mt-[45px] grid grid-cols-[110px_170px_170px_105px_145px_60px] items-center md:mt-[55px] md:grid-cols-[120px_177px_177px_106px_162px_75px]">
                <div className="flex h-[95px] w-[95px] items-center justify-center overflow-hidden rounded-[10px] bg-[rgba(184,142,47,0.22)] md:h-[105px] md:w-[105px]">
                  <img
                    src={cartItem.image}
                    alt={cartItem.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <p className="text-[14px] text-[#9F9F9F] md:text-[16px]">
                  {cartItem.name}
                </p>

                <p className="text-[14px] text-[#9F9F9F] md:text-[16px]">
                  {formatPrice(cartItem.price)}
                </p>

                <input
                  type="number"
                  min="1"
                  value={quantity}
                  onChange={handleQuantityChange}
                  className="h-8 w-8 rounded-[5px] border border-[#9F9F9F] text-center text-[14px] text-black outline-none md:text-[16px]"
                  aria-label="Product quantity"
                />

                <p className="text-[14px] text-black md:text-[16px]">
                  {formatPrice(subtotal)}
                </p>

                <button
                  type="button"
                  className="flex h-8 w-8 items-center justify-center text-[#B88E2F]"
                  aria-label="Remove product"
                >
                  <span className="text-[22px] leading-none">🗑</span>
                </button>
              </div>
            </div>
          </div>

          <aside className="mx-auto w-full max-w-[393px] bg-[#F9F1E7] px-8 py-8 text-center md:px-[75px] md:py-[30px] lg:h-[390px] lg:px-[75px] lg:py-[15px]">
            <h2 className="mb-8 text-[28px] font-semibold leading-[1.3] text-black md:mb-[45px] md:text-[32px] md:leading-[48px]">
              Cart Totals
            </h2>

            <div className="mb-6 flex items-center justify-between md:mb-[31px]">
              <span className="text-[16px] font-medium text-black">
                Subtotal
              </span>

              <p className="text-[14px] text-[#9F9F9F] md:text-[16px]">
                {formatPrice(subtotal)}
              </p>
            </div>

            <div className="mb-8 flex items-center justify-between md:mb-[31px]">
              <span className="text-[16px] font-medium text-black">
                Total
              </span>

              <strong className="text-[18px] font-medium text-[#B88E2F] md:text-[20px]">
                {formatPrice(subtotal)}
              </strong>
            </div>

            <Link
              href="/checkout"
              className="mx-auto flex h-[52px] w-[200px] items-center justify-center rounded-[15px] border border-black text-[18px] text-black transition hover:bg-black hover:text-white md:h-[59px] md:w-[222px] md:text-[20px]"
            >
              Check Out
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
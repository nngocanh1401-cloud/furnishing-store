"use client";

import Link from "next/link";

export default function ComparisonCartSidebar({
  isOpen,
  product,
  onClose,
}) {
  if (!isOpen || !product) return null;

  return (
    <div className="fixed inset-0 z-[999] font-['Poppins']">
      <button
        type="button"
        aria-label="Close cart sidebar overlay"
        className="absolute inset-0 bg-black/30"
        onClick={onClose}
      />

      <aside className="absolute right-0 top-0 flex h-full w-full max-w-[417px] flex-col bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-[#D9D9D9] px-[30px] py-[28px]">
          <h2 className="text-[24px] font-semibold text-black">
            Shopping Cart
          </h2>

          <button
            type="button"
            onClick={onClose}
            className="text-[28px] leading-none text-[#9F9F9F] transition hover:text-black"
            aria-label="Close cart sidebar"
          >
            ×
          </button>
        </div>

        <div className="flex-1 px-[30px] py-[32px]">
          <div className="flex gap-[24px]">
            <div className="flex h-[105px] w-[108px] items-center justify-center rounded-[10px] bg-[#F9F1E7]">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[95px] max-w-[95px] object-contain"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-[16px] font-normal text-black">
                {product.name}
              </h3>

              <div className="mt-[11px] flex items-center gap-[15px]">
                <span className="text-[16px] text-black">
                  {product.quantity}
                </span>

                <span className="text-[12px] text-black">X</span>

                <span className="text-[12px] font-medium text-[#B88E2F]">
                  {product.price}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="mt-[36px] flex h-5 w-5 items-center justify-center rounded-full bg-[#9F9F9F] text-[14px] text-white"
              aria-label="Remove item"
            >
              ×
            </button>
          </div>
        </div>

        <div className="border-t border-[#D9D9D9] px-[30px] pb-[28px] pt-[15px]">
          <div className="flex items-center justify-between">
            <span className="text-[16px] text-black">Subtotal</span>
            <span className="text-[16px] font-semibold text-[#B88E2F]">
              {product.price}
            </span>
          </div>

          <div className="mt-[26px] flex flex-wrap gap-[14px]">
            <Link
              href="/cart"
              className="flex h-[30px] min-w-[87px] items-center justify-center rounded-[50px] border border-black px-5 text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Cart
            </Link>

            <Link
              href="/checkout"
              className="flex h-[30px] min-w-[118px] items-center justify-center rounded-[50px] border border-black px-5 text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Checkout
            </Link>

            <Link
              href="/comparison"
              className="flex h-[30px] min-w-[135px] items-center justify-center rounded-[50px] border border-black px-5 text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Comparison
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
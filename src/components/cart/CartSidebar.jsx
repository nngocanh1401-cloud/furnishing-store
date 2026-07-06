"use client";

import Link from "next/link";
import { useState } from "react";

const initialItems = [
  {
    id: 1,
    name: "Asgaard sofa",
    price: 250000,
    quantity: 1,
    image: "/images/black-sofa.jpg",
  },
  {
    id: 2,
    name: "Casaliving Wood",
    price: 270000,
    quantity: 1,
    image: "/images/black-sofa.jpg",
  },
];

export default function CartSidebar({ isOpen, onClose }) {
  const [items, setItems] = useState(initialItems);

  const formatPrice = (price) => `Rs. ${price.toLocaleString("en-US")}.00`;

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const removeItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 font-[Poppins]">
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 bg-black/20"
        aria-label="Close cart overlay"
      />

      <aside className="absolute right-0 top-0 flex h-screen w-full max-w-[417px] flex-col bg-white shadow-xl">
        <div className="px-[27px] pt-[28px]">
          <div className="flex items-start justify-between">
            <h2 className="text-[24px] font-semibold leading-[36px] text-black">
              Shopping Cart
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="mt-1 text-[22px] text-[#9F9F9F] transition hover:text-black"
              aria-label="Close cart"
            >
              ×
            </button>
          </div>

          <div className="mt-[26px] h-px w-[287px] max-w-full bg-[#D9D9D9]" />
        </div>

        <div className="flex-1 overflow-y-auto px-[27px] pt-[40px]">
          <div className="space-y-5">
            {items.map((item) => (
              <article
                key={item.id}
                className="grid grid-cols-[105px_1fr_24px] items-center gap-[32px]"
              >
                <div className="flex h-[105px] w-[105px] items-center justify-center overflow-hidden rounded-[10px] bg-[rgba(184,142,47,0.22)]">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-full w-full object-contain"
                  />
                </div>

                <div>
                  <h3 className="text-[16px] font-normal leading-[24px] text-black">
                    {item.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-[15px]">
                    <span className="text-[16px] font-light text-black">
                      {item.quantity}
                    </span>

                    <span className="text-[12px] font-light text-black">
                      X
                    </span>

                    <span className="text-[12px] font-medium text-[#B88E2F]">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-[#9F9F9F] text-[14px] leading-none text-white transition hover:bg-black"
                  aria-label={`Remove ${item.name}`}
                >
                  ×
                </button>
              </article>
            ))}
          </div>
        </div>

        <div className="px-[27px] pb-[28px]">
          <div className="mb-[23px] flex items-center justify-between">
            <span className="text-[16px] font-normal text-black">
              Subtotal
            </span>

            <strong className="text-[16px] font-semibold text-[#B88E2F]">
              {formatPrice(subtotal)}
            </strong>
          </div>

          <div className="h-px w-full bg-[#D9D9D9]" />

          <div className="mt-[25px] flex flex-wrap gap-[14px]">
            <Link
              href="/cart"
              onClick={onClose}
              className="flex h-[30px] min-w-[87px] items-center justify-center rounded-full border border-black px-[30px] text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Cart
            </Link>

            <Link
              href="/checkout"
              onClick={onClose}
              className="flex h-[30px] min-w-[118px] items-center justify-center rounded-full border border-black px-[30px] text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Checkout
            </Link>

            <Link
              href="/comparison"
              onClick={onClose}
              className="flex h-[30px] min-w-[135px] items-center justify-center rounded-full border border-black px-[30px] text-[12px] text-black transition hover:bg-black hover:text-white"
            >
              Comparison
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
}
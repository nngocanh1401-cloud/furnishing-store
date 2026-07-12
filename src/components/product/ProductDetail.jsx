"use client";

import { useState } from "react";
import Link from "next/link";
import CartSidebar from "@/components/common/CartSidebar";

export default function ProductDetail({ product }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <>
    <section className="px-5 py-10 font-['Poppins']">
      <div className="mx-auto grid max-w-[1236px] gap-10 lg:grid-cols-[553px_1fr]">
        <div className="flex gap-8">
          <div className="flex flex-col gap-8">
            {[1, 2, 3, 4].map((item) => (
              <div key={item}
              className="flex h-[80px] w-[76px] items-center justify-center rounded-[10px] bg-[#F9F1E7]">
                <img
                src={product.image}
                alt={product.name}
                className="h-full w-full rounded-[10px] object-cover" />
              </div>
            ))}
          </div>

          <div className="flex h-[500px] flex-1 items-center justify-center rounded-[10px] bg-[#F9F1E7]">
            <img src={product.image}
            alt={product.name}
            className="max-h-[430px] object-contain" />
          </div>
        </div>

        <div>
          <h1 className="text-[42px] font-normal leading-[63px] text-[#000]">
            {product.name}
            </h1>
          <p className="mt-1 text-[24px] font-medium text-[#9F9F9F]">
            {product.price}
            </p>

          <div className="mt-4 flex items-center gap-4">
            <div className="text-[#FFC700]">★★★★★</div>
            <span className="h-[30px] w-px bg-[#9F9F9F]"></span>
            <p className="text-[13px] text-[#9F9F9F]">5 Customer Review</p>
          </div>
          {/* mô tả */}
          <p className="mt-5 max-w-[424px] text-[13px] leading-[20px] text-black">
            {product.description || 
            "Setting the bar as one of the loudest speakers in its class, this product is compact, stylish and suitable for modern living rooms."}
          </p>

          <div className="mt-6">
            <p className="text-[14px] text-[#9F9F9F]">Size</p>
            <div className="mt-3 flex gap-4">
              {["L", "XL", "XS"].map((size) => (
                <button
                type="button"
                key={size} 
                className="h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-[13px] first:bg-[#B88E2F] first:text-white">
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-[14px] text-[#9F9F9F]">Color</p>
            <div className="mt-3 flex gap-4">
              <button 
              type="button"
              className="h-[30px] w-[30px] rounded-full bg-[#816DFA]">
              </button>

              <button 
              type="button"
              className="h-[30px] w-[30px] rounded-full bg-[#000]">
              </button>

              <button 
              type="button"
              className="h-[30px] w-[30px] rounded-full bg-[#B88E2F]">
              </button>

            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <div className="flex h-[64px] w-[123px] items-center justify-around rounded-[10px] border border-[#9F9F9F] text-[16px]">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>

            <button
              type="button"
              onClick={() => setIsCartOpen(true)}
              className="flex h-[64px] w-[215px] items-center justify-center rounded-[15px] border border-black text-[20px] text-black transition hover:bg-black hover:text-white"
            >
              Add To Cart
            </button>

            <Link href="/comparison" className="flex h-[64px] w-[215px] items-center justify-center rounded-[15px] border border-black text-[20px] text-black">
              + Compare
            </Link>
          </div>

          <hr className="my-10 border-[#D9D9D9]" />

          <div className="space-y-3 text-[16px] text-[#9F9F9F]">
            <p>SKU : SS001</p>
            <p>Category : Sofas</p>
            <p>Tags : Sofa, Chair, Home, Shop</p>
            <p>Share : f t in</p>
          </div>
        </div>
      </div>
    </section>

    <CartSidebar
        isOpen={isCartOpen}
        product={{
          name: product.name,
          price: product.price,
          image: product.image,
          quantity: 1,
        }}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
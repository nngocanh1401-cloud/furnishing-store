"use client";

import { useState } from "react";
import Link from "next/link";

import CartSidebar from "@/components/common/CartSidebar";
import ProductGallery from "@/components/product/ProductGallery";
import { singleProductStyles } from "@/styles/styles";

export default function ProductDetail({ product }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <section className={singleProductStyles.section}>
        <div className={singleProductStyles.container}>
          {/* Gallery ảnh sản phẩm có chức năng zoom */}
          <ProductGallery product={product} />

          {/* Product info */}
          <div>
            <h1 className="text-[42px] font-normal leading-[63px] text-black">
              {product.name}
            </h1>

            <p className="mt-1 text-[24px] font-medium text-[#9F9F9F]">
              {product.price}
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="text-[#FFC700]">
                ★★★★★
              </div>

              <span className="h-[30px] w-px bg-[#9F9F9F]" />

              <p className="text-[13px] text-[#9F9F9F]">
                {product.reviews || 0} Customer Reviews
              </p>
            </div>

            <p className="mt-5 max-w-[424px] text-[13px] leading-[20px] text-black">
              {product.description ||
                "Setting the bar as one of the loudest speakers in its class, this product is compact, stylish and suitable for modern living rooms."}
            </p>

            {/* Size */}
            <div className="mt-6">
              <p className={singleProductStyles.mutedLabel}>
                Size
              </p>

              <div className="mt-3 flex gap-4">
                {["L", "XL", "XS"].map((size) => (
                  <button
                    type="button"
                    key={size}
                    className={`${singleProductStyles.optionButton} first:bg-[#B88E2F] first:text-white`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color */}
            <div className="mt-5">
              <p className={singleProductStyles.mutedLabel}>
                Color
              </p>

              <div className="mt-3 flex gap-4">
                <button
                  type="button"
                  aria-label="Purple color"
                  className={`${singleProductStyles.colorButton} bg-[#816DFA]`}
                />

                <button
                  type="button"
                  aria-label="Black color"
                  className={`${singleProductStyles.colorButton} bg-black`}
                />

                <button
                  type="button"
                  aria-label="Gold color"
                  className={`${singleProductStyles.colorButton} bg-[#B88E2F]`}
                />
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap gap-4">
              <div className="flex h-[64px] w-[123px] items-center justify-around rounded-[10px] border border-[#9F9F9F] text-[16px]">
                <button type="button">
                  -
                </button>

                <span>1</span>

                <button type="button">
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className={`${singleProductStyles.actionButton} transition hover:bg-black hover:text-white`}
              >
                Add To Cart
              </button>

              <Link
                href="/comparison"
                className={singleProductStyles.actionButton}
              >
                + Compare
              </Link>
            </div>

            <hr className="my-10 border-[#D9D9D9]" />

            <div className={singleProductStyles.meta}>
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
        product={product}
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
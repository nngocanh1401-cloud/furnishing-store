"use client";

import { useState } from "react";
import Link from "next/link";

import CartSidebar from "@/components/common/CartSidebar";
import { singleProductStyles } from "@/styles/styles";
import { useCart } from "@/context/CartContext";

export default function ProductDetail({ product }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <section className={singleProductStyles.section}>
        <div className={singleProductStyles.container}>
          {/* Gallery */}
          <div className="flex gap-8">
            <div className="flex flex-col gap-8">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className={singleProductStyles.thumbnail}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full rounded-[10px] object-cover"
                  />
                </div>
              ))}
            </div>

            <div className={singleProductStyles.mainImage}>
              <img
                src={product.image}
                alt={product.name}
                className="max-h-[430px] object-contain"
              />
            </div>
          </div>

          {/* Product info */}
          <div>
            <h1 className="text-[42px] font-normal leading-[63px] text-black">
              {product.name}
            </h1>

            <p className="mt-1 text-[24px] font-medium text-[#9F9F9F]">
              {product.price}
            </p>

            <div className="mt-4 flex items-center gap-4">
              <div className="text-[#FFC700]">★★★★★</div>

              <span className="h-[30px] w-px bg-[#9F9F9F]" />

              <p className="text-[13px] text-[#9F9F9F]">
                5 Customer Review
              </p>
            </div>

            <p className="mt-5 max-w-[424px] text-[13px] leading-[20px] text-black">
              {product.description ||
                "Setting the bar as one of the loudest speakers in its class, this product is compact, stylish and suitable for modern living rooms."}
            </p>

            {/* Size */}
            <div className="mt-6">
              <p className={singleProductStyles.mutedLabel}>Size</p>

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
              <p className={singleProductStyles.mutedLabel}>Color</p>

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
            <div className="mt-8 flex items-center gap-4">
              <div className={singleProductStyles.quantityBox}>
                <button
                  type="button"
                  onClick={() =>
                    setQuantity((currentQuantity) =>
                      Math.max(1, currentQuantity - 1)
                    )
                  }
                >
                  -
                </button>

                <span>{quantity}</span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity((currentQuantity) => currentQuantity + 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                type="button"
                onClick={() => {
                  addToCart(product, quantity);
                  setIsCartOpen(true);
                }}
                className={singleProductStyles.actionButton}
              >
                Add To Cart
              </button>

              <Link
                href={`/comparison?product=${product.id}`}
                className={singleProductStyles.actionButton}
              >
                + Compare
              </Link>
            </div>

            <hr className={singleProductStyles.divider} />
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
        onClose={() => setIsCartOpen(false)}
      />
    </>
  );
}
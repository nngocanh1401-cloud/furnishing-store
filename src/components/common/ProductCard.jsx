"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

function getBadgeClass(product) {
  const badge =
    product.badge ||
    product.tag ||
    "";

  if (badge.toLowerCase().includes("new")) {
    return "bg-[#2EC1AC]";
  }

  return "bg-[#E97171]";
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  /*
   * Ví dụ:
   *
   * id = 1 → /product/1
   * id = 9 → /product/9
   */
  const productHref =
    product.id !== undefined &&
      product.id !== null
      ? `/product/${product.id}`
      : product.productUrl ||
      product.href ||
      "/shop";

  const name =
    product.name ||
    product.title ||
    "Product";

  const description =
    product.description ||
    product.subtitle ||
    "";

  /*
   * Ưu tiên giá đã định dạng:
   *
   * Rp 2.500.000
   * Rs. 250,000.00
   */
  const price =
    product.priceDisplay ||
    product.discountPrice ||
    product.price ||
    product.currentPrice ||
    "";

  const oldPrice =
    product.oldPriceDisplay ||
    product.oldPrice ||
    product.originalPrice ||
    "";

  const badge =
    product.badge ||
    product.tag ||
    "";

  const productImage =
    product.images?.thumbnail ||
    product.image ||
    "/images/furniro-hero.png";

  function handleOpenCart() {
    setIsCartOpen(true);
  }

  function handleCloseCart() {
    setIsCartOpen(false);
  }

  return (
    <>
      <article className="group relative bg-[#F4F5F7] font-['Poppins']">
        <div className="relative h-[301px] overflow-hidden bg-[#F4F5F7]">
          <Link
            href={productHref}
            aria-label={`View ${name}`}
            className="relative z-0 block h-full w-full"
          >
            <img
              src={productImage}
              alt={name}
              className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </Link>

          {badge && (
            <span
              className={`
                absolute right-6 top-6
                flex h-12 w-12
                items-center justify-center
                rounded-full
                text-[16px] font-medium text-white
                ${getBadgeClass(product)}
              `}
            >
              {badge}
            </span>
          )}

          <div className="pointer-events-none absolute inset-0 z-10 hidden items-center justify-center bg-black/50 group-hover:flex">
            <div className="pointer-events-auto text-center">
              <button
                onClick={() => {
                  addToCart(product, 1);
                  setIsCartOpen(true);
                }}
                className="h-12 w-[202px] bg-white font-['Poppins'] text-[16px] font-semibold text-[#B88E2F] transition hover:bg-[#B88E2F] hover:text-white"
              >
                Add to cart
              </button>

              <div className="mt-6 flex items-center justify-center gap-5 text-white">
                <button
                  type="button"
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Share
                </button>

                <Link
                  href="/comparison"
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Compare
                </Link>

                <button
                  type="button"
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Like
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="px-4 pb-[30px] pt-4">
          {/* Bấm tên để mở đúng trang sản phẩm theo ID */}
          <Link
            href={productHref}
            className="relative z-20 block"
          >

            <h3 className="text-[24px] font-semibold leading-[29px] text-[#3A3A3A] transition hover:text-[#B88E2F]">
              {name}
            </h3>
          </Link>

          <p className="mt-2 text-[16px] font-medium leading-[24px] text-[#898989]">
            {description}
          </p>

          <div className="mt-2 flex flex-wrap items-center gap-4">
            <p className="text-[20px] font-semibold leading-[30px] text-[#3A3A3A]">
              {price}
            </p>

            {oldPrice && (
              <p className="text-[16px] leading-[24px] text-[#B0B0B0] line-through">
                {oldPrice}
              </p>
            )}
          </div>
        </div>
      </article>
    </>
  );
}
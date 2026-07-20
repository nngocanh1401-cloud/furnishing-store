"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { addProductToCompare } from "@/utils/compareStorage";

function getBadgeClass(product) {
  const badge = product.badge || product.tag || "";

  if (badge.toLowerCase().includes("new")) {
    return "bg-[#2EC1AC]";
  }

  return "bg-[#E97171]";
}

/*
 * Chuyển các dạng dữ liệu ảnh thành một mảng:
 *
 * images: ["/image-1.jpg", "/image-2.jpg"]
 *
 * hoặc:
 *
 * images: {
 *   thumbnail: "/image-1.jpg",
 *   main: "/image-2.jpg",
 *   gallery: ["/image-3.jpg", "/image-4.jpg"]
 * }
 */
function getProductImages(product) {
  const imageList = [];
  const images = product.images;

  if (Array.isArray(images)) {
    imageList.push(...images);
  } else if (images && typeof images === "object") {
    Object.values(images).forEach((value) => {
      if (Array.isArray(value)) {
        imageList.push(...value);
      } else if (typeof value === "string") {
        imageList.push(value);
      }
    });
  }

  if (product.image) {
    imageList.push(product.image);
  }

  const validImages = imageList.filter(
    (image) => typeof image === "string" && image.trim() !== ""
  );

  // Loại bỏ ảnh trùng nhau
  const uniqueImages = [...new Set(validImages)];

  return uniqueImages.length > 0
    ? uniqueImages
    : ["/images/furniro-hero.png"];
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isImageVisible, setIsImageVisible] = useState(true);

  /*
   * Chỉ tạo lại danh sách ảnh khi product thay đổi.
   */
  const productImages = useMemo(() => {
    return getProductImages(product);
  }, [product]);

  /*
   * Tự động đổi ảnh sau mỗi 3 giây.
   */
  useEffect(() => {
    if (productImages.length <= 1) {
      return;
    }

    let fadeTimeout;

    const imageInterval = setInterval(() => {
      // Làm ảnh hiện tại mờ đi
      setIsImageVisible(false);

      fadeTimeout = setTimeout(() => {
        setCurrentImageIndex((previousIndex) => {
          return (previousIndex + 1) % productImages.length;
        });

        // Hiện ảnh mới
        setIsImageVisible(true);
      }, 250);
    }, 3000);

    return () => {
      clearInterval(imageInterval);
      clearTimeout(fadeTimeout);
    };
  }, [productImages]);

  /*
   * Khi chuyển sang sản phẩm khác,
   * quay lại ảnh đầu tiên.
   */
  useEffect(() => {
    setCurrentImageIndex(0);
    setIsImageVisible(true);
  }, [product.id]);

  function handleCompare() {
    addProductToCompare(product.id);
    router.push("/comparison");
  }

  function ShareIcon() {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M12 10.6667C11.4747 10.6667 11 10.8733 10.644 11.2047L5.94 8.46667C5.97333 8.31334 6 8.16 6 8C6 7.84 5.97333 7.68667 5.94 7.53334L10.64 4.79334C11 5.12667 11.4733 5.33334 12 5.33334C13.1067 5.33334 14 4.44 14 3.33334C14 2.22667 13.1067 1.33334 12 1.33334C10.8933 1.33334 10 2.22667 10 3.33334C10 3.49334 10.0267 3.64667 10.06 3.8L5.36 6.54C5 6.20667 4.52667 6 4 6C2.89333 6 2 6.89334 2 8C2 9.10667 2.89333 10 4 10C4.52667 10 5 9.79333 5.36 9.46L10.0587 12.2053C10.0211 12.3563 10.0014 12.5111 10 12.6667C10 13.0622 10.1173 13.4489 10.3371 13.7778C10.5568 14.1067 10.8692 14.3631 11.2346 14.5144C11.6001 14.6658 12.0022 14.7054 12.3902 14.6282C12.7781 14.5511 13.1345 14.3606 13.4142 14.0809C13.6939 13.8012 13.8844 13.4448 13.9616 13.0568C14.0387 12.6689 13.9991 12.2668 13.8478 11.9013C13.6964 11.5358 13.44 11.2235 13.1111 11.0037C12.7822 10.784 12.3956 10.6667 12 10.6667Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  function CompareIcon() {
    return (
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M8.66 6L9.66 7L13.1 3.55L9.58 0L8.58 1L10.38 2.8H0.58V4.2H10.4L8.66 6ZM4.44 8L3.44 7L0 10.5L3.49 14L4.49 13L2.68 11.2H12.58V9.8H2.68L4.44 8Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  function LikeIcon() {
    return (
      <svg
        width="16"
        height="14"
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M7.81855 12.8009C-5.51451 5.43152 3.81881 -2.56848 7.81855 2.49022C11.8188 -2.56848 21.1521 5.43152 7.81855 12.8009Z"
          stroke="currentColor"
          strokeWidth="1.8"
        />
      </svg>
    );
  }

  const productHref =
    product.id !== undefined && product.id !== null
      ? `/product/${product.id}`
      : product.productUrl || product.href || "/shop";

  const name = product.name || product.title || "Product";

  const description =
    product.description ||
    product.subtitle ||
    "";

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

  const badge = product.badge || product.tag || "";

  const productImage =
    productImages[currentImageIndex] ||
    "/images/furniro-hero.png";

  return (
    <>
      <article
        className="
          group relative
          bg-[#F4F5F7]
          font-['Poppins']
          transition-all
          duration-300
          ease-out
          hover:-translate-y-2
          hover:shadow-[0_16px_35px_rgba(0,0,0,0.18)]
        "
      >
        <div className="relative h-[301px] overflow-hidden bg-[#F4F5F7]">
          <Link
            href={productHref}
            aria-label={`View ${name}`}
            className="relative z-0 block h-full w-full"
          >
            <img
              src={productImage}
              alt={name}
              className={`
                h-full w-full object-cover
                transition-all duration-500 ease-in-out
                group-hover:scale-110
                ${isImageVisible
                  ? "opacity-100"
                  : "opacity-0"
                }
              `}
            />
          </Link>

          {badge && (
            <span
              className={`
                absolute right-6 top-6 z-20
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

          {/* Overlay khi hover */}
          <div
            className="
              pointer-events-none
              invisible absolute inset-0 z-10
              flex items-center justify-center
              bg-black/50
              opacity-0
              transition-all
              duration-300
              group-hover:visible
              group-hover:opacity-100
            "
          >
            <div
              className="
                pointer-events-auto
                translate-y-4
                text-center
                opacity-0
                transition-all
                duration-300
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              <button
                type="button"
                onClick={() => {
                  addToCart(product, 1);
                  setIsCartOpen(true);
                }}
                className="
                  h-12 w-[202px]
                  bg-white
                  font-['Poppins']
                  text-[16px] font-semibold
                  text-[#B88E2F]
                  transition-colors
                  duration-300
                  hover:bg-[#B88E2F]
                  hover:text-white
                "
              >
                Add to cart
              </button>

              <div className="mt-6 flex items-center justify-center gap-5 text-white">
                <button
                  type="button"
                  className="flex items-center gap-[2px] text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  <ShareIcon />
                  <span>Share</span>
                </button>

                <Link
                  href={`/comparison?product=${product.id}`}
                  className="flex items-center gap-[2px] text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  <CompareIcon />
                  <span>Compare</span>
                </Link>

                <button
                  type="button"
                  className="flex items-center gap-[2px] text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  <LikeIcon />
                  <span>Like</span>
                </button>
              </div>
              
            </div>
          </div>

          {/* Chấm hiển thị số lượng ảnh */}
          {productImages.length > 1 && (
            <div
              className="
                absolute bottom-3 left-1/2 z-20
                flex -translate-x-1/2 gap-2
                opacity-0 transition-opacity
                duration-300
                group-hover:opacity-100
              "
            >
              {productImages.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Show image ${index + 1}`}
                  onClick={() => {
                    setCurrentImageIndex(index);
                    setIsImageVisible(true);
                  }}
                  className={`
                    h-2 rounded-full
                    transition-all duration-300
                    ${index === currentImageIndex
                      ? "w-6 bg-white"
                      : "w-2 bg-white/60"
                    }
                  `}
                />
              ))}
            </div>
          )}
        </div>

        <div className="px-4 pb-[30px] pt-4">
          <Link
            href={productHref}
            className="relative z-20 block"
          >
            <h3
              className="
                text-[24px] font-semibold
                leading-[29px]
                text-[#3A3A3A]
                transition-colors
                duration-300
                group-hover:text-[#B88E2F]
              "
            >
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
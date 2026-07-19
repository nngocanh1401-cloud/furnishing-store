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
                ${
                  isImageVisible
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
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Share
                </button>

                <button
                  type="button"
                  onClick={handleCompare}
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Compare
                </button>

                <button
                  type="button"
                  className="text-[16px] font-semibold transition hover:text-[#B88E2F]"
                >
                  Like
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
                    ${
                      index === currentImageIndex
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
"use client";

import { useEffect, useMemo, useState } from "react";

const FALLBACK_IMAGE = "/images/furniro-hero.png";

export default function ProductGallery({ product }) {
  /*
   * Lấy ảnh trong gallery và ảnh đại diện.
   * Set dùng để loại bỏ các đường dẫn ảnh trùng nhau.
   */
  const images = useMemo(() => {
    const galleryImages = Array.isArray(product?.gallery)
      ? product.gallery.filter(Boolean)
      : [];

    const allImages = [
      ...galleryImages,
      product?.image,
    ].filter(Boolean);

    const uniqueImages = [...new Set(allImages)];

    const availableImages =
      uniqueImages.length > 0
        ? uniqueImages
        : [FALLBACK_IMAGE];

    return Array.from(
      { length: 4 },
      (_, index) =>
        availableImages[index] ||
        availableImages[0] ||
        FALLBACK_IMAGE
    );
  }, [product]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isZooming, setIsZooming] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [zoomPosition, setZoomPosition] = useState({
    x: 50,
    y: 50,
  });

  const selectedImage =
    images[selectedIndex] ||
    images[0] ||
    FALLBACK_IMAGE;

  /*
   * Khi chuyển sang sản phẩm khác,
   * quay về ảnh đầu tiên.
   */
  useEffect(() => {
    setSelectedIndex(0);
    setIsZooming(false);
    setIsModalOpen(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  }, [product?.id]);

  /*
   * Điều khiển modal bằng bàn phím.
   */
  useEffect(() => {
    if (!isModalOpen) {
      return undefined;
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key === "ArrowLeft") {
        setSelectedIndex((currentIndex) =>
          currentIndex === 0
            ? images.length - 1
            : currentIndex - 1
        );
      }

      if (event.key === "ArrowRight") {
        setSelectedIndex((currentIndex) =>
          currentIndex === images.length - 1
            ? 0
            : currentIndex + 1
        );
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.style.overflow = "";
    };
  }, [isModalOpen, images.length]);

  function handleMouseMove(event) {
    const rectangle =
      event.currentTarget.getBoundingClientRect();

    const rawX =
      ((event.clientX - rectangle.left) /
        rectangle.width) *
      100;

    const rawY =
      ((event.clientY - rectangle.top) /
        rectangle.height) *
      100;

    setZoomPosition({
      x: Math.max(0, Math.min(rawX, 100)),
      y: Math.max(0, Math.min(rawY, 100)),
    });
  }

  function handleMouseEnter() {
    setIsZooming(true);
  }

  function handleMouseLeave() {
    setIsZooming(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  }

  function handleSelectImage(index) {
    setSelectedIndex(index);
    setIsZooming(false);

    setZoomPosition({
      x: 50,
      y: 50,
    });
  }

  function showPreviousImage() {
    setSelectedIndex((currentIndex) =>
      currentIndex === 0
        ? images.length - 1
        : currentIndex - 1
    );
  }

  function showNextImage() {
    setSelectedIndex((currentIndex) =>
      currentIndex === images.length - 1
        ? 0
        : currentIndex + 1
    );
  }

  function openModal() {
    setIsZooming(false);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <div className="flex w-[531px] items-start gap-[32px]">
        {/* 4 ảnh nhỏ */}
        <div className="flex w-[76px] shrink-0 flex-col gap-[32px]">
          {images.map((image, index) => {
            const isSelected = selectedIndex === index;

            return (
              <button
                key={`${image}-${index}`}
                type="button"
                onClick={() => handleSelectImage(index)}
                className={`
            flex h-[80px] w-[76px]
            shrink-0 items-center justify-center
            overflow-hidden rounded-[10px]
            bg-[#F9F1E7] p-0
            outline-none
            ${isSelected
                    ? ""
                    : ""
                  }
          `}
                aria-label={`View image ${index + 1} of ${product?.name}`}
              >
                <img
                  src={image}
                  alt={`${product?.name} thumbnail ${index + 1}`}
                  className="h-full w-full object-contain"
                />
              </button>
            );
          })}
        </div>

        {/* Ảnh chính */}
        <button
          type="button"
          onClick={openModal}
          onMouseMove={handleMouseMove}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="
      group relative
      flex h-[500px] w-[423px]
      shrink-0 cursor-zoom-in
      items-center justify-center
      overflow-hidden rounded-[10px]
      border-0 bg-[#F9F1E7]
      p-0 outline-none
    "
          aria-label={`Zoom ${product?.name}`}
        >
          <img
            src={selectedImage}
            alt={product?.name || "Product"}
            className="
        max-h-full max-w-full
        object-contain
        transition-transform
        duration-300 ease-out
      "
            style={{
              transform: isZooming
                ? "scale(1.35)"
                : "scale(1)",
              transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
            }}
          />

          <span
            className="
        pointer-events-none
        absolute right-4 top-4
        flex h-10 w-10
        items-center justify-center
        rounded-full bg-white/90
        text-[21px] text-black
        shadow-md
      "
          >
            ⤢
          </span>

          <span
            className="
        pointer-events-none
        absolute bottom-4 right-4
        rounded-full bg-black/60
        px-4 py-2
        text-[13px] text-white
        opacity-0 transition
        group-hover:opacity-100
      "
          >
            Click to zoom
          </span>
        </button>
      </div>

      {/* Modal phóng to toàn màn hình */}
      {isModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${product?.name} image preview`}
          className="
            fixed inset-0 z-[100]
            flex items-center justify-center
            bg-black/85 px-5 py-8
          "
          onClick={closeModal}
        >
          <div
            className="
              relative flex
              h-full w-full
              max-w-[1200px]
              items-center justify-center
            "
            onClick={(event) =>
              event.stopPropagation()
            }
          >
            {/* Nút đóng */}
            <button
              type="button"
              onClick={closeModal}
              className="
                absolute right-0 top-0 z-20
                flex h-11 w-11
                items-center justify-center
                rounded-full border-0
                bg-white text-[28px]
                leading-none text-black
                transition
                hover:bg-[#B88E2F]
                hover:text-white
              "
              aria-label="Close image preview"
            >
              ×
            </button>

            {/* Nút ảnh trước */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={showPreviousImage}
                className="
                  absolute left-0 z-20
                  flex h-12 w-12
                  items-center justify-center
                  rounded-full border-0
                  bg-white text-[32px]
                  text-black transition
                  hover:bg-[#B88E2F]
                  hover:text-white
                "
                aria-label="Previous image"
              >
                ‹
              </button>
            )}

            {/* Ảnh phóng to */}
            <img
              src={selectedImage}
              alt={`${product?.name} enlarged`}
              className="
                max-h-[82vh]
                max-w-[88%]
                rounded-[8px]
                object-contain
              "
            />

            {/* Nút ảnh tiếp theo */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={showNextImage}
                className="
                  absolute right-0 z-20
                  flex h-12 w-12
                  items-center justify-center
                  rounded-full border-0
                  bg-white text-[32px]
                  text-black transition
                  hover:bg-[#B88E2F]
                  hover:text-white
                "
                aria-label="Next image"
              >
                ›
              </button>
            )}

            {/* Thumbnail trong modal */}
            {images.length > 1 && (
              <div
                className="
                  absolute bottom-0 left-1/2
                  flex max-w-[90%]
                  -translate-x-1/2
                  gap-3 overflow-x-auto
                  rounded-[10px]
                  bg-black/50 p-3
                "
              >
                {images.map((image, index) => (
                  <button
                    key={`modal-${image}-${index}`}
                    type="button"
                    onClick={() =>
                      handleSelectImage(index)
                    }
                    className={`
                      h-[60px] w-[60px]
                      shrink-0 overflow-hidden
                      rounded-[6px] border-2
                      p-0
                      ${selectedIndex === index
                        ? "border-[#B88E2F]"
                        : "border-transparent"
                      }
                    `}
                    aria-label={`Select image ${index + 1
                      }`}
                  >
                    <img
                      src={image}
                      alt={`${product?.name} preview ${index + 1
                        }`}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
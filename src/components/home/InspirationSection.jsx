"use client";

import {
  useEffect,
  useState,
} from "react";

import Link from "next/link";

import Button from "@/components/common/Button";

import {
  inspirationStyles,
  textStyles,
} from "@/styles/styles";

import { cn } from "@/utils/cn";

/*
 * Thời gian mặc định nếu homeData.json
 * không khai báo autoPlaySeconds.
 */
const DEFAULT_AUTOPLAY_SECONDS = 4;

/* =====================================
   HÀM LẤY ITEM THEO VÒNG LẶP
===================================== */

/*
 * Ví dụ có 3 sản phẩm:
 *
 * index 0 → item 0
 * index 1 → item 1
 * index 2 → item 2
 * index 3 → quay lại item 0
 */
function getLoopItem(
  items,
  index
) {
  if (items.length === 0) {
    return null;
  }

  const safeIndex =
    ((index % items.length) +
      items.length) %
    items.length;

  return items[safeIndex];
}

/* =====================================
   INSPIRATION SECTION
===================================== */

export default function InspirationSection({
  content,
}) {
  const items = Array.isArray(
    content?.items
  )
    ? content.items
    : [];

  /*
   * Carousel hiện tại cần tối thiểu
   * ba hình:
   *
   * 1 hình chính
   * 2 hình xem trước
   */
  if (items.length < 3) {
    return null;
  }

  /* ===================================
     STATE SLIDE
  =================================== */

  const [
    activeIndex,
    setActiveIndex,
  ] = useState(0);

  /*
   * Tạm dừng khi người dùng rê chuột
   * hoặc dùng bàn phím tương tác.
   */
  const [
    isPaused,
    setIsPaused,
  ] = useState(false);

  const totalSlides = items.length;

  /*
   * Tránh activeIndex vượt quá số lượng
   * item nếu dữ liệu thay đổi.
   */
  const safeActiveIndex =
    activeIndex % totalSlides;

  /* ===================================
     THỜI GIAN TỰ CHUYỂN
  =================================== */

  const configuredSeconds = Number(
    content?.autoPlaySeconds
  );

  const autoPlaySeconds =
    Number.isFinite(configuredSeconds) &&
    configuredSeconds > 0
      ? configuredSeconds
      : DEFAULT_AUTOPLAY_SECONDS;

  const autoPlayMilliseconds =
    autoPlaySeconds * 1000;

  /* ===================================
     BA ITEM ĐANG HIỂN THỊ
  =================================== */

  const mainItem = getLoopItem(
    items,
    safeActiveIndex
  );

  const secondItem = getLoopItem(
    items,
    safeActiveIndex + 1
  );

  const thirdItem = getLoopItem(
    items,
    safeActiveIndex + 2
  );

  const shopHref =
    content?.buttonHref || "/shop";

  const slideNumber = String(
    safeActiveIndex + 1
  ).padStart(2, "0");

  /* ===================================
     TỰ ĐỘNG CHUYỂN SLIDE
  =================================== */

  useEffect(() => {
    /*
     * Không cần chạy autoplay khi:
     *
     * - Carousel đang tạm dừng.
     * - Chỉ có một slide.
     */
    if (
      isPaused ||
      totalSlides <= 1
    ) {
      return undefined;
    }

    /*
     * Dùng setTimeout thay vì một interval
     * chạy liên tục.
     *
     * Mỗi khi activeIndex thay đổi,
     * timer được tạo lại từ đầu.
     */
    const timerId = window.setTimeout(
      () => {
        setActiveIndex(
          (currentIndex) =>
            (currentIndex + 1) %
            totalSlides
        );
      },
      autoPlayMilliseconds
    );

    /*
     * Dọn timer khi:
     *
     * - Component unmount.
     * - Slide thay đổi.
     * - Người dùng pause carousel.
     */
    return () => {
      window.clearTimeout(timerId);
    };
  }, [
    activeIndex,
    autoPlayMilliseconds,
    isPaused,
    totalSlides,
  ]);

  /* ===================================
     CHUYỂN SLIDE BẰNG NÚT TRÒN
  =================================== */

  function handleDotClick(index) {
    setActiveIndex(index);
  }

  /* ===================================
     PAUSE KHI DÙNG BÀN PHÍM
  =================================== */

  function handleCarouselBlur(event) {
    /*
     * Chỉ tiếp tục autoplay khi focus
     * thật sự rời khỏi toàn carousel.
     */
    const nextFocusedElement =
      event.relatedTarget;

    const isFocusStillInside =
      nextFocusedElement &&
      event.currentTarget.contains(
        nextFocusedElement
      );

    if (!isFocusStillInside) {
      setIsPaused(false);
    }
  }

  return (
    <section
      className={
        inspirationStyles.section
      }
    >
      <div
        className={
          inspirationStyles.container
        }
      >
        {/* =================================
            NỘI DUNG BÊN TRÁI
        ================================= */}

        <div
          className={
            inspirationStyles.content
          }
        >
          <h2
            className={
              textStyles.sectionTitle
            }
          >
            {content?.title ||
              "50+ Beautiful rooms inspiration"}
          </h2>

          <p
            className={
              inspirationStyles.description
            }
          >
            {content?.description ||
              "Discover beautiful rooms designed to inspire your home."}
          </p>

          <Button
            href={shopHref}
            size="inspiration"
            className="mt-[25px]"
          >
            {content?.buttonText ||
              "Explore More"}
          </Button>
        </div>

        {/* =================================
            CAROUSEL
        ================================= */}

        <div
          className={
            inspirationStyles.carousel
          }
          role="region"
          aria-roledescription="carousel"
          aria-label="Room inspiration"
          onMouseEnter={() =>
            setIsPaused(true)
          }
          onMouseLeave={() =>
            setIsPaused(false)
          }
          onFocusCapture={() =>
            setIsPaused(true)
          }
          onBlurCapture={
            handleCarouselBlur
          }
        >
          {/* ===============================
              HÌNH CHÍNH
          =============================== */}

          <div
            key={`main-${
              mainItem.id ??
              safeActiveIndex
            }`}
            className={cn(
              inspirationStyles.mainCard,
              "inspiration-main-enter"
            )}
          >
            <img
              src={mainItem.image}
              alt={mainItem.alt}
              loading="lazy"
              decoding="async"
              className={
                inspirationStyles.mainImage
              }
            />

            {/* Thông tin slide */}
            <div
              className={cn(
                inspirationStyles.informationWrapper,
                "inspiration-information-enter"
              )}
            >
              <div
                className={
                  inspirationStyles.informationBox
                }
              >
                <p
                  className={
                    inspirationStyles.informationRoom
                  }
                >
                  {slideNumber} —{" "}
                  {mainItem.room}
                </p>

                <h3
                  className={
                    inspirationStyles.informationTitle
                  }
                >
                  {mainItem.title}
                </h3>
              </div>

              {/* Nút mũi tên tới Shop */}
              <Link
                href={shopHref}
                aria-label={`Open shop from ${mainItem.title}`}
                className={
                  inspirationStyles.arrow
                }
              >
                <span aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* ===============================
              HÌNH XEM TRƯỚC THỨ NHẤT
          =============================== */}

          <div
            className={
              inspirationStyles.previewColumn
            }
          >
            <img
              key={`second-${
                secondItem.id ??
                safeActiveIndex + 1
              }`}
              src={secondItem.image}
              alt={secondItem.alt}
              loading="lazy"
              decoding="async"
              className={cn(
                inspirationStyles.previewImage,
                "inspiration-preview-enter"
              )}
            />

            {/* =============================
                NÚT TRÒN
            ============================= */}

            <div
              className={
                inspirationStyles.dots
              }
              role="group"
              aria-label="Choose inspiration slide"
            >
              {items.map(
                (item, index) => {
                  const isActive =
                    index ===
                    safeActiveIndex;

                  return (
                    <button
                      key={
                        item.id ??
                        `inspiration-dot-${index}`
                      }
                      type="button"
                      onClick={() =>
                        handleDotClick(
                          index
                        )
                      }
                      className={cn(
                        inspirationStyles.dotButton,
                        isActive
                          ? inspirationStyles.dotActive
                          : inspirationStyles.dotInactive
                      )}
                      aria-label={`Show slide ${
                        index + 1
                      }: ${
                        item.title
                      }`}
                      aria-current={
                        isActive
                          ? "true"
                          : undefined
                      }
                    >
                      <span
                        className={cn(
                          inspirationStyles.dotInner,
                          isActive
                            ? inspirationStyles.dotInnerActive
                            : inspirationStyles.dotInnerInactive
                        )}
                      />
                    </button>
                  );
                }
              )}
            </div>
          </div>

          {/* ===============================
              HÌNH XEM TRƯỚC THỨ HAI
          =============================== */}

          <img
            key={`third-${
              thirdItem.id ??
              safeActiveIndex + 2
            }`}
            src={thirdItem.image}
            alt={thirdItem.alt}
            loading="lazy"
            decoding="async"
            className={cn(
              inspirationStyles.thirdImage,
              "inspiration-preview-enter"
            )}
          />

          {/* Nội dung hỗ trợ screen reader */}
          <p
            className="sr-only"
            aria-live="polite"
          >
            Slide {safeActiveIndex + 1} of{" "}
            {totalSlides}:{" "}
            {mainItem.title}
          </p>
        </div>
      </div>
    </section>
  );
}
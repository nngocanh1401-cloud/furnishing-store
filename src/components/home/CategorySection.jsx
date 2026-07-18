"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
} from "motion/react";

import Container from "@/components/common/Container";

const FALLBACK_IMAGE =
  "/images/furniro-hero.png";

const EASE_LUXURY = [
  0.22,
  1,
  0.36,
  1,
];

/*
 * Thời gian card đầu tiên bắt đầu xuất hiện.
 */
const FIRST_CARD_DELAY = 0.25;

/*
 * Khoảng cách giữa từng card.
 *
 * Dining  : 0.25 giây
 * Living  : 0.73 giây
 * Bedroom : 1.21 giây
 */
const CARD_REVEAL_GAP = 0.48;

function getRevealDelay(index) {
  return (
    FIRST_CARD_DELAY +
    index * CARD_REVEAL_GAP
  );
}

/* =====================================
   ANIMATION TIÊU ĐỀ
===================================== */

const headingContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const headingTitleVariants = {
  hidden: {
    opacity: 0,
    y: 26,
    filter: "blur(5px)",
  },

  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",

    transition: {
      duration: 0.8,
      ease: EASE_LUXURY,
    },
  },
};

const subtitleVariants = {
  hidden: {
    opacity: 0,
    y: 18,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.75,
      ease: EASE_LUXURY,
    },
  },
};

/* =====================================
   VỊ TRÍ BAN ĐẦU CỦA TỪNG CARD
===================================== */

function getCardInitialPosition(index) {
  if (index === 0) {
    return {
      opacity: 0,
      x: -90,
      y: 20,
      scale: 0.95,
      rotate: -1,
      filter: "blur(8px)",
    };
  }

  if (index === 1) {
    return {
      opacity: 0,
      x: 0,
      y: 100,
      scale: 0.95,
      rotate: 0,
      filter: "blur(8px)",
    };
  }

  return {
    opacity: 0,
    x: 90,
    y: 20,
    scale: 0.95,
    rotate: 1,
    filter: "blur(8px)",
  };
}

/* =====================================
   MÀN CHE ẢNH
===================================== */

/*
 * Dining và Bedroom dùng màn che ngang.
 * Living dùng màn che dọc.
 */
function getCurtainInitial(index) {
  if (index === 1) {
    return {
      scaleX: 1,
      scaleY: 1,
    };
  }

  return {
    scaleX: 1,
    scaleY: 1,
  };
}

function getCurtainVisible(index) {
  if (index === 1) {
    return {
      scaleX: 1,
      scaleY: 0,
    };
  }

  return {
    scaleX: 0,
    scaleY: 1,
  };
}

function getCurtainOrigin(index) {
  if (index === 0) {
    /*
     * Màn che Dining co về bên phải,
     * tạo cảm giác ảnh mở từ trái sang phải.
     */
    return "right center";
  }

  if (index === 1) {
    /*
     * Màn che Living co về phía trên,
     * tạo cảm giác ảnh mở từ dưới lên.
     */
    return "center top";
  }

  /*
   * Màn che Bedroom co về bên trái,
   * tạo cảm giác ảnh mở từ phải sang trái.
   */
  return "left center";
}

/* =====================================
   ANIMATION HOVER
===================================== */

/*
 * Card nâng nhẹ khi rê chuột.
 */
const cardHoverVariants = {
  rest: {
    y: 0,
    scale: 1,
  },

  hover: {
    y: -9,
    scale: 1.012,

    transition: {
      duration: 0.42,
      ease: EASE_LUXURY,
    },
  },
};

/*
 * Bóng của khung ảnh.
 */
const imageFrameHoverVariants = {
  rest: {
    boxShadow:
      "0 8px 24px rgba(35, 28, 20, 0.04)",
  },

  hover: {
    boxShadow:
      "0 24px 55px rgba(35, 28, 20, 0.15)",

    transition: {
      duration: 0.5,
      ease: EASE_LUXURY,
    },
  },
};

/*
 * Zoom ảnh khi rê chuột.
 */
const imageHoverVariants = {
  hover: {
    scale: 1.06,
    filter:
      "brightness(0.98) saturate(1.05)",

    transition: {
      duration: 0.9,
      ease: EASE_LUXURY,
    },
  },
};

/*
 * Lớp gradient khi rê chuột.
 */
const overlayHoverVariants = {
  rest: {
    opacity: 0,
  },

  hover: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: EASE_LUXURY,
    },
  },
};

/*
 * Tên category khi rê chuột.
 */
const categoryTitleHoverVariants = {
  hover: {
    y: -2,
    color: "#B88E2F",

    transition: {
      duration: 0.35,
      ease: EASE_LUXURY,
    },
  },
};

/* =====================================
   MỘT CATEGORY CARD
===================================== */

function CategoryCard({
  category,
  index,
  shouldReduceMotion,
}) {
  const href =
    category?.href || "/shop";

  const image =
    category?.image ||
    FALLBACK_IMAGE;

  const name =
    category?.name || "Category";

  const alt =
    category?.alt ||
    `${name} furniture`;

  const revealDelay =
    getRevealDelay(index);

  return (
    /*
     * Lớp ngoài chỉ xử lý hiệu ứng
     * xuất hiện khi cuộn tới.
     */
    <motion.article
      initial={
        shouldReduceMotion
          ? false
          : getCardInitialPosition(index)
      }
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        delay: revealDelay,
        duration: 0.9,
        ease: EASE_LUXURY,
      }}
      className="
        relative
        text-center
        will-change-transform
      "
    >
      {/*
       * Lớp trong chỉ xử lý hover.
       * Nhờ tách hai lớp nên hover không
       * xung đột với animation xuất hiện.
       */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover={
          shouldReduceMotion
            ? undefined
            : "hover"
        }
        variants={cardHoverVariants}
        className="
          origin-center
          will-change-transform
        "
      >
        <Link
          href={href}
          aria-label={`Browse ${name}`}
          className="
            block
            cursor-pointer
            rounded-[10px]
            outline-none

            focus-visible:ring-2
            focus-visible:ring-[#B88E2F]
            focus-visible:ring-offset-4
          "
        >
          {/* Khung ảnh */}
          <motion.div
            variants={
              imageFrameHoverVariants
            }
            className="
              relative
              aspect-[381/480]
              overflow-hidden
              rounded-[10px]
              bg-[#F4F5F7]
              will-change-transform
            "
          >
            {/* Ảnh */}
            <motion.img
              initial={
                shouldReduceMotion
                  ? false
                  : {
                      scale: 1.14,

                      filter:
                        "brightness(0.9) saturate(0.85)",
                    }
              }
              whileInView={{
                scale: 1,

                filter:
                  "brightness(1) saturate(1)",
              }}
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay:
                  revealDelay + 0.08,

                duration: 1.15,
                ease: EASE_LUXURY,
              }}
              variants={
                imageHoverVariants
              }
              src={image}
              alt={alt}
              loading="lazy"
              decoding="async"
              className="
                h-full
                w-full
                object-cover
                will-change-transform
              "
            />

            {/*
             * Màn che màu kem.
             * Đây là phần tạo kiểu xuất hiện mới.
             */}
            <motion.div
              initial={
                shouldReduceMotion
                  ? false
                  : getCurtainInitial(index)
              }
              whileInView={
                getCurtainVisible(index)
              }
              viewport={{
                once: true,
                amount: 0.3,
              }}
              transition={{
                delay:
                  revealDelay + 0.08,

                duration: 0.85,
                ease: EASE_LUXURY,
              }}
              style={{
                transformOrigin:
                  getCurtainOrigin(index),
              }}
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                z-10
                bg-[#F3EFE7]
                will-change-transform
              "
            />

            {/* Gradient khi hover */}
            <motion.div
              variants={
                overlayHoverVariants
              }
              aria-hidden="true"
              className="
                pointer-events-none
                absolute inset-0
                z-20
                bg-gradient-to-t
                from-black/15
                via-transparent
                to-white/10
              "
            />
          </motion.div>

          {/* Tên category */}
          <motion.h3
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                    y: 18,
                  }
            }
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.3,
            }}
            transition={{
              delay:
                revealDelay + 0.5,

              duration: 0.65,
              ease: EASE_LUXURY,
            }}
            variants={
              categoryTitleHoverVariants
            }
            className="
              mt-[24px]
              text-[24px]
              font-semibold
              leading-[36px]
              text-black
            "
          >
            {name}
          </motion.h3>
        </Link>
      </motion.div>
    </motion.article>
  );
}

/* =====================================
   CATEGORY SECTION
===================================== */

export default function CategorySection({
  browse,
}) {
  const shouldReduceMotion =
    useReducedMotion();

  const categories = Array.isArray(
    browse?.categories
  )
    ? browse.categories
    : [];

  if (categories.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={
        shouldReduceMotion
          ? "visible"
          : "hidden"
      }
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.18,
        margin:
          "0px 0px -70px 0px",
      }}
      className="
        bg-white
        pb-[56px]
        pt-[56px]
        font-['Poppins']
      "
    >
      <Container size="categories">
        {/* Tiêu đề */}
        <motion.div
          variants={
            headingContainerVariants
          }
          className="
            mx-auto
            max-w-[760px]
            text-center
          "
        >
          <motion.h2
            variants={
              headingTitleVariants
            }
            className="
              text-[32px]
              font-bold
              leading-[48px]
              text-[#333333]

              md:text-[40px]
            "
          >
            {browse?.title ||
              "Browse The Range"}
          </motion.h2>

          <motion.p
            variants={subtitleVariants}
            className="
              mt-1
              text-[18px]
              leading-[30px]
              text-[#666666]
            "
          >
            {browse?.subtitle ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          </motion.p>
        </motion.div>

        {/* Ba category */}
        <div
          className="
            mt-[48px]
            grid
            grid-cols-1
            gap-[32px]

            md:grid-cols-3
            md:gap-[20px]
          "
        >
          {categories.map(
            (category, index) => (
              <CategoryCard
                key={
                  category.id ??
                  category.slug ??
                  `${category.name}-${index}`
                }
                category={category}
                index={index}
                shouldReduceMotion={
                  shouldReduceMotion
                }
              />
            )
          )}
        </div>
      </Container>
    </motion.section>
  );
}
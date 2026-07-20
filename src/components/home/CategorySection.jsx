"use client";

import Link from "next/link";

import {
  motion,
  MotionConfig,
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
 * Card đầu tiên bắt đầu xuất hiện
 * sau 0,25 giây.
 */
const FIRST_CARD_DELAY = 0.25;

/*
 * Khoảng cách xuất hiện giữa
 * card trước và card sau.
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
   VỊ TRÍ XUẤT HIỆN CỦA TỪNG CARD
===================================== */

function getCardInitialPosition(index) {
  /*
   * Card đầu tiên:
   * xuất hiện từ bên trái.
   */
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

  /*
   * Card thứ hai:
   * xuất hiện từ phía dưới.
   */
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

  /*
   * Card thứ ba:
   * xuất hiện từ bên phải.
   */
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

function getCurtainInitial() {
  return {
    scaleX: 1,
    scaleY: 1,
  };
}

function getCurtainVisible(index) {
  /*
   * Card giữa mở màn che
   * theo chiều dọc.
   */
  if (index === 1) {
    return {
      scaleX: 1,
      scaleY: 0,
    };
  }

  /*
   * Card trái và phải mở màn che
   * theo chiều ngang.
   */
  return {
    scaleX: 0,
    scaleY: 1,
  };
}

function getCurtainOrigin(index) {
  if (index === 0) {
    return "right center";
  }

  if (index === 1) {
    return "center top";
  }

  return "left center";
}

/* =====================================
   ANIMATION HOVER CỦA CARD
===================================== */

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

/* =====================================
   ANIMATION KHUNG ẢNH
===================================== */

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

/* =====================================
   ANIMATION ẢNH KHI HOVER
===================================== */

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

/* =====================================
   GRADIENT KHI HOVER
===================================== */

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

/* =====================================
   TÊN CATEGORY KHI HOVER
===================================== */

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
   COMPONENT MỘT CATEGORY
===================================== */

function CategoryCard({
  category,
  index,
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
     * Lớp ngoài xử lý hiệu ứng
     * xuất hiện khi cuộn tới.
     *
     * initial luôn giống nhau trên
     * server và client.
     */
    <motion.article
      initial={getCardInitialPosition(
        index
      )}
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
       * Lớp trong xử lý hover.
       *
       * Tách hover ra khỏi animation
       * xuất hiện để tránh xung đột.
       */}
      <motion.div
        initial="rest"
        animate="rest"
        whileHover="hover"
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
            {/* Ảnh category */}
            <motion.img
              initial={{
                scale: 1.14,

                filter:
                  "brightness(0.9) saturate(0.85)",
              }}
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
              variants={imageHoverVariants}
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
             * Màn che màu kem tạo
             * hiệu ứng mở ảnh.
             */}
            <motion.div
              initial={getCurtainInitial()}
              whileInView={getCurtainVisible(
                index
              )}
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
            initial={{
              opacity: 0,
              y: 18,
            }}
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
  const categories = Array.isArray(
    browse?.categories
  )
    ? browse.categories
    : [];

  if (categories.length === 0) {
    return null;
  }

  return (
    /*
     * Motion tự đọc thiết lập Reduced Motion.
     *
     * Không cần dùng useReducedMotion()
     * để thay đổi initial trong JSX.
     */
    <MotionConfig reducedMotion="user">
      <motion.section
        /*
         * Server và client luôn bắt đầu
         * từ cùng một trạng thái.
         */
        initial="hidden"
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
              variants={
                subtitleVariants
              }
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
                />
              )
            )}
          </div>
        </Container>
      </motion.section>
    </MotionConfig>
  );
}
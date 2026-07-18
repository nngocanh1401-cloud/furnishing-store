"use client";

import { motion } from "motion/react";

const FALLBACK_IMAGE = "/images/furniro-hero.png";

/*
 * Vị trí 9 ảnh trên giao diện desktop.
 */
const desktopLayouts = [
  {
    left: "0%",
    top: "7%",
    width: "5.2%",
    height: "47%",
  },
  {
    left: "6.4%",
    top: "15.2%",
    width: "31.5%",
    height: "38.2%",
  },
  {
    left: "38.9%",
    top: "25.5%",
    width: "20.6%",
    height: "48.5%",
  },
  {
    left: "60.5%",
    top: "18.6%",
    width: "20.2%",
    height: "42.8%",
  },
  {
    left: "81.8%",
    top: "8%",
    width: "18.2%",
    height: "53.3%",
  },
  {
    left: "0%",
    top: "55.4%",
    width: "12.7%",
    height: "39.6%",
  },
  {
    left: "13.8%",
    top: "55.4%",
    width: "24.1%",
    height: "29.8%",
  },
  {
    left: "60.5%",
    top: "63.4%",
    width: "12.4%",
    height: "30%",
  },
  {
    left: "73.9%",
    top: "63.4%",
    width: "18.2%",
    height: "24.2%",
  },
];

/*
 * Bố cục ảnh trên tablet và mobile.
 */
const mobileLayouts = [
  "row-span-2",
  "",
  "row-span-2",
  "",
  "row-span-2",
  "",
  "",
  "",
  "col-span-2",
];

/*
 * Điều phối thứ tự xuất hiện:
 * tiêu đề trước, sau đó các ảnh xuất hiện lần lượt.
 */
const galleryContainerVariants = {
  hidden: {},

  visible: {
    transition: {
      delayChildren: 0.12,
      staggerChildren: 0.08,
    },
  },
};

/*
 * Animation cho tiêu đề.
 */
const titleVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/*
 * Animation cho từng ảnh khi cuộn tới.
 */
const imageVariants = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

/*
 * Animation cho đường màu vàng dưới tiêu đề.
 */
const accentVariants = {
  hidden: {
    width: 0,
    opacity: 0,
  },

  visible: {
    width: 72,
    opacity: 1,

    transition: {
      delay: 0.25,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function GalleryImage({
  image,
  index,
  desktop = false,
}) {
  const imageSource =
    image?.src || FALLBACK_IMAGE;

  const imageAlt =
    image?.alt ||
    `Furniro interior gallery image ${index + 1}`;

  if (desktop) {
    return (
      <motion.div
        variants={imageVariants}
        whileHover={{
          y: -4,
          boxShadow:
            "0 16px 35px rgba(0, 0, 0, 0.11)",
        }}
        transition={{
          duration: 0.3,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          group absolute
          overflow-hidden
          bg-[#F4F5F7]
          will-change-transform
        "
        style={desktopLayouts[index]}
      >
        <motion.img
          src={imageSource}
          alt={imageAlt}
          loading="lazy"
          decoding="async"
          whileHover={{
            scale: 1.055,
          }}
          transition={{
            duration: 0.65,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            h-full w-full
            object-cover
            will-change-transform
          "
        />

        {/* Lớp phủ nhẹ khi hover */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
          transition={{
            duration: 0.4,
          }}
          className="
            pointer-events-none
            absolute inset-0
            bg-gradient-to-t
            from-black/10
            via-transparent
            to-white/10
          "
        />

        {/* Viền sáng tinh tế */}
        <div
          className="
            pointer-events-none
            absolute inset-0
            ring-1 ring-inset
            ring-white/0
            transition duration-500
            group-hover:ring-white/35
          "
        />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={imageVariants}
      whileHover={{
        y: -3,
        boxShadow:
          "0 12px 28px rgba(0, 0, 0, 0.10)",
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
        group relative
        min-h-[190px]
        overflow-hidden
        bg-[#F4F5F7]
        sm:min-h-[230px]
        ${mobileLayouts[index] || ""}
      `}
    >
      <motion.img
        src={imageSource}
        alt={imageAlt}
        loading="lazy"
        decoding="async"
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="
          h-full w-full
          object-cover
        "
      />

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileHover={{
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          pointer-events-none
          absolute inset-0
          bg-gradient-to-t
          from-black/10
          via-transparent
          to-white/5
        "
      />
    </motion.div>
  );
}

function GalleryTitle({ content, mobile = false }) {
  return (
    <motion.div
      variants={titleVariants}
      className={
        mobile
          ? "mb-8 text-center"
          : `
              absolute left-1/2 top-0 z-20
              w-[420px]
              -translate-x-1/2
              text-center
            `
      }
    >
      <p
        className={`
          font-semibold text-[#616161]
          ${
            mobile
              ? "text-[18px] leading-[28px]"
              : "text-[18px] leading-[30px]"
          }
        `}
      >
        {content?.eyebrow ||
          "Share your setup with"}
      </p>

      <h2
        className={`
          font-bold text-[#3A3A3A]
          ${
            mobile
              ? "mt-1 text-[30px] leading-[38px] sm:text-[36px]"
              : "mt-[-2px] text-[40px] leading-[48px]"
          }
        `}
      >
        {content?.title ||
          "#FurniroFurniture"}
      </h2>

      <motion.span
        variants={accentVariants}
        className="
          mx-auto mt-3 block
          h-[2px]
          bg-[#B88E2F]
        "
      />
    </motion.div>
  );
}

export default function InteriorGallery({
  content,
}) {
  const galleryImages = Array.isArray(
    content?.images
  )
    ? content.images.slice(0, 9)
    : [];

  if (galleryImages.length === 0) {
    return null;
  }

  return (
    <section
      className="
        overflow-hidden
        bg-white
        pb-[50px]
        pt-[50px]
        font-['Poppins']
      "
    >
      {/* Giao diện desktop */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.18,
          margin: "0px 0px -60px 0px",
        }}
        variants={galleryContainerVariants}
        className="
          relative mx-auto hidden
          h-[clamp(520px,42vw,620px)]
          w-full max-w-[1440px]
          lg:block
        "
      >
        <GalleryTitle content={content} />

        {galleryImages.map((image, index) => (
          <GalleryImage
            key={
              image.id ??
              `${image.src}-${index}`
            }
            image={image}
            index={index}
            desktop
          />
        ))}
      </motion.div>

      {/* Giao diện tablet và mobile */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.12,
          margin: "0px 0px -40px 0px",
        }}
        variants={galleryContainerVariants}
        className="px-4 lg:hidden"
      >
        <GalleryTitle
          content={content}
          mobile
        />

        <div
          className="
            grid
            auto-rows-[190px]
            grid-cols-2
            gap-3
            sm:auto-rows-[230px]
          "
        >
          {galleryImages.map((image, index) => (
            <GalleryImage
              key={
                image.id ??
                `${image.src}-${index}`
              }
              image={image}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
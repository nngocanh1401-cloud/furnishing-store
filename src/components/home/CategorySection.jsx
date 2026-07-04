import Link from "next/link";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { categories } from "@/data/categories";
import { layoutStyles } from "@/styles/styles";

function getCategoryHref(category) {
  if (category.href) return category.href;

  const slug = category.slug || category.name.toLowerCase().replaceAll(" ", "-");

  return `/shop?category=${slug}`;
}

export default function CategorySection() {
  return (
    <section className="bg-white px-5 py-[56px]">
      <Container size="categories">
        <SectionTitle
          title="Browse The Range"
          subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          className="text-center"
        />

        <div className={layoutStyles.categoryGrid}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={getCategoryHref(category)}
              className="group block text-center"
            >
              <div className="h-[480px] overflow-hidden rounded-[10px] bg-[#F4F5F7]">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>

              <h3 className="mt-[30px] font-['Poppins'] text-[24px] font-semibold leading-[36px] text-[#333333] transition group-hover:text-[#B88E2F]">
                {category.name}
              </h3>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
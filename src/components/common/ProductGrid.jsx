import Button from "@/components/common/Button";
import ProductCard from "@/components/common/ProductCard";
import SectionTitle from "@/components/common/SectionTitle";
import { layoutStyles } from "@/styles/styles";

export default function ProductGrid({
  title = "Our Products",
  subtitle,
  products = [],
  showMore = true,
}) {
  return (
    <section className="bg-white px-5 py-[32px]">
      <div className="mx-auto max-w-[1236px]">
        <SectionTitle
          title={title}
          subtitle={subtitle}
          className="text-center"
        />

        <div className={`${layoutStyles.productGrid} mt-[32px]`}>
          {products.map((product) => (
            <ProductCard key={product.id || product.name} product={product} />
          ))}
        </div>

        {showMore && (
          <div className="mt-[32px] flex justify-center">
            <Button href="/shop" variant="outline" size="showMore">
              Show More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
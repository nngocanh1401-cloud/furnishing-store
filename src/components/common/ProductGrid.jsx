import { layoutStyles, textStyles } from "@/styles/styles";
import Button from "./Button";
import Container from "./Container";
import ProductCard from "./ProductCard";
import { cn } from "@/utils/cn";

export default function ProductGrid({ title = "Our Products", products = [] }) {
  return (
    <section className="pb-[56px] md:pb-[70px]">
      <Container size="products">
        {title && (
          <h2 className={`text-center ${textStyles.sectionTitle}`}>{title}</h2>
        )}

        <div className={cn(layoutStyles.productGrid, title ? "mt-8" : "mt-0")}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {title && (
          <div className="mt-8 flex justify-center">
            <Button href="/shop" variant="outline" size="showMore">
              Show More
            </Button>
          </div>
        )}
      </Container>
    </section>
  );
}
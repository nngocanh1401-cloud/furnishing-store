import { notFound } from "next/navigation";

import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/common/FeatureSection";
import ProductDetail from "@/components/product/ProductDetail";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import productCatalog from "@/data/productCatalog.json";

const products = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

/*
 * ProductDetail và ProductCard hiện vẫn quen đọc:
 * product.price, product.oldPrice và product.image.
 *
 * Vì vậy ta chuyển dữ liệu mới về cấu trúc tương thích.
 */
function normalizeProduct(product) {
  return {
    ...product,
    price: product.priceDisplay || product.price || "",
    oldPrice: product.oldPriceDisplay || "",
    image:
      product.images?.thumbnail ||
      product.image ||
      "/images/furniro-hero.png",
  };
}

/*
 * Tạo sẵn:
 * /product/1
 * /product/2
 * ...
 * /product/12
 */
export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description: "The requested product could not be found.",
    };
  }

  return {
    title: product.name,
    description:
      product.description ||
      `View details for ${product.name} at Furniro.`,
  };
}

export default async function ProductPage({ params }) {
  const { id } = await params;

  const foundProduct = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!foundProduct) {
    notFound();
  }

  const product = normalizeProduct(foundProduct);

  /*
   * Tạm lấy 4 sản phẩm khác làm Related Products.
   */
  const relatedProducts = products
    .filter(
      (item) => String(item.id) !== String(foundProduct.id)
    )
    .slice(0, 4)
    .map(normalizeProduct);

  return (
    <>
      <section className="bg-[#F9F1E7] px-5 py-8">
        <Breadcrumb current={product.name} showShop />
      </section>

      <ProductDetail product={product} />

      <ProductTabs product={product} />

      <RelatedProducts products={relatedProducts} />

      <FeatureSection />
    </>
  );
}
import { notFound } from "next/navigation";

import Breadcrumb from "@/components/common/Breadcrumb";
import FeatureSection from "@/components/common/FeatureSection";
import ProductDetail from "@/components/product/ProductDetail";
import ProductTabs from "@/components/product/ProductTabs";
import RelatedProducts from "@/components/product/RelatedProducts";
import productCatalog from "@/data/productCatalog.json";

/*
 * productCatalog.json có dạng:
 *
 * {
 *   "schemaVersion": 2,
 *   "products": [...]
 * }
 *
 * Đoạn này cũng hỗ trợ trường hợp file JSON
 * được đổi thành một mảng trực tiếp trong tương lai.
 */
const products = Array.isArray(productCatalog)
  ? productCatalog
  : productCatalog.products ?? [];

/*
 * Một số component hiện đang đọc:
 *
 * product.price
 * product.oldPrice
 * product.image
 *
 * Trong productCatalog.json lại có thêm:
 *
 * priceDisplay
 * oldPriceDisplay
 *
 * Vì vậy cần chuẩn hóa dữ liệu trước khi truyền xuống component.
 */
function normalizeProduct(product) {
  return {
    ...product,

    price:
      product.priceDisplay ||
      product.price ||
      "",

    oldPrice:
      product.oldPriceDisplay ||
      product.oldPrice ||
      "",

    image:
      product.images?.thumbnail ||
      product.image ||
      "/images/furniro-hero.png",

    gallery:
      Array.isArray(product.gallery) &&
      product.gallery.length > 0
        ? product.gallery
        : [
            product.image ||
              "/images/furniro-hero.png",
          ],
  };
}

/*
 * Tạo sẵn các route:
 *
 * /product/1
 * /product/2
 * /product/3
 * ...
 */
export function generateStaticParams() {
  return products.map((product) => ({
    id: String(product.id),
  }));
}

/*
 * Tạo metadata riêng cho từng sản phẩm.
 */
export async function generateMetadata({ params }) {
  const { id } = await params;

  const product = products.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return {
      title: "Product Not Found",
      description:
        "The requested product could not be found.",
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

  /*
   * Tìm sản phẩm có ID giống với ID trên URL.
   */
  const foundProduct = products.find(
    (item) => String(item.id) === String(id)
  );

  /*
   * Không tìm thấy sản phẩm thì hiển thị trang 404.
   */
  if (!foundProduct) {
    notFound();
  }

  const product = normalizeProduct(foundProduct);

  /*
   * Lấy 4 sản phẩm khác làm Related Products.
   */
  const relatedProducts = products
    .filter(
      (item) =>
        String(item.id) !==
        String(foundProduct.id)
    )
    .slice(0, 4)
    .map(normalizeProduct);

  return (
    <>
      <section className="bg-[#F9F1E7] px-5 py-8">
        <Breadcrumb
          current={product.name}
          showShop
        />
      </section>

      <ProductDetail product={product} />

      <ProductTabs product={product} />

      <RelatedProducts
        products={relatedProducts}
      />

      <FeatureSection />
    </>
  );
}
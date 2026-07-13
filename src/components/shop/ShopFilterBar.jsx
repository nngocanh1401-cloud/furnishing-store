import { SlidersHorizontal } from "lucide-react";
import Container from "@/components/common/Container";
import { shopStyles } from "@/styles/styles";

export default function ShopFilterBar() {
  return (
    <section className={shopStyles.filterBar}>
      <Container size="products" className={shopStyles.filterContent}>
        <div className={shopStyles.filterLeft}>
          <button className={shopStyles.filterButton}>
            <SlidersHorizontal size={20} />
            Filter
          </button>

          <span className={shopStyles.divider}></span>

          <p className="text-[16px] text-black">
            Showing 1–16 of 32 results
          </p>
        </div>

        <div className={shopStyles.filterRight}>
          <label className={shopStyles.filterLabel}>Show</label>

          <input
            type="number"
            defaultValue="16"
            className={shopStyles.numberInput}
          />

          <label className={shopStyles.filterLabel}>Sort by</label>

          <select className={shopStyles.select}>
            <option>Default</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
          </select>
        </div>
      </Container>
    </section>
  );
}
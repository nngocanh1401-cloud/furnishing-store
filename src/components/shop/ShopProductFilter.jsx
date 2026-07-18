"use client";

import { useMemo, useState } from "react";

import ProductGrid from "@/components/common/ProductGrid";

const ALL_ROOMS = "All Rooms";

const formatIDR = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR",
  maximumFractionDigits: 0,
});

function getFilterPrice(product) {
  return Number(
    product.filterPriceIDR ??
      product.price ??
      0
  );
}

function getProductRooms(product) {
  if (Array.isArray(product.rooms)) {
    return product.rooms;
  }

  if (product.room) {
    return [product.room];
  }

  return [];
}

function FilterIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 7H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <path
        d="M4 17H20"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      <circle
        cx="9"
        cy="7"
        r="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.8"
      />

      <circle
        cx="15"
        cy="17"
        r="2"
        fill="white"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function ShopProductFilter({
  products = [],
}) {
  const highestCatalogPrice = useMemo(() => {
    const prices = products.map(
      getFilterPrice
    );

    return Math.max(...prices, 0);
  }, [products]);

  const roomOptions = useMemo(() => {
    const rooms = products.flatMap(
      getProductRooms
    );

    return [
      ALL_ROOMS,
      ...Array.from(new Set(rooms)),
    ];
  }, [products]);

  const [selectedRoom, setSelectedRoom] =
    useState(ALL_ROOMS);

  const [minimumPrice, setMinimumPrice] =
    useState(0);

  const [maximumPrice, setMaximumPrice] =
    useState(highestCatalogPrice);

  const [sortOption, setSortOption] =
    useState("default");

  const [isFilterOpen, setIsFilterOpen] =
    useState(false);

  const filteredProducts = useMemo(() => {
    const result = products.filter(
      (product) => {
        const productPrice =
          getFilterPrice(product);

        const productRooms =
          getProductRooms(product);

        const matchesRoom =
          selectedRoom === ALL_ROOMS ||
          productRooms.includes(
            selectedRoom
          );

        const matchesPrice =
          productPrice >= minimumPrice &&
          productPrice <= maximumPrice;

        return (
          matchesRoom && matchesPrice
        );
      }
    );

    if (sortOption === "price-low") {
      return [...result].sort(
        (firstProduct, secondProduct) =>
          getFilterPrice(firstProduct) -
          getFilterPrice(secondProduct)
      );
    }

    if (sortOption === "price-high") {
      return [...result].sort(
        (firstProduct, secondProduct) =>
          getFilterPrice(secondProduct) -
          getFilterPrice(firstProduct)
      );
    }

    if (sortOption === "rating") {
      return [...result].sort(
        (firstProduct, secondProduct) =>
          Number(secondProduct.rating || 0) -
          Number(firstProduct.rating || 0)
      );
    }

    return result;
  }, [
    products,
    selectedRoom,
    minimumPrice,
    maximumPrice,
    sortOption,
  ]);

  function handleMinimumPriceChange(event) {
    const nextMinimumPrice = Number(
      event.target.value
    );

    setMinimumPrice(
      Math.min(
        nextMinimumPrice,
        maximumPrice
      )
    );
  }

  function handleMaximumPriceChange(event) {
    const nextMaximumPrice = Number(
      event.target.value
    );

    setMaximumPrice(
      Math.max(
        nextMaximumPrice,
        minimumPrice
      )
    );
  }

  function handleResetFilter() {
    setSelectedRoom(ALL_ROOMS);
    setMinimumPrice(0);
    setMaximumPrice(
      highestCatalogPrice
    );
    setSortOption("default");
  }

  const resultText =
    filteredProducts.length > 0
      ? `Showing 1–${filteredProducts.length} of ${products.length} results`
      : `Showing 0 of ${products.length} results`;

  return (
    <section className="font-['Poppins']">
      <div className="relative border-y border-[#F1E9DF] bg-[#F9F1E7]">
        <div className="mx-auto flex min-h-[100px] max-w-[1240px] flex-col gap-5 px-5 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-5">
            <button
              type="button"
              onClick={() =>
                setIsFilterOpen(
                  (previousState) =>
                    !previousState
                )
              }
              className="flex items-center gap-3 text-[20px] text-black transition hover:text-[#B88E2F]"
              aria-expanded={isFilterOpen}
            >
              <FilterIcon />

              <span>Filter</span>
            </button>

            <span className="hidden h-[37px] w-px bg-[#9F9F9F] sm:block" />

            <p className="text-[16px] text-black">
              {resultText}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <label
              htmlFor="product-sort"
              className="text-[18px] text-black"
            >
              Sort By
            </label>

            <select
              id="product-sort"
              value={sortOption}
              onChange={(event) =>
                setSortOption(
                  event.target.value
                )
              }
              className="h-[55px] min-w-[190px] border-none bg-white px-5 text-[16px] text-[#9F9F9F] outline-none"
            >
              <option value="default">
                Default
              </option>

              <option value="price-low">
                Price: Low to High
              </option>

              <option value="price-high">
                Price: High to Low
              </option>

              <option value="rating">
                Highest Rating
              </option>
            </select>
          </div>
        </div>

        {isFilterOpen && (
          <div className="absolute left-5 top-[92px] z-40 w-[calc(100%-40px)] max-w-[350px] rounded-[8px] border border-[#E6E6E6] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.16)] lg:left-[max(20px,calc((100%-1240px)/2))]">
            <div>
              <h2 className="text-[20px] font-semibold text-[#333333]">
                Room
              </h2>

              <div className="mt-4 flex flex-col">
                {roomOptions.map(
                  (room) => {
                    const isSelected =
                      selectedRoom === room;

                    return (
                      <button
                        key={room}
                        type="button"
                        onClick={() =>
                          setSelectedRoom(
                            room
                          )
                        }
                        className={`border-b border-[#E5E5E5] py-3 text-left text-[16px] transition ${
                          isSelected
                            ? "font-semibold text-[#B88E2F]"
                            : "text-[#333333] hover:text-[#B88E2F]"
                        }`}
                      >
                        {room}
                      </button>
                    );
                  }
                )}
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-[20px] font-semibold text-[#333333]">
                Price
              </h2>

              <p className="mt-1 text-[12px] text-[#9F9F9F]">
                Giá quy đổi IDR dùng cho
                bộ lọc demo
              </p>

              <div className="mt-5">
                <div className="flex items-center justify-between gap-3 text-[13px] text-[#555555]">
                  <span>
                    {formatIDR.format(
                      minimumPrice
                    )}
                  </span>

                  <span>
                    {formatIDR.format(
                      maximumPrice
                    )}
                  </span>
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="minimum-price"
                    className="mb-2 block text-[14px] text-[#555555]"
                  >
                    Minimum price
                  </label>

                  <input
                    id="minimum-price"
                    type="range"
                    min="0"
                    max={highestCatalogPrice}
                    step="50000"
                    value={minimumPrice}
                    onChange={
                      handleMinimumPriceChange
                    }
                    className="w-full accent-[#B88E2F]"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="maximum-price"
                    className="mb-2 block text-[14px] text-[#555555]"
                  >
                    Maximum price
                  </label>

                  <input
                    id="maximum-price"
                    type="range"
                    min="0"
                    max={highestCatalogPrice}
                    step="50000"
                    value={maximumPrice}
                    onChange={
                      handleMaximumPriceChange
                    }
                    className="w-full accent-[#B88E2F]"
                  />
                </div>
              </div>
            </div>

            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={handleResetFilter}
                className="h-[44px] flex-1 border border-[#B88E2F] text-[14px] font-semibold text-[#B88E2F] transition hover:bg-[#F9F1E7]"
              >
                Reset
              </button>

              <button
                type="button"
                onClick={() =>
                  setIsFilterOpen(false)
                }
                className="h-[44px] flex-1 bg-[#B88E2F] text-[14px] font-semibold text-white transition hover:bg-[#9F7928]"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="py-[63px]">
        {filteredProducts.length > 0 ? (
          <ProductGrid
            title=""
            products={filteredProducts}
            showMore={false}
          />
        ) : (
          <div className="mx-auto max-w-[1240px] px-5 py-20 text-center">
            <h2 className="text-[28px] font-semibold text-[#333333]">
              No products found
            </h2>

            <p className="mt-3 text-[16px] text-[#9F9F9F]">
              Không có sản phẩm phù hợp
              với phòng và khoảng giá bạn
              đã chọn.
            </p>

            <button
              type="button"
              onClick={handleResetFilter}
              className="mt-7 bg-[#B88E2F] px-8 py-3 font-semibold text-white transition hover:bg-[#9F7928]"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
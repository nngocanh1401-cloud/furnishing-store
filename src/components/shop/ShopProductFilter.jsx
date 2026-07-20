"use client";

import {
  useMemo,
  useState,
} from "react";

import ProductGrid from "@/components/common/ProductGrid";
import Pagination from "@/components/shop/Pagination";

/*
 * Mỗi trang Shop hiển thị tối đa
 * 16 sản phẩm.
 */
const PRODUCTS_PER_PAGE = 16;

const ALL_ROOMS = "All Rooms";

const formatIDR = new Intl.NumberFormat(
  "id-ID",
  {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }
);

/* =====================================
   HÀM HỖ TRỢ LẤY GIÁ SẢN PHẨM
===================================== */

function getFilterPrice(product) {
  return Number(
    product.filterPriceIDR ??
      product.price ??
      0
  );
}

/* =====================================
   HÀM HỖ TRỢ LẤY DANH SÁCH PHÒNG
===================================== */

function getProductRooms(product) {
  if (Array.isArray(product.rooms)) {
    return product.rooms;
  }

  if (product.room) {
    return [product.room];
  }

  return [];
}

/* =====================================
   ICON FILTER
===================================== */

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

/* =====================================
   SHOP PRODUCT FILTER
===================================== */

export default function ShopProductFilter({
  products = [],
}) {
  /* ===================================
     TÍNH GIÁ CAO NHẤT
  =================================== */

  const highestCatalogPrice = useMemo(
    () => {
      const prices = products.map(
        getFilterPrice
      );

      return Math.max(...prices, 0);
    },
    [products]
  );

  /* ===================================
     TẠO DANH SÁCH PHÒNG
  =================================== */

  const roomOptions = useMemo(() => {
    const rooms = products.flatMap(
      getProductRooms
    );

    return [
      ALL_ROOMS,
      ...Array.from(new Set(rooms)),
    ];
  }, [products]);

  /* ===================================
     STATE FILTER
  =================================== */

  const [
    selectedRoom,
    setSelectedRoom,
  ] = useState(ALL_ROOMS);

  const [
    minimumPrice,
    setMinimumPrice,
  ] = useState(0);

  const [
    maximumPrice,
    setMaximumPrice,
  ] = useState(highestCatalogPrice);

  const [
    sortOption,
    setSortOption,
  ] = useState("default");

  const [
    isFilterOpen,
    setIsFilterOpen,
  ] = useState(false);

  /* ===================================
     STATE PHÂN TRANG
  =================================== */

  const [
    currentPage,
    setCurrentPage,
  ] = useState(1);

  /* ===================================
     LỌC VÀ SẮP XẾP SẢN PHẨM
  =================================== */

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
        (
          firstProduct,
          secondProduct
        ) =>
          getFilterPrice(
            firstProduct
          ) -
          getFilterPrice(
            secondProduct
          )
      );
    }

    if (sortOption === "price-high") {
      return [...result].sort(
        (
          firstProduct,
          secondProduct
        ) =>
          getFilterPrice(
            secondProduct
          ) -
          getFilterPrice(
            firstProduct
          )
      );
    }

    if (sortOption === "rating") {
      return [...result].sort(
        (
          firstProduct,
          secondProduct
        ) =>
          Number(
            secondProduct.rating || 0
          ) -
          Number(
            firstProduct.rating || 0
          )
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

  /* ===================================
     TÍNH TỔNG SỐ TRANG
  =================================== */

  const totalPages = Math.ceil(
    filteredProducts.length /
      PRODUCTS_PER_PAGE
  );

  /*
   * Đảm bảo currentPage không vượt
   * quá tổng số trang hiện tại.
   */
  const safeCurrentPage =
    totalPages > 0
      ? Math.min(
          currentPage,
          totalPages
        )
      : 1;

  /* ===================================
     LẤY 16 SẢN PHẨM CỦA TRANG HIỆN TẠI
  =================================== */

  const paginatedProducts = useMemo(
    () => {
      const firstProductIndex =
        (safeCurrentPage - 1) *
        PRODUCTS_PER_PAGE;

      const lastProductIndex =
        firstProductIndex +
        PRODUCTS_PER_PAGE;

      return filteredProducts.slice(
        firstProductIndex,
        lastProductIndex
      );
    },
    [
      filteredProducts,
      safeCurrentPage,
    ]
  );

  /* ===================================
     TÍNH SỐ THỨ TỰ ĐANG HIỂN THỊ
  =================================== */

  const firstVisibleResult =
    filteredProducts.length > 0
      ? (safeCurrentPage - 1) *
          PRODUCTS_PER_PAGE +
        1
      : 0;

  const lastVisibleResult =
    filteredProducts.length > 0
      ? Math.min(
          safeCurrentPage *
            PRODUCTS_PER_PAGE,
          filteredProducts.length
        )
      : 0;

  const resultText =
    filteredProducts.length > 0
      ? `Showing ${firstVisibleResult}–${lastVisibleResult} of ${filteredProducts.length} results`
      : "Showing 0 results";

  /* ===================================
     XỬ LÝ THAY ĐỔI PHÒNG
  =================================== */

  function handleRoomChange(room) {
    setSelectedRoom(room);

    /*
     * Khi đổi bộ lọc phải quay
     * lại trang đầu tiên.
     */
    setCurrentPage(1);
  }

  /* ===================================
     XỬ LÝ GIÁ THẤP NHẤT
  =================================== */

  function handleMinimumPriceChange(
    event
  ) {
    const nextMinimumPrice = Number(
      event.target.value
    );

    setMinimumPrice(
      Math.min(
        nextMinimumPrice,
        maximumPrice
      )
    );

    setCurrentPage(1);
  }

  /* ===================================
     XỬ LÝ GIÁ CAO NHẤT
  =================================== */

  function handleMaximumPriceChange(
    event
  ) {
    const nextMaximumPrice = Number(
      event.target.value
    );

    setMaximumPrice(
      Math.max(
        nextMaximumPrice,
        minimumPrice
      )
    );

    setCurrentPage(1);
  }

  /* ===================================
     XỬ LÝ SẮP XẾP
  =================================== */

  function handleSortChange(event) {
    setSortOption(
      event.target.value
    );

    /*
     * Khi đổi cách sắp xếp, quay
     * về trang 1 để tránh trường hợp
     * đang ở trang cuối.
     */
    setCurrentPage(1);
  }

  /* ===================================
     RESET BỘ LỌC
  =================================== */

  function handleResetFilter() {
    setSelectedRoom(ALL_ROOMS);
    setMinimumPrice(0);
    setMaximumPrice(
      highestCatalogPrice
    );
    setSortOption("default");
    setCurrentPage(1);
  }

  /* ===================================
     CHUYỂN TRANG
  =================================== */

  function handlePageChange(nextPage) {
    const isInvalidPage =
      nextPage < 1 ||
      nextPage > totalPages ||
      nextPage === safeCurrentPage;

    if (isInvalidPage) {
      return;
    }

    setCurrentPage(nextPage);

    /*
     * Sau khi đổi trang, cuộn lên đầu
     * danh sách sản phẩm.
     */
    window.requestAnimationFrame(() => {
      const productsSection =
        document.getElementById(
          "shop-products"
        );

      productsSection?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  }

  return (
    <section className="font-['Poppins']">
      {/* Thanh Filter */}
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
              aria-controls="shop-filter-panel"
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
              onChange={handleSortChange}
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

        {/* Bảng Filter */}
        {isFilterOpen && (
          <div
            id="shop-filter-panel"
            className="absolute left-5 top-[92px] z-40 w-[calc(100%-40px)] max-w-[350px] rounded-[8px] border border-[#E6E6E6] bg-white p-6 shadow-[0_12px_35px_rgba(0,0,0,0.16)] lg:left-[max(20px,calc((100%-1240px)/2))]"
          >
            {/* Filter theo phòng */}
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
                          handleRoomChange(
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

            {/* Filter theo giá */}
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
                    max={
                      highestCatalogPrice
                    }
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
                    max={
                      highestCatalogPrice
                    }
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

            {/* Nút Filter */}
            <div className="mt-7 flex gap-3">
              <button
                type="button"
                onClick={
                  handleResetFilter
                }
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

      {/* Danh sách sản phẩm */}
      <div
        id="shop-products"
        className="scroll-mt-[100px] py-[63px]"
      >
        {filteredProducts.length > 0 ? (
          <>
            {/*
             * Chỉ truyền tối đa 16 sản phẩm
             * của trang hiện tại vào ProductGrid.
             */}
            <ProductGrid
              title=""
              products={
                paginatedProducts
              }
              showMore={false}
            />

            <Pagination
              currentPage={
                safeCurrentPage
              }
              totalPages={totalPages}
              onPageChange={
                handlePageChange
              }
            />
          </>
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
              onClick={
                handleResetFilter
              }
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
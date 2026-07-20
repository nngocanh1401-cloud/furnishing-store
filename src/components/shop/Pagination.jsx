"use client";

import { paginationStyles } from "@/styles/styles";
import { cn } from "@/utils/cn";

export default function Pagination({
  currentPage = 1,
  totalPages = 1,
  onPageChange,
}) {
  /*
   * Không có sản phẩm thì không hiển thị
   * khu vực phân trang.
   */
  if (totalPages < 1) {
    return null;
  }

  /*
   * Đảm bảo trang hiện tại luôn nằm
   * trong khoảng hợp lệ.
   */
  const safeCurrentPage = Math.min(
    Math.max(currentPage, 1),
    totalPages
  );

  /*
   * Ví dụ:
   *
   * totalPages = 1
   * → [1]
   *
   * totalPages = 3
   * → [1, 2, 3]
   */
  const pageNumbers = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  function handlePageChange(nextPage) {
    const isInvalidPage =
      nextPage < 1 ||
      nextPage > totalPages ||
      nextPage === safeCurrentPage;

    if (isInvalidPage) {
      return;
    }

    onPageChange?.(nextPage);
  }

  return (
    <nav
      aria-label="Shop pagination"
      className={paginationStyles.wrapper}
    >
      <div className={paginationStyles.list}>
        {/*
         * Chỉ hiển thị Previous từ trang 2.
         *
         * Trang 1 sẽ không có Previous.
         */}
        {safeCurrentPage > 1 && (
          <button
            type="button"
            onClick={() =>
              handlePageChange(
                safeCurrentPage - 1
              )
            }
            className={cn(
              paginationStyles.buttonBase,
              paginationStyles.navigation
            )}
            aria-label="Go to previous page"
          >
            Previous
          </button>
        )}

        {pageNumbers.map((pageNumber) => {
          const isActive =
            pageNumber === safeCurrentPage;

          return (
            <button
              key={pageNumber}
              type="button"
              onClick={() =>
                handlePageChange(pageNumber)
              }
              className={cn(
                paginationStyles.buttonBase,
                isActive
                  ? paginationStyles.active
                  : paginationStyles.inactive
              )}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={
                isActive ? "page" : undefined
              }
            >
              {pageNumber}
            </button>
          );
        })}

        {/*
         * Chỉ hiện Next khi phía sau
         * vẫn còn trang.
         *
         * Nếu chỉ có một trang:
         * 1 < 1 là false
         * → Next không được render.
         */}
        {safeCurrentPage < totalPages && (
          <button
            type="button"
            onClick={() =>
              handlePageChange(
                safeCurrentPage + 1
              )
            }
            className={cn(
              paginationStyles.buttonBase,
              paginationStyles.navigation
            )}
            aria-label="Go to next page"
          >
            Next
          </button>
        )}
      </div>
    </nav>
  );
}
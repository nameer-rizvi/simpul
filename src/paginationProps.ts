interface PaginationProps {
  pageSize: number;
  page: number;
  pages: number;
  hasNextPage: boolean;
  nextPage: number | null;
  hasPrevPage: boolean;
  prevPage: number | null;
}

function paginationProps(
  pageSize: number,
  currentPage: number,
  totalItems: number,
): PaginationProps {
  // Handle edge cases.

  if (pageSize < 1) pageSize = 1;

  if (currentPage < 1) currentPage = 1;

  const pages = Math.ceil(totalItems / pageSize);

  // Ensure the current page doesn't exceed total pages.

  if (currentPage > pages) currentPage = pages;

  const hasNextPage = currentPage < pages;

  const hasPrevPage = currentPage > 1;

  const nextPage = hasNextPage ? currentPage + 1 : null;

  const prevPage = hasPrevPage ? currentPage - 1 : null;

  return {
    pageSize: pageSize,
    page: currentPage,
    pages: pages,
    hasNextPage: hasNextPage,
    nextPage: nextPage,
    hasPrevPage: hasPrevPage,
    prevPage: prevPage,
  };
}

export default paginationProps;

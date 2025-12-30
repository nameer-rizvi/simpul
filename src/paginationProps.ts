export interface PaginationProps {
  pageSize: number;
  page: number;
  pages: number;
  hasNextPage: boolean;
  nextPage: number | null;
  hasPrevPage: boolean;
  prevPage: number | null;
  cursor?: string | null;
  prevCursor?: string | null;
}

function paginationProps(
  pageSize: number,
  currentPage: number,
  totalItems: number,
  cursors?: (string | null)[],
): PaginationProps {
  const size = Math.max(1, Math.floor(pageSize));

  const pages = Math.max(1, Math.ceil(totalItems / size));

  const page = Math.min(Math.max(1, Math.floor(currentPage)), pages);

  const hasNextPage = page < pages;

  const hasPrevPage = page > 1;

  let cursor: string | null = null;

  let prevCursor: string | null = null;

  if (cursors?.length) {
    const startIdx = (page - 1) * size;

    const endIdx = startIdx + size;

    if (hasNextPage && endIdx - 1 < cursors.length) {
      cursor = cursors[endIdx - 1];
    }

    if (hasPrevPage && startIdx - 1 >= 0) {
      prevCursor = cursors[startIdx - 1];
    }
  }

  return {
    pageSize: size,
    page,
    pages,
    hasNextPage,
    nextPage: hasNextPage ? page + 1 : null,
    hasPrevPage,
    prevPage: hasPrevPage ? page - 1 : null,
    cursor,
    prevCursor,
  };
}

export default paginationProps;

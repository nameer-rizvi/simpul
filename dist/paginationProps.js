"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paginationProps(pageSize, currentPage, totalItems) {
    // Handle edge cases.
    if (pageSize < 1)
        pageSize = 1;
    if (currentPage < 1)
        currentPage = 1;
    const pages = Math.ceil(totalItems / pageSize);
    // Ensure the current page doesn't exceed total pages.
    if (currentPage > pages)
        currentPage = pages;
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
exports.default = paginationProps;

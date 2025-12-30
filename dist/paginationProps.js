"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function paginationProps(pageSize, currentPage, totalItems, cursors) {
    const size = Math.max(1, Math.floor(pageSize));
    const pages = Math.max(1, Math.ceil(totalItems / size));
    const page = Math.min(Math.max(1, Math.floor(currentPage)), pages);
    const hasNextPage = page < pages;
    const hasPrevPage = page > 1;
    let cursor = null;
    let prevCursor = null;
    if (cursors === null || cursors === void 0 ? void 0 : cursors.length) {
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
exports.default = paginationProps;

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
declare function paginationProps(pageSize: number, currentPage: number, totalItems: number, cursors?: (string | null)[]): PaginationProps;
export default paginationProps;

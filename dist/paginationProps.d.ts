interface PaginationProps {
    pageSize: number;
    page: number;
    pages: number;
    hasNextPage: boolean;
    nextPage: number | null;
    hasPrevPage: boolean;
    prevPage: number | null;
}
declare function paginationProps(pageSize: number, currentPage: number, totalItems: number): PaginationProps;
export default paginationProps;

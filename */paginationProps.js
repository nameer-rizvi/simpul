function paginationProps(PAGE_SIZE, PAGE, total) {
  const pagination = {};

  pagination.pageSize = PAGE_SIZE;

  pagination.page = PAGE;

  pagination.pages = Math.ceil(total / PAGE_SIZE);

  pagination.hasNextPage = PAGE < pagination.pages;

  pagination.nextPage = pagination.hasNextPage && PAGE + 1;

  pagination.hasPrevPage = PAGE > 1;

  pagination.prevPage = pagination.hasPrevPage && PAGE - 1;

  // cursor... next, prev, etc.
  // url params... next, prev, etc.
  // see showlist live for example.

  return pagination;
}

module.exports = paginationProps;

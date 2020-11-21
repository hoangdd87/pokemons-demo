import { useMemo, useState } from 'react';
import { FIRST_PAGE, PER_PAGE_OPTIONS } from './usePagePaginationConsts';

const usePagePagination = totalItems => {
  const [page, setPage] = useState(FIRST_PAGE);
  const [perPage, setPerPage] = useState(PER_PAGE_OPTIONS[0]);
  const totalPages = useMemo(()=> Math.ceil(totalItems / perPage), [totalItems, perPage]);

  const gotoPrevPage = () => setPage(page => page === FIRST_PAGE ? page : page - 1);

  const gotoNextPage = () => setPage(page =>page === totalPages ? page : page + 1);

  const changePerPage = perPage => {
    setPerPage(perPage);
    setPage(FIRST_PAGE);
  };

  const gotoLast = () => setPage(totalPages);

  const gotoFirst = () => setPage(FIRST_PAGE);

  const changePage = newPage => setPage(newPage);

  return {
    page,
    perPage,
    gotoPrevPage,
    gotoNextPage,
    totalPages,
    changePerPage,
    changePage,
    gotoLast,
    gotoFirst,
  };

};

export default usePagePagination;

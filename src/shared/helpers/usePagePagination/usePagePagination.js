import { useMemo, useState } from 'react';
import { FIRST_PAGE, PER_PAGE_OPTIONS } from './usePagePaginationConsts';

const usePagePagination = totalItems => {
  const [page, setPage] = useState(FIRST_PAGE);
  const [perPage, setPerPage] = useState(PER_PAGE_OPTIONS[0]);
  const totalPages = useMemo(()=> Math.ceil(totalItems / perPage), [totalItems, perPage]);

  const changePerPage = perPage => {
    setPerPage(perPage);
    setPage(FIRST_PAGE);
  };

  const changePage = newPage => setPage(newPage);

  return {
    page,
    perPage,
    totalPages,
    changePerPage,
    changePage,
  };

};

export default usePagePagination;

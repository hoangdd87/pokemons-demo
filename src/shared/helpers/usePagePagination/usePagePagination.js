import { useMemo, useState } from 'react';
import { FIRST_PAGE, PER_PAGE_OPTIONS } from './usePagePaginationConsts';

const usePagePagination = totalItems => {
  const [page, setPage] = useState(FIRST_PAGE);
  const [perPage, setPerPage] = useState(PER_PAGE_OPTIONS[0]);
  const totalPages = useMemo(()=> Math.ceil(totalItems / perPage), [totalItems, perPage]);

  const handlePrevPage = () => setPage(page => page === FIRST_PAGE ? page : page - 1);

  const handleNextPage = () => setPage(page =>page === totalPages ? page : page + 1);

  const handlePerPageChanged = perPage => {
    setPerPage(perPage);
    setPage(FIRST_PAGE);
  };

  const handleGotoLast = () => setPage(totalPages);

  const handleGotoFirst = () => setPage(FIRST_PAGE);

  const handleDirectPageChange = newPage => setPage(newPage);

  return {
    page,
    perPage,
    handlePrevPage,
    handleNextPage,
    totalPages,
    handlePerPageChanged,
    handleDirectPageChange,
    handleGotoLast,
    handleGotoFirst,
  };

};

export default usePagePagination;

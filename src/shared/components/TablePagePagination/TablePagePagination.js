import React from 'react';
import {PER_PAGE_OPTIONS} from '../../helpers/usePagePagination/usePagePaginationConsts';
import './TablePagePagination.css';
import { TablePagePaginationPropTypes } from './tablePagePaginationHelpers';

const TablePagePagination = ({
    page,
    perPage,
    handlePrevPage,
    handleNextPage,
    handlePerPageChanged,
    handleDirectPageChange,
    handleGotoLast,
    handleGotoFirst,
    totalPages
  }) => {

  const pages = Array.from(Array(totalPages).keys())
  return (
    <div>
      <div>
        <button onClick={handleGotoFirst}>
          {`<<`}
        </button>
        <button onClick={handlePrevPage}>
          {`<`}
        </button>
        {
          pages.map(pageIndex => (
            <button
              key={pageIndex}
              className={page === pageIndex + 1 ? 'page_active' : ''}
              onClick={() => handleDirectPageChange(pageIndex + 1)}
            >
              {pageIndex + 1}
            </button>
          ))
        }
        <button onClick={handleNextPage}>
          {`>`}
        </button>
        <button onClick={handleGotoLast}>
          {`>>`}
        </button>
      </div>
      <select
        value={perPage}
        onChange={evt => {
          handlePerPageChanged(parseInt(evt.target.value))
        }}
      >
        {PER_PAGE_OPTIONS.map(perPageOption => (
          <option
            value={perPageOption}
            key={perPageOption}
          >
            {perPageOption}
          </option>
        ))}
      </select>
    </div>
  );
};

TablePagePagination.propTypes = TablePagePaginationPropTypes;

export default TablePagePagination;

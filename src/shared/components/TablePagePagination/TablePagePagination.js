import React from 'react';
import {FIRST_PAGE, PER_PAGE_OPTIONS} from '../../helpers/usePagePagination/usePagePaginationConsts';
import './TablePagePagination.css';
import { TablePagePaginationPropTypes } from './tablePagePaginationHelpers';

const TablePagePagination = ({
    page,
    perPage,
    totalPages,
    onPageChange,
    onPerPageChange
  }) => {

  const pages = Array.from(Array(totalPages).keys())
  return (
    <div>
      <div>
        <button onClick={ () => onPageChange(FIRST_PAGE) }>
          {`<<`}
        </button>
        <button onClick={ () => onPageChange(page - 1) }>
          {`<`}
        </button>
        {
          pages.map(pageIndex => (
            <button
              key={pageIndex}
              className={page === pageIndex + 1 ? 'page_active' : ''}
              onClick={ () => onPageChange(pageIndex + 1) }
            >
              {pageIndex + 1}
            </button>
          ))
        }
        <button onClick={ () => onPageChange(page + 1) }>
          {`>`}
        </button>
        <button onClick={() => onPageChange(totalPages) }>
          {`>>`}
        </button>
      </div>
      <select
        value={ perPage }
        onChange={evt => {
          onPerPageChange(parseInt(evt.target.value))
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

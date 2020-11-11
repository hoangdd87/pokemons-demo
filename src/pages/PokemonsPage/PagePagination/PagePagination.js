import {PER_PAGE_OPTIONS} from "../../../shared/helpers/useTablePagination/tablePaginationConsts";

const PagePagination = ({currentPage, perPage, pageCount}) => {
    const pages = Array.from(Array(pageCount).keys())
    return (
        <div>
            <div>
                <button>
                    {`<<`}
                </button>
                <button>
                    {`<`}
                </button>
                {pages.map(pageIndex => (
                    <button key={pageIndex}>{pageIndex + 1}</button>
                ))}
                <button>
                    {`>`}
                </button>
                <button>
                    {`>>`}
                </button>
            </div>
            <select value={ perPage }>
                { PER_PAGE_OPTIONS.map(option => (
                    <option
                        value={ option }
                    >
                        { option }
                    </option>
                )) }
            </select>
        </div>
    );
};

export default PagePagination;
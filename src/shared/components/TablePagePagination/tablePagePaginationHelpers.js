import PropTypes from "prop-types";

export const TablePagePaginationPropTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  onPerPageChange: PropTypes.func.isRequired
}
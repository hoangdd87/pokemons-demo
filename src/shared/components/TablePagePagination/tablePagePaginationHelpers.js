import PropTypes from "prop-types";

export const TablePagePaginationPropTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.number.isRequired,
  handlePrevPage: PropTypes.func.isRequired,
  handleNextPage: PropTypes.func.isRequired,
  handlePerPageChanged: PropTypes.func.isRequired,
  handleDirectPageChange: PropTypes.func.isRequired,
  handleGotoLast: PropTypes.func.isRequired,
  handleGotoFirst: PropTypes.func.isRequired,
  totalPages: PropTypes.number.isRequired
}
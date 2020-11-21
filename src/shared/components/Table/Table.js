import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';

const Table = ({ rows, columns, isLoading }) => {
  return (
    <div className="table-container">
      <table>
        <thead>
        <tr>
          {
            columns.map(column => (
              <th key={ column.id }>
                { column.title }
              </th>
            ))
          }
        </tr>
        </thead>
        <tbody>
        { rows.map(row => (
          <tr key={ row.id }>
            { columns.map(column => (
              <td key={ column.id }>
                { column.render(row) }
              </td>
            )) }
          </tr>
        )) }
        </tbody>
      </table>
      <div className={ `loading-modal ${isLoading ? 'loading-modal__show': '' }` }>
        { isLoading ? (<h1>Loading</h1>) : '' }
      </div>
    </div>
  );
};

Table.propTypes = {
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
  })),
  columns: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    render: PropTypes.func.isRequired
  })),
  isLoading: PropTypes.bool
}

Table.defaultProps = {
  isLoading: false
}

export default React.memo(Table);

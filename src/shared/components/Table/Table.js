import React from 'react';
import './Table.css';

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

export default Table;

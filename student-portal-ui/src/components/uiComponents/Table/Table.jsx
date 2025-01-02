import React from "react";
import Button from "../Button/Button";
import "./Table.css";

const Table = ({ columns, data, updateData, deleteData }) => {
  return (
    <div className="table-container">
      <table className="data-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.header}</th>
            ))}
            <th>Operation</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((row, rowIndex) => (
              <>
                <tr key={rowIndex}>
                  {columns.map((column, colIndex) => (
                    <>
                      <td key={colIndex}>{row[column.key]}</td>
                    </>
                  ))}
                  <td>
                  <Button text="Update" onClick={() => updateData(row)} borderless={true}/>
                  <Button text="Delete" onClick={() => deleteData(row.id)} borderless={true}/>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td colSpan={columns.length+1} className="no-data">
                No data available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

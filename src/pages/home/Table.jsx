import React from "react";

function Table(props) {
  const { data, columns  } = props;
  // console.log(data,columns)
  return (
    <table className="tickets-table table table-borderless">
      <thead id="home-table-head">
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, rowIndex) => (
                   <tr key={rowIndex}>
                    
            {columns.map((column, colIndex) => (
              <td key={colIndex}>
              
                <div
                  className={columns
                    // item[column.field] === "Join"
                    //   ? "td-class"
                    //   : item[column.field] === "Not-Started"
                    //   ? "not-class"
                    //   : ""
                  }
                >
                  {item[column.field]}
                </div>
              </td>
            ))}
          </tr>
        ))}
        
      </tbody>
      <tfoot>
            <tr>
              <th colSpan={2} className="text-center small-font fw-lighter">
                showing entries from 1-50
              </th>
              <th colSpan={1}></th>
              <th colSpan={4} className="text-center medium-font">
                <button className="pegina-btn-clr p-2 m-1">Previous</button>
                <button className="pegina-btn-clr p-2 m-1">1</button>
                <button className="pegina-btn-clr p-2 m-1">2</button>
                <button className="pegina-btn-clr p-2 m-1">3</button>
                <button className="pegina-btn-clr p-2 m-1">4</button>
                <button className="pegina-btn-clr p-2 m-1">Next</button>
              </th>
            </tr>
          </tfoot>
    </table>
  );
}

export default Table;
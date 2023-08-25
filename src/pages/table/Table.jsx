function Table(props) {
  const { data, columns } = props;
  // console.log(data,columns)

  const getColor = (clr) => {
    switch (clr) {
      case "In-active":
        return "reject-button";
      case "Rejected":
        return "reject-button";
      case "Pending":
        return "pending-button";
      default:
        return "new-button";
    }
  };
  return (
    <div className="sidebar-bg w-100 home-border-radius">
      <table className="tickets-table table table-borderless">
        <thead className="th-color small-font">
          <tr className="small-font th-color">
            {columns.map((column, index) => (
              <th key={index} className="text-center small-font th-color">
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="td-color">
          {data.map((item, rowIndex) => (
            <tr key={rowIndex} className="small-font td-color text-center">
              {columns.map((column, colIndex) => {
                return (
                  <td key={colIndex} className="px-2 text-center">
                    <div
                      className={
                        column?.clr ? getColor(item[column.field]) : ""
                      }
                    >
                      {item[column.field]}
                    </div>
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <th
              colSpan={1}
              className=" pegina-btn-clr small-font font-weight-light"
            >
              showing entries from 1-50
            </th>
            <th colSpan={1}></th>
            <th colSpan={1}></th>
            <th colSpan={5} className="small-font">
              <button className="pegina-btn-clr px-1 m-1">Previous</button>
              <button className="pegina-btn-clr px-1 m-1">1</button>
              <button className="pegina-btn-clr px-1 m-1">2</button>
              <button className="pegina-btn-clr px-1 m-1">3</button>
              <button className="pegina-btn-clr px-1 m-1">4</button>
              <button className="pegina-btn-clr px-1 m-1">Next</button>
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default Table;

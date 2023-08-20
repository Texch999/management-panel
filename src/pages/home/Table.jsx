function Table(props) {
  const { data, columns } = props;
  // console.log(data,columns)

  const getColor = (clr) => {
    switch (clr) {
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
      <div className=" large-font font-weight-bold px-2 p-2 m-1 th-color">Tickets</div>
    <table className="tickets-table table table-borderless">
      <thead className="th-color medium-font">
        <tr className="medium-font th-color">
          {columns.map((column, index) => (
            <th key={index} className="text-center medium-font th-color">{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody className="td-color">
        {data.map((item, rowIndex) => (
          <tr key={rowIndex} className="medium-font td-color ">
            {columns.map((column, colIndex) => {
              if (column?.field === "status_icon")
                return (
                  <td className="text-center">
                    <i className="fa fa-light fa-eye"></i>
                  </td>
                );
              return (
                <td key={colIndex} className="px-2 text-center">
                  <div className={column?.clr ?  getColor(item[column.field]) : ""}>{item[column.field]}</div>
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <th colSpan={1} className=" pegina-btn-clr small-font font-weight-light">
            showing entries from 1-50
          </th>
          <th colSpan={1}></th>
          <th colSpan={1}></th>
          <th colSpan={5} className="medium-font">
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
    
    </div>
  );
}

export default Table;

import React from 'react'

function TotalPaidBalanceTable() {
    const totalboxes = [
        {
          header: "Total Amount",
          value: "10000",
        },
        {
          header: "Paid Amount",
          value: "10000",
        },
        {
          header: "Balance",
          value: "10000",
        },
        {
          header: "Send Reminder",
          value: "10000",
        },
      ];
  return (
    
        <div className="d-flex justify-content-center">
            <div className="casino-box-bg w-75">
          {totalboxes.map((item,index) => {
                return (
                  <div className="p-2 px-4" key={index}>
                    <div className="th-color small-font py-1">{item.header}</div>
                    <div className="small-font role-color casino-box-field-bg p-2">{item.value}</div>
                    
                  </div>
                );
              })}
              </div>
          </div>
    
  )
}

export default TotalPaidBalanceTable
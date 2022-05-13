import React from "react";

function SelectTableComponent(props) {
  const { column, rowData } = props;
  const toggleCheckbox = (e,row) => {
console.log("event",e,row);
  };
  const renderHeader = () => {
    return (
      <thead>
        <tr>
            <td> </td>
          {column.map((e, index) => (
            <th key={index}>{e.name}</th>
          ))}
        </tr>
      </thead>
    );
  };

  const renderRows = () => {
    return (
      <tbody>
        {rowData.map((row) => (
          <tr key={row.name}>
              <td><label name={row.name}><input type='checkbox' name={row.name} onChange={e=>toggleCheckbox(e,row)}/></label></td>
            {column.map((e) => (
              <td key={e.key}>{row[e.key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  };
  

  return (
    <div>
      <table>
        {renderHeader()}
        {renderRows()}
      </table>
    </div>
  );
}

export default SelectTableComponent;

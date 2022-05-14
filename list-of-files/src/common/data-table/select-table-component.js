import { React, useState, useRef, useEffect } from "react";
import TableRowComponent from "./table-row-component";

function SelectTableComponent(props) {
  const { column, rowData } = props;
  const [selectCount, setSelectCount] = useState(0);
  const selectAllRef = useRef(null);

  useEffect(() => {
    if (selectCount === rowData.length) {
      selectAllRef.current.checked = true;
      selectAllRef.current.indeterminate = false;
    } else if (selectCount === 0) {
      selectAllRef.current.checked = false;
      selectAllRef.current.indeterminate = false;
    } else {
      selectAllRef.current.indeterminate = true;
    }
  }, [selectCount, rowData]);

  const updateSelectAll = (row) => {
    row.selected
      ? setSelectCount(selectCount + 1)
      : setSelectCount(selectCount - 1);
  };

  const toggleSelectAll = (e) => {
    if (selectCount === rowData.length) {
      deSelectAllRows();
      console.log("deSelectAllRows");
    } else if (selectCount < rowData.length) {
      selectAllRows();
      console.log("selectAllRows");
    }
  };

  const deSelectAllRows = () => {
    rowData.forEach((row) => {
      row.selected = false;
    });
    setSelectCount(0);
  };

  const selectAllRows = () => {
    rowData.forEach((row) => {
      row.selected = true;
    });
    setSelectCount(rowData.length);
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
        {rowData.map((row) => {
          return (
            <TableRowComponent
              column={column}
              row={row}
              key={row.name}
              updateSelectAll={updateSelectAll}
            />
          );
        })}
      </tbody>
    );
  };

  return (
    <div>
      <div className="">
        <span>
          <input
            type="checkbox"
            aria-label="select all checkbox"
            name="select-all"
            id="select-all"
            onChange={toggleSelectAll}
            className=""
            ref={selectAllRef}
          />
        </span>
        <span></span>
        <span></span>
      </div>
      <div className="">
        <table>
          {renderHeader()}
          {renderRows()}
        </table>
      </div>
    </div>
  );
}

export default SelectTableComponent;

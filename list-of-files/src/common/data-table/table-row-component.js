import {React} from "react";

function TableRowComponent(props){
    const {column, row, updateSelectAll} = props;
    
    const toggleCheckbox = (e) => {
      row.selected = e.target.checked;
      updateSelectAll(row);
    };
  
  const disableCheckbox = (status) => {
    if (status !== "available") {
      return true;
    }
    return false;
  };
    
    return (
        <tr >
          <td>
            <label name={row.name}>
              <input
                type="checkbox"
                name={row.name}
                checked={row.selected}
                onChange={e => toggleCheckbox(e)}
                disabled={disableCheckbox(row.status)}
              />
            </label>
          </td>
          {column.map((e) => (
            <td key={e.key}>{row[e.key]}</td>
          ))}
        </tr>
      )
}
export default TableRowComponent;
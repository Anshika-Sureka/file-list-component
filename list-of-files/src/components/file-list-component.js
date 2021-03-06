import React from "react";
import SelectTableComponent from '../common/data-table/select-table-component';
import {testData} from '../constants/file-list-test';

function FileListComponent(props){
    const columnList = {
        column:[
            {name:'Name',key:'name'},
            {name:'Device',key:'device'},
            {name:'Path',key:'path'},
            {name:'Status',key:'status'},
        ]
    }
    const rowData = testData.map(e => { e.selected = false; return e});
    return (
        <SelectTableComponent column={columnList.column} rowData={rowData}/>
    )
}
export default FileListComponent;
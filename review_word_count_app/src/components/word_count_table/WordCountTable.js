import React from 'react';
import './WordCountTable.css';

const WordCountTable = (props) => {
  const tableInfo = props.objectArray.map((object) => {
    return <tr ><td>{object.text}</td><td>{object.value}</td></tr>
  });

    return(
      <table className="Table" >
        <tbody>
        <tr>
          <th>Word</th>
          <th>Amount of Time Used</th>
        </tr>
          {tableInfo}
        </tbody>
      </table>
    )
  }

export default WordCountTable;

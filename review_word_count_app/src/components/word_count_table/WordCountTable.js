import React from 'react';
import './WordCountTable.css';



const WordCountTable = (props) => {

  let getValues = function(index){
    return props.valueArray[index];
  }

  const tableInfo = props.wordArray.map((word, index) => {
  return <tr key={index}><td>{word}</td><td>{getValues(index)}</td></tr>
});


    return(
      <div>

      <table className="Table" >
        <tbody>
        <tr>
          <th>Word</th>
          <th>Amount Used</th>
        </tr>
          {tableInfo}
        </tbody>

      </table>

      </div>
    )
  }




export default WordCountTable;

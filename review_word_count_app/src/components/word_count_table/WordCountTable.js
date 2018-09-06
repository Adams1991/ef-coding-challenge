import React from 'react';
import './WordCountTable.css';
import Word from './Word';


class WordCountTable extends React.Component {
  render() {
    return(
      <div>
      <table className="Table" >
        <Word  wordCountObject={this.props.wordCountObject}/>

      </table>
      </div>
    )
  }



}

export default WordCountTable;

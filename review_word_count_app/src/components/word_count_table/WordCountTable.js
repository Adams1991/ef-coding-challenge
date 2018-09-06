import React from 'react';
import './WordCountTable.css';
import Word from './Word';


class WordCountTable extends React.Component {
  render() {
    return(
      <div>
      <table className="Table" >
        <Word  wordArray={this.props.wordArray}/>

      </table>
      </div>
    )
  }



}

export default WordCountTable;

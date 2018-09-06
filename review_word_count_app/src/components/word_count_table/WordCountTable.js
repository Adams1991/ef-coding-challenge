import React from 'react';
import './WordCountTable.css';
import Word from './Word';
import createWordCountHash from '../../helpers/WordCount';

class WordCountTable extends React.Component {
  constructor(props) {
      super(props);
  }

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

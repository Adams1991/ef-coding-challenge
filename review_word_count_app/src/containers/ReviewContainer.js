import React, { Component } from 'react';
import createWordCountHash from '../helpers/WordCount'
import createWordArray from '../helpers/KeysArray'
import createValueArray from '../helpers/ValuesArray'
import DataImport from '../DataImport';
import './ReviewContainer.css';
import WordCountTable from '../components/word_count_table/WordCountTable'

class ReviewContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      reviewData: DataImport
    };
  }


  render() {
    const wordObject = createWordCountHash(this.state.reviewData);
    const wordArray = createWordArray(wordObject);
    return (
      <div
        // Dummy props for testing purposes
        className="ReviewContainer"
        reviewdataarray= {this.state.reviewData}
        wordhash = {createWordCountHash(this.state.reviewData)}
      >
      <WordCountTable
        wordCountObject={wordObject}
        wordArray={wordArray}
        valueArray={createValueArray(wordObject)}
      />

      </div>
    );
  }
}

export default ReviewContainer;











// TODO: Import Data, Set state to imported data
// TODO: Create Method to get word count from array (using hash)
// TODO: Pass down hash as prop
// TODO: Create render method

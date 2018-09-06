import React, { Component } from 'react';
import createWordCountHash from '../helpers/WordCount'
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
    return (
      <div
        // Dummy props for testing purposes
        className="ReviewContainer"
        reviewdataarray= {this.state.reviewData}
        wordhash = {createWordCountHash(this.state.reviewData)}
      >
      <WordCountTable   wordCountObject={createWordCountHash(this.state.reviewData)}/>

      </div>
    );
  }
}

export default ReviewContainer;










// TODO: Import Data, Set state to imported data
// TODO: Create Method to get word count from array (using hash)
// TODO: Pass down hash as prop
// TODO: Create render method

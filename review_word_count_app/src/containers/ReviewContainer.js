import React, { Component } from 'react';
import DataImport from '../DataImport';
import './ReviewContainer.css';

class ReviewContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      reviewData: DataImport
    };

  }

  createWordCountHash(){
    var freqMap = {};
    const arrayOfData = this.state.reviewData
    arrayOfData.forEach((review) => {
      var words = review.replace(/[.]/g, '').split(/\s/);
      words.forEach(function(word) {
          if (!freqMap[word]) {
              freqMap[word] = 0;
          }
          freqMap[word] += 1;
      });
    })
    return freqMap;
  }



  render() {
    this.createWordCountHash()
    return (
      <div
        className="ReviewContainer"
        reviewdataarray = {this.state.reviewData}
        wordhash = {this.createWordCountHash()}
      >


      </div>
    );
  }
}

export default ReviewContainer;










// TODO: Import Data, Set state to imported data
// TODO: Create Method to get word count from array (using hash)
// TODO: Pass down hash as prop
// TODO: Create render method

import React, { Component } from 'react';
import DataImport from '../../../DataImport';
import './ReviewContainer.css';

class ReviewContainer extends Component {

  constructor(props){
    super(props);
    this.state = { reviewdata: DataImport };
  }

  // getState(){
  //   return this.state;
  // }




  render() {
    return (
      <div className="ReviewContainer" reviewdataarray = {this.state.reviewdata}>

      </div>
    );
  }
}

export default ReviewContainer;










// TODO: Import Data, Set state to imported data
// TODO: Create Method to get word count from array (using hash)
// TODO: Pass down hash as prop
// TODO: Create render method

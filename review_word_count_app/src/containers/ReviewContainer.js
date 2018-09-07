import React from 'react';
import createWordCountHash from '../helpers/WordCount'
import createObjectArray from '../helpers/ObjectArray'
import DataImport from '../DataImport';
import './ReviewContainer.css';
import WordCountTable from '../components/word_count_table/WordCountTable';
import WordCloud from '../components/word_cloud/WordCloud';

class ReviewContainer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      reviewData: DataImport,
      changeDisplay: false
    };
  }

  changeDisplay = () => {
    this.setState({
        changeDisplay: !this.state.changeDisplay
    })
  }

  render() {
    const wordCountHash = createWordCountHash(this.state.reviewData);
    const objectArray = createObjectArray(wordCountHash);
    var display = null

    if (this.state.changeDisplay){
      display = <WordCloud className="word-cloud" objectArray = {objectArray}/>
    }else{
      display = <WordCountTable className="word-table" objectArray = {objectArray}/>
    }

    return (
      <div
        // Dummy props for testing purposes
        className="review-container"
        reviewdataarray= {this.state.reviewData}
        wordhash = {wordCountHash}
        objectarray = {objectArray}
      >
        <button onClick={this.changeDisplay}>Change Display</button>
        {display}
      </div>
    );

  }

}

export default ReviewContainer;

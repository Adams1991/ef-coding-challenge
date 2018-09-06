import React from 'react';
import createWordCountHash from '../helpers/WordCount'
import createWordArray from '../helpers/KeysArray'
import createValueArray from '../helpers/ValuesArray'
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
      displayWordCloud: false
    };
  }

  changeDisplay = () => {
    this.setState({
        displayWordCloud: !this.state.displayWordCloud
    })
  }

  render() {
    const wordCountObject = createWordCountHash(this.state.reviewData);
    const wordArray = createWordArray(wordCountObject);
    const valueArray = createValueArray(wordCountObject);
    const objectArray = createObjectArray(wordArray,valueArray);
    var display = null

    if (this.state.displayWordCloud){
       display = <WordCloud
                      className="WordCloud"
                      objectArray = {objectArray}
                  />
    }else{
        display =  <WordCountTable
                      className="WordTable"
                      objectArray = {objectArray}
                    />
    }

    return (
    <div
      // Dummy props for testing purposes
      className="ReviewContainer"
      reviewdataarray= {this.state.reviewData}
      wordhash = {wordCountObject}
      objectarray = {objectArray}
    >
      <button onClick={this.changeDisplay}>Change Display</button>
      {display}
    </div>
    );

  }

}

export default ReviewContainer;

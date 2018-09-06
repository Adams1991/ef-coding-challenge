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
    const wordObject = createWordCountHash(this.state.reviewData);
    const wordArray = createWordArray(wordObject);
    const valueArray = createValueArray(wordObject);
    const objectArray = createObjectArray(wordArray,valueArray);

    var display = null

    if (this.state.displayWordCloud){
       display =  <WordCloud
                      className="WordCloud"
                      wordArray={wordArray}
                      valueArray={valueArray}
                      objectarray = {objectArray}
                  />
    }else{
        display =   <WordCountTable
                      className="WordTable"
                      wordArray={wordArray}
                      valueArray={valueArray}
                      objectarray = {objectArray}
                    />
    }

    return (
    <div
      // Dummy props for testing purposes
      className="ReviewContainer"
      reviewdataarray= {this.state.reviewData}
      wordhash = {wordObject}
      objectarray = {objectArray}
    >
      <button onClick={this.changeDisplay}>Change Display</button>
      {display}
    </div>
    );
  }
}

export default ReviewContainer;

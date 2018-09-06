import React from 'react';
import createWordCountHash from '../helpers/WordCount'
import createWordArray from '../helpers/KeysArray'
import createValueArray from '../helpers/ValuesArray'
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
    var display = null

    if (this.state.displayWordCloud){
       display =  <WordCloud
                      className="WordCloud"
                      wordArray={wordArray}
                      valueArray={valueArray}
                  />
    }else{
        display =   <WordCountTable
                      className="WordTable"
                      wordArray={wordArray}
                      valueArray={valueArray}
                    />
    }

    return (
    <div
      // Dummy props for testing purposes
      className="ReviewContainer"
      reviewdataarray= {this.state.reviewData}
      wordhash = {createWordCountHash(this.state.reviewData)}
    >
      <button onClick={this.changeDisplay}>Change Display</button>
      {display}
    </div>
    );
  }
}

export default ReviewContainer;

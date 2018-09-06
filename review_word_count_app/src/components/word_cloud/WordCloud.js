import React from 'react';
import './WordCloud.css';
import { render } from 'react-dom';
import ReactWordCloud from 'react-d3-cloud';



const WordCloud = (props) => {

  let getValues = function(index){
    return props.valueArray[index];
  }



  const data = props.wordArray.map((word, index) => {
    let wordCount = getValues(index)
    return {text:word, value: wordCount}
  });



const fontSizeMapper = word => Math.log2(word.value) * 5;
const rotate = word => word.value % 360;

    return(
      <div>
          <ReactWordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
          />
      </div>
    )
  }




export default WordCloud;

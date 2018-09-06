import React from 'react';
import { render } from 'react-dom';
import ReactWordCloud from 'react-d3-cloud';



const WordCloud = (props) => {

  let getValues = function(index){
    return props.valueArray[index];
  }



  const data = props.wordArray.map((word, index) => {
    let wordCount = getValues(index)
    console.log(word);
    return {text:word, value: wordCount}
  });





const fontSizeMapper = word => (word.value) * 100;
const rotate = word => word.value % 360;

    return(
          <ReactWordCloud
            data={data}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            height= {1000}
            width= {1000}
          />
    )
  }




export default WordCloud;

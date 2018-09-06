import React from 'react';
import { render } from 'react-dom';
import ReactWordCloud from 'react-d3-cloud';

const WordCloud = (props) => {

  const data = props.objectarray.map((object) => {
    return {text:object.text, value: object.value}
  });

  const fontSizeMapper = word => (word.value) * 30;
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

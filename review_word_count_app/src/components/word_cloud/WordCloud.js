// https://www.npmjs.com/package/react-d3-cloud
import React from 'react';
import { render } from 'react-dom';
import ReactWordCloud from 'react-d3-cloud';

const WordCloud = (props) => {
  const fontSizeMapper = word => (word.value) * 30;
  const rotate = word => word.value % 360;

  return(
      <ReactWordCloud
            data={props.objectArray}
            fontSizeMapper={fontSizeMapper}
            rotate={rotate}
            height= {1000}
            width= {1000}
      />
  )
  
}
export default WordCloud;

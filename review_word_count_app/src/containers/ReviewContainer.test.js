import DataImport from '../../../DataImport';
const assert = require('assert');
import React from 'react';
import ReactDOM from 'react-dom';
import ReviewContainer from './ReviewContainer';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReviewContainer />, div);
  ReactDOM.unmountComponentAtNode(div);
})

// TODO: create test checking hash correctly mapped, render working etc.

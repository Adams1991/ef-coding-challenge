import DataImport from '../DataImport';
const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import ReviewContainer from './ReviewContainer';


it('renders without crashing', () => {
    shallow(<ReviewContainer />);
})

it('has an array of reviews in its state', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().reviewdataarray.length
  assert.deepStrictEqual(result, 20);
})

it('can get details from that array', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().reviewdataarray[0];
  assert.deepStrictEqual(result, "A great product for daily use,");
})

it('can pass word count hash down as prop', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const wordHash =  reviewContainer.props().wordhash
  const result = Object.keys(wordHash).length
  assert.deepStrictEqual(result, 33);
})

it('produces correct results from word hash', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const wordHash =  reviewContainer.props().wordhash
  const result = wordHash.product
  assert.deepStrictEqual(result, 4);
})

it('can pass object array down as prop', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const objectArray =  reviewContainer.props().objectarray
  const result = Object.keys(objectArray).length
  assert.deepStrictEqual(result, 33);
})

it('produces correct results from object array', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const objectArray =  reviewContainer.props().objectarray
  const result = objectArray[0]
  assert.deepStrictEqual(result, {"text": "great", "value": 4});
})

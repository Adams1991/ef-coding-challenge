import DataImport from '../../../DataImport';
const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import ReviewContainer from './ReviewContainer';


it('renders without crashing', () => {
    shallow(<ReviewContainer />);
})

it('has a array of reviews in its state', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().reviewdataarray.length
  assert.deepStrictEqual(result, 20);
})

it('can get details from that array', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().reviewdataarray[0];
  assert.deepStrictEqual(result, "A great product for daily use,");
})

it('has can create a word count hash from its state', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().wordhash.product
  assert.deepStrictEqual(result, 1);
})

// TODO: create test checking hash correctly mapped, render working etc.

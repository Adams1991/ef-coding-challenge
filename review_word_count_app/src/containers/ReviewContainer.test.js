import DataImport from '../../../DataImport';
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

it('begins with null from word count hash from its state', () => {
  const reviewContainer = shallow(<ReviewContainer />);
  const result = reviewContainer.props().wordhash
  assert.deepStrictEqual(result, null);
})

// TODO: create test checking hash correctly mapped, render working etc.

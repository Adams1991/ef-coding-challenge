const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import WordCountTable from './WordCountTable';


it('renders without crashing', () => {
    shallow(<WordCountTable />);
})

it('has hash details to pass to Word Component', () => {
  const wordCountTable = shallow(<WordCountTable />);
  
})

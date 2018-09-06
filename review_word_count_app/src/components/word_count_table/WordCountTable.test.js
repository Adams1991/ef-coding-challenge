const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import WordCountTable from './WordCountTable';


it('renders without crashing', () => {
    shallow(<WordCountTable />);
})

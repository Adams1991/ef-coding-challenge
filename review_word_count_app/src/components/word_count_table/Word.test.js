const assert = require('assert');
import React from 'react';
import { shallow } from 'enzyme';
import Word from './Word';


it('renders without crashing', () => {
    shallow(<Word />);
})

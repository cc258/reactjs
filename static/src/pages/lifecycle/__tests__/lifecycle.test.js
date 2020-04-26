import React from 'react'
import Lifecycle from '../lifecycle'
import { shallow } from 'enzyme';

import axios from 'axios'

jest.mock("axios");

describe('<Lifecycle />', () => {

	it('test request apis', async () => {
		const getSpy = jest.spyOn(axios, 'get');
		const wrapper = shallow(<Lifecycle />);

		expect(getSpy).toBeCalled();
	});

})
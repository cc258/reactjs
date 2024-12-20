import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as axios from 'axios';

import { IntlProvider } from 'react-intl';
import { SimpleMemo } from '../index';

jest.mock('axios');

describe('<SimpleMemo />', () => {
  test('render SimpleMemo correctly', async () => {
    axios.get.mockImplementation(() => Promise.resolve({ data: [{ login: 111 }, { login: 222 }] }));

    await act(async () => {
      render(
        <IntlProvider onError={() => { }}>
          <SimpleMemo />
        </IntlProvider>,
      );
    });

    // Make sure to resolve with a promise

    // 测试函数
    const countStars = screen.getByRole('countStars');
    const child1 = screen.getByRole('child-1');

    expect(countStars).toBeInTheDocument();
    fireEvent.click(countStars);

    expect(countStars).toHaveTextContent('10');

    const ul = screen.getByRole('ul');
    screen.debug(ul);

    const li = screen.getByRole('111');
    expect(li).toBeInTheDocument();

    // 测试页面请求
    expect(axios.get).toBeCalled();
  });
});

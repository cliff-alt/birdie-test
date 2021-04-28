import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Banner from '@App/components/banner/Banner';

describe('Banner Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Banner />, div);
  });
});

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CareEvent } from '@App/api/event';
import { CareEventList } from '@App/components/events/CareEventList';

describe('CareEventList Component', () => {
  it('renders without crashing', () => {
    const careEvent: CareEvent = {
      displayText: '',
      id: '',
      sensitive: false,
      timestamp: '',
      type: '',
    };
    const div = document.createElement('div');
    ReactDOM.render(<CareEventList events={[careEvent]} />, div);
  });
});

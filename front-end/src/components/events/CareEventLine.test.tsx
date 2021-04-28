import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CareEventLine } from '@App/components/events/CareEventLine';
import { CareEvent } from '@App/api/event';

describe('CareEventLine Component', () => {
  it('renders without crashing', () => {
    const careEvent: CareEvent = {
      displayText: '',
      id: '',
      sensitive: false,
      timestamp: '',
      type: '',
    };
    const div = document.createElement('div');
    ReactDOM.render(<CareEventLine careEvent={careEvent} />, div);
  });
});

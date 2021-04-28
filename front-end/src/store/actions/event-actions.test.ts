import {
  EventActions,
  receiveEvents,
  requestEvents,
} from '@App/store/actions/event';
import { CareEvent } from '@App/api/event';

describe('Event Actions', () => {
  it('should have a method for creating request actions', () => {
    let eventAction = requestEvents();
    expect(eventAction.payload.page).toBe(0);
    expect(eventAction.type).toBe(EventActions.EVENTS_REQUESTED);

    eventAction = requestEvents(5);
    expect(eventAction.payload.page).toBe(5);
  });

  it('should have a method for receiving events', () => {
    const careEvents: CareEvent[] = [
      {
        displayText: 'test',
        id: '1',
        sensitive: false,
        timestamp: 'timestamp',
        type: 'check in',
      },
    ];

    let eventAction = receiveEvents(careEvents);
    expect(eventAction.payload.events).toBe(careEvents);
    expect(eventAction.type).toBe(EventActions.EVENTS_RECEIVED);

    eventAction = receiveEvents();
    expect(eventAction.payload.events).toEqual([]);
  });
});

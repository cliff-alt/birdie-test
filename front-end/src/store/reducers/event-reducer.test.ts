import {
  eventsFailure,
  receiveEvents,
  requestEvents,
} from '@App/store/actions/event';
import { eventReducer } from '@App/store/reducers/event';
import initialState from '@App/store/reducers/initialState';

describe('Event Reducer', () => {
  it('should respond to requests', () => {
    const eventAction = requestEvents();

    const state = initialState.eventData;
    const newState = eventReducer(state, eventAction);

    expect(state.loading).toBeFalsy();
    expect(newState.loading).toBeTruthy();
  });

  it('should receive events', () => {
    const eventAction = receiveEvents([
      {
        displayText: 'test',
        id: '1',
        sensitive: false,
        timestamp: 'timestamp',
        type: 'check in',
      },
    ]);

    const state = initialState.eventData;
    state.loading = true;
    const newState = eventReducer(state, eventAction);

    expect(state.loading).toBeTruthy();
    expect(state.events.length).toBe(0);
    expect(newState.loading).toBeFalsy();
    expect(newState.events.length).toBe(1);
  });

  it('should handle failure actions', () => {
    const eventAction = eventsFailure('something went wrong');

    const state = initialState.eventData;

    const newState = eventReducer(state, eventAction);

    expect(state.error).toBeUndefined();
    expect(newState.error).toBeDefined();
  });
});

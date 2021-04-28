import { doRequestEvents } from '@App/store/sagas/index';
import {
  eventsFailure,
  receiveEvents,
  requestEvents,
} from '@App/store/actions/event';
import { GetEvents } from '@App/api/event';
import { call, put } from 'redux-saga/effects';

describe('Events Saga', () => {
  it('should request events and dispatch success actions', () => {
    const requestEventsSaga = doRequestEvents(requestEvents());

    expect(requestEventsSaga.next().value).toEqual(call(GetEvents, 0)); // Call to the API
    expect(requestEventsSaga.next().value).toEqual(put(receiveEvents([]))); // Create success action
  });

  it('should request events and dispatch failure actions', () => {
    const requestEventsSaga = doRequestEvents(requestEvents());

    expect(requestEventsSaga.next().value).toEqual(call(GetEvents, 0)); // Call to the API

    // @ts-ignore:next-line
    expect(requestEventsSaga.throw({ message: 'error' }).value).toEqual(
      put(eventsFailure('error'))
    ); // Create failure action
  });
});

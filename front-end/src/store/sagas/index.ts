import {
  EventActions,
  EventAction,
  receiveEvents,
  eventsFailure,
} from '@App/store/actions/event';

import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GetEvents } from '@App/api/event';

export function* doRequestEvents(action: EventAction) {
  try {
    const events = yield call(GetEvents, action.payload.page);
    yield put(receiveEvents(events));
  } catch (e) {
    yield put(eventsFailure(e.message));
  }
}

export function* watchRequestEvents() {
  yield takeEvery(EventActions.EVENTS_REQUESTED, doRequestEvents);
}

function* initSaga() {
  yield all([watchRequestEvents()]);
}

export default initSaga;

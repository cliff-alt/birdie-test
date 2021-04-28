import {
  EventActions,
  EventAction,
  receiveEvents,
  eventsFailure,
} from '@App/store/actions/event';

import { takeEvery, call, put, all } from 'redux-saga/effects';
import { GetEvents } from '@App/api/event';
import {
  receiveSummary,
  SummaryActions,
  summaryFailure,
} from '@App/store/actions/summary';
import { GetSummary } from '@App/api/summary';

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

export function* doRequestSummary() {
  try {
    const summary = yield call(GetSummary);
    yield put(receiveSummary(summary));
  } catch (e) {
    yield put(summaryFailure(e.message));
  }
}

export function* watchRequestSummary() {
  yield takeEvery(SummaryActions.SUMMARY_REQUESTED, doRequestSummary);
}

function* initSaga() {
  yield all([watchRequestEvents(), watchRequestSummary()]);
}

export default initSaga;

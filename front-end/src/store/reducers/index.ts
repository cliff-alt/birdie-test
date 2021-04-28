import { combineReducers } from 'redux';
import { eventReducer, EventState } from '@App/store/reducers/event';
import { summaryReducer, SummaryState } from '@App/store/reducers/summary';

export type RootState = Readonly<{
  eventData: EventState;
  summaryData: SummaryState;
}>;

export const rootReducer = combineReducers<RootState>({
  eventData: eventReducer,
  summaryData: summaryReducer,
});

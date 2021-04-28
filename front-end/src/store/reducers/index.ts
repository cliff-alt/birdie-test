import { combineReducers } from 'redux';
import { eventReducer, EventState } from '@App/store/reducers/event';

export type RootState = Readonly<{
  eventData: EventState;
}>;

export const rootReducer = combineReducers<RootState>({
  eventData: eventReducer,
});

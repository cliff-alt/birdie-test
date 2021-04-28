import { EventAction, EventActions } from '@App/store/actions/event';
import initialState from '@App/store/reducers/initialState';
import { CareEvent } from '@App/api/event';

export interface EventState {
  events: CareEvent[];
  loading: boolean;
  error?: string;
}

export const eventReducer = (
  state: EventState = initialState.eventData,
  action: EventAction
) => {
  switch (action.type) {
    case EventActions.EVENTS_REQUESTED:
      return { ...state, loading: true };
    case EventActions.EVENTS_RECEIVED:
      return {
        ...state,
        events: [...state.events, ...(action.payload.events || [])],
        loading: false,
      };
    case EventActions.EVENTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

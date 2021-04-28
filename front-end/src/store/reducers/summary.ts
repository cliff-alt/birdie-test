import initialState from '@App/store/reducers/initialState';
import { Summary } from '@App/api/summary';
import { SummaryAction, SummaryActions } from '@App/store/actions/summary';

export interface SummaryState {
  summary?: Summary;
  loading: boolean;
  error?: string;
}

export const summaryReducer = (
  state: SummaryState = initialState.summaryData,
  action: SummaryAction
) => {
  switch (action.type) {
    case SummaryActions.SUMMARY_REQUESTED:
      return { ...state, loading: true };
    case SummaryActions.SUMMARY_RECEIVED:
      return {
        ...state,
        summary: action.payload.summary,
        loading: false,
      };
    case SummaryActions.SUMMARY_FAILURE:
      return {
        ...state,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

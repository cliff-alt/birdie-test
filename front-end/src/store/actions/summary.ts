import { Summary } from '@App/api/summary';

export const enum SummaryActions {
  SUMMARY_REQUESTED = 'SummaryAction.SummaryRequested',
  SUMMARY_RECEIVED = 'SummaryAction.SummaryReceived',
  SUMMARY_FAILURE = 'SummaryAction.SummaryFailure',
}

export interface SummaryAction {
  type: SummaryActions;
  payload: SummaryPayload;
}

export interface SummaryPayload {
  summary?: Summary;
  error?: string;
}

const createSummaryAction = (
  type: SummaryActions,
  payload: SummaryPayload
): SummaryAction => ({ type, payload });

export const requestSummary = () =>
  createSummaryAction(SummaryActions.SUMMARY_REQUESTED, {});
export const receiveSummary = (summary: Summary) =>
  createSummaryAction(SummaryActions.SUMMARY_RECEIVED, { summary });
export const summaryFailure = (error: string) =>
  createSummaryAction(SummaryActions.SUMMARY_FAILURE, { error });

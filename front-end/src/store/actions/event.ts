import { CareEvent } from '@App/api/event';

export const enum EventActions {
  EVENTS_REQUESTED = 'EventAction.EventsRequested',
  EVENTS_RECEIVED = 'EventAction.EventsReceived',
  EVENTS_FAILURE = 'EventAction.EventsFailure',
}

export interface EventAction {
  type: EventActions;
  payload: EventPayload;
}

export interface EventPayload {
  page?: number;
  events?: CareEvent[];
  error?: string;
}

const createEventAction = (
  type: EventActions,
  payload: EventPayload
): EventAction => ({ type, payload });

export const requestEvents = (page: number = 0) =>
  createEventAction(EventActions.EVENTS_REQUESTED, { page });
export const receiveEvents = (events: CareEvent[] = []) =>
  createEventAction(EventActions.EVENTS_RECEIVED, { events });
export const eventsFailure = (error: string) =>
  createEventAction(EventActions.EVENTS_FAILURE, { error });

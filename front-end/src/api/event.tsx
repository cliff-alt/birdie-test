/**
 * Interface for a single CareEvent. Only the properties currently used are exposed.
 */
export interface CareEvent {
  id: string;
  type: string;
  displayText: string;
  sensitive: boolean;
  timestamp: string;
}

export function GetEvents(page?: number) {
  page = page || 0;
  return fetch(`/events?page=${page}`).then(
    response => response.json() as Promise<CareEvent[]>
  );
}

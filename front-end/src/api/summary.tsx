export interface Summary {
  latestMood: string;
  mostRecentCheckIn: string;
}

export function GetSummary() {
  return fetch(`summary`).then(response => response.json() as Promise<Summary>);
}

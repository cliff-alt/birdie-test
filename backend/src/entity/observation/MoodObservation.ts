import { AfterLoad, ChildEntity } from 'typeorm';
import { Event } from '../Event';

@ChildEntity('mood_observation')
export class MoodObservation extends Event {
  public mood: string;

  public getDisplayText(): string {
    return `Mood recorded as - ${this.mood}`;
  }

  @AfterLoad()
  public parsePayload() {
    if (this.payload) {
      this.mood = this.payload.mood;
    }

    super.parsePayload();
  }
}

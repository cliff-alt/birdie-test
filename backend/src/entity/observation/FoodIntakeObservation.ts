import { AfterLoad, ChildEntity } from 'typeorm';
import { Event } from '../Event';

@ChildEntity('food_intake_observation')
export class FoodIntakeObservation extends Event {
  public meal: string;

  public getDisplayText(): string {
    let result = `Food type: ${this.meal}.`;

    if (this.note) {
      result += ` Additional notes: ${this.note}`;
    }

    return result;
  }

  @AfterLoad()
  public parsePayload() {
    if (this.payload) {
      this.meal = this.payload.meal;
    }

    super.parsePayload();
  }
}

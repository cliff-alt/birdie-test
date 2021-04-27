import { AfterLoad, ChildEntity } from 'typeorm';
import { Event } from '../Event';

@ChildEntity('incontinence_pad_observation')
export class PadObservation extends Event {
  public padCondition: string;

  public sensitive = true;

  public getDisplayText(): string {
    let result = `Pad condition recorded as - ${this.padCondition}.`;

    if (this.note) {
      result += ` Additional notes: ${this.note}`;
    }

    return result;
  }

  @AfterLoad()
  public parsePayload() {
    if (this.payload) {
      this.padCondition = this.payload.pad_condition;
    }

    super.parsePayload();
  }
}

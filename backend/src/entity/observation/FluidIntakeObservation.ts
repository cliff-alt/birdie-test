import { AfterLoad, ChildEntity } from 'typeorm';
import { Event } from '../Event';

@ChildEntity('fluid_intake_observation')
export class FluidIntakeObservation extends Event {
  public fluid: string;
  public observed: boolean;
  public consumedVolume: number;

  public getDisplayText(): string {
    return `Consumed ${this.consumedVolume}ml of ${this.fluid} fluid. (${
      this.observed ? 'Observed' : 'Not Observed'
    })`;
  }

  @AfterLoad()
  public parsePayload() {
    if (this.payload) {
      this.fluid = this.payload.fluid;
      this.observed = this.payload.observed;
      this.consumedVolume = this.payload.consumed_volume_ml;
    }

    super.parsePayload();
  }
}

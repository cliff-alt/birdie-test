import { AfterLoad, ChildEntity } from 'typeorm';
import { Event } from '../Event';

@ChildEntity('task_completed')
export class TaskCompletedEvent extends Event {
  public definition: string;

  public getDisplayText(): string {
    return this.definition;
  }

  @AfterLoad()
  public parsePayload() {
    if (this.payload) {
      this.definition = this.payload.task_definition_description;
    }

    super.parsePayload();
  }
}

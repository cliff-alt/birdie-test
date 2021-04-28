import {
  AfterLoad,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  TableInheritance,
} from 'typeorm';
import { IEventPayload } from './IEventPayload';

@Entity({
  name: 'events',
  orderBy: {
    timestamp: 'DESC',
  },
})
@TableInheritance({ column: { name: 'event_type', type: 'varchar' } })
export class Event {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public timestamp: string;

  @Column({ type: 'json' })
  public payload: IEventPayload;

  @Column({ name: 'event_type' })
  public type: string;

  // Used to conditionally hide details that may be a little more sensitive than others.
  public sensitive = false;

  public note: string;

  public displayText: string;

  /**
   * Text to display for an event. Overridden in subclasses to produce more informative display text.
   */
  public getDisplayText(): string {
    return this.payload.note;
  }

  /**
   * Method to process the payload JSON that was retrieved from the DB. This is overridden
   * in subclasses in order to grab event specific data like mood, fluid, volume etc.
   */
  @AfterLoad()
  public parsePayload() {
    this.parseDefaults();
    delete this.payload;
  }

  private parseDefaults() {
    if (this.payload) {
      this.type = this.type.split('_').join(' '); // Neaten up the type for display
      this.note = this.payload.note;
      this.displayText = this.getDisplayText();
    }
  }
}

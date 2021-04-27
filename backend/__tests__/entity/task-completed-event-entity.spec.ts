import { IEventPayload } from '../../src/entity/IEventPayload';
import { TaskCompletedEvent } from '../../src/entity/task/TaskCompletedEvent';

describe('TaskCompletedEvent Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = {
      task_definition_description: 'Assist with oral hygiene',
    };
    const event = new TaskCompletedEvent();
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();

    expect(event.definition).toBe(payload.task_definition_description);
    expect(event.displayText).toBe(event.definition);
  });
});

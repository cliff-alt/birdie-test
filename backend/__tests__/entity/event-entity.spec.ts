import { Event } from '../../src/entity/Event';
import { IEventPayload } from '../../src/entity/IEventPayload';

describe('Event Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = { note: 'some text' };
    const event = new Event();
    event.type = 'some_type';
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();
    expect(event.displayText).toEqual(payload.note);
  });
});

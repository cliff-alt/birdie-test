import { IEventPayload } from '../../src/entity/IEventPayload';
import { MoodObservation } from '../../src/entity/observation/MoodObservation';

describe('MoodObservation Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = {
      mood: 'happy',
    };
    const event = new MoodObservation();
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();

    expect(event.mood).toBe(payload.mood);
    expect(event.displayText).toBe('Mood recorded as - happy');
  });
});

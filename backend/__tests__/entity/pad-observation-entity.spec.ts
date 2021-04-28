import { IEventPayload } from '../../src/entity/IEventPayload';
import { PadObservation } from '../../src/entity/observation/PadObservation';

describe('PadObservation Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = {
      note: 'dirty',
      pad_condition: 'soiled',
    };
    const event = new PadObservation();
    event.type = 'some_type';
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();

    expect(event.padCondition).toBe(payload.pad_condition);
    expect(event.displayText).toBe(
      'Pad condition recorded as - soiled. Additional notes: dirty'
    );
  });
});

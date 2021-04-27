import { IEventPayload } from '../../src/entity/IEventPayload';
import { FoodIntakeObservation } from '../../src/entity/observation/FoodIntakeObservation';

describe('FoodIntakeObservation Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = {
      meal: 'snack',
      note: 'biscuits',
    };
    const event = new FoodIntakeObservation();
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();

    expect(event.meal).toBe(payload.meal);
    expect(event.note).toBe(payload.note);
    expect(event.displayText).toBe(
      'Food type: snack. Additional notes: biscuits'
    );
  });
});

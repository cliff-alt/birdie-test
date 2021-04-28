import { IEventPayload } from '../../src/entity/IEventPayload';
import { FluidIntakeObservation } from '../../src/entity/observation/FluidIntakeObservation';

describe('FluidIntakeObservation Entity', () => {
  it('should parse values from the payload and set display text', () => {
    const payload: IEventPayload = {
      consumed_volume_ml: 100,
      fluid: 'regular',
      observed: true,
    };
    const event = new FluidIntakeObservation();
    event.type = 'some_type';
    event.payload = payload;

    event.parsePayload();

    expect(event.payload).toBeUndefined();

    expect(event.fluid).toBe(payload.fluid);
    expect(event.observed).toBe(payload.observed);
    expect(event.consumedVolume).toBe(payload.consumed_volume_ml);
    expect(event.displayText).toBe(
      'Consumed 100ml of regular fluid. (Observed)'
    );
  });
});

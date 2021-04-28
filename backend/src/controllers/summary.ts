import * as express from 'express';
import { getRepository } from 'typeorm';
import { Event } from '../entity/Event';
import { MoodObservation } from '../entity/observation/MoodObservation';
import { CareRecipient } from '../care-recipient';

export const summaryController = express.Router();

interface ISummary {
  latestMood: string;
  mostRecentCheckIn: string;
}

summaryController.get('/', async (req, res) => {
  const repo = getRepository(Event);

  const summaryData = await Promise.all([
    repo.findOne({
      where: {
        careRecipient: CareRecipient,
        type: 'mood_observation',
      },
    }),
    repo.findOne({
      where: {
        careRecipient: CareRecipient,
        type: 'check_in',
      },
    }),
  ]);

  const summary: ISummary = {
    latestMood: (summaryData[0] as MoodObservation).mood,
    mostRecentCheckIn: summaryData[1].timestamp,
  };

  res.json(summary);
});

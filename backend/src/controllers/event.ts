import * as express from 'express';
import { getRepository } from 'typeorm';
import { Event } from '../entity/Event';

export const eventController = express.Router();

const DEFAULT_PAGE_SIZE = 20;

eventController.get('/', async (req, res) => {
  const page = parseInt(req.query.page as string, 10) || 0;
  const skip = page * DEFAULT_PAGE_SIZE;

  const repo = getRepository(Event);
  res.json(
    await repo.find({
      skip,
      take: DEFAULT_PAGE_SIZE,
    })
  );
});

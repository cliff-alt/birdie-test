// tslint:disable-next-line:no-implicit-dependencies
import * as request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import app from '../src/application';

describe('Summary API', () => {
  beforeAll(async () => {
    await createConnection();
  });

  describe('Get Summary', () => {
    it('should return a summary', async done => {
      await request(app)
        .get('/summary')
        .expect(200)
        .expect(res => {
          expect(res.body.latestMood).toBeDefined();
          expect(res.body.mostRecentCheckIn).toBeDefined();
          done();
        });
    });
  });

  afterAll(async () => {
    await getConnection().close();
  });
});

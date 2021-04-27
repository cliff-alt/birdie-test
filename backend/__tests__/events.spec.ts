// tslint:disable-next-line:no-implicit-dependencies
import * as request from 'supertest';
import { createConnection, getConnection } from 'typeorm';
import app from '../src/application';

describe('Events API', () => {
  beforeAll(async () => {
    await createConnection();
  });

  describe('Get Events', () => {
    it('should return 20 events', async done => {
      await request(app)
        .get('/events')
        .expect(200)
        .expect(res => {
          expect(res.body.length).toBe(20);
          done();
        });
    });

    it('should return events in date order', async done => {
      await request(app)
        .get('/events')
        .expect(200)
        .expect(res => {
          let previousTimestamp: string;

          res.body.forEach(event => {
            if (previousTimestamp) {
              expect(event.timestamp <= previousTimestamp).toBeTruthy();
            }
            previousTimestamp = event.timestamp;
          });

          done();
        });
    });

    it('should return events a page at a time', async done => {
      let firstPage = [];

      await request(app)
        .get('/events')
        .expect(200)
        .expect(res => {
          firstPage = res.body;
        });

      let secondPage = [];
      await request(app)
        .get('/events?page=1')
        .expect(200)
        .expect(res => {
          secondPage = res.body;
        });

      // Ensure nothing from the first page is in the second
      expect(
        firstPage.every(e1 => secondPage.every(e2 => e2.id !== e1.id))
      ).toBeTruthy();

      done();
    });
  });

  afterAll(async () => {
    await getConnection().close();
  });
});

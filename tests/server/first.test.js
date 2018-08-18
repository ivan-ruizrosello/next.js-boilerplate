import express from 'express';
import request from "supertest";

const app = express();
app.get('/', (req ,res) => {
  res.status(200).send('Hello');
});

describe("Some server tests", () => {
  test('Supersts works', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .expect(res => {
        expect(res.text).toBe('Hello');
        expect(res.text).not.toBe('Bye');
      }) 
      .end(done);
  })
})
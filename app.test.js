const request = require('supertest');
const app = require('./server');

describe('GET /', () => {
    it('should return a greeting message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('Hello, welcome to your application');
    });
});

describe('GET /name', () => {
    it('should return a greeting message', async () => {
        const res = await request(app).get('/name');
        expect(res.statusCode).toBe(200);
        expect(res.text).toBe('My name is Ugonna');
    });
});
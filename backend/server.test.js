const request = require('supertest');
const app = require('./server');

describe('POST /api/deposit', () => {
    it('should respond with deposit request created', async () => {
        const response = await request(app)
            .post('/api/deposit')
            .send({});
            
        expect(response.statusCode).toBe(200);
        expect(response.text).toBe('Deposit request created');

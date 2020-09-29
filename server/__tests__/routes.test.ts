import bodyParser from "body-parser";
import request from "supertest";

const app = require('../index');

app.use(bodyParser.json());

describe('Post Endpoints', () => {
    test('should create a new post', async (done) => {
        await request(app)
            .post('/book')
            .send({ isbn: "A1234", name: "This is avengers", author: "Adam Aijaz" })
            .set('Accept', 'application/json')
            .then((res) => {
                console.log('response body....', res.body, res.text);
                expect(res.status).toEqual(200);
                expect(res.body).toHaveProperty('isbn');
                done();
            });
    });

    test('should get  added posts', async (done) => {
        await request(app)
            .get('/books')
            .set('Accept', 'application/json')
            .then((res) => {
                console.log('response body....', res.body, res.text);
                const { books } = res.body;
                console.log('ISBN...', books[0].isbn);
                expect(res.status).toEqual(200);
                expect(books[0].isbn).toBe('A1234');
                done();
            });
    });

    test('should update a record', async (done) => {
        await request(app)
            .get('/books')
            .set('Accept', 'application/json')
            .then((res) => {
                console.log('response body....', res.body, res.text);
                const { books } = res.body;
                console.log('ISBN...', books[0].isbn);
                expect(res.status).toEqual(200);
                expect(books[0].isbn).toBe('A1234');
                done();
            });
    });



});
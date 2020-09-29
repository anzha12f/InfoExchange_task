"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const supertest_1 = __importDefault(require("supertest"));
const app = require('../index');
app.use(body_parser_1.default.json());
describe('Post Endpoints', () => {
    test('should create a new post', (done) => __awaiter(void 0, void 0, void 0, function* () {
        yield supertest_1.default(app)
            .post('/book')
            .send({ isbn: "A1234", name: "This is avengers", author: "Adam Aijaz" })
            .set('Accept', 'application/json')
            .then((res) => {
            console.log('response body....', res.body);
            expect(res.status).toEqual(200);
            expect(res.body).toHaveProperty('isbn');
            done();
        });
    }));
});

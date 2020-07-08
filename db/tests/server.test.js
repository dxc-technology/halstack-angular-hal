// Import the dependencies for testing
/*import {chai} from 'chai';
import {chaiHttp} from 'chai-http';
import { app } from '../server';

const expect = requiere('chai').expect;

// Configure chai
chai.use(chaiHttp);
chai.should();

var request = request("http://localhost:3000")

 describe("Data", () => {
    describe("GET /data", () => {
        // Test to get all students record
        it("Should return json as default data format", (done) => {
             chai.request(app)
                 .get('/data')
                 .end((err, res) => {
                     res.should.have.status(200);
                     res.body.should.be.a('object');
                     done();
                  });
         });
    });
});*/

const request = require('supertest');
const app = require('../server');
const req = request(app);


describe('GET Endpoints', () => {
    it('Gets the test endpoint', async done => {
        const res = await req.get('/');
        console.log("res.status:",res);
        done();
      })
})
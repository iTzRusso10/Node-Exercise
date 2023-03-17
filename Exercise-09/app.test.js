const supertest = require("supertest");
const jestConfig = require("../jest.config.js");
const createApp = require("./app.js");

const app = createApp();
const request = supertest(app);


test("GET / ",  async () => {
    const response = await request
    .get("/")
    .expect(200)
    .expect("Content-Type", "text/html");

    expect(response.text).toEqual("<html><body><h1>Welcome to iTzRussoServer</h1></body></html>")
})
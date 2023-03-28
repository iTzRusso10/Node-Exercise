import test from "node:test"
import supertest from "supertest"
import app from "./app"

const request = supertest(app)

test("/planets", async () => {
    const res = await request
        .get("/planets")
        .expect(200)
        .expect("Content-Type", /application\/json/);

    expect(res.body).toEqual([
        { name: "Giove" },
        { name: "Saturno" }
    ]);
});


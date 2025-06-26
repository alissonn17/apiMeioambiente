import supertest from "supertest";

import app from "./server.js";

import { info } from "./data/main";

test("GET / pega informarção da api", async ()=>{
    console.log(app)
    return await supertest(app)
    .get("/")
    .expect(200)
    .then((response)=>{
        expect(response.body.Main).toEqual(
            info
        );
    });
});
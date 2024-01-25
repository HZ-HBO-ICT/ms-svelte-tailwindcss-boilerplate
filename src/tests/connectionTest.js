import { describe, it, expect } from "vitest";

export function testConnection() {

    describe("The connection between the database -> microservice accounts -> server -> project works.", () => {
        it("gets all accounts", async () => {
            const response = await fetch("http://localhost:3001/acc/get");
            expect(response.status).toBe(200);
        });
    });

    describe("The connection between the database -> microservice matches -> server -> project works.", () => {
        it("gets all matches", async () => {
            const response = await fetch("http://localhost:3001/match/get");
            expect(response.status).toBe(200);
        });
    });

    describe("The connection between the database -> microservice journal entries -> server -> project works.", () => {
        it("gets all entries", async () => {
            const response = await fetch("http://localhost:3001/entries");
            expect(response.status).toBe(200);
        });
    });

    describe("The connection between the database -> microservice challenges -> server -> project works.", () => {
        it("gets all the posts", async () => {
            const response = await fetch("http://localhost:3001/challenges");
            expect(response.status).toBe(200);
        });
    });
}
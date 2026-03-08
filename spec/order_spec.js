import { handleInput, clearInput } from '../Order.js';

describe("Tests all stages of an order", function () {
    beforeEach(function () {
        clearInput();
    });

    it("test hello", function () {
        const aResults = handleInput("hello");
        expect(aResults[0]).toBe("Welcome to Fast Bites.");
    });

    it("test burger order", function () {
        handleInput("hello");
        const aResults = handleInput("burger");
        expect(aResults[0]).toBe("You selected Burger.");
    });

    it("test drink", function () {
        handleInput("hello");
        handleInput("burger");
        handleInput("large");
        const aResults = handleInput("cheese");
        expect(aResults[0]).toBe("Would you like to add a drink to your order?");
    });
});
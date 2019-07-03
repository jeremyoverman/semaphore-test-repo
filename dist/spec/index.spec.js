"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index = require("../index");
describe('the index.ts module', function () {
    describe('the add function', function () {
        it('should add two numbers together', function () {
            var sum = index.add(4, 5);
            expect(sum).toBe(9);
        });
    });
    describe('the subtract function', function () {
        it('should subtract the second number from the first', function () {
            var diff = index.subtract(10, 5);
            expect(diff).toBe(5);
        });
    });
});

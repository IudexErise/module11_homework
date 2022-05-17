import {fibonacci} from "../fibonacci.js"

describe('Get Fibonacci numbers', () => {
    it("5th Fibonacci number", () => 
    expect(fibonacci(5)).toBe(5));
    it("7th Fibonacci number", () => 
    expect(fibonacci(7)).toBe(13));
    it("10th Fibonacci number", () => 
    expect(fibonacci(10)).toBe(55));
  });
const {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} = require("./exercise-1");

describe("addNumbers", () => {
  it("should add numbers (10, 10) correctly", () => {
    expect(addNumbers(10, 10)).toBe(20);
  });
  it("should add numbers (-20, 10) correctly", () => {
    expect(addNumbers(-20, 10)).toBe(-10);
  });
  it("should add numbers (100, -1000) correctly", () => {
    expect(addNumbers(100, -1000)).toBe(-900);
  });
  it("should add numbers (5.5, 5.555) correctly", () => {
    expect(addNumbers(5.5, 5.555)).toBeCloseTo(11.055);
  });
  it("should add numbers (1/3, -1/3) correctly", () => {
    expect(addNumbers(1 / 3, -1 / 3)).toBeCloseTo(0);
  });
  it("should add numbers (Number.MAX_VALUE, Number.MIN_VALUE) correctly", () => {
    expect(addNumbers(Number.MAX_VALUE, Number.MIN_VALUE)).toBeCloseTo(
      1.7976931348623157e308
    );
  });
  it("should handle single parameter", () => {
    expect(() => addNumbers(0)).toThrow(
      Error("addNumbers: More Arguments Necessary")
    );
  });
  it("should handle too many parameters", () => {
    expect(() => addNumbers(1, 2, 3)).toThrow(
      Error("addNumbers: Too Many Arguments")
    );
  });
  it("should handle no parameters", () => {
    expect(() => addNumbers()).toThrow(
      Error("addNumbers: More Arguments Necessary")
    );
  });
});

describe("subtractNumbers", () => {
  it("should subtract numbers (50, 10) correctly", () => {
    expect(subtractNumbers(50, 10)).toBe(40);
  });
  it("should subtract numbers (50, 150) correctly", () => {
    expect(subtractNumbers(50, 150)).toBe(-100);
  });
  it("should subtract numbers (0, -1000) correctly", () => {
    expect(subtractNumbers(0, -1000)).toBe(1000);
  });
  it("should subtract numbers (5.5, 5.555) correctly", () => {
    expect(subtractNumbers(5.5, 5.555)).toBeCloseTo(-0.055);
  });
  it("should subtract numbers (1/3, -1/3) correctly", () => {
    expect(subtractNumbers(1 / 3, -1 / 3)).toBeCloseTo(2 / 3);
  });
  it("should subtract numbers (Number.MAX_VALUE, Number.MIN_VALUE) correctly", () => {
    expect(subtractNumbers(Number.MAX_VALUE, Number.MIN_VALUE)).toBeCloseTo(
      1.7976931348623157e308
    );
  });
  it("should handle single parameter", () => {
    expect(() => subtractNumbers(0)).toThrow(
      Error("subtractNumbers: More Arguments Necessary")
    );
  });
  it("should handle too many parameters", () => {
    expect(() => subtractNumbers(1, 2, 3)).toThrow(
      Error("subtractNumbers: Too Many Arguments")
    );
  });
  it("should handle no parameters", () => {
    expect(() => subtractNumbers()).toThrow(
      Error("subtractNumbers: More Arguments Necessary")
    );
  });
});

describe("multiplyNumbers", () => {
  it("should multiply numbers (10, 10) correctly", () => {
    expect(multiplyNumbers(10, 10)).toBe(100);
  });
  it("should multiply numbers (-20, 10) correctly", () => {
    expect(multiplyNumbers(-20, 10)).toBe(-200);
  });
  it("should multiply numbers (-100, -1000) correctly", () => {
    expect(multiplyNumbers(-100, -1000)).toBe(100000);
  });
  it("should multiply numbers (5.5, 5.555) correctly", () => {
    expect(multiplyNumbers(5.5, 5.555)).toBeCloseTo(30.5525);
  });
  it("should multiply numbers (1/3, -1/3) correctly", () => {
    expect(multiplyNumbers(1 / 3, -1 / 3)).toBeCloseTo(-1 / 9);
  });
  it("should multiply numbers (Number.MAX_VALUE, Number.MIN_VALUE) correctly", () => {
    expect(multiplyNumbers(Number.MAX_VALUE, Number.MIN_VALUE)).toBeCloseTo(
      8.881784197001251e-16
    );
  });
  it("should handle single parameter", () => {
    expect(() => multiplyNumbers(0)).toThrow(
      Error("multiplyNumbers: More Arguments Necessary")
    );
  });
  it("should handle too many parameters", () => {
    expect(() => multiplyNumbers(1, 2, 3)).toThrow(
      Error("multiplyNumbers: Too Many Arguments")
    );
  });
  it("should handle no parameters", () => {
    expect(() => multiplyNumbers()).toThrow(
      Error("multiplyNumbers: More Arguments Necessary")
    );
  });
});

describe("divideNumbers", () => {
  it("should divide numbers (10, 10) correctly", () => {
    expect(divideNumbers(10, 10)).toBe(1);
  });
  it("should divide numbers (-20, 10) correctly", () => {
    expect(divideNumbers(-20, 10)).toBe(-2);
  });
  it("should divide numbers (4, 5) correctly", () => {
    expect(divideNumbers(4, 5)).toBeCloseTo(0.8);
  });
  it("should divide numbers (5.5, 5.555) correctly", () => {
    expect(divideNumbers(5.5, 5.555)).toBeCloseTo(100 / 101);
  });
  it("should divide numbers (1/3, -1/3) correctly", () => {
    expect(divideNumbers(1 / 3, -1 / 3)).toBeCloseTo(-1);
  });
  it("should divide numbers (Number.MAX_VALUE, Number.MIN_VALUE) correctly", () => {
    expect(divideNumbers(Number.MAX_VALUE, Number.MIN_VALUE)).toBeCloseTo(
      Infinity
    );
  });
  it("should handle division by zero", () => {
    expect(divideNumbers(10, 0)).toBe(Infinity);
  });
  it("should handle single parameter", () => {
    expect(() => divideNumbers(0)).toThrow(
      Error("divideNumbers: More Arguments Necessary")
    );
  });
  it("should handle too many parameters", () => {
    expect(() => divideNumbers(1, 2, 3)).toThrow(
      Error("divideNumbers: Too Many Arguments")
    );
  });
  it("should handle no parameters", () => {
    expect(() => divideNumbers()).toThrow(
      Error("divideNumbers: More Arguments Necessary")
    );
  });
});

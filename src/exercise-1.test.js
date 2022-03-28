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
});

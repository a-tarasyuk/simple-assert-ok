import assert from "../src/SimpleAssertOK";

describe("SimpleAssertOK", () => {
  it("assert(true)", () => {
    expect(() => assert(true)).not.toThrow();
  });

  it("assert(false)", () => {
    expect(() => assert(false)).toThrowError("Assertion Failed");
  });

  it('assert(false, "custom error message")', () => {
    expect(() => assert(false, "custom error message")).toThrowError(
      "custom error message",
    );
  });
});

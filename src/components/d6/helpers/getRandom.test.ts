import { getRandom } from "./getRandom";

describe("getRandom", () => {
  test("returns random element from array", () => {
    // Arrange
    const anArray = ["a", "b", "c"];
    // Act
    const result = getRandom(anArray);
    // Assert
    expect(anArray).toContain(result);
  });
  test("returns consistent results", () => {
    // Arrange
    const anArray = ["a", "b", "c"];
    // Act
    const results = Array.from({ length: 100 }, () => getRandom(anArray));
    // Assert
    expect(results.every(result => anArray.includes(result))).toBe(true);
  });
  it("", () => {
    // Arrange
    const emptyArray: string[] = [];
    // Act
    const result = getRandom(emptyArray);
    // Assert
    expect(result).toBe(undefined)
  })
});

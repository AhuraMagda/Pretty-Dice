import { checkIfAllSame } from "./checkIfAllSame";

describe("checkIfAllSame", () => {
    test("returns true if all elements the same", () => {
        // Arrange 
        const input = ["a", "a", "a"]
        // Act
        const result = checkIfAllSame(input)
        // Assert 
        expect(result).toBe(true)
    })
    test("returns false if not all elements the same", () => {
        // Arrange 
        const input = ["a", "b", "a"]
        // Act
        const result = checkIfAllSame(input)
        // Assert 
        expect(result).toBe(false)
    })
    // test for an empty array
    // test with "1"
    // "aa"
})
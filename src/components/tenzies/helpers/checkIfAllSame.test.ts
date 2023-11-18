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
    test("returns true with more complex strings", () => {
        // Arrange 
        const input = ["string1", "string1", "string1", "string1"]
        // Act
        const result = checkIfAllSame(input)
        // Assert 
        expect(result).toBe(true)
    })
    test("returns true with empty array", () => {
        // Arrange 
        const input: string[] = [];
        // Act
        const result = checkIfAllSame(input)
        // Assert 
        expect(result).toBe(true)
    })
});
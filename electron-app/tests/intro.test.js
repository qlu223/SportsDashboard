import { describe, test, it, expect } from "vitest";
import { max2 } from "./intro";


describe('max2', () => {
    it('should return first argument', () => {
        //Arrange
        let a = 2;
        let b = 1;

        //Act
        const result = max2(a, b);
        //Assert
        expect(result).toBe(max(a, b));
    }
    )
})
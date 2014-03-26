describe("My Calculator", function() {
    it("Add should calculate 1 + 1 = 2", function() {
        expect(calc.add(1,1)).toBe(2);
    })
    it("Add should be able to deal with strings", function(){
        expect(function() {calc.add("hello","")}).toThrow(new Error("Not a number"))
    })
    it("Subtract should calculate 1 - 1 = 0", function () {
        expect(calc.subtract(1, 1)).toBe(0);
    })
    it("Subtract should be able to deal with strings and return Not a number", function () {
        expect(function () { calc.subtract("hello", "") }).toThrow(new Error("Not a number"))
    })
    it("Multiply should calculate 1 * 2 = 2", function () {
        expect(calc.multiply(1, 2)).toBe(2);
    })
    it("Multiply should be able to deal with strings and return Not a number", function () {
        expect(function () { calc.multiply("hello", "") }).toThrow(new Error("Not a number"))
    })
    it("Divide should calculate 2 * 2 = 1", function () {
        expect(calc.divide(2, 2)).toBe(1);
    })
    it("Divide should be able to deal with strings and return Not a number", function () {
        expect(function () { calc.divide("hello", "") }).toThrow(new Error("Not a number"))
    })
})
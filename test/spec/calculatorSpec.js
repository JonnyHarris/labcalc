describe("My Calculator", function() {
    it("should calculate 1 + 1 = 2", function() {
        expect(calc.add(1,1)).toBe(2);
    })
    it("should be able to deal with strings", function(){
        expect(function() {Converter.convertFromPoundsToKIlo("hello")}).toThrow(new Error("Not a number"))
    })
})
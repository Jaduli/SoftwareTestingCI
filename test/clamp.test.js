import { expect } from "chai"
import clamp from "../src/clamp.js"


describe("clampTests", () => {
    it("should return same number if between bounds", ()=>
    {
        expect(clamp(5,-5,10)).to.equal(5)
    })

    it("should return lower bound if number is below it", ()=>
    {
        expect(clamp(-10,-5,5)).to.equal(-5)
    })

    it("should return upper bound if number is above it", ()=>
    {
        expect(clamp(10,-5,5)).to.equal(5)
    })

    it("should throw TypeError with non-number bounds", ()=>
    {
        expect(clamp(10,"up","down")).to.throw(TypeError)
    })
})
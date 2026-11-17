import { expect } from "chai"
import ceil from "../src/ceil.js"


describe("ceilTests", () => {
    it("should round up to whole number with no percision given", ()=>
    {
        expect(ceil(4.006)).to.equal(5)
    })

    it("should round up to 2 decimals with percision of 2", ()=>
    {
        expect(ceil(6.004, 2)).to.equal(6.01)
    })

    it("should round up to the nearest hundred with percision of -2", ()=>
    {
        expect(ceil(6040, -2)).to.equal(6100)
    })

    it("should return TypeError with invalid number", ()=>
    {
        expect(ceil("viisi",2)).to.throw(TypeError)
    })

    it("should return TypeError with invalid precision", ()=>
    {
        expect(ceil(5.0005,"kaksi")).to.throw(TypeError)
    })
})
import { expect } from "chai"
import add from "../src/add.js"


/*
* add.js, one of two pre-planned test case designs included in test plan.
* The following tests are made according to the plan.
*/

describe("addTests", () => {
    it("should return -2 with augend as 2 and addend as -4", ()=>
    {
        expect(add(2,-4)).to.equal(-2)
    })

    it("should return TypeError with invalid augend", ()=>
    {
        expect(add("kaksi",3)).to.throw(TypeError)
    })

    it("should return TypeError with invalid addend", ()=>
    {
        expect(add(2,"kolme")).to.throw(TypeError)
    })

    it("should return 6.603 with augend as 8.944 and addend as -2.341", ()=>
    {
        // Using closeTo to prevent floating-point precision error with decimals
        expect(add(8.944,-2.341)).to.be.closeTo(6.603, 0.0000001)
    })
})
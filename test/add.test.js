import { expect } from "chai"
import add from "../src/add.js"


// describe represents our test suite
describe("addTests", () => {

    //it represents singular unit test
    it("should return 5 with augend as 2 and addend as 3", ()=>
    {
        //expect is where the assertion of the behavior happens
        expect(add(2,3)).to.equal(5)
    })
})
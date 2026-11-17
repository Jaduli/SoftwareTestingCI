import { expect } from "chai"
import isEmpty from "../src/isEmpty.js"
import { potatoProduct } from "./helpers/mockData.js"


describe("isEmptyTests", () => {

    describe("Array tests", () =>{

        it("should return true when array is empty", () => {
            expect(isEmpty([])).to.equal(true)
        })

        it("should return true when array is null", () => {
            expect(isEmpty(null)).to.equal(true)
        })

        it("should return true when array is undefined", () => {
            expect(isEmpty(undefined)).to.equal(true)
        })

        it("should return false when array contains string", () => {
            expect(isEmpty(['foobar'])).to.equal(false)
        })

        it("should return false when array contains number", () => {
            expect(isEmpty([123])).to.equal(false)
        })

        it("should return false when array contains object", () => {
            expect(isEmpty([potatoProduct])).to.equal(false)
        })

        it("should return false when array contains multiple strings", () => {
            expect(isEmpty(['foobar', 'secondValue'])).to.equal(false)
        })
    })

    describe("String tests", () =>{

        it("should return true with empty string", () => {
            expect(isEmpty("")).to.equal(true)
        })

        it("should return false with string that has data", () => {
            expect(isEmpty("foobar")).to.equal(false)
        })
    })

    describe("Map tests", () =>{
        const emptyMap = new Map();

        const map = new Map();
        map.set("a", 1);
        map.set("b", 2);

        it("should return false with empty map", () => {
            expect(emptyMap.size).to.equal(0)
            expect(isEmpty(emptyMap)).to.equal(true)
        })

        it("should return true with map that contains values", () => {
            expect(map.size).to.be.greaterThan(0)
            expect(isEmpty(map)).to.equal(false)
        })
    })
})
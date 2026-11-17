import { expect } from "chai"
import chunk from "../src/chunk.js";

describe("chunkTests", () => {
// TODO: slice.js mock/stub? Chunk kutsuu slice.js.
// Slicessä bugi?

    it("should split the array into two", () => { // Bug found
        expect(chunk([2, 4, 8, 16], 2)).to.deep.equal([[2, 4], [8, 16]])
    })

    it("should split the array into two, last chunk should be shorter", () => {
        expect(chunk([2, 4, 8], 2)).to.deep.equal([[2, 4], [8]])
    })

    it("should return the whole array in one chunk when size is greater than array length", () => {
        expect(chunk([2, 4, 8], 5)).to.deep.equal([[2, 4, 8]])
    })

    it("should return an empty array when given a size smaller than 1", () => {
        expect(chunk([], 0)).to.deep.equal([])
    })

    it("should return arrays with size 1, when size is not given", () => {
        expect(chunk([2, 4, 8])).to.deep.equal([2], [4], [8])
    })

    it("should return an empty array when given an empty array", () => {
        expect(chunk([], 2)).to.deep.equal([])
    })

    it("should return an empty array when given null", () => {
        expect(chunk(null, 2)).to.deep.equal([])
    })

    it("should return an empty array when given undefined", () => {
        expect(chunk(undefined, 2)).to.deep.equal([])
    })
})
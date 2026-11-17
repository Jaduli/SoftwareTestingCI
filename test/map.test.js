import { expect } from "chai"
import { productList } from "./helpers/mockData.js"
import map from "../src/map.js"

describe("mapTests", () => {
    function square(n) {
        return n * n
    }

    function toUpper(text) {
        return text.toUpperCase();
    }

    it("should map numbers correctly", () => {
        expect(map([2, 4, 8], square)).to.deep.equal([4, 16, 64])
    })

    it("should map strings correctly", () => {
        expect(map(["foo", "bar"], toUpper)).to.deep.equal(["FOO", "BAR"])
    })

    it("should return an empty array when given an empty array", () => {
        expect(map([], (x) => x)).to.deep.equal([])
    })

    it("should return an empty array when array is null", () => {
        expect(map(null, (x) => x)).to.deep.equal([])
    })

    it("should return an empty array when array is  undefined", () => {
        expect(map(undefined, (x) => x)).to.deep.equal([])
    })

    it("should extract product names from productList", () => {
        const names = map(productList, (item) => item.product.info.name)
        expect(names).to.deep.equal(["Potatoes", "Carrots", "Apples"])
    })
    
    it("should extract prices from productList", () => {
        const prices = map(productList, (item) => item.product.pricing.pricePerKg)
        expect(prices).to.deep.equal([1.49, 2.49, 2.99])
    })
})
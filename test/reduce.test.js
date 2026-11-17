import { expect } from "chai"
import reduce from "../src/reduce.js"
import { productList } from "./helpers/mockData.js"


describe("reduceTests", () => {
    it("should reduce an array using the provided accumulator", () => {
        const result = reduce([1, 2], (sum, n) => sum + n, 0)

        expect(result).to.equal(3)
    })

    it("should use the first array value as the accumulator when one is not provided", () => {
        const result = reduce([2, 3, 4], (product, n) => product * n)

        expect(result).to.equal(24)
    })

    it("should utilize a given function to seperate same values in an object", () => {
        const result = reduce({ 'a': 1, 'b': 2, 'c': 1 }, (result, value, key) => {
            (result[value] || (result[value] = [])).push(key)
            return result
        }, {})

        expect(result).to.deep.equal({ '1': ['a', 'c'], '2': ['b'] })
    })

    it("should return the total price of products", () => {
        const total = reduce(productList, (sum, item) => sum + item.product.pricing.pricePerKg, 0)

        // Using closeTo to prevent floating-point precision error with decimals
        expect(total).to.be.closeTo(6.97, 0.0000001)
    })

    it("should return the provided accumulator if given an empty object", () => {
        const result = reduce({}, (sum, n) => sum + n, 2)

        expect(result).to.equal(2)
    })
})
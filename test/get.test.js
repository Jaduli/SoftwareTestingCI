import { expect } from "chai"
import get from "../src/get.js"
import { potatoProduct } from "./helpers/mockData.js"

describe("getTests", () => {
    it("should return correct string for correct path", () => {
        expect(get(potatoProduct, 'product.info.name')).to.equal(potatoProduct.product.info.name)
    })

    it("should return correct string for correct path", () => {
        expect(get(potatoProduct, 'product.tags[1]')).to.equal(potatoProduct.product.tags[1])
    })

    it("should return correct number for correct path", () => {
        expect(get(potatoProduct, 'product.pricing.pricePerKg')).to.equal(potatoProduct.product.pricing.pricePerKg)
    })

    it("should return defaultValue when path does not exist", () => {
        expect(get(potatoProduct, 'product.pricing.doesNotExist', "N/A")).to.equal("N/A")
    })

    it("should return undefined when path does not exist and defaultValue is not set", () => {
        expect(get(potatoProduct, 'product.pricing.doesNotExist')).to.equal(undefined)
    })
})
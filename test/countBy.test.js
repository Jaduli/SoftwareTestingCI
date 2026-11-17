import { expect } from "chai"
import countBy from "../src/countBy.js"
import { productList } from "./helpers/mockData.js"


describe("countByTests", () => {
    it("should return number of each boolean of key in object", ()=>
    {
        const result = countBy(productList, item => item.product.active)

        expect(result).to.deep.equal({ 'true': 2, 'false': 1 })
    })

    it("should return number of each string of key in object", ()=>
    {
        const result = countBy(productList, item => item.product.pricing.currency)

        expect(result).to.deep.equal({ "EUR": 3 })
    })

    it("should return number of each numerical value of key in object", ()=>
    {
        const result = countBy(productList, item => item.product.pricing.vatRate)

        expect(result).to.deep.equal({ "0.14": 3 })
    })

    it("should return empty object when given an empty object", ()=>
    {
        const result = countBy({}, item => item)

        expect(result).to.deep.equal({})
    })

    it("should return empty object when key does not exist", ()=>
    {
        const result = countBy(productList, item => item.product.pricing.total)

        expect(result).to.deep.equal({})
    })
})
import { expect } from "chai"
import { filter } from "mathjs"
import { productList } from "./helpers/mockData.js"
import { potatoProduct } from "./helpers/mockData.js"
import { appleProduct } from "./helpers/mockData.js"
import { carrotProduct } from "./helpers/mockData.js"

describe("filterTests", () => {
    it("should return only products where active === true", () => {
        const result = filter(productList, (item) => item.product.active === true)

        expect(result).to.have.lengthOf(2)
        expect(result).to.deep.equal([potatoProduct, appleProduct])
        expect(result).to.not.include(carrotProduct)
    })

    it("should return only products with vegetable tag", () => {
        const result = filter(productList, (item) => item.product.tags.includes("vegetable"))
        
        expect(result).to.have.lengthOf(2)
        expect(result).to.deep.equal([potatoProduct, carrotProduct])
        expect(result).to.not.include(appleProduct)
    })

    it("should return correct product when filtered by name", () => {
        const result = filter(productList, (item) => item.product.info.name === "Carrots")
        
        expect(result).to.have.lengthOf(1)
        expect(result).to.deep.equal([carrotProduct])
    })

    it("should return only products with pricePerKg over 2", () => {
        const result = filter(productList, (item) => item.product.pricing.pricePerKg > 2)
        
        expect(result).to.have.lengthOf(2)
        expect(result).to.deep.equal([carrotProduct, appleProduct])
        expect(result).to.not.include(potatoProduct)
    })

    it("should return an empy array when nothing matches filter", () => {
        const result = filter(productList, (item) => item.product.pricing.pricePerKg > 999)
        
        expect(result).to.have.lengthOf(0)
    })
})
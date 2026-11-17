export const potatoProduct = {
    product: {
        info: {
            name: 'Potatoes',
            variety: 'Annabelle'
        },
        tags: ["organic", "vegetable"],
        active: true,
        supplier: [
            {
                name: "Potato Farm Oy",
                country: 'Finland'
            }
        ],
        pricing: {
            pricePerKg: 1.49,
            currency: "EUR",
            vatRate: 0.14
        }
    }
}

export const carrotProduct = {
    product: {
        info: {
            name: 'Carrots',
            variety: 'Nantes'
        },
        tags: ["vegetable"],
        active: false,
        supplier: [
            {
                name: "Carrot Farm Oy",
                country: 'Finland'
            }
        ],
        pricing: {
            pricePerKg: 2.49,
            currency: "EUR",
            vatRate: 0.14
        }
    }
}

export const appleProduct = {
    product: {
        info: {
            name: 'Apples',
            variety: 'Honeycrisp'
        },
        tags: ["fruit"],
        active: true,
        supplier: [
            {
                name: "Apple Orchard Oy",
                country: 'Finland'
            }
        ],
        pricing: {
            pricePerKg: 2.99,
            currency: "EUR",
            vatRate: 0.14
        }
    }
}

export const productList = [potatoProduct, carrotProduct, appleProduct]

export default potatoProduct

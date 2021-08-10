var faker = require('faker');

var database = { products: [], customers: [] };

for (let index = 1; index <= 300; index++) {
    database.products.push({
        id: faker.random.alphaNumeric(4),
        name: faker.commerce.productName(),
        description: faker.lorem.sentences(),
        price: faker.commerce.price(),
        quantity: faker.datatype.number(1000)
    });
}

for (let index = 1; index <= 100; index++) {
    database.customers.push({
        id: faker.random.alphaNumeric(6),
        name: `${faker.name.findName()} ${faker.name.lastName()}`,
        title: faker.name.title()
    });
}

console.log(JSON.stringify(database));

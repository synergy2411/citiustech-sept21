const faker = require("faker");

let db = { products : []};

for(let i = 1; i <= 100; i++){
    db.products.push({
        id : i,
        name : faker.random.words(),
        cost : Math.round(Math.random() * 100),
        qunatity : Math.round(Math.random() * 1000)
    })
}

console.log(JSON.stringify(db))

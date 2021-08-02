var computer = {
    price: 30000,
    storage: '15GB',
    processor: 'intel i5'
}

console.log(computer.storage);
var computerPrice = computer.price;
// console.log(computerPrice);



// set a property
var propertyName = 'price';


// computer.price = 21000;

// computer['price'] = 21500;

computer[propertyName] = 20000;

console.log(computer.price);
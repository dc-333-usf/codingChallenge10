//Task 1: creating a product class. Inventory management scenario.
class Product { //create product class
    constructor(name, id, price, stock) { //construct using given variables
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() { //create a method to return the product details, which can be logged to the console
        return `Product details:\n\nProduct name:${this.name}\nProduct ID: ${this.id}\nProduct price: ${this.price}\nProduct stock number: ${this.stock}`
    }

    updateStock(quantity) { //subtracts given amount from quantity
        this.stock -= quantity;
    }
    }

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 10"

prod1.updateStock(3); //since the example wants us to subtract the number given by the stock, it does that
console.log(prod1.getDetails()); // Expected output: "Product: Laptop, ID: 101, Price: $1200, Stock: 7"

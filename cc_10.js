//Task 1: creating a product class. Inventory management scenario.
class Product { //create product class
    constructor(name, id, price, stock) { //construct using given variables
        this.name = name;
        this.id = id;
        this.price = price;
        this.stock = stock;
    }

    getDetails() { //create a method to return the product details, which can be logged to the console
        return `Product details:\n\nProduct name:${this.name}\nProduct ID: ${this.id}\nProduct price: ${this.price}\nStock: ${this.stock}`
    }

    updateStock(quantity) { //subtracts given amount from quantity
        this.stock -= quantity;
    }
    }

const prod1 = new Product("Laptop", 101, 1200, 10);
console.log(prod1.getDetails()); 

prod1.updateStock(3); //since the example wants us to subtract the number given by the stock, it does that
console.log(prod1.getDetails()); 


//Task 2: creating an order class. Inventory system scenario.
class Order { //create new class
    constructor(orderID, product, quantity) { //use constructor to specify variable values
        this.orderID = orderID;
        this.product = product;
        this.quantity = quantity;
        this.product.updateStock(this.quantity); //using the updateStock method from the Product class to automatically decrease the stock when and order is created
    };

    getOrderDetails() { 
        const totalPrice = this.product.price * this.quantity; //create a variable to calculate the total price of the order
        return `Order details:\n\nOrder ID: ${this.orderID}\nProduct: ${this.product.name}\nQuantity: ${this.quantity}\nTotal price: ${totalPrice}` //return specified information about the order
    };

}

const order1 = new Order(501, prod1, 2); //create an instance for the order class
console.log(order1.getOrderDetails()); //use the defined method in order to get information about the order

console.log(prod1.getDetails()); //use the method from our last class on the new product we defined at the end of task 1 to see the effect on stock

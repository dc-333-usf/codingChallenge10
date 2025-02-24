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


//Task 3: Creating an inventory class. Multiple product scenario.
class Inventory { //create the inventory class
    constructor() { //use the constructor to create the empty array
        this.products = []; //create empty array of products
        this.orders = []; //Task 4
    }

    addProduct(product) {
        this.products.push(product); //create a method that takes the specified input and adds it to the products array
    }

    listProducts() {
        console.log("Products:");
        this.products.forEach(prod => {
            console.log(prod.getDetails());
        }); //a method starting with the title "Products:", then for each instance of the products array, it will get the product details from the product array
     }

    placeOrder(orderID, product, quantity) { //Task 4
        if (product.stock >= quantity) { //if the stock is greater than the quantity ordered
            const order = new Order(orderID, product, quantity); //create a new instance of the order class
            this.orders.push(order); //push the order to the orders array
         } else { //if the stock is not greater than or equal to the quantity
            console.log(`Insufficient stock.`); //do not create a new instance of the order class, send an error message
         }
    }

    listOrders() { //Task 4
        console.log("Orders:"); //console log the title
        const orderDetails = this.orders.map( order => order.getOrderDetails()); //for each instance in the orders array, get the order details
        console.log(orderDetails.join(`\n`)); //create a string from the array, separating instances with a line break
    }
    
    restockProduct(productId, quantity) { //Task 5
        const product = this.products.find(prod => prod.id === productId); //create a constant equal to the product that matches the product ID in the products array
        if (product) { //if a product is created through the constant, in other words, if an instance in the array has the matching product ID
            product.stock += quantity; //add the specified quantity in the method to the stock of the product
            console.log(`Product ID: ${productId} has been restocked. New stock: ${product.stock}`); //announce that the product has been restocked, say how much stock there is
        } else { //if the constant does not have a value (a product with that ID was not found)
            console.log(`Product with ID ${productId} not found.`); //send an error message
        };
    };
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); //test data


//Task 4: Implementing Order Management. Multiple order scenario.

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails()); //test data


//Task 5: Implementing Product Restocking. Store restocking scenario.

inventory.restockProduct(101, 5);
console.log(prod1.getDetails()); //test data
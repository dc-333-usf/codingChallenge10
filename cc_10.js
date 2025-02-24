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

    placeOrder(orderID, product, quantity){
        if (product.stock >= quantity) {
            const order = new Order(orderID, product, quantity);
            this.orders.push(order);
         } else {
            console.log(`Insufficient stock.`);
         }
    }

    listOrders() { //Task 4: initialize new 
        console.log("Orders:");
        const orderDetails = this.orders.map( order => order.getOrderDetails());
        console.log(orderDetails.join(`\n`));
    }
    
}

const inventory = new Inventory();
inventory.addProduct(prod1);
inventory.listProducts(); //test data


//Task 4: Implementing Order Management. Multiple order scenario.

inventory.placeOrder(601, prod1, 2);
inventory.listOrders();
console.log(prod1.getDetails());


//Task 5: Implementing Product Restocking. Store restocking scenario.
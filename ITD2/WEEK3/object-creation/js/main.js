// Order class to hold the customer's order information.
class Order {
    constructor(customer, item, quantity, price) {
        this.customer = customer;
        this.item = item;
        this.quantity = parseInt(quantity);
        this.price = parseFloat(price);
    }

    // Total the cost of a order.
    totalCost() {
        // toFixed was leared in ITD1
        return (this.quantity * this.price).toFixed(2);
    }
}

// Main class that does most of the work.
class Main {
    constructor() {
        this.form = document.querySelector("#orderForm");
        this.button = document.querySelector("#orderButton");
        this.output = document.querySelector("#ordersResult");
        this.totalResult = document.querySelector("#totalResult");
        this.outputRows = "";

        // Using the function to bind the click. 
        // It is good practice as arrow functions do not support "this".
        // Also, you can't remove the listener when you use arrows.
        this.button.addEventListener("click", this.add);
    }

    add = (e) => {
        e.preventDefault();
        console.log(this);

        const inputs = this.form.querySelectorAll("input");
        let isValid = true;

        inputs.forEach(input => {
            if (!input.reportValidity()) {
                isValid = false;
            }
        });

        if (!isValid) return;

        const newOrder = new Order(
            inputs[0].value, // Customer Name
            inputs[1].value, // Item Description
            inputs[2].value, // Quantity
            inputs[3].value  // Item Price
        );

        alert("The order was added.");

        this.outputRows += `
            <div class="row">
                <div class="cell bottom-border customer-cell">${newOrder.customer}</div>
                <div class="cell bottom-border item-cell">${newOrder.item}</div>
                <div class="cell bottom-border quantity-cell">${newOrder.quantity}</div>
                <div class="cell bottom-border price-cell">${newOrder.price.toFixed(2)}</div>
                <div class="cell bottom-border cost-cell">${newOrder.totalCost()}</div>
            </div>
        `;

        this.output.innerHTML = `
            <h2>Order Summary</h2>
            <div class="table">
                <div class="row">
                    <div class="cell header top-bottom-border customer-cell">Customer Name</div>
                    <div class="cell header top-bottom-border item-cell">Item Description</div>
                    <div class="cell header top-bottom-border quantity-cell">Quantity</div>
                    <div class="cell header top-bottom-border price-cell">Item Price ($)</div>
                    <div class="cell header top-bottom-border cost-cell-h">Total Cost ($)</div>
                </div>
                ${this.outputRows}
            </div>
        `;

        // Code below here could have been combined with above output. 
        // However, we cannot store the object in an array. So I am adding
        // another div based table to show the total of all orders. 
        // To get the values, I am scraping the totals from the cost cells.

        let totals = 0;
        const totalValues = document.querySelectorAll(".cost-cell");

        totalValues.forEach((total) => {
            totals += parseFloat(total.textContent);
        });
        // for (let i = 0; i < totalValues.length; i++) {
        //     totals += parseFloat(totalValues[i].textContent);
        // }

        this.totalResult.innerHTML = `
        <div class="table no-top-border">
            <div class="row">
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div>&nbsp;</div>
                <div class="cell header bottom-border price-cell">Total ($)</div>
                <div class="cell bottom-border cost-cell-t">${totals.toFixed(2)}</div>
            </div>
        </div>
        `;

        this.form.reset();
    };
}

// An IFFE that only instantiates the Main class.
(() => {
    const main = new Main();
})();
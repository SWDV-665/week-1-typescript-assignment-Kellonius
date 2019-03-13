class grocery {

    constructor(public name: string, public description: string, public sku: string, public quantity: number, public price: number) {

    }

}

interface item {
    name: string,
    description: string,
    sku: string,
    quantity: number,
    price: number,
}

let tableHeaders = ["Item Name", "Description", "SKU", "Quantity", "Price", "Total"]
let groceries: item[] = [];
groceries.push(new grocery("Bread", "Wheat Bread", "ABC123456", 10, 3.00));
groceries.push(new grocery("Apples", "Granny Smith", "123D1231", 15, .50));
groceries.push(new grocery("Milk", "Milk, Chocolate", "198AHDSJ13", 2, 3.50));
groceries.push(new grocery("Pizza", "Supreme", "PZA123763", 1, 5.99));

//SETUP THE TABLE
var table = document.createElement("TABLE");
table.setAttribute("id", "myTable");
document.body.appendChild(table);

//SETUP THE HEADERS
let header = document.createElement("TR");
header.setAttribute("id", "headerRow");
document.getElementById("myTable").appendChild(header);

tableHeaders.forEach(th => {
    let headTd = document.createElement("TD");
    let headText = document.createTextNode(th);
    headTd.appendChild(headText);
    document.getElementById("headerRow").appendChild(headTd);
    if (th === "Total") {
        headTd.style.borderRight = "none";
    }
})

//SETUP THE TABLE DATA
let count = 0;
let totalPrice = 0;
groceries.forEach(g => {

    let id = count.toString();

    var y = document.createElement("TR");
    y.setAttribute("id", id);
    document.getElementById("myTable").appendChild(y);

    var z = document.createElement("TD");
    var t = document.createTextNode(g.name);
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    z = document.createElement("TD");
    t = document.createTextNode(g.description);
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    z = document.createElement("TD");
    t = document.createTextNode(g.sku);
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    z = document.createElement("TD");
    t = document.createTextNode(g.quantity.toString());
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    z = document.createElement("TD");
    t = document.createTextNode(g.price.toString());
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    z = document.createElement("TD");
    t = document.createTextNode((g.price * g.quantity).toString());
    z.style.borderRight = "none";
    z.appendChild(t);
    document.getElementById(id).appendChild(z);

    count += 1
    totalPrice += (g.price * g.quantity)
})

//SETUP THE Total Row
let total = document.createElement("TR");
total.setAttribute("id", "totalRow");
document.getElementById("myTable").appendChild(total);

let z = document.createElement("TD");
let t = document.createTextNode("");
z.setAttribute("colSpan", "4")
z.style.borderRight = "1px solid black"
z.appendChild(t);
document.getElementById("totalRow").appendChild(z);

z = document.createElement("TD");
t = document.createTextNode("Total: ");
z.style.fontWeight = "bold";
z.appendChild(t);
document.getElementById("totalRow").appendChild(z);

z = document.createElement("TD");
t = document.createTextNode(totalPrice.toString());
z.style.fontWeight = "bold";
z.style.borderRight = "none"
z.appendChild(t);
document.getElementById("totalRow").appendChild(z);
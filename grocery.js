var grocery = /** @class */ (function () {
    function grocery(name, description, sku, quantity, price) {
        this.name = name;
        this.description = description;
        this.sku = sku;
        this.quantity = quantity;
        this.price = price;
    }
    return grocery;
}());
var tableHeaders = ["Item Name", "Description", "SKU", "Quantity", "Price", "Total"];
var groceries = [];
groceries.push(new grocery("Bread", "Wheat Bread", "ABC123456", 10, 3.00));
groceries.push(new grocery("Apples", "Granny Smith", "123D1231", 15, .50));
groceries.push(new grocery("Milk", "Milk, Chocolate", "198AHDSJ13", 2, 3.50));
groceries.push(new grocery("Pizza", "Supreme", "PZA123763", 1, 5.99));
//SETUP THE TABLE
var table = document.createElement("TABLE");
table.setAttribute("id", "myTable");
document.body.appendChild(table);
//SETUP THE HEADERS
var header = document.createElement("TR");
header.setAttribute("id", "headerRow");
document.getElementById("myTable").appendChild(header);
tableHeaders.forEach(function (th) {
    var headTd = document.createElement("TD");
    var headText = document.createTextNode(th);
    headTd.appendChild(headText);
    document.getElementById("headerRow").appendChild(headTd);
    if (th === "Total") {
        headTd.style.borderRight = "none";
    }
});
//SETUP THE TABLE DATA
var count = 0;
var totalPrice = 0;
groceries.forEach(function (g) {
    var id = count.toString();
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
    count += 1;
    totalPrice += (g.price * g.quantity);
});
//SETUP THE Total Row
var total = document.createElement("TR");
total.setAttribute("id", "totalRow");
document.getElementById("myTable").appendChild(total);
var z = document.createElement("TD");
var t = document.createTextNode("");
z.setAttribute("colSpan", "4");
z.style.borderRight = "1px solid black";
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
z.style.borderRight = "none";
z.appendChild(t);
document.getElementById("totalRow").appendChild(z);

//this function update the person info
function changeInfo()
{
    // first collect the input values for person deatils
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;

    document.getElementById("name1").innerHTML = name;
    document.getElementById("phone1").innerHTML = phone;
}
//this function update the products details

function addItem()
{
    // collect the input value for the product in details 
    const productName = document.getElementById("item1").value;
    const productQty = document.getElementById("item2").value;
    const productPrice = document.getElementById("item3").value;

    // parse Qty and price in number

    const fQty = parseInt(productQty);
    const fPrice = parseFloat(productPrice);

    // now update the reciept with those values

    const table = document.getElementById("product-statement");
    const row = table.insertRow();

    const c1 = row.insertCell();
    const c2 = row.insertCell();
    const c3 = row.insertCell();


    c1.innerHTML = productName;
    c2.innerHTML = productQty;
    c3.innerHTML = fPrice * fQty;

    // now update the total price

    const totalVal = document.getElementById("total-amount").innerHTML;
    const total = parseFloat(totalVal);
    const finalTotal = total + (fPrice * fQty);
    document.getElementById("total-amount").innerHTML = finalTotal.toFixed(2);

    //refresh the placeholder name after updating the product

    document.getElementById("item1").value = "";
    document.getElementById("item2").value = "";
    document.getElementById("item3").value = "";

}
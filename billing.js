// date
let today = new Date();
let month = today.getMonth();
let date = today.getDate();
let year = today.getFullYear();
let currentDate = `Date: ${month}/${date}/${year}`;
document.getElementById('demo').innerHTML = currentDate;
// Personal Information 
document.getElementById('name').addEventListener('keyup', function ()
{
    const name = document.getElementById('name').value;
    const copyName = document.getElementById('name1');
    copyName.innerText = name;

});
document.getElementById('phone').addEventListener('keyup', function ()
{
    const email = document.getElementById('phone').value;
    document.getElementById('phone1').innerText = email;
});

//Price declear
// let bookPricec = 0, cssBookPrice = 0, jsBookPrice = 30, phpBookPrice = 10, pythonBookPrice = 40;
let htmlBookShow = '', cssBookShow = '', jsBookShow = '', phpBookShow = '', pythonBookShow = '';
let htmlBookQuantity = 0, htmlBookPrice = 0, cssBookPrice = 0, cssBookQuantity = 0, jsBookPrice = 0, jsBookQuantity = 0, phpBookPrice = 0, phpBookQuantity = 0, pythonBookPrice = 0, pythonBookQuantity = 0;
let htmlBookAmount = 0, cssBookAmount = 0, jsBookAmount = 0, phpBookAmount = 0, pythonBookAmount = 0;
// item select 
function product()
{

}

document.getElementById('item1').addEventListener('keyup', function ()
{
    htmlBookPrice = this.value;
    if (htmlBookPrice > 0) {
        htmlBookAmount = htmlBookPrice * htmlBookQuantity;
        htmlBookShow = `<tr>
        <td> HTML Book</td>
        <td>${htmlBookPrice}tk</td>
        <td>${htmlBookQuantity} </td>
        <td>${htmlBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {
        htmlBookAmount = '';
        totalAmount();
        htmlBookShow = "";
    }
});

document.getElementById('item2').addEventListener('keyup', function ()
{
    htmlBookQuantity = this.value;
    if (htmlBookQuantity > 0) {
        htmlBookAmount = htmlBookPrice * htmlBookQuantity;
        htmlBookShow = `<tr>
        <td> HTML Book</td>
        <td>${htmlBookPrice}tk</td>
        <td>${htmlBookQuantity} </td>
        <td>${htmlBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {
        htmlBookAmount = '';
        totalAmount();
        htmlBookShow = "";
    }
});

// css book show

document.getElementById('item3').addEventListener('keyup', function ()
{
    cssBookPrice = this.value;
    if (cssBookPrice > 0) {
        cssBookAmount = cssBookPrice * cssBookQuantity;
        cssBookShow = `<td> CSS Book</td>
        <td>${cssBookPrice}tk</td>
        <td>${cssBookQuantity} </td>
        <td>${cssBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        cssBookShow = "";
    }
});

document.getElementById('item4').addEventListener('keyup', function ()
{
    cssBookQuantity = this.value;
    if (cssBookQuantity > 0) {
        cssBookAmount = cssBookPrice * cssBookQuantity;
        cssBookShow = `<td> CSS Book</td>
        <td>${cssBookPrice}tk</td>
        <td>${cssBookQuantity} </td>
        <td>${cssBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        cssBookShow = "";
    }
});

// js book
document.getElementById('item5').addEventListener('keyup', function ()
{
    jsBookPrice = this.value;
    if (jsBookPrice > 0) {
        jsBookAmount = jsBookPrice * jsBookQuantity;
        jsBookShow = `<td> JS Book</td>
        <td>${jsBookPrice}tk</td>
        <td>${jsBookQuantity} </td>
        <td>${jsBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {
        jsBookPrice, jsBookQuantity

        totalAmount();
        jsBookShow = "";
    }
});

document.getElementById('item6').addEventListener('keyup', function ()
{
    jsBookQuantity = this.value;
    if (jsBookQuantity > 0) {
        jsBookAmount = jsBookPrice * jsBookQuantity;
        jsBookShow = `<td> JS Book</td>
        <td>${jsBookPrice}tk</td>
        <td>${jsBookQuantity} </td>
        <td>${jsBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        jsBookShow = "";
    }
});

// php books
document.getElementById('item7').addEventListener('keyup', function ()
{
    phpBookPrice = this.value;
    if (phpBookPrice > 0) {
        phpBookAmount = phpBookPrice * phpBookQuantity;
        phpBookShow = `<td> PHP Book</td>
        <td>${phpBookPrice}tk</td>
        <td>${phpBookQuantity} </td>
        <td>${phpBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        phpBookShow = "";
    }
});

document.getElementById('item8').addEventListener('keyup', function ()
{
    phpBookQuantity = this.value;
    if (phpBookQuantity > 0) {
        phpBookAmount = phpBookPrice * phpBookQuantity;
        phpBookShow = `<td> PHP Book</td>
        <td>${phpBookPrice}tk</td>
        <td>${phpBookQuantity} </td>
        <td>${phpBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        phpBookShow = "";
    }
});

//python books
document.getElementById('item9').addEventListener('keyup', function ()
{
    pythonBookPrice = this.value;
    if (pythonBookPrice > 0) {
        pythonBookAmount = pythonBookPrice * pythonBookQuantity;
        pythonBookShow = `<td> CSS Book</td>
        <td>${pythonBookPrice}tk</td>
        <td>${pythonBookQuantity} </td>
        <td>${pythonBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        pythonBookShow = "";
    }
});

document.getElementById('item10').addEventListener('keyup', function ()
{
    pythonBookQuantity = this.value;
    if (pythonBookQuantity > 0) {
        pythonBookAmount = pythonBookPrice * pythonBookQuantity;
        pythonBookShow = `<td> PYTHON Book</td>
        <td>${pythonBookPrice}tk</td>
        <td>${pythonBookQuantity} </td>
        <td>${pythonBookAmount}</td >
        </tr > `;
        totalAmount();
    }
    else {

        totalAmount();
        pythonBookShow = "";
    }
});

// total calculation

function totalAmount()
{
    document.getElementById('product-statement').innerHTML = htmlBookShow + cssBookShow + jsBookShow + phpBookShow + pythonBookShow;
    document.getElementById('total-amount').innerHTML = htmlBookAmount + cssBookAmount + jsBookAmount + phpBookAmount + pythonBookAmount;
}

// else {
//     document.getElementById('product-statement').innerHTML = "";
// }



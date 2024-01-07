var productName=document.getElementById('productName');
var productPrice=document.getElementById('productPrice');
var productCateogery=document.getElementById('productCateogery');
var productDescription=document.getElementById('productDescription');
var search=document.getElementById('Search');
var addBtn=document.getElementById('addBtn');
var UpdateBtn=document.getElementById('UpdateBtn');
var productArray=[];
if(localStorage.getItem('products')!=null){
    productArray=JSON.parse(localStorage.getItem('products'));
    displayProduct(productArray);
}
function addProduct(){
    if(validateProductName()==true){
        var product={
    name:productName.value,
    price:productPrice.value,
    cateogery:productCateogery.value,
    description:productDescription.value,
}
productArray.push(product);
localStorage.setItem('products',JSON.stringify(productArray));
displayProduct(productArray);
localStorage.setItem
clearform();
console.log(productArray);
}
else{
    window.alert('invalid productName');
}
    }

function displayProduct(x){
    var cartoona=''
    for (let i = 0; i < x.length; i++) {
        cartoona+=`  <tr>
        <td>${x[i].name}</td>
        <td>${x[i].price}</td>
        <td>${x[i].cateogery}</td>
        <td>${x[i].description}</td>
        <td><button onclick='deleteProducts(${i})' class="btn btn-outline-danger">Delete</button></td>
        <td><button onclick='update(${i})' class="btn btn-outline-warning">Update</button></td>
    </tr>`
    }
    document.getElementById('tablebody').innerHTML=cartoona;
}
function clearform(){
    productCateogery.value='';
    productDescription.value='';
    productPrice.value='';
    productName.value='';
}
function deleteProducts(arrayindex){
    productArray.splice(arrayindex,1);
    localStorage.setItem('products',JSON.stringify(productArray));
    displayProduct(productArray);
}

function searchProducts(searchinput) {
    var searcharray=[];
    for (let i = 0; i < productArray.length; i++) {
      if (productArray[i].name.toLowerCase().includes(searchinput.toLowerCase())) {
        searcharray.push(productArray[i]);
      }
    }
    displayProduct(searcharray);
  }
function update(i){
    UpdateBtn.classList.replace('d-none','d-block');
    addBtn.classList.replace('d-block','d-none');
    productName.value=productArray[i].name;
    productPrice.value=productArray[i].price;
    productCateogery.value=productArray[i].cateogery;
    productDescription.value=productArray[i].description;
}
function updatee() {
    UpdateBtn.classList.replace('d-block', 'd-none');
    addBtn.classList.replace('d-none', 'd-block');

    // Get the updated values from the input fields
    var updatedProduct = {
        name: productName.value,
        price: productPrice.value,
        cateogery: productCateogery.value,
        description: productDescription.value,
    };

    // Update the corresponding element in productArray using the product name as the identifier
    for (let i = 0; i < productArray.length; i++) {
        if (productArray[i].name === updatedProduct.name) {
            productArray[i] = updatedProduct;
            break; // Once found and updated, exit the loop
        }
    }

    // Update the productArray in localStorage
    localStorage.setItem('products', JSON.stringify(productArray));

    // Display the updated productArray
    displayProduct(productArray);
}
function validateProductName(){
    var regex=/^[A-Z][a-z]{3,8}$/;
    if(regex.test(productName.value==true)){
        return true;
    }
    else{
        return false;
    }
}
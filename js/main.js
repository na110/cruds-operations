var productTitle = document.getElementById("product-title");
var productPrice = document.getElementById("product-price");
var productCategoray = document.getElementById("product-categoray");
var productDiscription = document.getElementById("product-discription");
var createBtn = document.getElementById("create-btn");
var globelIndex = "";
var productList;

if (localStorage.getItem("productDate") != null) {
  productList = JSON.parse(localStorage.getItem("productDate"));
  displayProduct(productList);
} else {
  productList = [];
}

// G E T     P R O D U C T
function crateProduct() {
  if (createBtn.innerText == "Update Product") {
    updateData();
    clearInput();
    createBtn.innerText = "Create Product";
  } else {
    var product = {
      title: productTitle.value,
      price: productPrice.value,
      categoray: productCategoray.value,
      discription: productDiscription.value,
    };
    productList.push(product);
    localStorage.setItem("productDate", JSON.stringify(productList));
    displayProduct(productList);
    clearInput();
    console.log(productList);
  }
}

createBtn.addEventListener("click", crateProduct);

// D I S P L A Y     P R O D U C T
function displayProduct(displayIndex) {
  var cartona = "";
  for (let i = 0; i < displayIndex.length; i++) {
    cartona += `
        <tr>
            <td>${i + 1}</td>
            <td>${displayIndex[i].title}</td>
            <td>${displayIndex[i].price}</td>
            <td>${displayIndex[i].categoray}</td>
            <td>${displayIndex[i].discription}</td>
            <td><button class="btn btn-warning" onclick="updateProduct(${i})">Update</button></td>
            <td><button class="btn btn-danger" onclick="deleteProduct(${i})">Delete</button></td>
        </tr>
        `;
  }

  document.getElementById("tbody").innerHTML = cartona;
}

// C L E A R     I N P U T
function clearInput() {
  productTitle.value = "";
  productPrice.value = "";
  productCategoray.value = "";
  productDiscription.value = "";
}

// U P D A T E      P R O D U C T
function updateProduct(updateIndex) {
  productTitle.value = productList[updateIndex].title;
  productPrice.value = productList[updateIndex].price;
  productCategoray.value = productList[updateIndex].categoray;
  productDiscription.value = productList[updateIndex].discription;
  createBtn.innerText = "Update Product";
  globelIndex = updateIndex;
}

function updateData(globelIndex) {
  productList.splice(globelIndex, 1, {
    title: productTitle.value,
    price: productPrice.value,
    categoray: productCategoray.value,
    discription: productDiscription.value,
  });
  localStorage.setItem("productDate", JSON.stringify(productList));
}

// D E L E T E       P R O D U C T
function deleteProduct(deleteIndex) {
  productList.splice(deleteIndex, 1);
  localStorage.setItem("productDate", JSON.stringify(productList));
  displayProduct(productList);
  console.log(productList);
}

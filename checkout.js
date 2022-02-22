

function productsFunction() {
    let products = document.querySelectorAll(".product");
    
    products.forEach(product => {
    
        product.addEventListener("click", e=>{
    
            let productPrice = e.currentTarget.children[1].children[1].firstElementChild.firstElementChild;
            let productTotal = e.currentTarget.children[1].lastElementChild;
            let quantity = e.currentTarget.children[1].children[2].children[1];

            if (e.target.classList.contains("fa-plus")){
                quantity.innerText ++;
            }

            else if(e.target.classList.contains("fa-minus") && e.target.parentElement.nextElementSibling.innerText>0){
            quantity.innerText --;
            }

            else if(e.target.classList.contains("remove-product")){
                product.remove();
            };
    
            productTotal.innerText = (quantity.innerText * productPrice.innerText).toFixed(2);
    
     
            allTotals();
    
        })
    
    });
    
    
    /////////////////SUBTOTAL KISMI////////////////
    let subTotal = document.getElementById("cart-subtotal");
    let tax = document.getElementById("cart-tax");
    let shipping =document.getElementById("cart-shipping");
    let productLines = document.querySelectorAll(".product-line-price");
    let total = document.getElementById("cart-total");
    
    function allTotals() {
        let toplam = 0;
    
        productLines.forEach(prototal=>{
            toplam += +prototal.innerText;
            subTotal.children[1].innerText= toplam.toFixed(2);
        });
    
        tax.children[1].innerText = (toplam * 0.18).toFixed(2);
        shipping.children[1].innerText = 15.00;
        total.children[1].innerText = (toplam + (toplam * 0.18) + 15).toFixed(2);
    
    }
    allTotals();
    
}
productsFunction();


//////////////ADD TO CARD////////////

const addToCart = document.getElementById("customer-form").children[1];
let nameProduct = document.getElementById("name");
const priceProduct = document.getElementById("price");
const quantityProduct = document.getElementById("quantity");
let productsId = document.getElementById("products")

const createProduct = (name, price, _quantity) => {
    return `  
    <div class="product">
        <img src="" alt="${name}" style="margin-right: 20px; border-radius: 10px; width: 30%;">
        <div class="product-info">
            <h2>${name}</h2>
            <div class="product-price">
                <p><strong>${price}</strong> <span class="line-through">${price * 130 / 100}</span></p>
            </div>
            <div class="quantity-controller">
                <button>
                <i class="fas fa-minus"></i>
                </button>
                <p id="product-quantity">${_quantity}</p>
                <button>
                    <i class="fas fa-plus"></i>
                </button>
            </div>
            <div class="product-removal">
                <button class="remove-product">
                    Remove
                </button>
            </div>
            <div class="product-line-price">${price * _quantity}</div>
        </div>
    </div>
    
`
}


addToCart.addEventListener("click", () => {
    if (nameProduct.value && priceProduct.value && quantityProduct.value) {
        let productdiv = document.createElement("div");
        productdiv.className = "product";
        productdiv.innerHTML = createProduct(nameProduct.value, priceProduct.value, quantityProduct.value)
        productsId.innerHTML += productdiv.innerHTML;
        console.log(productsId);
        form.reset();
    } 
    else {
        alert("Must be filled out");
    };
    productsFunction();   //////////////////////FOREACH OLAN KISMI TEKRAR BURADA ÇAĞIRIYORUZ//////


})

///////////FORM RESET ///////////
const form = document.querySelector("form")
form.addEventListener("click", (e) => {
    e.preventDefault()
})
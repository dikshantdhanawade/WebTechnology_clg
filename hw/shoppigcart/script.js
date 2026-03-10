let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartList = document.getElementById("cart");
const totalDisplay = document.getElementById("total");
const searchInput = document.getElementById("search");


document.getElementById("productList").addEventListener("click", function(e) {
    if (e.target.tagName === "BUTTON") {
        const name = e.target.dataset.name;
        const price = parseInt(e.target.dataset.price);

        const existing = cart.find(item => item.name === name);

        if (existing) {
            existing.quantity++;
        } else {
            cart.push({ name, price, quantity: 1 });
        }

        saveCart();
        updateCart();
    }
});

function updateCart() {
    cartList.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartList.innerHTML = "<p class='empty'>Cart is empty</p>";
    }

    cart.forEach((item, index) => {
        total += item.price * item.quantity;

        const li = document.createElement("li");
        li.className = "cart-item";

        li.innerHTML = `
            ${item.name} - ₹${item.price} x ${item.quantity}
            <div>
                <button onclick="changeQty(${index}, -1)">-</button>
                <button onclick="changeQty(${index}, 1)">+</button>
                <button onclick="removeItem(${index})">Remove</button>
            </div>
        `;

        cartList.appendChild(li);
    });

    totalDisplay.textContent = total;
}


function changeQty(index, value) {
    cart[index].quantity += value;
    if (cart[index].quantity <= 0) cart.splice(index, 1);
    saveCart();
    updateCart();
}


function removeItem(index) {
    cart.splice(index, 1);
    saveCart();
    updateCart();
}


function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}


searchInput.addEventListener("keyup", function() {
    const filter = this.value.toLowerCase();
    const products = document.querySelectorAll(".product");

    products.forEach(product => {
        const name = product.querySelector("h3").innerText.toLowerCase();
        product.style.display = name.includes(filter) ? "block" : "none";
    });
});


function showBill() {
    let billHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        billHTML += `<p>${item.name} x ${item.quantity} = ₹${item.price * item.quantity}</p>`;
    });

    billHTML += `<hr><h4>Total: ₹${total}</h4>`;
    document.getElementById("billDetails").innerHTML = billHTML;
    document.getElementById("billModal").style.display = "flex";
}


function closeBill() {
    document.getElementById("billModal").style.display = "none";
}

updateCart();
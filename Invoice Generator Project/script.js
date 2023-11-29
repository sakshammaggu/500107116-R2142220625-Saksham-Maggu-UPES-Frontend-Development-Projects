let productId = 1;

function addProduct() {
    const productList = document.getElementById('product-list');
    const productRow = document.createElement('div');
    productRow.classList.add('product-row');
    productRow.innerHTML = `
        <input type="text" placeholder="Product ${productId}" id="product${productId}" class="product-input">
        <input type="number" placeholder="Price" id="price${productId}" class="price-input">
        <input type="number" placeholder="Quantity" id="quantity${productId}" class="quantity-input">
    `;

    productList.appendChild(productRow);

    productId++;
    updateTotal();
}

function updateTotal() {
    const productInputs = document.querySelectorAll('.product-input');
    const priceInputs = document.querySelectorAll('.price-input');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let total = 0;

    for (let i = 0; i < productInputs.length; i++) {
        const price = parseFloat(priceInputs[i].value) || 0;
        const quantity = parseInt(quantityInputs[i].value) || 0;
        total += price * quantity;
    }

    document.getElementById('total').textContent = `Total: $${total.toFixed(2)}`;
}

function generateInvoice() {
    const productInputs = document.querySelectorAll('.product-input');
    const priceInputs = document.querySelectorAll('.price-input');
    const quantityInputs = document.querySelectorAll('.quantity-input');
    let invoiceText = "Invoice\n\n";

    for (let i = 0; i < productInputs.length; i++) {
        const product = productInputs[i].value;
        const price = parseFloat(priceInputs[i].value) || 0;
        const quantity = parseInt(quantityInputs[i].value) || 0;
        const subtotal = price * quantity;

        invoiceText += `${product} - ${quantity} units - $${price.toFixed(2)} each - Subtotal: $${subtotal.toFixed(2)}\n`;
    }

    const total = parseFloat(document.getElementById('total').textContent.split('$')[1]);
    invoiceText += `\nTotal: $${total.toFixed(2)}`;

    document.getElementById('invoice-output').innerHTML = invoiceText;
}
// assign event listener to images
const firstImage = document.getElementById('first');
const secondImage = document.getElementById('second');
const thirdImage = document.getElementById('third');
// change image
const art = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');
// free and express shipping
const freeShipping = document.getElementById('free');
const expressShipping = document.getElementById('express');
// shipping charge
const shippingCharge = document.getElementById('shipping');
// total price
const totalPrice = document.getElementById('total');

freeShipping.addEventListener('click', function() {
    shippingCharge.innerText = '5';
    updateTotal();
});

expressShipping.addEventListener('click', function() {
    shippingCharge.innerText = '30';
    updateTotal();
});

// update total
function updateTotal() {
    const shipping = Number(shippingCharge.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shipping + productPrice;
    totalPrice.innerText = grandTotal;
}

// add event listener on images
firstImage.addEventListener('click', function() {
    art.src = 'images/1.jpg';
    desc.innerText = 'First - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Suscipit minima modi unde? Ex saepe eius impedit sapiente,!';
    price.innerText = '750';
    // update total
    updateTotal();
});

secondImage.addEventListener('click', function() {
    art.src = 'images/2.jpg';
    desc.innerText = 'Second - Lorem ipsum dolor sit amet consectetur adipisicing elit. In hic adipisci fugiat quasi quam expedita molestias. Sint odio voluptates nemo debitis ?';
    price.innerText = '550';
    // update total
    updateTotal();
});

thirdImage.addEventListener('click', function() {
    art.src = 'images/3.jpg';
    desc.innerText = 'Third - Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus corporis sapiente qui dolorem excepturi quam itaque quod assumenda impedit';
    price.innerText = '330';
    // update total
    updateTotal();
});
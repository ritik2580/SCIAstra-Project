document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceDisplay = document.getElementById('total-price');
    const proceedToPaymentButton = document.getElementById('proceed-to-payment');
    const verificationModal = document.getElementById('verification-modal');
    const verifyCodeButton = document.getElementById('verify-code');
    const verificationCodeInput = document.getElementById('verification-code');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    let totalPrice = 0;

    cart.forEach(item => {
        const listItem = document.createElement('div');
        listItem.innerText = `${item.title} - ₹${item.price}`;
        cartItemsContainer.appendChild(listItem);
        totalPrice += item.price;
    });

    totalPriceDisplay.innerText = `Total: ₹${totalPrice}`;

    proceedToPaymentButton.addEventListener('click', () => {
        verificationModal.classList.remove('hidden');
    });

    verifyCodeButton.addEventListener('click', () => {
        if (verificationCodeInput.value === '123456') {
            alert('Payment successful!');
            localStorage.removeItem('cart');
            window.location.href = 'index.html';
        } else {
            alert('Invalid verification code. Please try again.');
        }
    });
});

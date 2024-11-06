document.addEventListener('DOMContentLoaded', () => { 
    const coursesContainer = document.querySelector('.courses-container');
    const cartIcon = document.getElementById('cart-icon');
    const cartCount = document.getElementById('cart-count');
    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updateCartCount = () => {
        cartCount.textContent = cart.length;
    };

    coursesContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const courseCard = event.target.closest('.course-card');
            const courseTitle = courseCard.querySelector('h3').innerText;
            const coursePrice = parseFloat(courseCard.getAttribute('data-price'));

            cart.push({ title: courseTitle, price: coursePrice });
            localStorage.setItem('cart', JSON.stringify(cart));

            alert(`${courseTitle} added to cart!`);
            updateCartCount();
        }
    });

    // Update cart count on page load
    updateCartCount();
});

// Carousel Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const slides = document.querySelectorAll('.carousel-slide');
            let currentSlide = 0;
            
            function showSlide(n) {
                slides.forEach(slide => slide.classList.remove('active'));
                currentSlide = (n + slides.length) % slides.length;
                slides[currentSlide].classList.add('active');
            }
            
            function nextSlide() {
                showSlide(currentSlide + 1);
            }
            
            // Change slide every 5 seconds
            setInterval(nextSlide, 5000);
            
            // Make carousel images clickable (would link to product pages in real implementation)
            slides.forEach(slide => {
                slide.addEventListener('click', function() {
                    // In a real implementation, this would navigate to the product page
                    alert('This would navigate to the featured product page');
                });
            });
            
            // Product quantity selector functionality
            const minusBtns = document.querySelectorAll('.minus-btn');
            const plusBtns = document.querySelectorAll('.plus-btn');
            const quantityInputs = document.querySelectorAll('.quantity-selector input');
            
            minusBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const input = this.parentNode.querySelector('input');
                    if (parseInt(input.value) > 1) {
                        input.value = parseInt(input.value) - 1;
                    }
                });
            });
            
            plusBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    const input = this.parentNode.querySelector('input');
                    input.value = parseInt(input.value) + 1;
                });
            });
            
            // Add to cart functionality (would connect to e-commerce system in real implementation)
            const addToCartBtns = document.querySelectorAll('.add-to-cart, .add-to-cart-detail');
            addToCartBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    alert('Product added to cart!');
                });
            });
        });
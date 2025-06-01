document.addEventListener('DOMContentLoaded', function() {
    // Get all category buttons and product sections
    const categoryBtns = document.querySelectorAll('.category-btn');
    const productSections = document.querySelectorAll('.product-section');
    const productCards = document.querySelectorAll('.product-card');

    // Initialize sections with visible/hidden classes
    productSections.forEach(section => {
        section.classList.add('visible');
    });

    // Category filtering with smooth transitions
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const category = btn.getAttribute('data-category');

            // Show/hide sections with smooth transitions
            productSections.forEach(section => {
                if (category === 'all' || section.id === category) {
                    section.classList.remove('hidden');
                    section.classList.add('visible');
                } else {
                    section.classList.remove('visible');
                    section.classList.add('hidden');
                }
            });

            // Smooth scroll to first visible section
            const firstVisibleSection = document.querySelector('.product-section.visible');
            if (firstVisibleSection) {
                setTimeout(() => {
                    firstVisibleSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }, 100);
            }
        });
    });

    // Product button click handlers with enhanced interaction
    productCards.forEach(card => {
        const btn = card.querySelector('.product-btn');
        const productName = card.querySelector('h3').textContent;
        const productPrice = card.querySelector('.product-price').textContent;

        btn.addEventListener('click', () => {
            // Add click animation
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = 'scale(1)';
            }, 150);

            if (btn.textContent === 'View Details') {
                showSystemDetails(productName, productPrice, card);
            }
        });

        // Add hover animation to product cards
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Function to show system details with enhanced modal
function showSystemDetails(name, price, card) {
    const features = Array.from(card.querySelectorAll('.product-features li'))
        .map(li => li.textContent.trim())
        .join('\n');

    // Create and show a custom modal instead of using alert
    const modal = document.createElement('div');
    modal.className = 'product-modal';
    modal.innerHTML = `
        <div class="modal-content">
            <h2>${name}</h2>
            <p class="modal-price">${price}</p>
            <div class="modal-features">
                <h3>Features:</h3>
                <ul>
                    ${features.split('\n').map(feature => `<li>${feature}</li>`).join('')}
                </ul>
            </div>
            <div class="modal-contact">
                <h3>Contact Our Sales Team</h3>
                <p>Email: sales@jsfarmshelf.com</p>
                <p>Phone: +60 12-345-6789</p>
            </div>
            <button class="modal-close">Close</button>
        </div>
    `;

    document.body.appendChild(modal);

    // Add modal styles dynamically
    const style = document.createElement('style');
    style.textContent = `
        .product-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
            opacity: 0;
            transition: opacity 0.3s ease;
        }
        .modal-content {
            background: white;
            padding: 2rem;
            border-radius: 15px;
            max-width: 500px;
            width: 90%;
            transform: translateY(20px);
            transition: transform 0.3s ease;
        }
        .modal-price {
            color: var(--primary-color);
            font-size: 1.4rem;
            font-weight: 600;
            margin: 1rem 0;
        }
        .modal-features ul {
            list-style: none;
            padding: 0;
        }
        .modal-features li {
            margin: 0.5rem 0;
        }
        .modal-contact {
            margin-top: 1.5rem;
            padding-top: 1.5rem;
            border-top: 1px solid #eee;
        }
        .modal-close {
            display: block;
            width: 100%;
            padding: 1rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: 8px;
            margin-top: 1.5rem;
            cursor: pointer;
            transition: background 0.3s ease;
        }
        .modal-close:hover {
            background: var(--dark-color);
        }
    `;
    document.head.appendChild(style);

    // Animate modal entrance
    requestAnimationFrame(() => {
        modal.style.opacity = '1';
        modal.querySelector('.modal-content').style.transform = 'translateY(0)';
    });

    // Close modal functionality
    const closeModal = () => {
        modal.style.opacity = '0';
        modal.querySelector('.modal-content').style.transform = 'translateY(20px)';
        setTimeout(() => {
            document.body.removeChild(modal);
        }, 300);
    };

    modal.querySelector('.modal-close').addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
} 
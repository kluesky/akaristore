document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded successfully!");

    // Data produk
    const products = {
        weeklyPass: [
            { name: "Weekly Diamond Pass", price: "23.400" },
            { name: "1x Weekly Diamond Pass", price: "27.000" },
            { name: "2x Weekly Diamond Pass", price: "54.000" },
            { name: "3x Weekly Diamond Pass", price: "81.000" },
            { name: "4x Weekly Diamond Pass", price: "108.000" },
            { name: "5x Weekly Diamond Pass", price: "135.000" }
        ],
        bonus: [
            { name: "100 (50+50) Diamonds - First Top Up", price: "12.700" },
            { name: "300 (150+150) Diamonds - First Top Up", price: "35.500" },
            { name: "500 (250+250) Diamonds - First Top Up", price: "25.000" },
            { name: "1000 (500+500) Diamonds - First Top Up", price: "24.000" }
        ]
    };

    // Variabel state
    let selectedProduct = null;
    let selectedPayment = "Bank Transfer";

    // Inisialisasi
    function init() {
        renderProducts();
        setupPaymentOptions();
        setupOrderButton();
        setupInputListeners();
    }

    // Render produk
    function renderProducts() {
        const weeklyGrid = document.getElementById('weeklyPassProducts');
        const bonusGrid = document.getElementById('bonusProducts');

        products.weeklyPass.forEach(product => {
            weeklyGrid.appendChild(createProductCard(product));
        });

        products.bonus.forEach(product => {
            bonusGrid.appendChild(createProductCard(product));
        });
    }

    // Buat card produk
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.innerHTML = `
            <div class="product-name">${product.name}</div>
            <div class="product-price">Rp ${product.price}</div>
        `;

        card.addEventListener('click', () => selectProduct(product, card));
        return card;
    }

    // Pilih produk
    function selectProduct(product, cardElement) {
        // Reset seleksi sebelumnya
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.remove('selected');
        });

        // Set seleksi baru
        cardElement.classList.add('selected');
        selectedProduct = product;

        updateUI();
    }

    // Setup payment options
    function setupPaymentOptions() {
        document.querySelectorAll('.payment-option input').forEach(option => {
            option.addEventListener('change', (e) => {
                selectedPayment = e.target.value;
                updateUI();
            });
        });
    }

    // Setup tombol pesan
    function setupOrderButton() {
        const orderBtn = document.getElementById('order-btn');
        if (!orderBtn) {
            console.error("Tombol 'Pesan Sekarang' tidak ditemukan!");
            return;
        }

        orderBtn.addEventListener('click', processOrder);
    }

    // Setup input listeners
    function setupInputListeners() {
        const playerIdInput = document.getElementById('player-id');
        const serverIdInput = document.getElementById('server-id');

        if (playerIdInput && serverIdInput) {
            playerIdInput.addEventListener('input', updateUI);
            serverIdInput.addEventListener('input', updateUI);
        } else {
            console.error("Input ID atau Server tidak ditemukan!");
        }
    }

    // Update UI
    function updateUI() {
        updateSummary();
        updateOrderButtonState();
    }

    // Update summary
    function updateSummary() {
        const noSelection = document.getElementById('no-selection');
        const summaryContent = document.getElementById('summary-content');

        if (selectedProduct) {
            noSelection.style.display = 'none';
            summaryContent.style.display = 'block';

            document.getElementById('summary-product').textContent = selectedProduct.name;
            document.getElementById('summary-price').textContent = `Rp ${selectedProduct.price}`;
            document.getElementById('summary-method').textContent = selectedPayment;
            document.getElementById('summary-total').textContent = `Rp ${selectedProduct.price}`;
        } else {
            noSelection.style.display = 'block';
            summaryContent.style.display = 'none';
        }
    }

    // Update state tombol pesan
    function updateOrderButtonState() {
        const orderBtn = document.getElementById('order-btn');
        if (!orderBtn) return;

        const playerId = document.getElementById('player-id')?.value.trim();
        const serverId = document.getElementById('server-id')?.value.trim();

        orderBtn.disabled = !(selectedProduct && playerId && serverId);
    }

    // Proses pemesanan
    function processOrder() {
        // Validasi
        if (!selectedProduct) {
            showAlert('Silakan pilih produk terlebih dahulu!');
            return;
        }

        const playerId = document.getElementById('player-id')?.value.trim();
        const serverId = document.getElementById('server-id')?.value.trim();

        if (!playerId || !serverId) {
            showAlert('Silakan lengkapi ID dan Server!');
            return;
        }

        // Kirim ke WhatsApp
        sendWhatsAppOrder(selectedProduct, playerId, serverId, selectedPayment);
    }

    // Tampilkan alert
    function showAlert(message) {
        alert(message);
    }

    // Kirim pesan WhatsApp
    function sendWhatsAppOrder(product, playerId, serverId, paymentMethod) {
        const whatsappNumber = "6283846049866"; // Ganti dengan nomor Anda
        const message = `Halo AkariStore! Saya ingin membeli:

Produk: ${product.name}
Harga: Rp ${product.price}
Player ID: ${playerId}
Server ID: ${serverId}
Metode Pembayaran: ${paymentMethod}

Terima kasih!`;

        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
    }

    // Jalankan inisialisasi
    init();
});
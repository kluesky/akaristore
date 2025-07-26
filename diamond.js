document.addEventListener('DOMContentLoaded', function() {
    console.log("Script loaded successfully!");

    // Data produk
    const products = {
        weeklyPass: [
            { name: "2x Weekly Diamond Pass", price: "64.000" },
            { name: "3x Weekly Diamond Pass", price: "95.000" },
            { name: "4x Weekly Diamond Pass", price: "126.500" },
            { name: "5x Weekly Diamond Pass", price: "150.500" }
        ],
        bonus: [
            { name: "Diamond ML ( SOON SHOWING )", price: "12.700" }
        ]
    };

    // Variabel state
    let selectedProduct = null;
    let selectedPayment = "DANA"; // Default ke DANA
    let orderDetails = null; // Simpan detail pesanan untuk WhatsApp

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

        if (!weeklyGrid || !bonusGrid) {
            console.error("Elemen weeklyPassProducts atau bonusProducts tidak ditemukan!");
            showAlert('Terjadi kesalahan: Elemen produk tidak ditemukan. Silakan periksa HTML Anda.', 'error');
            return;
        }

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
        document.querySelectorAll('.product-card').forEach(card => {
            card.classList.remove('selected');
        });

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
            showAlert('Terjadi kesalahan: Tombol Pesan Sekarang tidak ditemukan. Silakan periksa HTML Anda.', 'error');
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
            showAlert('Terjadi kesalahan: Input Player ID atau Server ID tidak ditemukan. Silakan periksa HTML Anda.', 'error');
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

        if (!noSelection || !summaryContent) {
            console.error("Elemen no-selection atau summary-content tidak ditemukan!");
            showAlert('Terjadi kesalahan: Elemen ringkasan tidak ditemukan. Silakan periksa HTML Anda.', 'error');
            return;
        }

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
            showAlert('Silakan pilih produk terlebih dahulu!', 'error');
            return;
        }

        const playerId = document.getElementById('player-id')?.value.trim();
        const serverId = document.getElementById('server-id')?.value.trim();

        if (!playerId || !serverId) {
            showAlert('Silakan lengkapi ID dan Server!', 'error');
            return;
        }

        // Simpan detail pesanan
        orderDetails = { product: selectedProduct, playerId, serverId, paymentMethod: selectedPayment };

        // Tampilkan alert dengan tombol "Saya Sudah Bayar"
        const paymentNumber = "083143800370";
        Swal.fire({
            title: 'Informasi Pembayaran',
            text: `Silakan lakukan pembayaran sebesar Rp ${selectedProduct.price} ke nomor ${paymentNumber} melalui ${selectedPayment}. Setelah pembayaran selesai, klik "Saya Sudah Bayar" untuk mengirim konfirmasi ke WhatsApp.`,
            icon: 'info',
            confirmButtonText: 'Saya Sudah Bayar',
            confirmButtonColor: '#28a745', // Warna hijau untuk tombol
            background: '#fff',
            customClass: {
                popup: 'animated-alert',
                title: 'alert-title',
                content: 'alert-content'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        }).then((result) => {
            if (result.isConfirmed) {
                console.log("Tombol 'Saya Sudah Bayar' diklik, mengarahkan ke WhatsApp...");
                sendWhatsAppOrder(orderDetails.product, orderDetails.playerId, orderDetails.serverId, orderDetails.paymentMethod);
            }
        });
    }

    // Tampilkan alert dengan SweetAlert2
    function showAlert(message, type = 'info') {
        Swal.fire({
            title: type === 'error' ? 'Oops!' : 'Informasi',
            text: message,
            icon: type,
            confirmButtonText: 'OK',
            confirmButtonColor: '#007bff',
            background: '#fff',
            customClass: {
                popup: 'animated-alert',
                title: 'alert-title',
                content: 'alert-content'
            },
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
    }

    // Kirim pesan WhatsApp
    function sendWhatsAppOrder(product, playerId, serverId, paymentMethod) {
        const whatsappNumber = "6283846049866"; // Nomor WhatsApp tujuan
        const paymentNumber = "083143800370"; // Nomor untuk pembayaran DANA/OVO/Gopay
        const message = `Halo AkariStore! Saya telah melakukan pembayaran untuk:

Produk: ${product.name}
Harga: Rp ${product.price}
Player ID: ${playerId}
Server ID: ${serverId}
Metode Pembayaran: ${paymentMethod}
Pembayaran dikirim ke: ${paymentNumber}

Mohon proses pesanan saya. Bukti transfer akan segera saya kirim melalui WhatsApp ini.

Terima kasih!`;

        console.log("Mengirim pesan WhatsApp:", message);
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');

        // Tampilkan alert konfirmasi
        showAlert('Terima kasih! Anda telah diarahkan ke WhatsApp untuk mengirim konfirmasi pembayaran. Silakan kirim bukti transfer Anda.', 'success');
    }

    // Jalankan inisialisasi
    init();
});

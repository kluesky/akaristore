// Data Produk dengan Pilihan Durasi
const products = [
    {
        id: 1,
        name: "Alight Motion Premium",
        description: "Editor video profesional dengan fitur premium tanpa watermark",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-3HLv9nfeWD0HPO0OfMx9x3uqgEDJT8ZEiY25aBut_f0AWwhkHYeqoEA&s=10",
        subscriptions: [
            { duration: "1 Tahun Andro", price: "Rp 5.500", originalPrice: "Rp 13.000" },
            { duration: "1 IOS", price: "Rp 7.500", originalPrice: "Rp 18.000" },
            { duration: "Paket 10 akun", price: "Rp 25.000", originalPrice: "Rp 45.000" }
        ]
    },
    {
        id: 2,
        name: "CapCut Premium",
        description: "Akses semua fitur premium CapCut tanpa batasan",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAaKOj74-f3DrbhLHX898ftQZphKQ2Oj3PqRuIRrVTCVNKhCuDd1EBhpPz&s=10",
        subscriptions: [
            { duration: "7 Hari Sharing", price: "Rp 4.500", originalPrice: "Rp 6.000" },
            { duration: "1 Bulan Sharing", price: "Rp 15.500", originalPrice: "Rp 24.000" },
            { duration: "1 Bulan Private", price: "Rp 33.000", originalPrice: "Rp 40.000" }
        ]
    },
    {
        id: 3,
        name: "Bstation",
        description: "Akun Bstation Premium dengan akses penuh ke semua anime dan fitur eksklusif!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLY9uVfZ2IzKdptUT0sE5jIy-tSO-A-V6_jXXUFHMAAE2HmoOE0XQ6hGex&s=10",
        subscriptions: [
            { duration: "1 Bulan Private", price: "Rp 50.000", originalPrice: "Rp 80.000" },
            { duration: "1 Bulan Sharing", price: "Rp 25.000", originalPrice: "Rp 30.000" }
        ]
    },
    {
        id: 4,
        name: "Canva",
        description: "Akun Canva Pro dengan semua fitur premium dan template eksklusif tanpa batas!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKadLt4iqWlgcT9X1p4OFGJ4dzRc6KGG_UeQ&s",
        subscriptions: [
            { duration: "1 Bulan", price: "Rp 5.000", originalPrice: "Rp 10.000" },
            { duration: "1 Bulan Owner", price: "Rp 4.500", originalPrice: "Rp 7.000" },
            { duration: "Paket 10 akun owner", price: "Rp 35.000", originalPrice: "Rp 50.000" },
                        { duration: "1 Tahun", price: "Rp 100.000", originalPrice: "Rp 150.000" }
        ]
    },
    {
        id: 5,
        name: "Fizzo Novel",
        description: "Baca semua novel premium Fizzo tanpa batas dan tanpa iklan – nikmati cerita seru sepuasnya!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdStfYMG4ifNcxWLwJf2-L-llDgQzTHE-nbQhCL55tTRZ6QGXDmZf79dk&s=10",
        subscriptions: [
            { duration: "1 Bulan Sharing", price: "Rp 5.000", originalPrice: "Rp 10.000" }
        ]
    },
    {
        id: 6,
        name: "Drama Box",
        description: "Nikmati akses penuh ke semua konten eksklusif dan fitur premium Drama Box tanpa iklan, kualitas HD, dan update drama terbaru setiap hari",
        image: "https://coolkas.com/wp-content/uploads/2025/02/drama-box.webp",
        subscriptions: [
            { duration: "1 Bulan Sharing", price: "Rp 8.000", originalPrice: "Rp 15.000" }
        ]
    },
        {
        id: 7,
        name: "Chat GPT",
        description: "Akun ChatGPT Plus dengan akses ke GPT-4 dan respons super cepat tanpa batas!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbIlIwkHibf9uqIO9vfWDOmqDk-F8ERi3NQe7Q99RTUbAlWMeNKWJ76b0&s=10",
        subscriptions: [
            { duration: "7 Hari Sharing", price: "Rp 4.500", originalPrice: "Rp 15.000" },
            { duration: "1 Bulan Sharing", price: "Rp 15.500", originalPrice: "Rp 20.000"},
            { duration: "1 Bulan Private", price: "Rp 33.000", originalPrice: "Rp 45.000" }
        ]
    },
            {
        id: 8,
        name: "Apple Music",
        description: "Akun Apple Music Premium tanpa iklan dengan jutaan lagu bebas didengar offline!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ3YgSEpnuoLuePMGAfOMuSH2Tw1ZNMQxFo7ALo7rKiAICUgaXkL_jMnO1&s=10",
        subscriptions: [
            { duration: "Famhead 1 Bulan", price: "Rp 50.000", originalPrice: "Rp 80.000" },
            { duration: "1 Bulan ios", price: "Rp 5.000", originalPrice: "Rp 10.000"},
            { duration: "1 Bulan Andro", price: "Rp 5.000", originalPrice: "Rp 10.000" }
        ]
    },
    {
        id: 9,
        name: "CamScanner",
        description: "Akun CamScanner Premium tanpa watermark, iklan, dan dengan fitur scan pro penuh!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpsUjON-eQ7LPErSzplF5q1xdm35QxNf4_CVi8pHnQCjKPd3CKbobNgKui&s=10",
        subscriptions: [
            { duration: "1 Bulan Sharing", price: "Rp 5.000", originalPrice: "Rp 10.000" }
        ]
    },
        {
        id: 10,
        name: "Netflix",
        description: "Nikmati akun Netflix Premium dengan akses penuh ke seluruh konten eksklusif, dukungan streaming hingga resolusi 4K Ultra HD, tanpa iklan, serta dapat digunakan di berbagai perangkat secara bersamaan.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHPr8GWBWPWHiqUVmgS6qefhewb3ReZ0cqHw&s",
        subscriptions: [
            { duration: "1 Profile 2 User", price: "Rp 13.000", originalPrice: "Rp 20.000" },
            { duration: "1 Profile 1 User", price: "Rp 25.000", originalPrice: "Rp 40.000" },
            { duration: "1 Bulan Private", price: "Rp 120.000", originalPrice: "Rp 200.000" }
        ]
    },
        {
        id: 11,
        name: "Youtube Premium",
        description: "Akun YouTube Premium dengan pengalaman menonton tanpa iklan, pemutaran di latar belakang, akses YouTube Music, dan fitur unduhan offline di berbagai perangkat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiILT4MbGg_8UU7PsT9XjlQTasHlLvb0XG9xqEB24_wvejSrQsFIwm1oE&s=10",
        subscriptions: [
            { duration: "1 Bulan ( akun buyyer )", price: "Rp 2.000", originalPrice: "Rp 5.000" },
            { duration: "3 Bulan No Garansi", price: "Rp 13.000", originalPrice: "Rp 17.000" },
            { duration: "3 Bulan Garansi", price: "Rp 25.000", originalPrice: "Rp 35.000" },
            { duration: "1 Bulan ( akun admin )", price: "Rp 50.000", originalPrice: "Rp 60.000" },
            { duration: "Famhead 1 Bulan", price: "Rp 50.000", originalPrice: "Rp 70.000" }
        ]
    },
        {
        id: 12,
        name: "Zoom Meeting Pro",
        description: "Akun Zoom Meeting Pro dengan durasi rapat lebih panjang hingga 30 jam, fitur perekaman cloud, dan dukungan partisipan lebih banyak untuk kolaborasi tanpa batas di berbagai perangkat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRRBOYP8mNT2GdBFNID-qoaHzhKthIyfrEs7qP3EHZlrPEliKHyf1N1bKn&s=10",
        subscriptions: [
            { duration: "1 Hari", price: "Rp 4.000", originalPrice: "Rp 8.000" },
             { duration: "2 Minggu", price: "Rp 6.000", originalPrice: "Rp 12.000" },
              { duration: "1 Bulan", price: "Rp 10.000", originalPrice: "Rp 18.000" },
               { duration: "Paket 10 Akun", price: "Rp 37.000", originalPrice: "Rp 49.000" },
                { duration: "Akun Sendiri 2 Minggu", price: "Rp 50.000", originalPrice: "Rp 80.000" }
        ]
    },
        {
        id: 13,
        name: "Viu",
        description: "Akun Viu Premium dengan akses penuh ke drama Asia terbaru, tanpa iklan, kualitas video HD, dan fitur unduhan untuk menonton offline di berbagai perangkat.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiKnm_tFC05jOgQJvH-xaeFSY5QSEeJPh7LD0Y3rhuWa9-hT-evmnlnHo&s=10",
        subscriptions: [
            { duration: "1 Hari", price: "Rp 1.000", originalPrice: "Rp 4.000" },
            { duration: "1 Bulan", price: "Rp 1.500", originalPrice: "Rp 6.000" },
            { duration: "3 Bulan", price: "Rp 5.000", originalPrice: "Rp 10.000" },
            { duration: "Paket 10 Akun", price: "Rp 10.000", originalPrice: "Rp 20.000" },
            { duration: "Sewa Bot 7 Hari", price: "Rp 5.000", originalPrice: "Rp 10.000" }
        ]
    },
        {
        id: 14,
        name: "IQIYI",
        description: "Akun iQIYI Premium dengan akses eksklusif ke drama dan film terbaru, tanpa iklan, kualitas video hingga 4K, serta fitur unduhan dan multi-device support.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ8P0zxDE08QMgNu5x6qmyASSlpiVqBmoC6hX9IrfXORqcizQZobW0gyM&s=10",
        subscriptions: [
            { duration: "1 Bulan Sharing", price: "Rp 7.000", originalPrice: "Rp 10.000" },
            { duration: "1 Bulan Private", price: "Rp 27.000", originalPrice: "Rp 40.000" }
        ]
    },
        {
        id: 15,
        name: "Disney+ HotStar",
        description: "Akun Disney+ Hotstar Premium dengan akses penuh ke film dan serial eksklusif dari Disney, Marvel, Pixar, Star Wars, dan National Geographic, tanpa iklan, kualitas hingga 4K, serta dukungan multi-device.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3MQ5vh1gKC_-WXWYd12dB5f9TKng3kpVJTBWXrtgxSqax1C9uIQTObqw&s=10",
        subscriptions: [
            { duration: "2 User 1 Profile", price: "Rp 15.000", originalPrice: "Rp 20.000" },
            { duration: "1 Profile 1 User", price: "Rp 30.000", originalPrice: "Rp 40.000" },
            { duration: "1 Bulan Private - Premium Plan", price: "Rp 120.000", originalPrice: "Rp 200.000" }
        ]
    },
        {
        id: 16,
        name: "Prime Video",
        description: "Akun Prime Video Premium dengan akses ke ribuan film dan serial eksklusif, tanpa iklan, kualitas streaming hingga 4K Ultra HD, serta dukungan multi-device dan fitur unduhan offline.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXK0k5Jawn83GSQgs06RrDzTRBx2PYlxR1b798wA41OfawFENeLlFfhNM&s=10",
        subscriptions: [
            { duration: "1 Bulan Sharing", price: "Rp 3.000", originalPrice: "Rp 5.000" },
            { duration: "1 Bulan Private", price: "Rp 10.000", originalPrice: "Rp 20.000" }
        ]
    }
];


// Data Testimoni
const testimonials = [
    {
        name: "Andi Pratama",
        role: "Content Creator",
        content: "Alight Motion Premium yang saya beli bekerja sempurna! Pengiriman cepat dan panduannya jelas. Terima kasih LyoraStore!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGxe0D3TupDTqwj4MWartgd_NjYogaaOEJTKU1r1E3qBsJ3uRgeV2W44&s=10"
    },
    {
        name: "Siti Rahayu",
        role: "Mahasiswa",
        content: "Netflix Premium 1 tahun masih aktif setelah 6 bulan. Puas banget dengan pelayanannya. Recommended!",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-CDGAk9TIcyGKYcMvrGp1wEZZs7b8mg1MGIualkDGqWk6c2WAJ9F56GI&s=10"
    },
    {
        name: "Budi Santoso",
        role: "Freelancer",
        content: "CapCut Premium yang saya beli lengkap dengan semua fiturnya. Proses pembelian mudah dan CS ramah.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4pqaoJTttsA7FohsWb_JWQfkVxYmYQ0SXtA&s"
    }
];

// Data FAQ
const faqs = [
    {
        question: "Bagaimana cara pembelian aplikasi premium?",
        answer: "Pilih produk dan durasi yang diinginkan, klik tombol 'Beli Sekarang', lalu ikuti instruksi pembayaran via WhatsApp."
    },
    {
        question: "Berapa lama proses pengiriman setelah pembayaran?",
        answer: "Biasanya kami memproses pesanan dalam waktu 5-30 menit setelah pembayaran dikonfirmasi via WhatsApp."
    },
    {
        question: "Apakah produk ini legal dan aman digunakan?",
        answer: "Semua produk yang kami jual telah diuji dan aman digunakan. Kami memberikan garansi jika ada masalah."
    },
    {
        question: "Bagaimana jika akun yang dibeli tidak bekerja?",
        answer: "Hubungi kami via WhatsApp dengan bukti pembayaran dan kami akan segera menggantinya."
    }
];

// Format nomor WhatsApp untuk URL
function formatWhatsAppNumber(number) {
    let cleaned = number.replace(/\D/g, '');
    if (cleaned.startsWith('0')) {
        cleaned = '62' + cleaned.substring(1);
    } else if (cleaned.startsWith('62')) {
        // Sudah benar
    } else if (cleaned.length < 11) {
        cleaned = '62' + cleaned;
    }
    return cleaned;
}

// Validasi nomor WhatsApp
function isValidWhatsAppNumber(number) {
    const regex = /^[0-9]{10,15}$/;
    return regex.test(number.replace(/\D/g, ''));
}

// Load Produk
function loadProducts() {
    const productsGrid = document.querySelector('.products-grid');
    productsGrid.innerHTML = '';

    products.forEach(product => {
        const lowestPrice = product.subscriptions.reduce((min, sub) => 
            parseInt(sub.price.replace(/\D/g,'')) < parseInt(min.price.replace(/\D/g,'')) ? sub : min
        );
        
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">
                <img src="${product.image}" alt="${product.name}">
            </div>
            <div class="product-info">
                <h3>${product.name}</h3>
                <p class="product-desc">${product.description}</p>
                <div class="product-price">
                    <span class="price">Mulai ${lowestPrice.price}</span>
                    <span class="original-price">${lowestPrice.originalPrice}</span>
                </div>
                <a href="#" class="btn btn-buy" data-id="${product.id}">Beli Sekarang</a>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Load Testimoni
function loadTestimonials() {
    const testimonialsGrid = document.querySelector('.testimonials-grid');
    testimonialsGrid.innerHTML = '';

    testimonials.forEach(testimonial => {
        const testimonialCard = document.createElement('div');
        testimonialCard.className = 'testimonial-card';
        testimonialCard.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.content}"</p>
            </div>
            <div class="testimonial-author">
                <img src="${testimonial.image}" alt="${testimonial.name}">
                <div class="author-info">
                    <h4>${testimonial.name}</h4>
                    <p>${testimonial.role}</p>
                </div>
            </div>
        `;
        testimonialsGrid.appendChild(testimonialCard);
    });
}

// Load FAQ
function loadFAQs() {
    const faqContainer = document.querySelector('.faq-container');
    faqContainer.innerHTML = '';

    faqs.forEach(faq => {
        const faqItem = document.createElement('div');
        faqItem.className = 'faq-item';
        faqItem.innerHTML = `
            <div class="faq-question">
                <h3>${faq.question}</h3>
                <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
                <p>${faq.answer}</p>
            </div>
        `;
        faqContainer.appendChild(faqItem);
    });
}

// Inisialisasi saat DOM siap
document.addEventListener('DOMContentLoaded', function() {
    // Load data
    loadProducts();
    loadTestimonials();
    loadFAQs();

    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.parentElement;
            faqItem.classList.toggle('active');

            // Close other open items
            faqQuestions.forEach(otherQuestion => {
                if (otherQuestion !== question) {
                    const otherItem = otherQuestion.parentElement;
                    otherItem.classList.remove('active');
                }
            });
        });
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            nav.classList.remove('active');
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Header Scroll Effect
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        header.classList.toggle('scrolled', window.scrollY > 50);
    });

    // Purchase Modal
    const modal = document.getElementById('purchaseModal');
    const closeModal = document.querySelector('.close-modal');
    const modalProductName = document.getElementById('modalProductName');
    const confirmPurchaseBtn = document.getElementById('confirmPurchase');
    let currentProduct = null;

    // Buka modal saat tombol beli diklik
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-buy')) {
            e.preventDefault();
            const productId = e.target.getAttribute('data-id');
            currentProduct = products.find(p => p.id == productId);
            
            if (currentProduct) {
                modalProductName.textContent = `Beli ${currentProduct.name}`;
                const durationOptions = document.getElementById('durationOptions');
                durationOptions.innerHTML = '';
                
                currentProduct.subscriptions.forEach(sub => {
                    const option = document.createElement('div');
                    option.className = 'duration-option';
                    option.innerHTML = `
                        <input type="radio" name="duration" id="dur-${currentProduct.id}-${sub.duration.replace(/\s+/g, '-')}" 
                               value="${sub.duration}" ${currentProduct.subscriptions[0].duration === sub.duration ? 'checked' : ''}>
                        <label class="duration-label" for="dur-${currentProduct.id}-${sub.duration.replace(/\s+/g, '-')}">
                            ${sub.duration}
                            <div class="duration-price">${sub.price}</div>
                        </label>
                    `;
                    durationOptions.appendChild(option);
                });
                
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
            }
        }
    });

    // Tutup modal
    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Tutup modal saat klik di luar
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Proses pembelian via WhatsApp
    confirmPurchaseBtn.addEventListener('click', function() {
        const whatsapp = document.getElementById('whatsapp').value;
        const paymentMethod = document.querySelector('input[name="payment"]:checked').value;
        const duration = document.querySelector('input[name="duration"]:checked').value;
        const selectedSubscription = currentProduct.subscriptions.find(sub => sub.duration === duration);
        
        if (!whatsapp) {
            alert('Silakan masukkan nomor WhatsApp Anda');
            return;
        }
        
        if (!isValidWhatsAppNumber(whatsapp)) {
            alert('Silakan masukkan nomor WhatsApp yang valid (10-15 digit angka)');
            return;
        }
        
        const formattedWhatsapp = formatWhatsAppNumber(whatsapp);
        const message = `Halo AkariStore, saya ingin membeli:\n\n` +
                       `Produk: ${currentProduct.name}\n` +
                       `Durasi: ${duration}\n` +
                       `Harga: ${selectedSubscription.price}\n` +
                       `Metode Pembayaran: ${paymentMethod.toUpperCase()}\n\n` +
                       `Silakan berikan instruksi pembayaran.`;
        const encodedMessage = encodeURIComponent(message);
        
        window.open(`https://wa.me/6283846049866?text=${encodedMessage}`, '_blank');
        document.getElementById('whatsapp').value = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // Form Kontak WhatsApp
    const contactForm = document.getElementById('contactForm');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const whatsapp = document.getElementById('contactWhatsapp').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;
        
        if (!name || !whatsapp || !subject || !message) {
            alert('Silakan lengkapi semua field');
            return;
        }
        
        if (!isValidWhatsAppNumber(whatsapp)) {
            alert('Silakan masukkan nomor WhatsApp yang valid');
            return;
        }
        
        const formattedWhatsapp = formatWhatsAppNumber(whatsapp);
        const whatsappMessage = `Halo AkariStore,\n\nNama: ${name}\nSubjek: ${subject}\n\nPesan:\n${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        
        window.open(`https://wa.me/6283846049866?text=${encodedMessage}`, '_blank');
        contactForm.reset();
    });
});
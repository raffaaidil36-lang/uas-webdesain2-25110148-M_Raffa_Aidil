/**
 * file: js/main.js
 * Deskripsi: Fitur Kalkulator Pesanan Interaktif & Auto-Format Pemesanan WhatsApp
 * Proyek Akademik: Mie Tek Tek Ajo Tampan
 */

document.addEventListener("DOMContentLoaded", function () {
    // 1. Ambil semua elemen DOM yang dibutuhkan
    const selectMenu = document.getElementById("orderMenu");
    const inputJumlah = document.getElementById("orderQty");
    const selectPedas = document.getElementById("orderSpicy");
    const displayTotal = document.getElementById("totalHarga");
    const btnKirim = document.getElementById("btnKirimWA");

    // 2. Map harga menu (sesuai dengan harga di halaman produk)
    const daftarHarga = {
        "mie-goreng": 15000,
        "mie-nyemek": 15000,
        "es-teh": 5000,
        "combo-tampan": 20000
    };

    // Fungsi untuk menghitung total harga secara real-time
    function hitungTotal() {
        const menuTerpilih = selectMenu.value;
        const jumlah = parseInt(inputJumlah.value) || 0;

        // Ambil harga per item berdasarkan pilihan menu
        const hargaPerItem = daftarHarga[menuTerpilih] || 0;
        const total = hargaPerItem * jumlah;

        // Tampilkan hasil kalkulasi dengan format Rupiah (IDR)
        displayTotal.textContent = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0
        }).format(total);
    }

    // 3. Pasang event listener agar harga berubah otomatis setiap input diganti
    if (selectMenu && inputJumlah) {
        selectMenu.addEventListener("change", hitungTotal);
        inputJumlah.addEventListener("input", hitungTotal);
    }

    // 4. Logika pembuatan teks dan pengiriman ke WhatsApp
    if (btnKirim) {
        btnKirim.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload halaman

            const menuTerpilihText = selectMenu.options[selectMenu.selectedIndex].text;
            const menuValue = selectMenu.value;
            const jumlah = inputJumlah.value;
            const levelPedas = selectSpicy.options[selectPedas.selectedIndex].text;
            const totalBayar = displayTotal.textContent;

            // Validasi input sederhana
            if (!menuValue) {
                alert("Silakan pilih menu terlebih dahulu!");
                return;
            }
            if (!jumlah || jumlah <= 0) {
                alert("Jumlah porsi minimal adalah 1!");
                return;
            }

            // Nomor WhatsApp tujuan (Nomor Ajo Tampan, ganti sesuai kebutuhan)
            const nomorWA = "6281234567890"; 

            // Format isi pesan WhatsApp (menggunakan template literals)
            const teksPesan = `Halo Ajo Tampan, saya ingin memesan menu berikut:\n\n` +
                              `🍜 *Menu:* ${menuTerpilihText}\n` +
                              `🌶️ *Keterangan:* ${levelPedas}\n` +
                              `🛍️ *Jumlah:* ${jumlah} Porsi\n` +
                              `-----------------------------------\n` +
                              `💰 *Estimasi Total:* *${totalBayar}*\n\n` +
                              `Mohon segera diproses ya Ajo, terima kasih!`;

            // Encode pesan agar aman untuk URL browser
            const urlEncodedText = encodeURIComponent(teksPesan);
            const linkWhatsApp = `https://api.whatsapp.com/send?phone=${nomorWA}&text=${urlEncodedText}`;

            // Buka tab baru menuju WhatsApp
            window.open(linkWhatsApp, "_blank");
        });
    }
});
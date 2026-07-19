# Website Company Profile - Mie Tek Tek Ajo Tampan

**Nama** : Muhammad Raffa Aidil  
**NIM** : 25110148  
**Matkul** : Web Desain 2 (MKK 123)  
**UMKM** : Mie Tek Tek Ajo Tampan  
**Lokasi** : Jl. Kereta Api, Tangkerang Tengah, Kec. Marpoyan Damai, Kota Pekanbaru  
**Deskripsi** : Website Company Profile premium dan responsif untuk UMKM Mie Tek Tek Ajo Tampan. Proyek ini dirancang menggunakan kombinasi HTML5, Bootstrap 5, dan CSS3 kustom untuk memenuhi standar tugas akademik Web Desain 2.

---

## 📝 Tentang Website Ini

Website ini merupakan platform **Company Profile** modern yang bertujuan untuk menaikkan kelas kuliner tradisional kaki lima (Mie Tek Tek) menjadi sebuah brand premium. Website ini dirancang agar sepenuhnya responsif (*High Fidelity Responsive*) sehingga dapat diakses dengan nyaman melalui berbagai perangkat, mulai dari *smartphone*, tablet, hingga monitor desktop. 

Seluruh halaman web menggunakan satu basis tema desain yang konsisten melalui file `style.css` terpusat dengan mengedepankan aspek tipografi mewah, harmoni warna penambah nafsu makan (Crimson Red & Golden Amber), serta navigasi yang ramah pengguna (*accessible*).

---

## 🛠️ Struktur Halaman Web

Proyek ini terdiri dari 4 halaman utama yang saling terintegrasi:
1. **`index.html` (Home)**: Halaman beranda utama yang menyajikan impresi awal premium, *carousel* unggulan, fitur keunggulan UMKM, ringkasan menu terlaris, serta bagian FAQ (Pertanyaan Umum) berbasis komponen *Accordion*.
2. **`about.html` (About)**: Halaman profil yang menceritakan sejarah perkembangan usaha kuliner, landasan filosofi memasak pemilik yang dikemas interaktif menggunakan komponen *Modal*, serta penjabaran Visi dan Misi UMKM yang memanfaatkan fitur *Dynamic Tab/Pills*.
3. **`produk.html` (Produk)**: Halaman katalog produk lengkap yang menampilkan varian makanan utama, minuman segar, hingga paket promo hemat. Halaman ini juga mengintegrasikan fitur *Dynamic Filter Tabs* dan fitur **Kalkulator Estimasi Belanja**.
4. **`kontak.html` (Kontak)**: Halaman pusat bantuan yang berisi detail informasi operasional outlet, formulir pengiriman pesan dengan sistem validasi, dan peta digital lokasi toko fisik.

---

## ⚡ Fitur-Fitur JavaScript (Bootstrap 5 & Kustom `main.js`)

Sesuai dengan capaian pembelajaran materi praktikum, website ini mengintegrasikan berbagai fitur interaktif berbasis JavaScript:

*   **Bootstrap Carousel dengan Custom Control Box (`index.html`)**: Galeri gambar interaktif pada beranda yang bergeser otomatis secara halus (*fade effect*). Tombol navigasi panah dikunci dengan batas aman (*safe-zone boundary box*) agar teks promosi tidak menabrak tombol panah saat dibuka di layar HP kecil.
*   **Bootstrap Accordion Component (`index.html`)**: Digunakan pada bagian FAQ untuk menyembunyikan dan menampilkan jawaban pertanyaan secara interaktif (buka-tutup) menggunakan ikon Bootstrap premium yang dinamis.
*   **Bootstrap Dynamic Tab / Pills Navigation (`about.html` & `produk.html`)**: 
    *   Pada halaman *About*, digunakan untuk berpindah informasi antara "Visi" dan "Misi" secara instan tanpa memuat ulang (*reload*) halaman.
    *   Pada halaman *Produk*, berfungsi sebagai **Sistem Filter Menu**. Pengguna dapat menyaring katalog kuliner berdasarkan kategori (Semua Menu, Makanan Utama, Minuman Segar, Paket Combo) secara interaktif.
*   **Bootstrap Modal (`about.html`)**: Tombol interaktif "Baca Cerita Lengkap Ajo" yang memicu jendela *pop-up* (modal) elegan di tengah layar untuk menampilkan narasi filosofi memasak sang pemilik.
*   **Kalkulator Estimasi Belanja & Generator Pesanan WhatsApp Kustom (`js/main.js` di `produk.html`)**: Fitur kustom menggunakan *Vanilla JS* untuk menghitung total harga pesanan secara *real-time* berdasarkan menu dan jumlah porsi yang dipilih pengguna. Fitur ini juga secara otomatis menyusun teks pesanan berformat rapi dan mengarahkannya langsung ke API WhatsApp resmi outlet.
*   **Bootstrap Form Validation (`kontak.html`)**: Sistem validasi sisi klien (*client-side validation*) menggunakan kelas `.needs-validation`. Jika pengguna menekan tombol kirim sementara ada kolom formulir yang kosong, JavaScript akan mendeteksi dan memunculkan peringatan merah secara interaktif.
*   **Responsive Google Maps Embed dengan Bootstrap Ratio (`kontak.html`)**: Peta digital terintegrasi menggunakan komponen `.ratio-21x9` bawaan Bootstrap, memastikan iFrame Google Maps melar dan mengecil secara otomatis dan proporsional di semua resolusi layar.

---

## 🎨 Teknologi yang Digunakan

*   **HTML5** (Struktur semantik dan aksesibilitas)
*   **CSS3** (Kustomisasi variabel root, efek hover kartu premium, tata letak grid, dan breakpoints kontrol)
*   **JavaScript Kustom / Vanilla JS** (Manipulasi DOM, penanganan event, kalkulasi harga, dan integrasi WhatsApp API pada `js/main.js`)
*   **Bootstrap v5.3.2** (Framework CSS, Sistem Grid, Komponen Utilitas, dan Bundel JavaScript + Popper)
*   **Bootstrap Icons v1.11.2** (Ikonografi UI)
*   **Google Fonts** (Font *Playfair Display* untuk heading mewah & *Plus Jakarta Sans* untuk teks tubuh yang scannable)
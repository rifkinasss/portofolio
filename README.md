# Nas Labs

Technology portfolio milik Rifki Anashirul untuk menampilkan profil, stack teknologi, project kuliah, dan arah pengembangan project secara terstruktur.

Nas Labs dibuat sebagai identitas teknologi dan etalase utama dari beberapa project yang pernah dikerjakan, mulai dari aplikasi Laravel, PHP native, sistem pendukung keputusan, sampai project web dasar.

## Versi

### v1.1.0

Versi deploy untuk Nas Labs dengan perubahan:

- Mengubah branding utama dari portfolio personal menjadi **Nas Labs**.
- Menambahkan identitas **Technology Lab** dan **Technology Portfolio**.
- Memperbarui halaman hero, about, footer, dan metadata agar konsisten dengan brand Nas Labs.
- Menambahkan Telegram sebagai kontak.
- Memperbarui README sesuai isi portfolio terbaru.
- Menggunakan `next dev --webpack` agar development server lebih stabil di workspace lokal Windows.
- Mengunci `turbopack.root` ke folder project untuk menghindari salah deteksi root workspace.

### v1.0.0

Versi fondasi awal portfolio dengan fitur:

- Struktur website portfolio berbasis Next.js, TypeScript, dan Tailwind CSS.
- Halaman utama, tentang, project, dan kontak.
- Data project terpusat di `src/data/portfolio.ts`.
- Daftar project kuliah awal: Silakad, SPK, Portfolio System, UTSPHP, PBO, dan Pemstruk.
- Ringkasan project berbasis problem, outcome, highlight, dan next step.
- Tema visual gelap dengan aksen cyan dan layout responsif.

## Fitur

- Halaman beranda dengan hero section, fokus keahlian, project pilihan, stack, eksplorasi teknologi, dan call to action.
- Halaman tentang berisi profil teknis, area fokus, stack utama, dan eksplorasi yang sedang dipelajari.
- Halaman project berisi ringkasan case study untuk setiap project.
- Halaman kontak dengan email, GitHub, LinkedIn, Telegram, dan area kolaborasi.
- Data portfolio terpusat di `src/data/portfolio.ts` agar mudah diperbarui.
- Tampilan responsif dengan tema visual gelap dan aksen cyan.

## Project Yang Ditampilkan

- **Silakad - Sistem Akademik**  
  Aplikasi akademik berbasis Laravel untuk mengelola data mahasiswa, dosen, mata kuliah, jadwal, KRS, dan nilai.

- **SPK - Sistem Pendukung Keputusan**  
  Aplikasi keputusan berbasis kriteria, bobot, alternatif, dan hasil ranking.

- **Nas Labs Portfolio System**  
  Website technology portfolio berbasis Next.js, TypeScript, dan Tailwind CSS.

- **UTSPHP - Sistem Informasi Rumah Sakit**  
  Aplikasi PHP native dan MySQL untuk mengelola data pasien, dokter, obat, poliklinik, dan rekam medis.

- **PBO - FJ Grooming Service**  
  Aplikasi Laravel untuk layanan grooming, cat hotel, pacak, harga layanan, autentikasi user, dan dashboard admin.

- **Pemstruk - Web Dasar & Data**  
  Project HTML, CSS, JavaScript, dan JSON untuk menunjukkan fondasi web dasar.

## Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- ESLint

## Struktur Folder Utama

```text
src/
  app/
    about/
    contact/
    projects/
    globals.css
    layout.tsx
    page.tsx
  components/
    layout/
    sections/
    ui/
  data/
    portfolio.ts
  lib/
    utils.ts
  types/
    index.ts
```

## Menjalankan Project

Install dependency:

```bash
npm install
```

Jalankan development server:

```bash
npm run dev
```

Buka:

```text
http://localhost:3000
```

Script `dev` menggunakan webpack agar development server lebih stabil di workspace lokal Windows.

## Build

```bash
npm run build
```

Menjalankan lint:

```bash
npm run lint
```

## Deploy

Project ini siap dideploy ke Vercel.

Pengaturan yang disarankan:

- Framework: Next.js
- Build command: `npm run build`
- Root directory: folder `portfolio`
- Output directory: default dari Next.js

Setelah deploy, perbarui `siteConfig.url` di `src/data/portfolio.ts` dengan URL production.

## Arah Pengembangan

- Menambahkan halaman detail per project, dimulai dari Silakad.
- Menambahkan screenshot asli untuk setiap project.
- Menghubungkan link demo dan repository.
- Merapikan README di masing-masing folder project pendukung.

# NasLabs

Startup studio, product lab, dan build-in-public platform milik Rifki Anashirul untuk mendokumentasikan proses mengubah ide menjadi produk, eksperimen, pelajaran, dan peluang venture.

NasLabs berfokus pada software development, product building, SaaS, AI, GIS, IoT, dan sistem operasional dengan positioning utama:

> Turning Ideas Into Ventures

## Versi

### v2.0.0 - NasLabs Startup Studio Redesign

Versi redesign besar dari portfolio personal menjadi brand NasLabs yang lebih startup-focused.

- Mengubah positioning utama menjadi **Turning Ideas Into Ventures**.
- Mengubah brand dari **Nas Labs / Technology Portfolio** menjadi **NasLabs / Startup Studio**.
- Menambahkan logo brand versi light dan dark dari folder `Logo Branding`.
- Menambahkan theme switcher: **Light**, **Dark**, dan **System**.
- Menambahkan language switcher: **Indonesia** dan **English**.
- Menyimpan preferensi theme dan bahasa di `localStorage`.
- Merombak homepage menjadi narasi startup/product lab:
  - What is NasLabs?
  - Why We Build
  - What I'm Exploring
  - Featured Projects / Things I've Built
  - Learning in Public
  - Current Focus
  - Philosophy
  - Latest Notes
  - CTA kolaborasi yang lebih sesuai dengan positioning builder/product developer.
- Merombak halaman **About** menjadi struktur personal brand:
  - Hi, I'm Rifki
  - My Journey
  - Why NasLabs?
  - Areas of Interest
  - My Philosophy
  - Milestones
  - Tools I Frequently Use
  - Beyond the Screen
  - Let's Connect
- Merombak halaman **Journey** menjadi halaman build-in-public:
  - Current Mission
  - Timeline
  - Lessons Along The Way
  - Experiments
  - Currently Learning
  - Looking Ahead
  - Closing quote
- Merombak halaman **Contact** menjadi halaman kolaborasi:
  - What Can I Help With?
  - Contact Form berbasis `mailto`
  - Other Ways to Reach Me
  - How I Prefer to Work
  - FAQ
  - Closing CTA
- Merombak halaman **Projects** menjadi halaman case study dan eksperimen:
  - Project Categories
  - Featured Work
  - View Case Study
  - Case Study detail
  - Experiments & Explorations
  - By The Numbers
  - Why I Build
- Menambahkan SEO metadata yang lebih lengkap:
  - metadata global
  - metadata per halaman
  - Open Graph
  - Twitter Card
  - canonical URL
  - robots
  - sitemap
  - manifest
  - JSON-LD structured data untuk Organization, Person, dan WebSite.

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

- Halaman beranda dengan narasi startup studio, eksplorasi produk, featured projects, learning in public, fokus saat ini, insight, dan CTA kolaborasi.
- Halaman about berisi cerita personal, alasan NasLabs dibuat, area ketertarikan, filosofi, milestone, stack, dan closing CTA.
- Halaman projects berisi featured work, filter kategori, case study interaktif, eksperimen, statistik, dan filosofi membangun produk.
- Halaman journey berisi mission, timeline, lessons learned, eksperimen, learning focus, future goals, dan closing quote.
- Halaman contact berisi contact form, area bantuan, alternatif kontak, working style, FAQ, dan CTA.
- Theme switcher: Light, Dark, dan System.
- Language switcher: Indonesia dan English.
- Data portfolio terpusat di `src/data/portfolio.ts` agar mudah diperbarui.
- Tampilan responsif dengan sistem theme berbasis CSS variables.
- SEO metadata, sitemap, robots, manifest, Open Graph, Twitter Card, dan structured data.

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
      about-client.tsx
      page.tsx
    contact/
      contact-client.tsx
      page.tsx
    journey/
      journey-client.tsx
      page.tsx
    projects/
      projects-client.tsx
      page.tsx
    home-client.tsx
    globals.css
    layout.tsx
    manifest.ts
    page.tsx
    robots.ts
    sitemap.ts
  components/
    layout/
    sections/
    ui/
  data/
    portfolio.ts
  lib/
    seo.ts
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

- Menambahkan halaman detail permanen untuk setiap case study.
- Menambahkan screenshot asli, demo, dan repository untuk project yang sudah siap dipublikasikan.
- Menambahkan konten journal/insights asli.
- Menambahkan backend atau layanan form agar contact form tidak hanya memakai `mailto`.
- Menambahkan Open Graph image khusus untuk social sharing.
- Merapikan README di masing-masing folder project pendukung.

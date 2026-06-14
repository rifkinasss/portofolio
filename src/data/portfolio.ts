import type { Exploration, Project, Skill, SocialLink } from "@/types";

export const siteConfig = {
  name: "Nas Labs",
  personalName: "Rifki Anashirul",
  role: "Technology Lab",
  email: "anashirulrifki@gmail.com",
  title: "Nas Labs - Technology Portfolio",
  description:
    "Technology portfolio untuk pengembangan aplikasi web, backend, frontend, dan integrasi sistem.",
  url: "https://example.com",
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/rifkinasss",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rifki-anashirul",
    icon: "linkedin",
  },
  {
    name: "Telegram",
    url: "https://t.me/rifkinasss",
    icon: "telegram",
  },
  {
    name: "Email",
    url: "mailto:anashirulrifki@gmail.com",
    icon: "mail",
  },
];

export const skills: Skill[] = [
  { name: "PHP", category: "backend" },
  { name: "Laravel", category: "backend" },
  { name: "JavaScript", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "SQL", category: "backend" },
  { name: "PostgreSQL", category: "backend" },
];

export const explorations: Exploration[] = [
  {
    title: "AI-assisted Development",
    description:
      "Mendalami penggunaan OpenClaw dan tooling serupa untuk membantu eksplorasi kode, debugging, dan mempercepat workflow pengembangan.",
    tags: ["OpenClaw", "Agentic Coding", "Developer Workflow"],
  },
  {
    title: "Workflow Automation",
    description:
      "Mengeksplorasi cara menyusun proses kerja yang lebih efisien, mulai dari analisis codebase sampai iterasi fitur.",
    tags: ["Automation", "Code Review", "Productivity"],
  },
  {
    title: "Spatial Database",
    description:
      "Mempelajari PostgreSQL dan PostGIS untuk kebutuhan data spasial, pemetaan, dan pengolahan informasi berbasis lokasi.",
    tags: ["PostgreSQL", "PostGIS", "Spatial Mapping"],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Silakad - Sistem Akademik",
    description:
      "Aplikasi akademik berbasis Laravel untuk mengelola data mahasiswa, dosen, mata kuliah, jadwal, KRS, dan nilai.",
    image: "/images/project-1.jpg",
    tags: ["Laravel", "PHP", "MySQL", "Blade"],
    role: "Full-stack Developer",
    focus: "Academic System",
    status: "Prioritas upgrade",
    priority: "Flagship",
    folder: "Silakad",
    problem:
      "Pengelolaan data akademik sering tersebar di banyak file atau proses manual, sehingga sulit dipantau dan rawan tidak konsisten.",
    outcome:
      "Disiapkan sebagai project utama portfolio dengan alur role, modul akademik, dashboard ringkas, dan dokumentasi fitur yang jelas.",
    highlights: [
      "Manajemen data mahasiswa, dosen, mata kuliah, dan kelas.",
      "Rancangan alur KRS, jadwal perkuliahan, dan input nilai.",
      "Cocok dikembangkan menjadi studi kasus full-stack paling kuat.",
    ],
    nextSteps: [
      "Tambah role admin, dosen, dan mahasiswa.",
      "Lengkapi dashboard statistik akademik.",
      "Buat halaman detail case study di portfolio.",
    ],
    featured: true,
  },
  {
    id: "2",
    title: "SPK - Sistem Pendukung Keputusan",
    description:
      "Aplikasi keputusan berbasis kriteria, bobot, alternatif, dan hasil ranking untuk membantu proses pemilihan secara terukur.",
    image: "/images/project-2.jpg",
    tags: ["Laravel", "PHP", "Decision Support", "Ranking"],
    role: "Backend & Logic Developer",
    focus: "Decision Method",
    status: "Siap diperdalam",
    priority: "Algorithmic",
    folder: "spk",
    problem:
      "Keputusan berbasis banyak kriteria sulit dijelaskan jika hanya memakai penilaian subjektif tanpa perhitungan yang transparan.",
    outcome:
      "Menjadi project pendamping yang menunjukkan kemampuan menyusun alur perhitungan, validasi input, dan hasil ranking yang mudah dibaca.",
    highlights: [
      "Struktur data untuk kriteria, bobot, dan alternatif.",
      "Potensial memakai metode SAW, TOPSIS, atau AHP.",
      "Nilai portfolio kuat karena menampilkan logika dan analisis.",
    ],
    nextSteps: [
      "Pastikan metode perhitungan ditulis eksplisit.",
      "Tambahkan visualisasi ranking dan riwayat hasil.",
      "Dokumentasikan contoh kasus penggunaan.",
    ],
    featured: true,
  },
  {
    id: "3",
    title: "Nas Labs Portfolio System",
    description:
      "Website technology portfolio berbasis Next.js untuk menampilkan profil, stack, project, dan arah pengembangan secara terstruktur.",
    image: "/images/project-3.jpg",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    role: "Frontend Developer",
    focus: "Personal Branding",
    status: "Sedang dirapikan",
    priority: "Flagship",
    folder: "portfolio",
    problem:
      "Project kuliah sudah banyak, tetapi perlu satu etalase yang merangkum nilai teknis dan progresnya dengan rapi.",
    outcome:
      "Menjadi pusat presentasi project, skill, kontak, dan roadmap pengembangan agar portfolio terlihat lebih matang.",
    highlights: [
      "Konten project dikelola dari data terpusat.",
      "Tampilan responsif dengan komponen reusable.",
      "Dirancang untuk mengangkat project kuliah menjadi case study.",
    ],
    nextSteps: [
      "Tambah screenshot asli untuk setiap project.",
      "Buat halaman detail per project.",
      "Hubungkan link repository dan demo saat sudah siap.",
    ],
    featured: true,
  },
  {
    id: "4",
    title: "UTSPHP - Sistem Informasi Rumah Sakit",
    description:
      "Aplikasi PHP native dan MySQL untuk mengelola data pasien, dokter, obat, poliklinik, serta rekam medis.",
    image: "/images/project-4.jpg",
    tags: ["PHP Native", "MySQL", "CRUD", "Bootstrap"],
    role: "Full-stack Developer",
    focus: "Hospital Information System",
    status: "Project pendukung",
    priority: "Support",
    folder: "UTSPHP",
    problem:
      "Data operasional rumah sakit seperti pasien, dokter, obat, klinik, dan rekam medis perlu dikelola dalam satu dashboard agar lebih mudah dicari dan diperbarui.",
    outcome:
      "Menjadi project PHP native yang menunjukkan kemampuan membangun autentikasi sederhana, CRUD, pagination, dan pengelolaan data berbasis MySQL.",
    highlights: [
      "CRUD data pasien, dokter, obat, poliklinik, dan rekam medis.",
      "Dashboard dengan session login dan navigasi modul.",
      "Memiliki file SQL dan ERD sebagai dasar struktur database.",
    ],
    nextSteps: [
      "Rapikan query agar lebih aman dan mudah dirawat.",
      "Tambahkan dokumentasi instalasi database.",
      "Ambil screenshot dashboard dan ERD untuk portfolio.",
    ],
  },
  {
    id: "5",
    title: "PBO - FJ Grooming Service",
    description:
      "Aplikasi Laravel untuk layanan grooming, cat hotel, pacak, harga layanan, autentikasi user, dan dashboard admin.",
    image: "/images/project-5.jpg",
    tags: ["Laravel", "PHP", "Blade", "MVC"],
    role: "Application Developer",
    focus: "Service Management",
    status: "Project pendukung",
    priority: "Support",
    folder: "PBO",
    problem:
      "Layanan grooming dan penitipan hewan perlu halaman informasi, daftar harga, login pelanggan, serta panel admin untuk mengelola layanan.",
    outcome:
      "Menjadi project Laravel pendukung yang memperlihatkan penerapan MVC, autentikasi user-admin, halaman publik, dan pengelolaan layanan.",
    highlights: [
      "Landing page FJ Grooming dengan layanan, harga, galeri, dan kontak.",
      "Autentikasi user dan admin dengan dashboard terpisah.",
      "CRUD layanan dan user management untuk kebutuhan admin.",
    ],
    nextSteps: [
      "Matangkan modul transaksi pemesanan layanan.",
      "Rapikan route dan controller layanan.",
      "Tambahkan README berisi alur user dan admin.",
    ],
  },
  {
    id: "6",
    title: "Pemstruk - Web Dasar & Data",
    description:
      "Project HTML, CSS, JavaScript, dan data JSON yang menunjukkan fondasi antarmuka serta manipulasi data sederhana.",
    image: "/images/project-6.jpg",
    tags: ["HTML", "CSS", "JavaScript", "JSON"],
    role: "Frontend Developer",
    focus: "Web Fundamentals",
    status: "Project pendukung",
    priority: "Support",
    folder: "pemstruk",
    problem:
      "Fondasi web dasar penting untuk menunjukkan pemahaman struktur halaman, styling, interaksi, dan pengolahan data ringan.",
    outcome:
      "Menjadi project pendukung yang memperlihatkan progres dari web statis menuju aplikasi full-stack.",
    highlights: [
      "Memakai HTML, CSS, JavaScript, dan data JSON.",
      "Cocok sebagai bukti dasar DOM, layout, dan interaksi.",
      "Dapat dijadikan pembanding perkembangan skill.",
    ],
    nextSteps: [
      "Rapikan tampilan responsif.",
      "Tambahkan dokumentasi fitur utama.",
      "Kurasi halaman yang paling layak ditampilkan.",
    ],
  },
];

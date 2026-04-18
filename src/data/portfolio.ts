// src/data/portfolio.ts
// ============================================================
// 📝 CARA MENAMBAH PROYEK BARU:
//    1. Tambahkan object baru ke array `projects` di bawah.
//    2. Isi semua field yang diperlukan.
//    3. Untuk `image`, gunakan path ke file di /public/images/
//       atau URL eksternal.
//    4. Untuk `tags`, tambahkan teknologi yang digunakan.
//    5. Simpan file — halaman akan otomatis diperbarui!
// ============================================================

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: "Web" | "Mobile" | "AI/ML" | "IoT" | "Game" | "Other";
  tags: string[];
  repoUrl?: string;
  liveUrl?: string;
  featured: boolean;
}

export interface Education {
  id: number;
  institution: string;
  degree: string;
  major: string;
  period: string;
  gpa?: string;
  achievements?: string[];
}

// ─────────────────────────────────────────────
// 📚 DATA PENDIDIKAN
// ─────────────────────────────────────────────
export const education: Education[] = [
  {
    id: 1,
    institution: "Universitas Wahid Hasyim",
    degree: "Sarjana Komputer (S.Kom.)",
    major: "Teknik Informatika",
    period: "2023 – Sekarang",
    gpa: "3.81 / 4.00",
    achievements: [
      "Koordinator asistent laboratorium dan riset cyber & network",
      "Asistent dosen jaringan komputer",
      "Awardee Beasiswa Cendikia Bazmas 2025",
    ],
  },
  // {
  //   id: 2,
  //   institution: "",
  //   degree: "Sekolah Menengah Atas",
  //   major: "",
  //   period: "",
  //   gpa: "",
  //   // achievements: [""],
  // },
];

// ─────────────────────────────────────────────
// 🚀 DATA PROYEK
// Tambahkan proyek baru di sini ↓
// ─────────────────────────────────────────────
export const projects: Project[] = [
  {
    id: 1,
    title: "Sistem Monitoring Pertanian Hidroponik Berbasis IoT",
    description:
      "Platform monitoring kondisi lahan pertanian secara real-time menggunakan sensor DHT22, pH sensor, dan ESP32. Data divisualisasikan via dashboard web berbasis React dan Firebase.",
    image: "/images/project-agrismart.jpg",
    category: "IoT",
    tags: ["ESP32", "PH-Sensor", "PPM-Sensor", "Arduino IDE"],
    repoUrl: "https://github.com/username/agrismart",
    liveUrl: "https://agrismart.vercel.app",
    featured: true,
  },
  {
    id: 2,
    title: "LexiLearn – Aplikasi Belajar Bahasa dengan AI",
    description:
      "Aplikasi mobile pembelajaran bahasa asing yang menggunakan NLP untuk memberikan feedback pelafalan real-time. Dibangun dengan Flutter dan model Whisper dari OpenAI.",
    image: "/images/project-lexilearn.jpg",
    category: "Mobile",
    tags: ["Flutter", "Dart", "OpenAI Whisper", "FastAPI", "Python"],
    repoUrl: "https://github.com/username/lexilearn",
    featured: true,
  },
  {
    id: 3,
    title: "SkripsiHelper – RAG Chatbot untuk Mahasiswa",
    description:
      "Chatbot berbasis Retrieval-Augmented Generation (RAG) yang membantu mahasiswa memahami dokumen akademik. Menggunakan LangChain, Chroma DB, dan Ollama sebagai LLM lokal.",
    image: "/images/project-skripsihelper.jpg",
    category: "AI/ML",
    tags: ["Python", "LangChain", "ChromaDB", "Ollama", "Streamlit"],
    repoUrl: "https://github.com/username/skripsi-helper",
    featured: false,
  },
  {
    id: 4,
    title: "CampusConnect – Platform Komunitas Kampus",
    description:
      "Web app untuk memfasilitasi komunikasi dan kolaborasi antar mahasiswa dan UKM di lingkungan kampus. Fitur: forum diskusi, event board, dan resource sharing.",
    image: "/images/project-campusconnect.jpg",
    category: "Web",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Tailwind CSS"],
    repoUrl: "https://github.com/username/campus-connect",
    liveUrl: "https://campusconnect.vercel.app",
    featured: false,
  },
];

// ─────────────────────────────────────────────
// 🛠️ SKILLS DATA
// ─────────────────────────────────────────────
export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "Dart", "C++", "SQL"],
  frameworks: [
    "React",
    "Next.js",
    "Flutter",
    "FastAPI",
    "Astro",
    "Tailwind CSS",
  ],
  tools: ["Git", "Docker", "Firebase", "PostgreSQL", "Linux", "Figma"],
  concepts: [
    "REST API",
    "RAG / LLM",
    "IoT Systems",
    "Agile/Scrum",
    "UI/UX Design",
  ],
};

// ─────────────────────────────────────────────
// 📬 CONTACT / SOSIAL MEDIA
// Ganti dengan link kamu
// ─────────────────────────────────────────────
export const contact = {
  email: "mail.arvianranditya@gmail.com",
  github: "https://github.com/arvianranditya",
  linkedin: "https://linkedin.com/in/arvianranditya",
  instagram: "https://instagram.com/arvian.randitya",
};

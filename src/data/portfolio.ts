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
      "Awardee Beasiswa Cendikia Baznas 2025",
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
    title: "Website Company Profile MES KENDAL",
    description:
      "Sebuah platform digital yang dirancang untuk memperkuat identitas brand MES Kendal dengan fokus pada penyampaian informasi perusahaan.",
    image: "/images/MES KENDAL.png",
    category: "Web",
    tags: ["Laravel", "PHP", "Tailwind"],
    liveUrl: "https://meskendal.org/",
    repoUrl: "https://github.com/veron0071/wisatahalal.git",
    featured: true,
  },
  {
    id: 2,
    title: "HELPDESK Unwahas",
    description:
      "Sebuah platform digital untuk pengaduan fasilitas atau kinerja yang ada pada lingungan UNWAHAS berbasis website.",
    image: "/images/HELPDESK UNWAHAS.png",
    category: "Web",
    tags: ["Laravel", "PHP", "Tailwind"],
    liveUrl: "https://helpdesk.unwahas.ac.id/",
    featured: true,
  },
  {
    id: 3,
    title: "Website UKM Bahasa UNWAHAS",
    description:
      "Sebuah plaform digital untuk memperkuat identitas UKM Bahasa UNWAHAS dengan fokus menyampaikan kegiatan yang ada pada UKM Bahasa UNWAHAS",
    image: "/images/UKM BAHASA.png",
    category: "Web",
    tags: ["Laravel", "PHP", "Tailwind"],
    repoUrl: "https://github.com/ArvianRanditya/UKM-Bahasa-Website.git",
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

export const content = {
  en: {
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      education: "Education",
      certificates: "Certificates",
      contact: "Contact",
    },
    hero: {
      role: "Information Systems Student & Freelance Web Developer",
      location: "Jakarta Raya, Indonesia",
      desc: "An Information Systems student interested in web development, data analytics, and other areas of information technology, with a strong enthusiasm for learning and developing practical solutions.",
      viewProjects: "View Projects",
      contactMe: "Contact Me",
      downloadCv: "Download CV",
      stats: [
        { value: "5+", label: "Projects built" },
        { value: "3", label: "Years in Information Systems" },
        { value: "2026", label: "Expected graduation" },
      ],
    },
    skills: {
      label: "Skills & Services",
      heading: "The stack I use to build solutions.",
      categories: [
        {
          level: "Expert",
          title: "Web Development",
          desc: "Building responsive interfaces and simple full-stack applications.",
          tags: ["React", "Java", "MySQL", "Bootstrap"],
        },
        {
          level: "Intermediate",
          title: "Data Analytics & ETL",
          desc: "Processing, cleaning, and analyzing data from various sources.",
          tags: ["Python", "Pentaho ETL", "Streamlit"],
        },
        {
          level: "Advanced",
          title: "Machine Learning",
          desc: "Exploring baseline models for prediction and classification.",
          tags: ["Python", "Scikit-learn"],
        },
        {
          level: "Intermediate",
          title: "Tools & Collaboration",
          desc: "Version control and collaborative workflows for team projects.",
          tags: ["Git", "GitHub"],
        },
        {
          level: "Advanced",
          title: "AI & Cybersecurity",
          desc: "Working with AI agents and applying foundational cybersecurity principles.",
          tags: ["AI", "Cybersecurity"],
        },
      ],
    },
    projects: {
      label: "Showcase of my work",
      heading: "A few things I have built.",
      items: [
        {
          title: "Alhadi Daycare & Preschool",
          desc: "A company profile website for an Islamic daycare and preschool, featuring program listings, class schedules, and a registration flow.",
          tags: ["HTML", "CSS", "JavaScript"],
          url: "https://mikaramadhan.github.io/alhadi-daycare/",
          image:
            "https://mikaramadhan.github.io/alhadi-daycare/assets/alhadi-slide1.png",
        },
        {
          title: "Bews Scoots",
          desc: "A landing page for a Vespa matic customization and spare parts shop, featuring featured products, social proof via Instagram, and a WhatsApp ordering flow.",
          tags: ["HTML", "React", "Tailwind"],
          url: "https://mikaramadhan.github.io/bewsscoots-project/",
          image:
            "https://cdn.jsdelivr.net/gh/mikaRamadhan/bewsscoots-project@main/public/brand/preview-bews.png",
        },
        // {
        //   title: 'Aldi Scoots Web App',
        //   desc: 'An SME website selling katsu rice boxes and fruit salad, with checkout and transaction history.',
        //   tags: ['React', 'MySQL'],
        // },
        // {
        //   title: "Data Analytics Dashboard",
        //   desc: "Analysis of e-commerce promo effectiveness using Python and data visualization.",
        //   tags: ["Python", "Analytics"],
        // },
        // {
        //   title: "ETL Data Wisata & Cafe",
        //   desc: "ETL implementation using Pentaho Data Integration and staging data.",
        //   tags: ["Pentaho", "ETL"],
        // },
        // {
        //   title: "HRIS Prototype",
        //   desc: "A Human Resource Information System prototype with an Earned Value Management simulation.",
        //   tags: ["Java", "MySQL"],
        // },
      ],
    },
    experience: {
      label: "Experience",
      heading: "My project journey so far.",
      items: [
        // {
        //   title: "Web Development Projects",
        //   org: "Independent / Coursework",
        //   type: "Project",
        //   period: "2025 — 2026",
        //   points: [
        //     "Built several web applications using React, Java Servlet, and MySQL.",
        //     "Designed checkout flow and transaction history for an SME website.",
        //   ],
        // },
        // {
        //   title: "Data Analytics & ETL Projects",
        //   org: "Independent / Coursework",
        //   type: "Project",
        //   period: "2026",
        //   points: [
        //     "Implemented ETL pipelines using Pentaho Data Integration.",
        //     "Built an e-commerce promo analytics dashboard with Python.",
        //     "Explored baseline machine learning models for data classification.",
        //   ],
        // },
        {
          title: "BEM Fasilkom Universitas Mercu Buana",
          org: "Talent & Interest Division Member",
          type: "Organization",
          period: "2026 — Present",
          points: [
            "Active member of the Talent & Interest (Minat Bakat) division at the Faculty of Computer Science Student Executive Board, Universitas Mercu Buana.",
          ],
          photos: "bemMinatBakat",
        },
        {
          title: "Junior Web Developer",
          org: "PT.Lintas Media Danawa",
          type: "Job",
          period: "Feb 2022 — Apr 2022 · 3 mos",
          points: [
            "Worked as a junior web developer on client web projects during a 3-month period.",
          ],
        },
      ],
    },
    education: {
      label: "Education",
      heading: "Academic background.",
      items: [
        {
          school: "Universitas Mercu Buana",
          degree: "Bachelor's Degree, Information Systems",
          period: "Sep 2023 — Present",
          location: "Jakarta, Indonesia",
          logo: "mercuBuana",
        },
        {
          school: "SMK Telkom Jakarta",
          degree: "Vocational High School",
          period: "2020 — 2023",
          location: "Jakarta, Indonesia",
          logo: "smkTelkom",
        },
      ],
    },
    certificates: {
      label: "Certificates",
      heading: "Courses and certifications.",
      items: [
        {
          title: "Build an AI Agent",
          issuer: "IBM SkillsBuild",
          date: "Jun 2026",
          url: "https://www.credly.com/badges/e1ee81fb-cf8d-42d6-9da3-696997429e95/",
          image: "certIbmAi",
        },
        {
          title: "Data Analyst Capstone Project",
          issuer: "Coursera",
          date: "Aug 2026",
          url: "https://www.credly.com/badges/a6f5c37d-eb84-4c28-805d-79774b040f4f/public_url",
          image: "certIbmData",
        },
        {
          title: "CCNAv7: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          date: "Aug 2024",
          url: "https://www.credly.com/badges/b4847264-8715-447c-9123-0c456c6561d1/public_url",
          image: "certCcna",
        },
        {
          title: "Introduction to Cybersecurity",
          issuer: "Cisco Networking Academy",
          date: "Dec 2023",
          url: "https://www.credly.com/badges/213612cc-edb3-4c1d-a619-83f32eb9ae47/",
          image: "certCybersecurity",
        },
        {
          title: "Qualification II Software Engineering",
          issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
          date: "Apr 2023",
          image: "certSoftwareEngineering",
        },
        {
          title: "Junior Web Developer",
          issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
          date: "Feb 2023",
          image: "certJuniorWebDev",
        },
        {
          title:
            "Certificate of Appreciation — Grand National Championship, Futsal Series 2024",
          issuer: "Futsal Series",
          date: "Dec 2024",
          image: "certFutsal",
        },
      ],
    },
    contact: {
      label: "Have a project in mind?",
      heading: "Let's build something great.",
      cta: "Get in touch",
      localTime: "Local time",
    },
    footer: {
      rights: "All rights reserved.",
    },
  },

  id: {
    nav: {
      home: "Beranda",
      skills: "Skill",
      projects: "Proyek",
      experience: "Pengalaman",
      education: "Pendidikan",
      certificates: "Sertifikat",
      contact: "Kontak",
    },
    hero: {
      role: "Information Systems Student & Freelance Web Developer",
      location: "Jakarta Raya, Indonesia",
      desc: "Mahasiswa Sistem Informasi yang tertarik pada pengembangan web, analisis data, dan berbagai bidang teknologi informasi lainnya, dengan semangat yang tinggi untuk belajar dan mengembangkan solusi yang praktis.",
      viewProjects: "Lihat Proyek",
      contactMe: "Hubungi Saya",
      downloadCv: "Unduh CV",
      stats: [
        { value: "5+", label: "Proyek dibangun" },
        { value: "3", label: "Tahun di Sistem Informasi" },
        { value: "2026", label: "Estimasi lulus" },
      ],
    },
    skills: {
      label: "Skill & Layanan",
      heading: "Kombinasi teknis yang saya pakai untuk membangun solusi.",
      categories: [
        {
          level: "Expert",
          title: "Web Development",
          desc: "Membangun antarmuka web yang responsif dan aplikasi full-stack sederhana.",
          tags: ["React", "Java", "MySQL", "Bootstrap"],
        },
        {
          level: "Intermediate",
          title: "Data Analytics & ETL",
          desc: "Mengolah, membersihkan, dan menganalisis data dari berbagai sumber.",
          tags: ["Python", "Pentaho ETL", "Streamlit"],
        },
        {
          level: "Advanced",
          title: "Machine Learning",
          desc: "Eksplorasi model dasar untuk prediksi dan klasifikasi data.",
          tags: ["Python", "Scikit-learn"],
        },
        {
          level: "Intermediate",
          title: "Tools & Collaboration",
          desc: "Version control dan alur kerja kolaboratif untuk project tim.",
          tags: ["Git", "GitHub"],
        },
        {
          level: "Advanced",
          title: "AI & Keamanan Siber",
          desc: "Bekerja dengan AI agent dan menerapkan prinsip dasar keamanan siber.",
          tags: ["AI", "Cybersecurity"],
        },
      ],
    },
    projects: {
      label: "Showcase karya saya",
      heading: "Beberapa hal yang sudah saya bangun.",
      items: [
        {
          title: "Alhadi Daycare & Preschool",
          desc: "Website company profile untuk daycare dan preschool Islami, mencakup daftar program, jadwal kelas, dan alur pendaftaran.",
          tags: ["HTML", "CSS", "JavaScript"],
          url: "https://mikaramadhan.github.io/alhadi-daycare/",
          image:
            "https://mikaramadhan.github.io/alhadi-daycare/assets/alhadi-slide1.png",
        },
        {
          title: "Bews Scoots",
          desc: "Landing page untuk toko modifikasi Vespa matic dan spare part, menampilkan produk unggulan, social proof lewat Instagram, dan alur pemesanan via WhatsApp.",
          tags: ["HTML", "React", "Tailwind"],
          url: "https://mikaramadhan.github.io/bewsscoots-project/",
          image:
            "https://cdn.jsdelivr.net/gh/mikaRamadhan/bewsscoots-project@main/public/brand/preview-bews.png",
        },
        // {
        //   title: "Time Capsule AI Video Generator",
        //   desc: "Aplikasi generatif AI berbasis Streamlit untuk membuat video lintas era.",
        //   tags: ["Streamlit", "AI", "Python"],
        // },
        // {
        //   title: "Aldi Scoots Web App",
        //   desc: "Website UMKM penjualan rice box katsu dan fruit salad dengan sistem checkout dan riwayat transaksi.",
        //   tags: ["React", "MySQL"],
        // },
        // {
        //   title: "Data Analytics Dashboard",
        //   desc: "Analisis efektivitas promo e-commerce menggunakan Python dan visualisasi data.",
        //   tags: ["Python", "Analytics"],
        // },
        // {
        //   title: "ETL Data Wisata & Cafe",
        //   desc: "Implementasi ETL menggunakan Pentaho Data Integration dan data staging.",
        //   tags: ["Pentaho", "ETL"],
        // },
        // {
        //   title: "HRIS Prototype",
        //   desc: "Prototype aplikasi Human Resource Information System dan simulasi Earned Value Management.",
        //   tags: ["Java", "MySQL"],
        // },
      ],
    },
    experience: {
      label: "Pengalaman",
      heading: "Perjalanan proyek sejauh ini.",
      items: [
        // {
        //   title: "Web Development Projects",
        //   org: "Independent / Kuliah",
        //   type: "Project",
        //   period: "2025 — 2026",
        //   points: [
        //     "Membangun beberapa aplikasi web menggunakan React, Java Servlet, dan MySQL.",
        //     "Merancang alur checkout dan riwayat transaksi untuk website UMKM.",
        //   ],
        // },
        // {
        //   title: "Data Analytics & ETL Projects",
        //   org: "Independent / Kuliah",
        //   type: "Project",
        //   period: "2026",
        //   points: [
        //     "Mengimplementasikan pipeline ETL menggunakan Pentaho Data Integration.",
        //     "Membangun dashboard analitik promo e-commerce dengan Python.",
        //     "Eksplorasi model machine learning dasar untuk klasifikasi data.",
        //   ],
        // },
        {
          title: "BEM Fasilkom Universitas Mercu Buana",
          org: "Anggota Divisi Minat Bakat",
          type: "Organisasi",
          period: "2026 — Sekarang",
          points: [
            "Anggota aktif divisi Minat Bakat di Badan Eksekutif Mahasiswa Fakultas Ilmu Komputer, Universitas Mercu Buana.",
          ],
          photos: "bemMinatBakat",
        },
        {
          title: "Junior Web Developer",
          org: "PT.Lintas Media Danawa",
          type: "Pekerjaan",
          period: "Feb 2022 — Apr 2022 · 3 bln",
          points: [
            "Bekerja sebagai junior web developer untuk project web klien selama 3 bulan.",
          ],
        },
      ],
    },
    education: {
      label: "Pendidikan",
      heading: "Latar belakang akademik.",
      items: [
        {
          school: "Universitas Mercu Buana",
          degree: "Sarjana, Sistem Informasi",
          period: "Sep 2023 — Sekarang",
          location: "Jakarta, Indonesia",
          logo: "mercuBuana",
        },
        {
          school: "SMK Telkom Jakarta",
          degree: "Sekolah Menengah Kejuruan",
          period: "2020 — 2023",
          location: "Jakarta, Indonesia",
          logo: "smkTelkom",
        },
      ],
    },
    certificates: {
      label: "Sertifikat",
      heading: "Kursus dan sertifikasi.",
      items: [
        {
          title: "Build an AI Agent",
          issuer: "IBM SkillsBuild",
          date: "Jun 2026",
          url: "https://www.credly.com/badges/e1ee81fb-cf8d-42d6-9da3-696997429e95/",
          image: "certIbmAi",
        },
        {
          title: "Data Analyst Capstone Project",
          issuer: "Coursera",
          date: "Agu 2026",
          url: "https://www.credly.com/badges/a6f5c37d-eb84-4c28-805d-79774b040f4f/public_url",
          image: "certIbmData",
        },
        {
          title: "CCNAv7: Introduction to Networks",
          issuer: "Cisco Networking Academy",
          date: "Agu 2024",
          url: "https://www.credly.com/badges/b4847264-8715-447c-9123-0c456c6561d1/public_url",
          image: "certCcna",
        },
        {
          title: "Introduction to Cybersecurity",
          issuer: "Cisco Networking Academy",
          date: "Des 2023",
          url: "https://www.credly.com/badges/213612cc-edb3-4c1d-a619-83f32eb9ae47/",
          image: "certCybersecurity",
        },
        {
          title: "Kualifikasi II Rekayasa Perangkat Lunak",
          issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
          date: "Apr 2023",
          image: "certSoftwareEngineering",
        },
        {
          title: "Junior Web Developer",
          issuer: "BNSP (Badan Nasional Sertifikasi Profesi)",
          date: "Feb 2023",
          image: "certJuniorWebDev",
        },
        {
          title:
            "Certificate of Appreciation — Grand National Championship, Futsal Series 2024",
          issuer: "Futsal Series",
          date: "Des 2024",
          image: "certFutsal",
        },
      ],
    },
    contact: {
      label: "Punya proyek untuk didiskusikan?",
      heading: "Mari membangun sesuatu bersama.",
      cta: "Hubungi Saya",
      localTime: "Waktu lokal",
    },
    footer: {
      rights: "Hak cipta dilindungi.",
    },
  },
};

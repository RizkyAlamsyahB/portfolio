export const PORTFOLIO_DATA = {
    profile: {
        name: "Rizky Alamsyah Bimantara",
        role: "Full Stack Web Developer",
        bio: "Backend-focused Full Stack Developer passionate about building production-ready systems. Experienced in Golang, Node.js, Laravel, PostgreSQL, Redis, Docker, and cloud deployment. Comfortable across the stack from API engineering to DevOps.",
        location: "Sidoarjo, Jawa Timur, Indonesia",
        email: "rizkyalamsyah.dev@gmail.com",
        phone: "+62 878-4017-7803",
        age: 23,
        status: "Available",
        education: {
            degree: "S1 Sistem Informasi",
            university: "Universitas Pembangunan Nasional \"Veteran\" Jawa Timur",
            gpa: "3.73"
        },
        socials: {
            github: "https://github.com/RizkyAlamsyahB",
            whatsapp: "https://wa.link/k7ks3m"
        }
    },
    experience: [
        {
            title: "Backend & DevOps Engineer — PT Media Inovasi Strategis (GarudaLabs) · Haji Umroh Store",
            period: "Feb 2026 – Apr 2026 · Remote",
            description: [
                "Membangun backend API berbasis Golang untuk platform e-commerce Haji & Umroh milik pemerintah.",
                "Mengintegrasikan Xendit payment gateway dan RajaOngkir untuk shipping workflow otomatis.",
                "Mengelola PostgreSQL, Redis caching, dan object storage MinIO untuk performa tinggi.",
                "Menyiapkan CI/CD pipeline dan production deployment ke cloud infrastructure."
            ]
        },
        {
            title: "Backend Engineer — PT Media Inovasi Strategis (GarudaLabs) · Rewrite Web PMII",
            period: "Des 2025 – Feb 2026 · Remote",
            description: [
                "Melakukan rewrite legacy web PMII dari sistem lama ke backend Golang yang modern dan scalable.",
                "Migrasi database ke PostgreSQL dengan schema redesign untuk efisiensi query.",
                "Menyiapkan containerized deployment menggunakan Docker dan CI/CD pipeline.",
                "Production deployment ke cloud server dengan monitoring dan logging terintegrasi."
            ]
        },
        {
            title: "Full Stack Developer — Plex Seller (ERP Environment)",
            period: "Okt 2025 · 1 Minggu · Probation",
            description: [
                "Bergabung sebagai probation untuk sistem ERP berbasis Express.js, TypeScript, React.js, dan RabbitMQ.",
                "Membangun modul chat internal dan mulai integrasi marketplace Lazada.",
                "Mendapat exposure pada enterprise workflow, message queue, dan asynchronous architecture.",
                "Resign setelah 1 minggu karena kondisi kesehatan."
            ]
        },
        {
            title: "Full Stack Web Developer — AFI Sport",
            period: "Jul 2025 – Agu 2025 · Freelance · Kab. Bojonegoro, Jawa Timur",
            description: [
                "Membangun modul pembayaran dan pengiriman untuk sistem e-commerce olahraga berbasis Laravel & MySQL.",
                "Mengintegrasikan API Midtrans untuk proses transaksi dan API RajaOngkir untuk perhitungan ongkos kirim otomatis.",
                "Mengoptimalkan proses checkout dan pelacakan pesanan agar lebih efisien dan responsif."
            ]
        },
        {
            title: "Full Stack Web Developer — Alena Soccer",
            period: "Feb 2025 – Jun 2025 · Kab. Sidoarjo, Jawa Timur",
            description: [
                "Mengembangkan sistem reservasi lapangan futsal end-to-end menggunakan Laravel dan MySQL.",
                "Mengintegrasikan QRIS Payment Midtrans, Point of Sales (POS), membership, dan laporan keuangan otomatis.",
                "Mendesain RESTful API untuk komunikasi data antar modul admin dan kasir dengan autentikasi berbasis role.",
                "Melaksanakan 113 skenario black-box testing dengan hasil 100% sesuai spesifikasi."
            ]
        },
        {
            title: "Full Stack Web Developer & Team Lead — Badan Pengawas Pemilu Kota Surabaya",
            period: "Jul 2024 – Agu 2024 · Magang · Kota Surabaya, Jawa Timur",
            description: [
                "Membangun sistem E-Library internal berbasis Node.js, Vue.js, dan MySQL yang terintegrasi dengan OwnCloud untuk manajemen dokumen.",
                "Merancang Rest API internal untuk akses data dokumen dan laporan kegiatan antar departemen.",
                "Menerapkan Agile Scrum dan memimpin tim kecil dari analisis kebutuhan hingga deployment.",
                "Berhasil mempercepat proses pengelolaan dokumen dan meningkatkan transparansi organisasi."
            ]
        }
    ],
    techStack: [
        { name: "Golang", category: "Backend" },
        { name: "Node.js / Express", category: "Backend" },
        { name: "Laravel", category: "Backend" },
        { name: "PHP", category: "Backend" },
        { name: "RESTful API", category: "Backend" },
        { name: "RabbitMQ", category: "Backend" },
        { name: "React.js", category: "Frontend" },
        { name: "Vue.js", category: "Frontend" },
        { name: "TypeScript", category: "Frontend" },
        { name: "Tailwind CSS", category: "Frontend" },
        { name: "PostgreSQL", category: "Database" },
        { name: "MySQL", category: "Database" },
        { name: "Redis", category: "Database" },
        { name: "Docker", category: "DevOps" },
        { name: "GitHub Actions", category: "DevOps" },
        { name: "CI/CD Pipeline", category: "DevOps" },
        { name: "Linux Server / VPS", category: "DevOps" },
        { name: "AWS", category: "Cloud" },
        { name: "Google Cloud Platform", category: "Cloud" },
        { name: "MinIO Object Storage", category: "Cloud" },
        { name: "Cloudflare", category: "Cloud" },
        { name: "Midtrans / QRIS", category: "Integration" },
        { name: "Xendit", category: "Integration" },
        { name: "RajaOngkir", category: "Integration" },
        { name: "Gin / Echo", category: "Backend" },
        { name: "Firebase FCM", category: "Integration" }
    ],
    projects: [
        {
            slug: "haji-umroh-store",
            title: "Haji Umroh Store",
            category: "Government Project · Backend",
            description: "Backend API, payment, shipping, object storage, caching, CI/CD, dan deployment ke server government."
        },
        {
            slug: "rewrite-pmii",
            title: "Rewrite Web PMII",
            category: "Modernization · Golang",
            description: "Rewrite legacy system ke backend Golang, database migration PostgreSQL, CI/CD, dan cloud deployment."
        },
        {
            slug: "plex-seller",
            title: "Plex Seller ERP",
            category: "ERP · Enterprise",
            description: "Chat module, Lazada integration, RabbitMQ, dan asynchronous workflow pada sistem ERP."
        },
        {
            slug: "alena-soccer",
            title: "Alena Soccer",
            category: "Fullstack · Laravel",
            description: "Reservation system, POS, QRIS Payment Midtrans, membership, financial report, dan 113 black-box test scenarios."
        },
        {
            slug: "elibrary-bawaslu",
            title: "E-Library Bawaslu",
            category: "Government · Fullstack",
            description: "Sistem E-Library internal berbasis Node.js, Vue.js, MySQL, dan OwnCloud untuk Bawaslu Kota Surabaya."
        },
        {
            slug: "afi-sport",
            title: "AFI Sport E-Commerce",
            category: "Fullstack · E-Commerce",
            description: "E-commerce olahraga dengan integrasi Midtrans, RajaOngkir, checkout optimization, dan order tracking."
        }
    ],
    achievements: [],
    certifications: [
        {
            title: "Ijazah S1 Sistem Informasi",
            issuer: "UPN \"Veteran\" Jawa Timur",
            period: "2025",
            link: "https://drive.google.com/file/d/1jaBxamQN7f9O4-dGi7A0nCBUNvECMsS1/view?usp=sharing"
        },
        {
            title: "Surat Keterangan Lulus (SKL)",
            issuer: "UPN \"Veteran\" Jawa Timur",
            period: "2025",
            link: "https://drive.google.com/file/d/1hecUFN97rl8K5cKEWEv0GaeI3jWaEDld/view?usp=drive_link"
        },
        {
            title: "Fullstack Web Developer (MSIB Batch 5)",
            issuer: "GITS Indonesia",
            period: "2023",
            link: "https://drive.google.com/file/d/1Cd0bRs_WlPAGYKz0eoJ_ePyeb7eAFNHG/view?usp=drive_link"
        },
        {
            title: "Sertifikat Magang",
            issuer: "Bawaslu Kota Surabaya",
            period: "2024",
            link: "https://drive.google.com/file/d/1VsUzNlzwVKuqeTqKkV4Gr6RsftjT1-gj/view?usp=drive_link"
        },
        {
            title: "Membuat Aplikasi Web dengan Laravel 9",
            issuer: "Coding Studio",
            period: "2024",
            link: "https://drive.google.com/file/d/1twMI-8BtUODWzrP5_Gpdn2g6viv50PJJ/view?usp=drive_link"
        },
        {
            title: "Mahir Membuat DB Aplikasi Profesional (MySQL)",
            issuer: "Coding Studio",
            period: "2024",
            link: "https://drive.google.com/file/d/1aKtV9JwMTKxS1QaxxKixHn9ZQx-Kz2PG/view?usp=drive_link"
        },
        {
            title: "Junior Web Programmer",
            issuer: "Badan Nasional Sertifikasi Profesi (BNSP)",
            period: "2024 – 2027",
            link: "https://drive.google.com/file/d/13SSXmCW83MV7CLoNUG_QW_vzLc-lSMnL/view?usp=drive_link"
        },
        {
            title: "Belajar Prinsip Pemrograman SOLID",
            issuer: "Dicoding",
            period: "2023 – 2026",
            link: "https://drive.google.com/file/d/1wpuDdTTNH1RlZxfrJLd10qDxkrj-cq0R/view?usp=drive_link"
        }
    ],
    softSkills: [
        "Agile Scrum",
        "Team Collaboration",
        "Problem Solving",
        "Communication",
        "Technical Documentation"
    ],
    capabilities: [
        "Full Stack Web Development",
        "Backend API Engineering",
        "DevOps & Deployment",
        "Payment Gateway Integration",
        "Database & Migration",
        "System Analysis & Documentation"
    ]
};

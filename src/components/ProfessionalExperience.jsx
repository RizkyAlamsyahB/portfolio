import { useMemo, useState } from 'react';
import { Gsap, GsapPresence } from '../utils/gsapAnimate';
// Note: scroll-triggered entrance animations removed from this section intentionally
import { Plus, Calendar, Building2, Sparkles, ArrowUpRight } from 'lucide-react';

const experiences = [
  {
    company: 'PT Media Inovasi Strategis (GarudaLabs)',
    role: 'Backend & DevOps Engineer',
    location: 'Remote',
    period: 'Feb 2026 - Apr 2026',
    project: 'Haji Umroh Store',
    impact: 'Membangun backend API, payment, shipping, object storage, dan CI/CD untuk platform e-commerce Haji & Umroh.',
    stack: ['Golang', 'PostgreSQL', 'Redis', 'MinIO', 'Xendit', 'RajaOngkir', 'Docker', 'AWS'],
    description: [
      'Membangun backend API berbasis Golang untuk platform e-commerce Haji & Umroh milik pemerintah.',
      'Mengintegrasikan Xendit payment gateway dan RajaOngkir untuk shipping workflow otomatis.',
      'Mengelola PostgreSQL, Redis caching, dan object storage MinIO untuk performa tinggi.',
      'Menyiapkan CI/CD pipeline dan production deployment ke cloud infrastructure.',
    ],
  },
  {
    company: 'PT Media Inovasi Strategis (GarudaLabs)',
    role: 'Backend Engineer',
    location: 'Remote',
    period: 'Des 2025 - Feb 2026',
    project: 'Rewrite Web PMII',
    impact: 'Rewrite legacy system ke backend Golang, migrasi database PostgreSQL, dan cloud deployment.',
    stack: ['Golang', 'PostgreSQL', 'Docker', 'CI/CD', 'Cloud'],
    description: [
      'Melakukan rewrite legacy web PMII dari sistem lama ke backend Golang yang modern dan scalable.',
      'Migrasi database ke PostgreSQL dengan schema redesign untuk efisiensi query.',
      'Menyiapkan containerized deployment menggunakan Docker dan CI/CD pipeline.',
      'Production deployment ke cloud server dengan monitoring dan logging terintegrasi.',
    ],
  },
  {
    company: 'Plex Seller',
    role: 'Full Stack Developer',
    location: 'Probation',
    period: 'Okt 2025 · 1 Minggu',
    impact: 'Mendapat exposure pada sistem ERP enterprise dengan message queue dan asynchronous architecture.',
    stack: ['Express.js', 'TypeScript', 'React.js', 'RabbitMQ', 'Docker'],
    description: [
      'Bergabung sebagai probation untuk sistem ERP berbasis Express.js, TypeScript, React.js, dan RabbitMQ.',
      'Membangun modul chat internal dan mulai integrasi marketplace Lazada.',
      'Mendapat exposure pada enterprise workflow, message queue, dan asynchronous architecture.',
      'Resign setelah 1 minggu karena kondisi kesehatan.',
    ],
  },
  {
    company: 'AFI Sport',
    role: 'Full Stack Web Developer',
    location: 'Kab. Bojonegoro, Jawa Timur · Freelance',
    period: 'Jul 2025 - Agu 2025',
    impact: 'Membangun modul pembayaran dan pengiriman untuk sistem e-commerce olahraga.',
    stack: ['Laravel', 'MySQL', 'Midtrans', 'RajaOngkir'],
    description: [
      'Membangun modul pembayaran dan pengiriman untuk sistem e-commerce olahraga berbasis Laravel & MySQL.',
      'Mengintegrasikan API Midtrans untuk proses transaksi dan API RajaOngkir untuk perhitungan ongkos kirim otomatis.',
      'Mengoptimalkan proses checkout dan pelacakan pesanan agar lebih efisien dan responsif.',
    ],
  },
  {
    company: 'Alena Soccer',
    role: 'Full Stack Web Developer',
    location: 'Kab. Sidoarjo, Jawa Timur',
    period: 'Feb 2025 - Jun 2025',
    impact: 'Mengembangkan sistem reservasi lapangan futsal end-to-end menggunakan Laravel dan MySQL.',
    stack: ['Laravel', 'MySQL', 'Midtrans', 'REST API'],
    description: [
      'Mengembangkan sistem reservasi lapangan futsal end-to-end menggunakan Laravel dan MySQL.',
      'Mengintegrasikan QRIS Payment Midtrans, Point of Sales (POS), membership, dan laporan keuangan otomatis.',
      'Mendesain RESTful API untuk komunikasi data antar modul admin dan kasir dengan autentikasi berbasis role.',
      'Melaksanakan 113 skenario black-box testing dengan hasil 100% sesuai spesifikasi.',
    ],
  },
  {
    company: 'Badan Pengawas Pemilu Kota Surabaya',
    role: 'Full Stack Web Developer & Team Lead',
    location: 'Kota Surabaya, Jawa Timur · Magang',
    period: 'Jul 2024 - Agu 2024',
    impact: 'Membangun sistem E-Library internal berbasis Node.js, Vue.js, dan MySQL untuk Bawaslu.',
    stack: ['Node.js', 'Vue.js', 'MySQL', 'OwnCloud', 'Scrum'],
    description: [
      'Membangun sistem E-Library internal berbasis Node.js, Vue.js, dan MySQL yang terintegrasi dengan OwnCloud untuk manajemen dokumen.',
      'Merancang Rest API internal untuk akses data dokumen dan laporan kegiatan antar departemen.',
      'Menerapkan Agile Scrum dan memimpin tim kecil dari analisis kebutuhan hingga deployment.',
      'Berhasil mempercepat proses pengelolaan dokumen dan meningkatkan transparansi organisasi.',
    ],
  },
];

function getStartYear(period) {
  const match = period.match(/\b20\d{2}\b/);
  return match ? Number(match[0]) : null;
}

const ExperienceItem = ({ experience, isExpanded, onToggle, index }) => {
  const isCurrent = index === 0; // most recent entry is always first

  return (
    <article className="relative min-w-0">
      <div className="absolute left-[15px] top-0 h-full w-px bg-black/[0.08]" />

      <div className="relative pl-8 min-w-0">
        <span className={`absolute left-[10px] top-8 h-[11px] w-[11px] rounded-full border ${isExpanded ? 'border-lime-500 bg-lime-500' : 'border-black/25 bg-[#FAF9F6]'}`} />

        <button
          onClick={onToggle}
          type="button"
          className="w-full max-w-full rounded-[6px] border border-black/[0.08] bg-white text-left px-5 md:px-7 py-6 md:py-7 hover:border-black/20 hover:shadow-[0_8px_24px_rgba(0,0,0,0.05)] transition-all duration-300"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0 flex-1">
              <div className="flex flex-wrap items-center gap-2.5 mb-3">
                <span className="font-mono text-[9px] md:text-[10px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px] inline-flex items-center gap-1.5">
                  <Calendar className="w-3 h-3" />
                  {experience.period}
                </span>
                {isCurrent && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] bg-lime-400 text-black px-2.5 py-1 rounded-[2px]">
                    Active Now
                  </span>
                )}
                {experience.project && (
                  <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-black/45 border border-black/[0.1] px-2.5 py-1 rounded-[2px]">
                    {experience.project}
                  </span>
                )}
              </div>

              <h3 className="text-[24px] md:text-[30px] lg:text-[34px] font-black uppercase tracking-[-0.02em] leading-[0.95] text-black">
                {experience.role}
              </h3>

              <p className="mt-2 font-mono text-[10px] md:text-[11px] uppercase tracking-[0.16em] text-black/45 inline-flex items-center gap-1.5">
                <Building2 className="w-3.5 h-3.5" />
                {experience.company}
              </p>
              {experience.location && (
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-black/30 pl-[19px]">
                  {experience.location}
                </p>
              )}

              <p className="mt-5 text-sm md:text-[15px] font-light leading-relaxed text-black/60 max-w-3xl">
                {experience.impact}
              </p>
            </div>

            <Gsap.div
              animate={{ rotate: isExpanded ? 45 : 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-1 w-10 h-10 shrink-0 rounded-full border flex items-center justify-center ${isExpanded ? 'border-black bg-black text-white' : 'border-black/20 text-black/60'}`}
            >
              <Plus className="w-4.5 h-4.5" strokeWidth={1.8} />
            </Gsap.div>
          </div>
        </button>

        <GsapPresence>
          {isExpanded && (
            <Gsap.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{
                height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                opacity: { duration: 0.22, ease: 'easeOut' },
              }}
              className="overflow-hidden"
            >
              <div className="mt-2 ml-0 rounded-[6px] border border-black/[0.08] bg-[#F7F7F3] px-5 md:px-7 py-5 md:py-6">
                <ul className="space-y-3 max-w-3xl">
                  {experience.description.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-black/60 font-light text-sm md:text-[15px] leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-black/30 shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-4 border-t border-black/[0.08] flex flex-wrap gap-2">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="font-mono text-[9.5px] md:text-[10px] uppercase tracking-[0.14em] text-black/68 border border-black/[0.1] bg-white px-2.5 py-1 rounded-[2px]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Gsap.div>
          )}
        </GsapPresence>
      </div>
    </article>
  );
};

const ProfessionalExperience = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const statCards = useMemo(() => {
    const roles = experiences.length;
    const activeNow = experiences.filter((item) => /present/i.test(item.period)).length;
    const organizations = new Set(experiences.map((item) => item.company)).size;
    const startYears = experiences.map((item) => getStartYear(item.period)).filter(Boolean);
    const firstYear = startYears.length ? Math.min(...startYears) : new Date().getFullYear();

    return [
      { label: 'Total Roles', value: String(roles).padStart(2, '0') },
      { label: 'Active Now', value: String(activeNow).padStart(2, '0') },
      { label: 'Since', value: String(firstYear) },
      { label: 'Organizations', value: String(organizations).padStart(2, '0') },
    ];
  }, []);

  return (
    <section id="experience-section" className="pt-20 md:pt-24 pb-24 md:pb-32 w-full relative bg-[#FAF9F6] overflow-hidden overflow-x-clip">
      <div className="absolute inset-0 pointer-events-none select-none">
        <div className="absolute right-0 top-20 w-[460px] h-[460px] bg-black/[0.025] rounded-full blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="flex items-center gap-3 mb-14 md:mb-16">
          <span className="w-[6px] h-[6px] rounded-full bg-lime-500 shrink-0" />
          <span className="font-mono text-[10px] md:text-[11px] font-bold uppercase tracking-[0.24em] text-black/32">
            03 - Experience
          </span>
          <div className="flex-1 h-px bg-black/[0.07]" />
        </div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-10 lg:gap-14 items-start min-w-0">
          <aside className="lg:sticky lg:top-24 min-w-0">
            <h2 className="text-[34px] sm:text-[46px] lg:text-[56px] font-black uppercase tracking-[-0.03em] leading-[0.95] text-black">
              Professional
              <br />
              Experience
            </h2>

            <p className="mt-5 text-[14px] md:text-[15px] font-light leading-[1.8] text-black/60 max-w-[320px]">
              Pengalaman kerja yang berfokus pada Full Stack Web Development, Backend Engineering, API Development, dan production deployment di berbagai environment.
            </p>

            <div className="mt-7 grid grid-cols-2 gap-2.5">
              {statCards.map((stat) => (
                <div key={stat.label} className="border border-black/[0.09] bg-white rounded-[4px] px-3.5 py-3.5">
                  <p className="font-mono text-[8.5px] uppercase tracking-[0.14em] text-black/38">{stat.label}</p>
                  <p className="mt-1.5 text-[22px] leading-none font-black tracking-tight text-black">{stat.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-2 text-black/42">
              <Sparkles className="w-3.5 h-3.5" />
              <p className="font-mono text-[9px] uppercase tracking-[0.16em]">Career timeline - expand each role</p>
            </div>
          </aside>

          <div className="relative space-y-3 min-w-0 overflow-x-clip">
            {experiences.map((experience, index) => (
              <ExperienceItem
                key={experience.company + experience.role}
                experience={experience}
                index={index}
                isExpanded={expandedIndex === index}
                onToggle={() => setExpandedIndex((current) => (current === index ? null : index))}
              />
            ))}

            <div className="pl-9 pt-2">
              <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-black/28 inline-flex items-center gap-1.5">
                End of timeline
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalExperience;

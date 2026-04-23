import { memo } from 'react';
import { Gsap } from '../utils/gsapAnimate.jsx';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Award, ExternalLink, Shield, Calendar } from 'lucide-react';

const { certifications } = PORTFOLIO_DATA;

const CertificationRow = memo(function CertificationRow({ cert, index }) {
  const isOfficial = /bnsp|nasional sertifikasi/i.test(cert.issuer);

  return (
    <Gsap.a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex items-center gap-4 md:gap-6 border-b border-white/[0.06] py-5 md:py-6 px-4 md:px-6 hover:bg-white/[0.03] transition-all duration-300 overflow-hidden"
    >
      {/* Lime left accent bar */}
      <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-lime-400 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

      {/* Index */}
      <span className="font-mono text-[10px] text-white/20 group-hover:text-lime-400/60 transition-colors duration-300 w-6 shrink-0 tracking-[0.14em]">
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Title + issuer */}
      <div className="flex-1 min-w-0">
        <p className="text-sm md:text-[15px] font-bold text-white/75 group-hover:text-white transition-colors duration-300 leading-snug">
          {cert.title}
        </p>
        <p className="mt-0.5 font-mono text-[10px] md:text-[11px] text-white/28 group-hover:text-white/45 transition-colors duration-300 tracking-[0.1em] truncate">
          {cert.issuer}
        </p>
      </div>

      {/* BNSP Official Badge */}
      {isOfficial && (
        <span className="hidden md:inline-flex shrink-0 items-center gap-1.5 font-mono text-[9px] uppercase tracking-[0.16em] border border-lime-400/40 text-lime-400 px-2.5 py-1 rounded-[2px]">
          <Shield className="w-2.5 h-2.5" />
          Official
        </span>
      )}

      {/* Period */}
      <span className="hidden sm:flex shrink-0 items-center gap-1.5 font-mono text-[10px] text-white/25 group-hover:text-white/45 transition-colors duration-300 tracking-[0.1em]">
        <Calendar className="w-3 h-3" />
        {cert.period}
      </span>

      {/* Link icon */}
      <ExternalLink className="w-3.5 h-3.5 shrink-0 text-white/18 group-hover:text-lime-400 transition-colors duration-300" />
    </Gsap.a>
  );
});

const Certifications = memo(function Certifications() {
  const officialCount = certifications.filter(c => /bnsp|nasional sertifikasi/i.test(c.issuer)).length;

  return (
    <section id="certifications-section" className="pt-24 pb-32 w-full bg-[#0A0A0A] relative overflow-hidden">

      {/* BG watermark */}
      <div
        className="absolute right-[-5%] top-1/2 -translate-y-1/2 font-black text-[22vw] uppercase leading-none pointer-events-none select-none tracking-[-0.04em]"
        style={{ color: 'rgba(255,255,255,0.018)' }}
        aria-hidden
      >
        CERT
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">

        {/* ── Section Header ── */}
        <Gsap.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center items-center gap-4 mb-20 md:mb-24"
        >
          <div className="w-8 h-[2px] bg-white/15" />
          <span className="font-mono text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] md:tracking-[0.26em] text-white/30">
            07. Credentials_
          </span>
          <div className="w-8 h-[2px] bg-white/15" />
        </Gsap.div>

        <div className="grid lg:grid-cols-[360px_1fr] gap-14 lg:gap-20 items-start">

          {/* ── Left: heading + stats ── */}
          <div className="lg:sticky lg:top-24">
            <Gsap.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-[44px] sm:text-[56px] lg:text-[68px] font-black uppercase tracking-[-0.03em] leading-[0.9] text-white"
            >
              Certifi
              <br />
              <span className="text-white/12">cations.</span>
            </Gsap.h2>

            <Gsap.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-6 text-sm md:text-[15px] font-light leading-[1.8] text-white/35 max-w-[300px]"
            >
              Lisensi dan sertifikasi profesional yang mendukung kompetensi sebagai Full Stack Web Developer.
            </Gsap.p>

            {/* Stat cards */}
            <Gsap.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-8 grid grid-cols-2 gap-3"
            >
              <div className="border border-white/[0.07] rounded-[4px] px-4 py-4">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/22">Total Certs</p>
                <p className="mt-2 text-[30px] leading-none font-black text-white tracking-tight">
                  {String(certifications.length).padStart(2, '0')}
                </p>
              </div>
              <div className="border border-white/[0.07] rounded-[4px] px-4 py-4">
                <p className="font-mono text-[8.5px] uppercase tracking-[0.16em] text-white/22">Licensed</p>
                <p className="mt-2 text-[30px] leading-none font-black text-lime-400 tracking-tight">
                  {String(officialCount).padStart(2, '0')}
                </p>
              </div>
            </Gsap.div>

            <Gsap.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.28 }}
              className="mt-5 flex items-center gap-2 text-white/20"
            >
              <Award className="w-3.5 h-3.5" />
              <span className="font-mono text-[9px] uppercase tracking-[0.16em]">Click any row to view certificate</span>
            </Gsap.div>
          </div>

          {/* ── Right: cert list ── */}
          <Gsap.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="border border-white/[0.07] rounded-[6px] overflow-hidden"
          >
            {/* Table header */}
            <div className="flex items-center gap-4 md:gap-6 bg-white/[0.03] border-b border-white/[0.07] px-4 md:px-6 py-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/18 w-6 shrink-0">#</span>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/18 flex-1">Certification</span>
              <span className="hidden sm:block font-mono text-[9px] uppercase tracking-[0.18em] text-white/18 shrink-0">Period</span>
              <Award className="w-3 h-3 text-white/10" />
            </div>

            {certifications.map((cert, i) => (
              <CertificationRow key={cert.title} cert={cert} index={i} />
            ))}
          </Gsap.div>
        </div>
      </div>
    </section>
  );
});

export default Certifications;

import React, { useEffect, useRef, useState } from 'react'
import { cameraGallery, categories, experienceGroups, freelanceShowcase, personalSkills, profile, projects, socialLinks, websites } from './data/content'

function MediaFrame({ image, label, accent = 'sage', className = '', onClick, eager = false }) {
  const [failed, setFailed] = useState(false)
  const hasImage = image && !failed

  return (
    <div className={`media-frame accent-${accent} ${className}`} onClick={onClick} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} onKeyDown={(event) => onClick && event.key === 'Enter' && onClick()}>
      {hasImage ? <img src={image} alt={label} loading={eager ? 'eager' : 'lazy'} onError={() => setFailed(true)} /> : <div className="media-placeholder"><span>Media sementara</span><strong>{label}</strong><small>Tambahkan file gambar di public/image</small></div>}
    </div>
  )
}

function SectionLabel({ number, children }) {
  return <div className={`section-label ${number ? '' : 'section-label-plain'}`}>{number && <span>{number}</span>}<span>{children}</span></div>
}

function CameraIcon() {
  return <svg className="camera-icon" viewBox="0 0 48 48" aria-hidden="true"><path d="M8 15.5h7l2.8-4h12.4l2.8 4H40a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-18a3 3 0 0 1 3-3Z" /><circle cx="24" cy="27" r="8" /><path d="M34 21h3" /></svg>
}

function MailIcon() {
  return (
    <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="contact-card-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.59 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.8 13.47 3.8 11.91C3.8 7.37 7.49 3.67 12.05 3.67ZM8.73 7.34C8.57 7.34 8.31 7.4 8.09 7.64C7.87 7.88 7.24 8.47 7.24 9.68C7.24 10.89 8.12 12.05 8.24 12.21C8.37 12.37 9.94 14.88 12.41 15.86C14.46 16.67 14.88 16.51 15.32 16.47C15.77 16.43 16.76 15.88 16.96 15.31C17.17 14.73 17.17 14.24 17.11 14.14C17.04 14.04 16.89 13.98 16.66 13.87C16.44 13.76 15.33 13.21 15.12 13.14C14.92 13.06 14.77 13.02 14.62 13.25C14.47 13.48 14.04 13.98 13.91 14.13C13.78 14.28 13.65 14.3 13.43 14.19C13.2 14.08 12.48 13.84 11.62 13.08C10.96 12.49 10.51 11.76 10.38 11.54C10.26 11.31 10.37 11.19 10.48 11.08C10.58 10.98 10.71 10.81 10.82 10.68C10.93 10.55 10.97 10.45 11.04 10.3C11.12 10.15 11.08 10.02 11.02 9.91C10.97 9.8 10.52 8.7 10.33 8.25C10.15 7.81 9.97 7.87 9.83 7.86C9.7 7.86 9.55 7.85 9.4 7.85C9.25 7.85 9.01 7.91 8.81 8.13C8.61 8.35 8.05 8.87 8.05 9.95" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

function MapPinIcon() {
  return (
    <svg className="contact-card-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}

function CameraGallery({ onSelectPhoto }) {
  const galleryRef = useRef(null)

  const moveGallery = (direction) => {
    galleryRef.current?.scrollBy({ left: direction * galleryRef.current.clientWidth * 0.52, behavior: 'smooth' })
  }

  return <div className="camera-gallery" aria-label="Galeri kamera dan dokumentasi">
    <div className="camera-gallery-header"><p className="eyebrow">Dokumentasi visual</p><div className="camera-gallery-controls"><span>{cameraGallery.length} foto</span><button type="button" onClick={() => moveGallery(-1)} aria-label="Foto sebelumnya">←</button><button type="button" onClick={() => moveGallery(1)} aria-label="Foto berikutnya">→</button></div></div>
    <div className="camera-gallery-track" ref={galleryRef} tabIndex="0">
      {cameraGallery.map((item, index) => <button className="camera-gallery-item" type="button" key={item.id} onClick={() => onSelectPhoto(item)} aria-label={`Buka ${item.label}`}><img src={item.image} alt={item.label} loading={index < 2 ? 'eager' : 'lazy'} /></button>)}
    </div>
  </div>
}

function PersonalSkillsSection({ onSelectPhoto }) {
  return <section className="personal-skills section-shell" id="keahlian">
    <SectionLabel number="02">Keahlian personal</SectionLabel>
    <div className="personal-skills-heading reveal-on-scroll reveal-up">
      <div>
        <p className="eyebrow">Perangkat dan praktik visual</p>
        <h2>Keahlian Kreatif<br /><em>&amp; Media Digital</em></h2>
      </div>
      <p className="personal-skills-intro">Saya menggunakan berbagai perangkat lunak kreatif untuk mendukung proses desain grafis, pengolahan visual, dan penyuntingan konten digital. Selain itu, saya memiliki pengalaman dalam pengoperasian kamera untuk kebutuhan dokumentasi kegiatan dan produksi media.</p>
    </div>
    <div className="software-grid">
      {personalSkills.map((skill, index) => <article className={`software-item ${skill.name === 'CapCut' ? 'software-item-capcut' : ''} reveal-on-scroll reveal-up`} style={{ '--reveal-delay': `${index * 75}ms` }} key={skill.name}>
        <div className="software-logo"><img src={skill.logo} alt="" loading="lazy" /></div>
        <h3>{skill.name}</h3>
        <p>{skill.description}</p>
      </article>)}
    </div>
    <div className="camera-group reveal-on-scroll reveal-up">
      <div className="camera-heading"><div className="camera-logo"><CameraIcon /></div><div><p className="eyebrow">Kemampuan personal</p><h3>Kamera &amp; Dokumentasi Visual</h3></div></div>
      <p className="camera-description">Pengalaman dalam pengambilan gambar dan dokumentasi kegiatan, termasuk pengoperasian kamera untuk kebutuhan acara dan siaran langsung.</p>
      <ul className="camera-list"><li>Fotografi dan pengambilan gambar.</li><li>Dokumentasi kegiatan.</li><li>Pengoperasian kamera untuk acara dan siaran langsung.</li></ul>
      <CameraGallery onSelectPhoto={onSelectPhoto} />
    </div>
  </section>
}

function ProjectGallery({ images, title, onOpen }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const showPrevious = (event) => { event.stopPropagation(); setActiveIndex((index) => (index - 1 + images.length) % images.length) }
  const showNext = (event) => { event.stopPropagation(); setActiveIndex((index) => (index + 1) % images.length) }

  return <div className="project-gallery-carousel" onKeyDown={(event) => {
    if (event.key === 'ArrowLeft') { event.preventDefault(); setActiveIndex((index) => (index - 1 + images.length) % images.length) }
    if (event.key === 'ArrowRight') { event.preventDefault(); setActiveIndex((index) => (index + 1) % images.length) }
  }} tabIndex="0">
    <button className="project-gallery-image" type="button" onClick={() => onOpen(activeIndex)} aria-label={`Buka gambar ${activeIndex + 1} dari ${images.length}`}>
      <img src={images[activeIndex]} alt={`${title} ${activeIndex + 1}`} />
    </button>
    {images.length > 1 && <><button className="project-gallery-arrow project-gallery-prev" type="button" onClick={showPrevious} aria-label="Gambar sebelumnya">←</button><button className="project-gallery-arrow project-gallery-next" type="button" onClick={showNext} aria-label="Gambar berikutnya">→</button><span className="project-gallery-indicator">{String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span></>}
  </div>
}

function FreelanceShowcaseSection({ onSelectPhoto }) {
  return <section className="freelance-showcase section-shell" id="graphic-design-showcase">
    <SectionLabel>Eksplorasi freelance</SectionLabel>
    <div className="showcase-heading reveal-on-scroll reveal-up">
      <div><p className="eyebrow">Karya desain grafis pilihan</p><h2>Graphic Design<br /><em>Showcase.</em></h2></div>
      <div className="showcase-summary"><p className="showcase-category">Graphic Design · Freelance · Poster &amp; Competition</p><p className="showcase-role">Freelance Graphic Designer</p><p>Kumpulan karya desain grafis yang mencakup berbagai kebutuhan visual, mulai dari proyek freelance, poster promosi UMKM, materi publikasi, hingga desain untuk kompetisi. Setiap karya dikembangkan dengan pendekatan visual yang menyesuaikan tujuan, karakter, dan kebutuhan masing-masing desain, melalui eksplorasi tipografi, warna, komposisi, serta elemen grafis. Galeri ini merepresentasikan proses eksplorasi kreatif dan pengalaman dalam mengerjakan beragam kebutuhan desain grafis.</p></div>
    </div>
    <div className="freelance-showcase-grid">{freelanceShowcase.map((item, index) => <button className="freelance-showcase-item reveal-on-scroll reveal-scale" style={{ '--reveal-delay': `${(index % 6) * 60}ms` }} type="button" key={item.id} onClick={() => onSelectPhoto({ ...item, note: item.category, accent: 'sage' })} aria-label={`Buka ${item.label}`}><img src={item.image} alt={item.label} loading="lazy" /><span>{item.category}</span></button>)}</div>
  </section>
}

function SelectedWebsitesSection({ onSelectPhoto }) {
  const openPreview = (image, label, note) => onSelectPhoto({ image, label, note, accent: 'sage' })

  return <section className="selected-websites section-shell" id="selected-websites">
    <SectionLabel>Selected Websites</SectionLabel>
    <div className="website-showcase-heading reveal-on-scroll reveal-up">
      <div><p className="eyebrow">Websites built with purpose.</p><h2>Selected<br /><em>Websites.</em></h2></div>
      <p className="website-showcase-summary">Kumpulan website yang saya kembangkan dengan memperhatikan desain antarmuka, pengalaman pengguna, dan responsivitas di berbagai perangkat. Setiap proyek menampilkan proses perancangan visual hingga implementasi website yang dapat diakses secara langsung.</p>
    </div>
    <div className="website-project-list">{websites.map((website, index) => <article className={`website-project ${website.id === 'ceria-interactive-water-cycle-learning' ? 'website-project-ceria' : ''} reveal-on-scroll reveal-up`} style={{ '--reveal-delay': `${index * 90}ms` }} key={website.id}>
      <div className="website-project-copy"><span className="website-project-number">{website.number}</span><div><p className="eyebrow">{website.category}</p><h3>{website.name}</h3><p className="website-project-focus">{website.focus}</p><p className="website-project-description">{website.description}</p><div className="website-project-actions"><button className="button button-dark" type="button" onClick={() => onSelectPhoto({ image: website.desktop, label: `${website.name} desktop preview`, note: 'Desktop UI preview', accent: 'sage' })}>Preview UI <span>↗</span></button><a className="button website-visit-button" href={website.hostingUrl} target="_blank" rel="noreferrer">Visit Website <span>↗</span></a></div></div></div>
      <div className="website-preview-grid"><button className="website-preview website-preview-desktop reveal-on-scroll reveal-scale" type="button" onClick={() => openPreview(website.desktop, `${website.name} desktop preview`, 'Desktop UI preview')} aria-label={`Buka preview desktop ${website.name}`}><img src={website.desktop} alt={`${website.name} desktop UI`} loading="lazy" /><span>Desktop UI</span></button><button className="website-preview website-preview-mobile reveal-on-scroll reveal-scale" type="button" onClick={() => openPreview(website.mobile, `${website.name} ${website.mobileLabel || 'mobile'} preview`, `${website.mobileLabel || 'Mobile'} UI preview`)} aria-label={`Buka preview ${website.mobileLabel || 'mobile'} ${website.name}`}><img src={website.mobile} alt={`${website.name} ${website.mobileLabel || 'mobile'} UI`} loading="lazy" /><span>{website.mobileLabel || 'Mobile UI'}</span></button></div>
      {website.supporting?.length > 0 && <div className="website-supporting"><p className="eyebrow">Visualisasi pendukung</p><div className="website-supporting-grid">{website.supporting.map((item, itemIdx) => <button className="website-supporting-item reveal-on-scroll reveal-scale" style={{ '--reveal-delay': `${itemIdx * 60}ms` }} type="button" key={item.image} onClick={() => openPreview(item.image, item.label, item.note)} aria-label={`Buka ${item.label}`}><img src={item.image} alt={item.label} loading="lazy" /></button>)}</div></div>}
    </article>)}</div>
  </section>
}

function ExperienceSection({ onSelectPhoto }) {
  return <section className="experience section-shell" id="pengalaman">
    <SectionLabel>Pengalaman &amp; aktivitas</SectionLabel>
    <div className="section-heading reveal-on-scroll reveal-up">
      <div><p className="eyebrow">Perjalanan yang sedang berlangsung</p><h2>Pengalaman,<br /><em>kolaborasi &amp; pencapaian.</em></h2></div>
      <p className="section-summary">Berbagai pengalaman kerja, proyek freelance, kegiatan organisasi, dan kompetisi menjadi bagian dari proses saya dalam mengembangkan kemampuan kreatif, komunikasi visual, serta kerja sama dalam tim.</p>
    </div>
    <div className="experience-groups">
      {experienceGroups.map((group) => <section className="experience-group" key={group.category}>
        <h3 className="reveal-on-scroll reveal-left">{group.category}</h3>
        <div className="timeline">
          {group.entries.map((item, itemIdx) => <article className="timeline-item reveal-on-scroll reveal-up" style={{ '--reveal-delay': `${(itemIdx % 5) * 80}ms` }} key={item.id}>
            <div className="timeline-dot" />
            <div className="timeline-content"><p className="eyebrow">{item.role}</p><h4>{item.title}</h4>{item.description && <p>{item.description}</p>}{item.images && <div className="timeline-certificate-grid">{item.images.map((image, imageIndex) => <button className="timeline-certificate" type="button" key={image} onClick={() => onSelectPhoto({ image, label: item.imageLabels[imageIndex], note: item.role, accent: 'blue' })}><img src={image} alt={item.imageLabels[image]} loading="lazy" /><span>{imageIndex === 0 ? 'Lihat sertifikat' : 'Lihat dokumen pendamping'}</span></button>)}</div>}</div>
          </article>)}
        </div>
      </section>)}
    </div>
  </section>
}

function ProjectModal({ project, onClose }) {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [onClose])

  const hasImages = project.images.length > 0

  return <div className="modal-backdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
    <article className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-title">
      <button className="close-button" onClick={onClose} aria-label="Tutup detail project">×</button>
      <div className="modal-heading"><span>{project.number} / {project.category}{project.year && ` / ${project.year}`}</span><h2 id="project-title">{project.title}</h2><p className="project-modal-description">{project.description}</p>{project.client && <p className="project-modal-role"><span>Klien</span>{project.client}</p>}{project.role && <p className="project-modal-role"><span>Peran</span>{project.role}</p>}</div>
      <div className={hasImages ? 'project-detail-gallery project-detail-gallery-scroll' : ''}>
        {hasImages ? <ProjectGallery images={project.images} title={project.title} onOpen={setLightboxIndex} /> : <MediaFrame image={project.cover} label={project.title} accent={project.accent} className="modal-media" eager />}
      </div>
    </article>
    {lightboxIndex !== null && <div className="project-lightbox" role="dialog" aria-label="Pratinjau gambar project" onClick={() => setLightboxIndex(null)}><button className="close-button" onClick={() => setLightboxIndex(null)} aria-label="Tutup gambar">×</button><button className="lightbox-nav lightbox-prev" disabled={lightboxIndex === 0} onClick={(event) => { event.stopPropagation(); setLightboxIndex(lightboxIndex - 1) }} aria-label="Gambar sebelumnya">←</button><img src={project.images[lightboxIndex]} alt={`${project.title} ${lightboxIndex + 1}`} onClick={(event) => event.stopPropagation()} /><button className="lightbox-nav lightbox-next" disabled={lightboxIndex === project.images.length - 1} onClick={(event) => { event.stopPropagation(); setLightboxIndex(lightboxIndex + 1) }} aria-label="Gambar berikutnya">→</button></div>}
  </div>
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => event.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [onClose])

  return <div className="lightbox" role="presentation" onClick={onClose}><div className="lightbox-inner" onClick={(event) => event.stopPropagation()}><button className="close-button" onClick={onClose} aria-label="Tutup galeri">×</button><MediaFrame image={item.image} label={item.label} accent={item.accent} className="lightbox-media" eager /><p>{item.label} <span>/ {item.note}</span></p></div></div>
}

function App() {
  const [activeCategory, setActiveCategory] = useState('Semua Karya')
  const [selectedProject, setSelectedProject] = useState(null)
  const [selectedGallery, setSelectedGallery] = useState(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const filteredProjects = activeCategory === 'Semua Karya' ? projects : projects.filter((project) => project.category === activeCategory || project.tags?.includes(activeCategory))

  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
      const onKeyDown = (e) => e.key === 'Escape' && closeMenu()
      window.addEventListener('keydown', onKeyDown)
      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onKeyDown)
      }
    } else {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  useEffect(() => {
    document.documentElement.classList.add('js-reveal-ready')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null,
        rootMargin: '0px 0px -40px 0px',
        threshold: 0.08,
      }
    )

    const elements = document.querySelectorAll('.reveal-on-scroll:not(.is-revealed)')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activeCategory])

  return <>
    <header className="site-header">
      <a className="brand" href="#beranda" onClick={closeMenu} aria-label="Beranda">
        <span className="brand-monogram" aria-hidden="true">AYS</span>
      </a>
      <button className={`menu-toggle ${menuOpen ? 'is-active' : ''}`} onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Tutup menu navigasi' : 'Buka menu navigasi'} aria-expanded={menuOpen}>
        <span />
        <span />
      </button>
      <nav className="desktop-nav" aria-label="Navigasi desktop">
        {[['beranda', 'Beranda'], ['tentang', 'Tentang'], ['pengalaman', 'Pengalaman'], ['karya', 'Karya'], ['kontak', 'Kontak']].map(([href, label]) => (
          <a key={href} href={`#${href}`}>{label}</a>
        ))}
      </nav>
    </header>

    <nav className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Navigasi mobile" aria-hidden={!menuOpen}>
      <div className="mobile-nav-inner">
        {[['beranda', 'Beranda'], ['tentang', 'Tentang'], ['pengalaman', 'Pengalaman'], ['karya', 'Karya'], ['kontak', 'Kontak']].map(([href, label]) => (
          <a key={href} href={`#${href}`} onClick={closeMenu}>
            <span>{label}</span>
            <span className="mobile-nav-arrow" aria-hidden="true">→</span>
          </a>
        ))}
      </div>
    </nav>
    {menuOpen && <div className="menu-backdrop" onClick={closeMenu} aria-hidden="true" />}

    <main>
      <section className="hero section-shell" id="beranda">
        <div className="hero-copy">
          <p className="hero-portfolio">PORTOFOLIO</p>
          <h1 className="hero-headline">Merangkai ide,<br />menciptakan <em>karya,</em><br />dan terus bertumbuh.</h1>
          <p className="hero-intro">Tempat saya menampilkan karya, pengalaman, dan proses belajar di bidang kreatif dan digital.</p>
          <div className="hero-actions"><a className="button button-dark" href="#karya">Jelajahi Karya <span>↘</span></a><a className="text-link" href="#tentang">Tentang Saya <span>↘</span></a></div>
        </div>
        <div className="hero-visual"><MediaFrame image="/image/profile/Foto%20Profil%20Headline.jpeg" label="Foto profil Arya" accent="terracotta" className="hero-media" eager /><div className="hero-stamp">{profile.shortName}<br /><span>est. 2026</span></div></div>
        <a className="scroll-cue" href="#tentang"><span className="scroll-line" />Gulir untuk menjelajah</a>
      </section>

      <section className="about section-shell" id="tentang">
        <SectionLabel number="01">Tentang saya</SectionLabel>
        <div className="about-grid">
          <div className="about-title reveal-on-scroll reveal-left">
            <p className="eyebrow">Profil pribadi</p>
            <h2>Mengenal<br /><em>lebih dekat.</em></h2>
          </div>
          <div className="about-copy">
            <div className="lead">
              {profile.bio.split('\n\n').map((paragraph, index) => <p key={paragraph} className="reveal-on-scroll reveal-up" style={{ '--reveal-delay': `${index * 100}ms` }}>{paragraph}</p>)}
            </div>
          </div>
        </div>
      </section>

      <PersonalSkillsSection onSelectPhoto={setSelectedGallery} />

      <ExperienceSection onSelectPhoto={setSelectedGallery} />

      <section className="work section-shell" id="karya">
        <SectionLabel>Karya pilihan</SectionLabel>
        <div className="section-heading reveal-on-scroll reveal-up">
          <div><p className="eyebrow">Desain, fotografi &amp; media digital</p><h2>Karya yang<br /><em>berbicara melalui visual.</em></h2></div>
          <p className="section-summary">Pilihan karya dari berbagai proyek desain grafis, fotografi, video, branding, dan media digital. Setiap proyek menampilkan hasil visual serta pengalaman kreatif di balik proses pengerjaannya.</p>
        </div>
        <div className="filter-row reveal-on-scroll reveal-fade" role="group" aria-label="Filter kategori karya">
          {categories.map((category) => <button className={activeCategory === category ? 'active' : ''} key={category} onClick={() => setActiveCategory(category)}>{category}</button>)}
        </div>
        <div className="project-grid">
          {filteredProjects.map((project, index) => <article className={`project-card accent-${project.accent} ${project.id === 'umk-broadcasting' ? 'project-card-featured' : ''} reveal-on-scroll reveal-scale`} style={{ '--reveal-delay': `${(index % 4) * 80}ms` }} key={project.id} onClick={() => setSelectedProject(project)} tabIndex="0" onKeyDown={(event) => event.key === 'Enter' && setSelectedProject(project)}>
            {project.images?.length ? <ProjectGallery images={project.images} title={project.title} onOpen={() => { setSelectedProject(project); }} /> : <MediaFrame image={project.cover} label={project.title} accent={project.accent} />}
            <div className="project-meta">
              <span>{project.number} / {project.category}{project.year && ` / ${project.year}`}</span>
              <h3>{project.title}</h3>
              {project.role && <p className="project-card-credit">{project.client ? `${project.client} / ` : ''}{project.role}</p>}
              <p>{project.description}</p>
              <span className="card-arrow">↗</span>
            </div>
          </article>)}
        </div>
      </section>

      <FreelanceShowcaseSection onSelectPhoto={setSelectedGallery} />

      <SelectedWebsitesSection onSelectPhoto={setSelectedGallery} />

      <section className="contact section-shell" id="kontak">
        <SectionLabel number="05">Kontak</SectionLabel>
        <div className="contact-inner">
          <div className="contact-header reveal-on-scroll reveal-up">
            <div className="contact-title-group">
              <p className="eyebrow">Mari terhubung</p>
              <h2>Mari <em>Berkolaborasi.</em></h2>
            </div>
            <p className="contact-intro">Terbuka untuk kolaborasi, proyek kreatif, dan kesempatan baru. Silakan hubungi saya melalui kontak berikut.</p>
          </div>

          <div className="contact-grid">
            <a className="contact-card contact-card-featured reveal-on-scroll reveal-up" href={`mailto:${profile.email}`} aria-label={`Kirim email ke ${profile.email}`}>
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <MailIcon />
                  <span>Email</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="contact-card-body">
                <strong className="contact-card-value">{profile.email}</strong>
                <span className="contact-card-hint">Kirim pesan langsung untuk diskusi atau kerja sama</span>
              </div>
            </a>

            <a className="contact-card reveal-on-scroll reveal-up" style={{ '--reveal-delay': '80ms' }} href="https://wa.me/6288232411567" target="_blank" rel="noreferrer" aria-label="Hubungi via WhatsApp">
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <WhatsAppIcon />
                  <span>WhatsApp</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="contact-card-body">
                <strong className="contact-card-value">0882 3241 1567</strong>
                <span className="contact-card-hint">Chat cepat untuk pesan singkat atau diskusi santai</span>
              </div>
            </a>

            <a className="contact-card reveal-on-scroll reveal-up" style={{ '--reveal-delay': '160ms' }} href="https://www.instagram.com/aryw_ss/" target="_blank" rel="noreferrer" aria-label="Buka profil Instagram @aryw_ss">
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <InstagramIcon />
                  <span>Instagram</span>
                </div>
                <span className="contact-card-arrow" aria-hidden="true">↗</span>
              </div>
              <div className="contact-card-body">
                <strong className="contact-card-value">@aryw_ss</strong>
                <span className="contact-card-hint">Ikuti update karya visual, desain, dan media digital</span>
              </div>
            </a>

            <div className="contact-card contact-card-static reveal-on-scroll reveal-up" style={{ '--reveal-delay': '240ms' }}>
              <div className="contact-card-top">
                <div className="contact-card-badge">
                  <MapPinIcon />
                  <span>Alamat</span>
                </div>
              </div>
              <div className="contact-card-body">
                <strong className="contact-card-value">{profile.location}</strong>
                <span className="contact-card-hint">Domisili dan basis kegiatan kreatif</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <footer className="site-footer reveal-on-scroll reveal-fade">
      <div className="site-footer-inner">
        <span className="site-footer-name">{profile.name}</span>
        <span className="site-footer-copy">© 2026 · Dibuat dengan rasa ingin tahu</span>
        <a className="site-footer-backtop" href="#beranda">Kembali ke atas ↑</a>
      </div>
    </footer>
    {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
    {selectedGallery && <Lightbox item={selectedGallery} onClose={() => setSelectedGallery(null)} />}
  </>
}

export default App

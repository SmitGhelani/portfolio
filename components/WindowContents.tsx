import Image from 'next/image'

export function AboutContent() {
  return (
    <>
      <div className="win-tag">// Profile</div>
      <div className="profile-header">
        <Image src="/IMG_8687.jpg" alt="Profile" width={80} height={80} className="profile-photo" style={{ objectPosition: 'center top' }} />
        <div>
          <div className="profile-name">Desert<br />Explorer</div>
          <div className="profile-role">Full-Stack Dev · ML Engineer</div>
        </div>
      </div>
      <p className="profile-bio" style={{ marginBottom: 14 }}>
        Passionate developer &amp; researcher from Gandhinagar, Gujarat. I build elegant digital
        experiences at the intersection of technology, design, and human curiosity. From Thar
        desert dunes to digital frontiers.
      </p>
      <div className="info-grid">
        <div className="info-card"><div className="info-label">Location</div><div className="info-val">Gandhinagar, GJ</div></div>
        <div className="info-card"><div className="info-label">Status</div><div className="info-val">Open to Work ✓</div></div>
        <div className="info-card"><div className="info-label">Specialty</div><div className="info-val">Full-Stack &amp; AI</div></div>
        <div className="info-card"><div className="info-label">Experience</div><div className="info-val">5+ Years</div></div>
        <div className="info-card"><div className="info-label">Languages</div><div className="info-val">Hindi · Gujarati · EN</div></div>
        <div className="info-card"><div className="info-label">Projects Done</div><div className="info-val">30+ Delivered</div></div>
      </div>
      <Image src="/IMG_2226.jpg" alt="With team" width={400} height={240} className="about-full-img" />
    </>
  )
}

export function SkillsContent() {
  const groups = [
    { title: 'Frontend', cls: 'st-orange', tags: ['React.js', 'Next.js', 'TypeScript', 'Tailwind', 'Three.js', 'Vue.js'] },
    { title: 'Backend & DB', cls: 'st-blue', tags: ['Node.js', 'Python', 'Django', 'FastAPI', 'PostgreSQL', 'MongoDB', 'Redis'] },
    { title: 'AI / ML', cls: 'st-green', tags: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'NLP', 'Computer Vision', 'LLMs'] },
    { title: 'Cloud & DevOps', cls: 'st-purple', tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Git', 'Linux'] },
    { title: 'Design & Tools', cls: 'st-pink', tags: ['Figma', 'UI/UX', 'Adobe XD', 'MATLAB', 'LaTeX', 'Jupyter'] },
  ]
  return (
    <>
      <div className="win-tag">// Technologies</div>
      {groups.map(g => (
        <div className="skill-group" key={g.title}>
          <div className="skill-group-title">{g.title}</div>
          <div className="skill-tags">
            {g.tags.map(t => <span key={t} className={`skill-tag ${g.cls}`}>{t}</span>)}
          </div>
        </div>
      ))}
    </>
  )
}

export function ExperienceContent() {
  const items = [
    { period: '2023 — Present', role: 'Senior Software Engineer', company: 'Tech Innovations Pvt. Ltd. · Ahmedabad', desc: 'Leading frontend architecture for enterprise SaaS. Migrated to React/Next.js stack, reducing load times 60%. Mentoring 5 junior devs.' },
    { period: '2021 — 2023', role: 'Full-Stack Developer', company: 'Digital Solutions Hub · Remote', desc: 'Built scalable web apps for fintech & e-commerce. Developed RESTful APIs. Delivered 12+ projects on time.' },
    { period: '2020 — 2021', role: 'ML Engineer (Intern)', company: 'AI Research Lab, DAIICT · Gandhinagar', desc: 'Deep learning models for image classification & NLP. Contributed to published research on healthcare CV. Processed 500K+ samples.' },
    { period: '2019 — 2020', role: 'Web Developer', company: 'Freelance · Gujarat', desc: 'Designed & developed custom websites for 20+ local businesses and startups.' },
  ]
  return (
    <>
      <div className="win-tag">// Work History</div>
      {items.map(i => (
        <div className="exp-item" key={i.period}>
          <div className="exp-period">{i.period}</div>
          <div className="exp-role">{i.role}</div>
          <div className="exp-company">{i.company}</div>
          <div className="exp-desc">{i.desc}</div>
        </div>
      ))}
    </>
  )
}

export function ProjectsContent() {
  const projects = [
    { num: '01 — Featured', title: 'Desert Mapping Intelligence Platform', desc: 'AI-powered geospatial platform for mapping arid landscapes using satellite imagery & deep learning. 10TB+ data processed.', stack: [['st-green','Python'],['st-green','TensorFlow'],['st-orange','React'],['st-purple','AWS'],['st-blue','PostgreSQL']] },
    { num: '02', title: 'MediScan — Healthcare AI', desc: 'Computer vision system for early disease detection. 94.3% accuracy on benchmark datasets using custom CNN architecture.', stack: [['st-green','PyTorch'],['st-blue','FastAPI'],['st-orange','Next.js'],['st-purple','Docker']] },
    { num: '03', title: 'RealEstate Analytics Dashboard', desc: 'Full-stack data viz platform with real-time processing & predictive pricing models. 1000+ daily active users.', stack: [['st-orange','React'],['st-blue','Node.js'],['st-orange','D3.js'],['st-blue','MongoDB']] },
    { num: '04', title: 'NLP Chatbot Platform', desc: 'Enterprise conversational AI with multi-language support & custom knowledge base on transformer architecture.', stack: [['st-green','Transformers'],['st-blue','Python'],['st-orange','Vue.js'],['st-purple','Redis']] },
    { num: '05', title: 'Smart Logistics Tracker', desc: 'Real-time supply chain visibility with IoT integration & route optimization. Predictive delivery time estimation.', stack: [['st-blue','Node.js'],['st-purple','IoT'],['st-orange','React Native'],['st-purple','AWS']] },
  ]
  return (
    <>
      <div className="win-tag">// Featured Work</div>
      {projects.map(p => (
        <div className="proj-card" key={p.num}>
          <div className="proj-num">{p.num}</div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-stack">
            {p.stack.map(([cls, tag]) => <span key={tag} className={`skill-tag ${cls}`}>{tag}</span>)}
          </div>
        </div>
      ))}
    </>
  )
}

export function EducationContent() {
  const items = [
    { year: '2019 — 2021', deg: 'M.Tech. in ICT', inst: 'DAIICT — Dhirubhai Ambani Institute of ICT', note: 'Specialization: ML & AI · Thesis: Deep Learning for Environmental Monitoring · CGPA: 8.7/10' },
    { year: '2015 — 2019', deg: 'B.E. in Computer Engineering', inst: 'Gujarat Technological University', note: 'Top 5% of department · CGPA: 8.2/10 · Strong foundation in algorithms & software engineering' },
    { year: '2024', deg: 'AWS Certified Solutions Architect', inst: 'Amazon Web Services — Professional Level', note: 'Cloud architecture, scalability, high availability, cost optimization strategies' },
    { year: '2023', deg: 'Deep Learning Specialization', inst: 'Coursera · deeplearning.ai', note: '5-course series: Neural networks, CNNs, sequence models, practical DL systems' },
  ]
  return (
    <>
      <div className="win-tag">// Academic Background</div>
      {items.map(i => (
        <div className="edu-card" key={i.year}>
          <div className="edu-year">{i.year}</div>
          <div className="edu-deg">{i.deg}</div>
          <div className="edu-inst">{i.inst}</div>
          <div className="edu-note">{i.note}</div>
        </div>
      ))}
    </>
  )
}

export function ResearchContent() {
  const items = [
    { num: '01', title: 'Deep Learning for Arid Land Classification Using Multi-Spectral Satellite Imagery', meta: 'IEEE Trans. Geoscience & Remote Sensing, 2023', badge: 'badge-pub', label: 'Published' },
    { num: '02', title: 'Transfer Learning for Medical Image Segmentation in Low-Resource Settings', meta: 'Journal of Biomedical Informatics, 2022 · DAIICT AI Lab', badge: 'badge-pub', label: 'Published' },
    { num: '03', title: 'Scalable NLP Architectures for Low-Resource Indian Languages', meta: 'ICON 2022 — International Conference on NLP', badge: 'badge-conf', label: 'Conference' },
    { num: '04', title: 'Federated Learning for Privacy-Preserving Healthcare Analytics', meta: 'In progress · Expected Q2 2025 · 3 institutions', badge: 'badge-wip', label: 'Ongoing' },
    { num: '05', title: 'Real-Time Anomaly Detection in IoT Networks Using Lightweight LSTM', meta: 'ACM IoT Symposium, 2021', badge: 'badge-conf', label: 'Conference' },
  ]
  return (
    <>
      <div className="win-tag">// Research & Publications</div>
      {items.map(i => (
        <div className="res-item" key={i.num}>
          <div className="res-num">{i.num}</div>
          <div>
            <div className="res-title">{i.title}</div>
            <div className="res-meta">{i.meta}</div>
          </div>
          <span className={`res-badge ${i.badge}`}>{i.label}</span>
        </div>
      ))}
    </>
  )
}

export function GalleryContent() {
  const photos = [
    { src: '/IMG_2203.jpg', alt: 'Desert' },
    { src: '/IMG_2347.jpg', alt: 'Sunset Dunes' },
    { src: '/IMG_2368.jpg', alt: 'Desert Camp' },
    { src: '/IMG_8656.jpg', alt: 'Explorer' },
    { src: '/IMG_8696.jpg', alt: 'Desert View' },
    { src: '/IMG_2226.jpg', alt: 'Team' },
  ]
  return (
    <>
      <div className="win-tag">// Photo Gallery</div>
      <div className="gallery-grid">
        {photos.map(p => (
          <Image
            key={p.src}
            src={p.src}
            alt={p.alt}
            width={300}
            height={220}
            className="gallery-img"
          />
        ))}
      </div>
    </>
  )
}

export function ContactContent() {
  const items = [
    { icon: '📧', label: 'Email', val: 'hello@portfolio.dev' },
    { icon: '💼', label: 'LinkedIn', val: 'linkedin.com/in/yourprofile' },
    { icon: '🐙', label: 'GitHub', val: 'github.com/yourhandle' },
    { icon: '🎓', label: 'Google Scholar', val: 'scholar.google.com' },
    { icon: '📍', label: 'Location', val: 'Gandhinagar, Gujarat, India' },
  ]
  return (
    <>
      <div className="win-tag">// Get In Touch</div>
      <div className="win-section-title">Let&apos;s build<br />something great.</div>
      {items.map(i => (
        <div className="contact-item" key={i.label}>
          <span className="contact-icon">{i.icon}</span>
          <div>
            <div className="contact-label">{i.label}</div>
            <div className="contact-val">{i.val}</div>
          </div>
        </div>
      ))}
    </>
  )
}

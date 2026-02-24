import Image from 'next/image'

export function AboutContent() {
  return (
    <>
      <div className="win-tag">⚓ The Captain</div>
      <div className="profile-header">
        <Image src="/Profile.png" alt="Profile" width={80} height={80} className="profile-photo" style={{ objectPosition:'center top' }}/>
        <div>
          <div className="profile-name">Smit<br/>Ghelani</div>
          <div className="profile-role">Generative AI Dev · DevOps Engineer</div>
        </div>
      </div>
      <div className="rope-divider"/>
      <p className="profile-bio" style={{ marginBottom:14 }}>
        Experienced in deploying scalable AI applications on cloud platforms with strong foundations in MLOps, model optimization, and real-world AI integration. Passionate about designing reliable, efficient, and responsible AI systems that solve complex business problems at scale.
      </p>
      <div className="info-grid">
        <div className="info-card"><div className="info-label">Port of Call</div><div className="info-val">Surat, Gujarat, India</div></div>
        <div className="info-card"><div className="info-label">Status</div><div className="info-val">Seeking Voyage ✓</div></div>
        <div className="info-card"><div className="info-label">Specialty</div><div className="info-val">GenAI &amp; DevOps</div></div>
        <div className="info-card"><div className="info-label">Years at Sea</div><div className="info-val">3+ Years</div></div>
        <div className="info-card"><div className="info-label">Tongues Spoken</div><div className="info-val">English · Gujarati · Hindi</div></div>
        <div className="info-card"><div className="info-label">Conquests</div><div className="info-val">5+ Delivered</div></div>
      </div>
    </>
  )
}

export function SkillsContent() {
  const groups = [
    { title: '⚔️  Languages & Backend',    cls:'st-blue',   tags:['Python','SQL','Node.js','FastAPI','Bash','CUDA'] },
    { title: '🔮  GenAI & LLMs',            cls:'st-blue',   tags:['RAG','QLoRA','DPO','Transformers','GANs','Prompt Engineering'] },
    { title: '🧠  AI / ML Frameworks',      cls:'st-green',  tags:['Langchain','TensorFlow','PyTorch','Scikit-learn','NLP','Computer Vision','LLMs','Pydantic'] },
    { title: '☁️  Cloud AI',                cls:'st-green',  tags:['AWS SageMaker','Bedrock','GCP Vertex AI','OpenAI API'] },
    { title: '🏴  Frontend',                cls:'st-orange', tags:['React.js','Next.js','TypeScript','Tailwind'] },
    { title: '⚙️  Cloud & MLOps',           cls:'st-orange', tags:['AWS','Airflow','MLflow','GitHub Actions','Jenkins','Prometheus'] },
    { title: '🐋  DevOps',                  cls:'st-purple', tags:['Docker','Kubernetes','CI/CD','Git','Linux'] },
    { title: '💎  Databases',               cls:'st-pink',   tags:['PostgreSQL + pgvector','FAISS','Pinecone','Redis','ChromaDB','MongoDB'] },
  ]
  return (
    <>
      <div className="win-tag">⚔️ Weapons of the Trade</div>
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
    {
      period:'Jun 2022 — Present',
      role:'AI Engineer',
      company:'Tata Consultancy Services · Gandhinagar',
      desc:'At Tata Consultancy Services, I design and deploy enterprise-grade Generative AI solutions, focusing on retrieval-augmented generation, LLM fine-tuning, and intelligent agent workflows. I work across the full lifecycle—from model optimization and evaluation to cloud deployment and production monitoring—ensuring scalable, reliable, and responsible AI systems for real-world applications.'
    },
    {
      period:'Dec 2021 — Apr 2022',
      role:'Full Stack MERN Developer',
      company:'Bodh Labs PVT LTD · Remote',
      desc:'At Bodh Labs Pvt. Ltd., I worked on backend development and system engineering, building scalable web applications and APIs to support production-grade platforms. I focused on optimizing performance, ensuring code quality, and collaborating across teams to deliver reliable and maintainable software solutions.'
    }
  ]
  return (
    <>
      <div className="win-tag">🗺️ Voyages &amp; Conquests</div>
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
    {
      num:'01 — Flagship',
      title:'Government Query Processing AI Agent',
      desc:'Designed a multi-agent AI system to automate municipal approval workflows using retrieval-augmented generation and intelligent routing. Improved decision efficiency by integrating contextual retrieval, document summarization, and metadata-aware search.',
      stack:[['st-green','Python'],['st-green','LangChain'],['st-orange','Mistral'],['st-purple','AWS'],['st-blue','PostgreSQL + pgvector']]
    },
    {
      num:'02',
      title:'Jira QA Assistant with RAG',
      desc:'Built a retrieval-augmented QA assistant to streamline test-case generation and documentation workflows. Reduced hallucinations through constrained prompting and validation pipelines, enabling reliable AI-assisted quality assurance.',
      stack:[['st-green','Python'],['st-blue','LangChain'],['st-orange','GPT-4'],['st-purple','Docker'],['st-blue','FAISS']]
    },
    {
      num:'03',
      title:'LLM Fine-Tuning Framework',
      desc:'Developed a modular fine-tuning pipeline for open-source large language models using parameter-efficient techniques. Focused on optimization, cost-efficient deployment, and scalable inference for production-grade AI systems.',
      stack:[['st-orange','Python'],['st-blue','AWS Inferencia'],['st-blue','AWS Sagemaker'],['st-orange','LLaMA'],['st-blue','QLoRA'],['st-blue','DPO']]
    },
    {
      num:'04',
      title:'Next.js E-Commerce Store',
      desc:'Developed and launched a high-performance e-commerce platform using Next.js with server-side rendering and optimized caching strategies. Implemented secure authentication, Redux cart management, and Razorpay payment integration.',
      stack:[['st-green','JavaScript'],['st-green','Next.js'],['st-blue','TypeScript'],['st-blue','Redux'],['st-orange','Node.js'],['st-purple','MongoDB']]
    },
    {
      num:'05',
      title:'UnionBoard – College Guide Platform',
      desc:'Built a dynamic college admission guidance platform integrating comprehensive data for engineering institutes. Designed scalable backend architecture using Node.js and Express, with advanced comparison, recommendation systems, and rank-based eligibility tools.',
      stack:[['st-green','JavaScript'],['st-blue','Node.js'],['st-blue','Express.js'],['st-purple','Python'],['st-orange','React.js'],['st-purple','MongoDB']]
    }
  ]
  return (
    <>
      <div className="win-tag">💰 Treasure Haul</div>
      {projects.map(p => (
        <div className="proj-card" key={p.num}>
          <div className="proj-num">{p.num}</div>
          <div className="proj-title">{p.title}</div>
          <div className="proj-desc">{p.desc}</div>
          <div className="proj-stack">
            {p.stack.map(([cls,tag]) => <span key={tag} className={`skill-tag ${cls}`}>{tag}</span>)}
          </div>
        </div>
      ))}
    </>
  )
}

export function EducationContent() {
  const items = [
    { year:'2018 — 2022', deg:"B.Tech. in Information Technology", inst:'BVM Engineering College, Anand, Gujarat', note:'CGPA: 8.48/10 · Top 10% of department · Strong foundation in algorithms & software engineering' },
    { year:'2017 — 2018', deg:'HSE - GSHSEB (Class XII)',          inst:'JB & KARP Vidya Sankul, India',           note:'Aggregate: 85.26%' },
    { year:'2015 — 2016', deg:'SSC - GSEB (Class X)',              inst:'JB & KARP Vidya Sankul, India',           note:'Aggregate: 90%' },
  ]
  return (
    <>
      <div className="win-tag">📜 Navigator&apos;s Charts</div>
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
    { num:'01', title:'AWS Certified AI Practitioner',                        meta:'Amazon Web Services · 2024–2027',     badge:'badge-pub',  label:'Acquired' },
    { num:'02', title:'AWS Certified Cloud Practitioner',                     meta:'Amazon Web Services · 2024–2027',     badge:'badge-pub',  label:'Acquired' },
    { num:'03', title:'Hands-on Approach to AI for Real World Applications',  meta:'IIT Kharagpur AI4ICPS · 2024',        badge:'badge-conf', label:'Acquired' },
  ]
  return (
    <>
      <div className="win-tag">🏅 Medals &amp; Spoils</div>
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

export function ContactContent() {
  const items = [
    { icon:'📧', label:'Message in a Bottle',  val:'ghelanismit4@gmail.com' },
    { icon:'💼', label:'LinkedIn Harbour',      val:'linkedin.com/in/smitghelani' },
    { icon:'🐙', label:'GitHub Cove',           val:'github.com/SmitGhelani' },
    { icon:'📍', label:'Port of Call',          val:'Surat, Gujarat, India' },
    { icon:'📞', label:'Signal Lantern',        val:'+91 - 6355286783' },
  ]
  return (
    <>
      <div className="win-tag">🦜 Parrot Post</div>
      <div className="win-section-title">Hail the Captain!<br/><span style={{fontSize:'0.9rem',color:'var(--parchment-dim)'}}>Send word across the seas.</span></div>
      <div className="rope-divider"/>
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

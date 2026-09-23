
import '../styles/projects.css'
function ProjectIcon({ type }) {
  const icons = {
    saas: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M8 20H16M12 16V20" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    rag: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    voice: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="9" y="3" width="6" height="11" rx="3" stroke="white" strokeWidth="1.5" />
        <path d="M5 11C5 15 8.13 18 12 18C15.87 18 19 15 19 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 18V21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    ocr: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="16" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M7 9H17M7 13H14M7 17H11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  }
  return <div className="project-icon-badge">{icons[type]}</div>
}

function Projects() {
  const projects = [
    {
      title: 'SANA AI',
      subtitle: 'Multi-Tenant WhatsApp SaaS Platform',
      type: 'SaaS Platform',
      icon: 'saas',
      description:
        "Multi-tenant SaaS platform enabling businesses to self-onboard their own WhatsApp Business numbers via Meta's WhatsApp Cloud API and Embedded Signup — no manual per-customer configuration needed.",
      points: [
        'Centralized System User token model for secure multi-tenant messaging, replacing per-customer OAuth token management.',
        'JWT authentication with server-side token revocation, API-key-scoped tenant isolation, and rate limiting.',
        "Single shared webhook router that identifies the correct tenant and forwards messages to each customer's bot.",
        'Deployed to GCP Cloud Run with CI/CD via GitHub Actions; React (Vite, Bootstrap) onboarding frontend.',
      ],
      tags: ['FastAPI', 'PostgreSQL', 'React', 'Meta Cloud API', 'GCP Cloud Run'],
      link: 'https://meta-frontend-taupe.vercel.app/',
    },
    {
      title: 'Educational AI Agent',
      subtitle: 'RAG Chatbot for Student Admissions',
      type: 'RAG Chatbot',
      icon: 'rag',
      description:
        'RAG chatbot for student admissions, deployed across a website widget and WhatsApp, serving queries in English and Roman Urdu.',
      points: [
        'FastAPI backend on GCP Cloud Run and Render with async webhook handling via BackgroundTasks.',
        'Per-user locking and message-ID deduplication to eliminate duplicate replies.',
        'Qdrant vector search for semantic retrieval and Groq for low-latency LLM inference.',
        'Structured student registration workflows for self-service enrollment.',
      ],
      tags: ['FastAPI', 'Qdrant', 'Groq', 'Meta Cloud API', 'Streamlit'],
      link: 'https://nes-bot-ui.onrender.com/',
    },
    {
      title: 'Hotel Voice Assistant',
      subtitle: 'AI-Powered Booking & Reservation Agent',
      type: 'Personal Project',
      icon: 'voice',
      description:
        'Full conversational voice assistant for hotel search, booking, reservation management, and cancellation, combining real-time speech processing with context-aware dialogue.',
      points: [
        'Hotel search and booking workflows using LangChain and Google Gemini, orchestrating multi-turn conversations.',
        'FastAPI service layer with MongoDB for reservation state.',
        'Deepgram STT/TTS integration for natural, real-time voice interaction.',
        'Qdrant-based vector search to ground responses in accurate hotel information.',
      ],
      tags: ['LangChain', 'Gemini', 'FastAPI', 'MongoDB', 'Deepgram'],
      link: null,
    },
    {
      title: 'OCR/ICR Extractor',
      subtitle: 'AI Document Processing System',
      type: 'OCR Extraction',
      icon: 'ocr',
      description:
        'AI-powered OCR/ICR system using Gemini 2.5 Flash to extract text and structured information from images and scanned documents.',
      points: [
        'Web-based interface (HTML, CSS, JavaScript) for uploading documents and receiving extracted content.',
        'Multimodal prompting workflows to extract text, fields, and tables across varied document layouts.',
        'Structured output generation for clean, machine-readable data downstream.',
      ],
      tags: ['Gemini 2.5 Flash', 'Multimodal AI', 'JavaScript'],
      link: 'https://icr-ocr.netlify.app/',
    },
  ]

  return (
    <section id="projects" className="projects-section">
      <div className="neural-canvas-static" />
      <div className="experience-container">
        <span className="section-label">// projects</span>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <div className="project-card" key={i}>
              <div className="project-card-glow" />

              <div className="project-card-top">
                <ProjectIcon type={project.icon} />
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    Live Demo
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path d="M7 17L17 7M17 7H8M17 7V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                )}
              </div>

              <span className="project-type mono">{project.type}</span>
              <h3>{project.title}</h3>
              <div className="project-subtitle">{project.subtitle}</div>

              <p className="project-desc">{project.description}</p>

              <ul>
                {project.points.map((point, j) => (
                  <li key={j}>{point}</li>
                ))}
              </ul>

              <div className="tag-row">
                {project.tags.map((tag, k) => (
                  <span className="tech-tag" key={k}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
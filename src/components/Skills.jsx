import '../styles/skills.css'
function CategoryIcon({ type }) {
  const icons = {
    languages: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M9 3L4 12L9 21M15 3L20 12L15 21" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    frameworks: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    meta: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 10L12 6L20 10L12 14L4 10Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M7 12V16C7 16 9 18 12 18C15 18 17 16 17 16V12" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    ai: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="3" stroke="white" strokeWidth="1.5" />
        <path d="M12 3V6M12 18V21M3 12H6M18 12H21M5.6 5.6L7.8 7.8M16.2 16.2L18.4 18.4M5.6 18.4L7.8 16.2M16.2 7.8L18.4 5.6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    databases: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <ellipse cx="12" cy="6" rx="7" ry="3" stroke="white" strokeWidth="1.5" />
        <path d="M5 6V18C5 19.66 8.13 21 12 21C15.87 21 19 19.66 19 18V6" stroke="white" strokeWidth="1.5" />
        <path d="M5 12C5 13.66 8.13 15 12 15C15.87 15 19 13.66 19 12" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    vector: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="6" cy="6" r="2.2" stroke="white" strokeWidth="1.5" />
        <circle cx="18" cy="6" r="2.2" stroke="white" strokeWidth="1.5" />
        <circle cx="12" cy="18" r="2.2" stroke="white" strokeWidth="1.5" />
        <path d="M7.8 7.2L16.2 7.2M7 7.8L11 16.2M17 7.8L13 16.2" stroke="white" strokeWidth="1.5" />
      </svg>
    ),
    cloud: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M7 18H17C19.2 18 21 16.2 21 14C21 12 19.5 10.4 17.6 10.1C17.1 7.2 14.6 5 11.5 5C8.3 5 5.7 7.4 5.4 10.5C3.5 10.9 2 12.6 2 14.5C2 16.6 3.7 18 5.8 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  }
  return <div className="skill-icon-badge">{icons[type]}</div>
}

function Skills() {
  const categories = [
    {
      title: 'Languages',
      type: 'languages',
      skills: ['Python', 'C++', 'JavaScript'],
    },
    {
      title: 'Frameworks & Libraries',
      type: 'frameworks',
      skills: ['FastAPI', 'Pydantic', 'LangChain', 'LangGraph', 'Streamlit', 'n8n', 'Django', 'DRF', 'React'],
    },
    {
      title: 'Meta Developer Platform',
      type: 'meta',
      skills: ['WhatsApp Cloud API', 'Embedded Signup', 'Graph API', 'Webhooks & Multi-Tenant Routing', 'System User Auth'],
    },
    {
      title: 'AI & Generative AI',
      type: 'ai',
      skills: ['LLMs', 'RAG', 'Deep Learning', 'Generative AI', 'Prompt Engineering'],
    },
    {
      title: 'Databases',
      type: 'databases',
      skills: ['PostgreSQL', 'MongoDB', 'SQLite', 'Supabase'],
    },
    {
      title: 'Vector Databases',
      type: 'vector',
      skills: ['Qdrant', 'FAISS'],
    },
    {
      title: 'Cloud & DevOps',
      type: 'cloud',
      skills: ['GCP', 'Docker', 'Git', 'GitHub', 'Linux', 'venv / pip'],
    },
  ]

  return (
    <section id="skills" className="skills-section bg-raised">
      <div className="experience-container">
        <span className="section-label">// skills</span>

        <div className="skills-grid">
          {categories.map((category, i) => (
            <div className="skill-card" key={i}>
              <div className="skill-card-top">
                <CategoryIcon type={category.type} />
                <h3>{category.title}</h3>
              </div>

              <div className="tag-row">
                {category.skills.map((skill, j) => (
                  <span className="tech-tag" key={j}>
                    {skill}
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

export default Skills
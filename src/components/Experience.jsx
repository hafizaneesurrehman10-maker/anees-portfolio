import AIStatusPanel from './AIStatusPanel'
import '../styles/experience.css'
function RoleIcon({ type }) {
  if (type === 'engineer') {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="6" r="2.2" stroke="white" strokeWidth="1.5" />
        <circle cx="5" cy="17" r="2.2" stroke="white" strokeWidth="1.5" />
        <circle cx="19" cy="17" r="2.2" stroke="white" strokeWidth="1.5" />
        <path d="M12 8.2V12M12 12L6.5 15.2M12 12L17.5 15.2" stroke="white" strokeWidth="1.5" />
      </svg>
    )
  }
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M4 10L12 6L20 10L12 14L4 10Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M7 12V16C7 16 9 18 12 18C15 18 17 16 17 16V12" stroke="white" strokeWidth="1.5" />
    </svg>
  )
}

function Experience() {
  const jobs = [
    {
      date: 'Mar 2026 — Present',
      role: 'AI Engineer',
      company: 'EMRChains NSTP, NUST H-12 — Islamabad, Pakistan',
      icon: 'engineer',
      points: [
        'Designed and built a multi-tenant SaaS platform enabling businesses to self-onboard their own WhatsApp Business numbers via Meta\'s WhatsApp Cloud API and Embedded Signup, removing the need for manual per-customer configuration.',
        'Developed RAG chatbots using LLMs, embeddings, vector databases, semantic search, and retrieval pipelines.',
        'Designed document processing workflows for extracting, chunking, embedding, indexing, and retrieving information from knowledge sources.',
        'Worked with LangChain, Python, NLP, and Generative AI to build end-to-end AI applications.',
        'Fine-tuned vision-language models including BLIP and Vision Transformer (ViT) for image classification and visual recognition.',
      ],
      tags: ['Meta WhatsApp Cloud API','RAG', 'LangChain', , 'Vector DB', 'BLIP', 'ViT'],
    },
    {
      date: 'Mar 2025 — Sep 2025',
      role: 'AI/ML Intern',
      company: 'EIOTAI (Pvt) Ltd, Rawat Technology Park — Rawalpindi, Pakistan',
      icon: 'intern',
      points: [
        'Contributed to machine learning workflows and AI research projects using Python.',
        'Worked with NLP and LLM training and fine-tuning workflows.',
        'Strengthened practical knowledge of machine learning, data processing, and AI research methodologies.',
      ],
      tags: ['Python', 'NLP', 'LLM Fine-tuning'],
    },
  ]

  return (
    <section id="experience" className="experience-section bg-raised">
      <div className="experience-container">
        <span className="section-label">// experience</span>

        <div className="experience-layout">
          <div className="timeline">
            {jobs.map((job, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-marker">
                  <div className="timeline-icon">
                    <RoleIcon type={job.icon} />
                  </div>
                </div>
                <div className="timeline-content">
                  <div className="exp-date">{job.date}</div>
                  <h3>{job.role}</h3>
                  <div className="exp-company">{job.company}</div>
                  <ul>
                    {job.points.map((point, j) => (
                      <li key={j}>{point}</li>
                    ))}
                  </ul>
                  <div className="tag-row">
                    {job.tags.map((tag, k) => (
                      <span className="tech-tag" key={k}>{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="ai-avatar-wrap">
            <AIStatusPanel />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
import { useState } from 'react'
import emailjs from '@emailjs/browser'
import '../styles/contact.css'
const SERVICE_ID = 'service_ijup99k'
const TEMPLATE_ID = 'template_xlio6gi'
const PUBLIC_KEY = 'v4x-OrpGnSQpUu2U1'

function ContactIcon({ type }) {
  const icons = {
    email: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="2" stroke="white" strokeWidth="1.5" />
        <path d="M3 7L12 13L21 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    phone: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M5 4H9L11 9L8.5 10.5C9.5 12.5 11.5 14.5 13.5 15.5L15 13L20 15V19C20 20.1 19.1 21 18 21C10.3 21 4 14.7 4 7C4 5.9 4.9 5 4 4Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
    linkedin: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="white" strokeWidth="1.5" />
        <path d="M7 10V17M7 7V7.01M12 17V10M12 10C12 10 12 12 12 12C12 12 12.5 10 15 10C17 10 17 12 17 13.5V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    github: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 3C7.03 3 3 7.15 3 12.27C3 16.36 5.58 19.82 9.16 21.04C9.61 21.13 9.78 20.85 9.78 20.6C9.78 20.38 9.77 19.65 9.77 18.87C7 19.43 6.41 17.63 6.41 17.63C5.96 16.46 5.31 16.15 5.31 16.15C4.42 15.53 5.38 15.55 5.38 15.55C6.36 15.62 6.88 16.58 6.88 16.58C7.76 18.11 9.18 17.67 9.75 17.42C9.84 16.77 10.09 16.33 10.37 16.08C8.15 15.82 5.82 14.95 5.82 11.05C5.82 9.94 6.2 9.03 6.9 8.32C6.79 8.06 6.44 7.02 7 5.61C7 5.61 7.86 5.33 9.76 6.63C10.56 6.4 11.42 6.29 12.28 6.28C13.14 6.29 14 6.4 14.8 6.63C16.7 5.33 17.56 5.61 17.56 5.61C18.12 7.02 17.77 8.06 17.66 8.32C18.36 9.03 18.74 9.94 18.74 11.05C18.74 14.96 16.4 15.81 14.17 16.07C14.52 16.39 14.84 17.02 14.84 17.97C14.84 19.33 14.83 20.27 14.83 20.6C14.83 20.85 15 21.14 15.46 21.04C19.03 19.81 21.6 16.36 21.6 12.27C21.6 7.15 17.57 3 12.6 3H12Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
  }
  return <div className="contact-icon-badge">{icons[type]}</div>
}

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          email: form.email,
          message: form.message,
          time: new Date().toLocaleString('en-US', {
            dateStyle: 'medium',
            timeStyle: 'short',
          }),
        },
        { publicKey: PUBLIC_KEY }
      )
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      })
      .catch((err) => {
        console.error('EmailJS error:', err)
        setStatus('error')
      })
  }

  const contactLinks = [
    {
      type: 'email',
      label: 'Email',
      value: 'aneesurrehman075@gmail.com',
      href: 'mailto:hafizaneesurrehman10@gmail.com',
    },
    {
      type: 'phone',
      label: 'Phone',
      value: '0318-0054781',
      href: 'tel:03180054781',
    },
    {
      type: 'linkedin',
      label: 'LinkedIn',
      value: 'anees-ur-rehman',
      href: 'https://www.linkedin.com/in/anees-ur-rehman-105210274/',
    },
    {
      type: 'github',
      label: 'GitHub',
      value: 'Hafiz-Anees',
      href: 'https://github.com/Hafiz-Anees',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="neural-canvas-static contact-glow" />
      <div className="experience-container">
        <span className="section-label">// contact</span>

        <div className="contact-header">
          <h2>Let's build something together</h2>
          <p className="contact-lead">
            Open to AI engineering roles, freelance projects, and interesting collaborations.
            Reach out directly or send a message below.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-links">
            {contactLinks.map((link, i) => (
              <a
                href={link.href}
                target={link.type === 'linkedin' || link.type === 'github' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="contact-link-card"
                key={i}
              >
                <ContactIcon type={link.type} />
                <div>
                  <div className="contact-link-label mono">{link.label}</div>
                  <div className="contact-link-value">{link.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <label className="mono" htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-row">
              <label className="mono" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="form-row">
              <label className="mono" htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                required
              />
            </div>

            <button
              type="submit"
              className="btn-primary-custom contact-submit"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="form-status form-status-success">
                Message sent! I'll get back to you soon.
              </p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
import NeuralBackground from './NeuralBackground'
import Orb from './Orb'

function Hero() {
  return (
    <header className="hero">
      <NeuralBackground />
      <Orb />
      <div className="container-narrow">
        <div className="status-line">
          <span className="status-dot"></span>
          <span className="mono text-dim">Rawalpindi, Pakistan — AI Engineer @ EMRChains NSTP</span>
        </div>

        <h1>Anees ur Rehman</h1>

        <p className="lead-custom">
          I build end-to-end AI systems — RAG pipelines, LLM-powered chatbots, and
          production infrastructure — from architecture through to deployment on GCP.
        </p>

        <div className="cta-row">
          <a href="#projects" className="btn-primary-custom">View projects</a>
          <a href="mailto:aneesurrehman075@gmail.com" className="btn-secondary-custom">Get in touch</a>
        </div>
      </div>
    </header>
  )
}

export default Hero
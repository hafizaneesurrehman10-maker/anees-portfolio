function AIStatusPanel() {
  return (
    <div className="status-panel">
      <div className="status-panel-header mono">SYSTEM_MAP.LIVE</div>

      <svg viewBox="0 0 320 460" className="status-panel-svg">
        <defs>
          <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#5B8DEF" />
            <stop offset="100%" stopColor="#A855F7" />
          </linearGradient>
        </defs>

        <path id="path-user-agent" d="M160,55 L160,165" className="conn-line" />
        <path id="path-agent-rag" d="M160,165 L85,285" className="conn-line" />
        <path id="path-agent-llm" d="M160,165 L235,285" className="conn-line" />
        <path id="path-rag-db" d="M85,285 L160,405" className="conn-line" />
        <path id="path-llm-db" d="M235,285 L160,405" className="conn-line" />

        <circle r="3.5" fill="url(#lineGrad)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0s">
            <mpath href="#path-user-agent" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="url(#lineGrad)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="0.6s">
            <mpath href="#path-agent-rag" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="url(#lineGrad)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.2s">
            <mpath href="#path-agent-llm" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="url(#lineGrad)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="1.8s">
            <mpath href="#path-rag-db" />
          </animateMotion>
        </circle>
        <circle r="3.5" fill="url(#lineGrad)">
          <animateMotion dur="2.4s" repeatCount="indefinite" begin="2.1s">
            <mpath href="#path-llm-db" />
          </animateMotion>
        </circle>

        <g>
          <circle cx="160" cy="55" r="7" className="node-circle" />
          <text x="160" y="76" textAnchor="middle" className="node-label">USER</text>
        </g>

        <g>
          <circle cx="160" cy="165" r="9" className="node-circle node-main" />
          <text x="160" y="188" textAnchor="middle" className="node-label node-label-main">AI AGENT</text>
        </g>

        <g>
          <circle cx="85" cy="285" r="7" className="node-circle" />
          <text x="85" y="306" textAnchor="middle" className="node-label">RAG / TOOLS</text>
        </g>

        <g>
          <circle cx="235" cy="285" r="7" className="node-circle" />
          <text x="235" y="306" textAnchor="middle" className="node-label">LLM</text>
        </g>

        <g>
          <circle cx="160" cy="405" r="7" className="node-circle" />
          <text x="160" y="426" textAnchor="middle" className="node-label">DATABASE / APIs</text>
        </g>
      </svg>

      <div className="status-panel-footer mono">
        <span className="status-dot-small"></span>
        ONLINE
      </div>
    </div>
  )
}

export default AIStatusPanel
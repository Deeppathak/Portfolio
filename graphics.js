
class BackgroundGraphics extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          z-index: -1;
          overflow: hidden;
        }
        .graphic {
          position: absolute;
          opacity: 0.1;
        }
        .gear {
          animation: spin 30s linear infinite;
        }
        .triangle {
          animation: float 15s ease-in-out infinite;
        }
        .pulse {
          animation: pulse 8s ease infinite;
        }
        .circuit {
          animation: float 20s ease-in-out infinite alternate;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(50px, 20px) rotate(5deg); }
          50% { transform: translate(0, 40px) rotate(0deg); }
          75% { transform: translate(-50px, 20px) rotate(-5deg); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.1); }
        }
      </style>
      <!-- Main Gear -->
      <svg class="graphic gear" width="200" height="200" viewBox="0 0 200 200" style="top: 15%; right: 5%;">
        <path d="M100 0L123.511 40H76.489L100 0ZM140 23.511L180 0L140 76.489V23.511ZM200 100L160 123.511V76.489L200 100ZM176.489 140L200 180L123.511 140H176.489ZM100 200L76.489 160H123.511L100 200ZM60 176.489L20 200L60 123.511V176.489ZM0 100L40 76.489V123.511L0 100ZM23.511 60L0 20L76.489 60H23.511Z" fill="#3B82F6"/>
      </svg>
      
      <!-- Triangle -->
      <svg class="graphic triangle" width="150" height="150" viewBox="0 0 150 150" style="bottom: 25%; left: 10%;">
        <polygon points="75,0 150,150 0,150" fill="#10B981"/>
      </svg>
      
      <!-- Small Gear -->
      <svg class="graphic gear" width="120" height="120" viewBox="0 0 120 120" style="bottom: 15%; right: 15%; transform: rotate(15deg);">
        <path d="M60 0L73.5066 24H46.4934L60 0ZM84 14.1066L120 0L84 45.8934V14.1066ZM120 60L96 73.5066V46.4934L120 60ZM105.894 84L120 120L73.5066 84H105.894ZM60 120L46.4934 96H73.5066L60 120ZM36 105.894L0 120L36 73.5066V105.894ZM0 60L24 46.4934V73.5066L0 60ZM14.1066 36L0 0L45.8934 36H14.1066Z" fill="#3B82F6"/>
      </svg>
      
      <!-- Pulsing Circle -->
      <svg class="graphic pulse" width="180" height="180" viewBox="0 0 180 180" style="top: 70%; left: 5%;">
        <circle cx="90" cy="90" r="80" fill="none" stroke="#3B82F6" stroke-width="2" stroke-dasharray="5,5"/>
      </svg>
      
      <!-- Circuit Board Pattern -->
      <svg class="graphic circuit" width="250" height="250" viewBox="0 0 250 250" style="top: 20%; left: 20%;">
        <rect x="20" y="20" width="50" height="20" fill="#10B981"/>
        <rect x="80" y="20" width="150" height="10" fill="#10B981"/>
        <rect x="80" y="40" width="10" height="150" fill="#10B981"/>
        <rect x="100" y="60" width="130" height="10" fill="#10B981"/>
        <rect x="220" y="80" width="10" height="100" fill="#10B981"/>
        <rect x="140" y="180" width="80" height="10" fill="#10B981"/>
        <rect x="140" y="200" width="10" height="30" fill="#10B981"/>
        <circle cx="120" cy="120" r="15" fill="none" stroke="#10B981" stroke-width="3"/>
      </svg>
      
      <!-- Floating Dots -->
      <svg class="graphic" width="100" height="100" viewBox="0 0 100 100" style="top: 60%; right: 20%;">
        <circle cx="20" cy="20" r="4" fill="#3B82F6" opacity="0.7">
          <animate attributeName="cy" values="20;40;20" dur="5s" repeatCount="indefinite" begin="0s"/>
        </circle>
        <circle cx="40" cy="50" r="3" fill="#10B981" opacity="0.7">
          <animate attributeName="cy" values="50;30;50" dur="7s" repeatCount="indefinite" begin="1s"/>
        </circle>
        <circle cx="60" cy="70" r="4" fill="#3B82F6" opacity="0.7">
          <animate attributeName="cy" values="70;50;70" dur="6s" repeatCount="indefinite" begin="0.5s"/>
        </circle>
      </svg>
`;
  }
}
customElements.define('background-graphics', BackgroundGraphics);
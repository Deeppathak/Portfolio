class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          background: rgba(255, 255, 255, 0.96);
          backdrop-filter: blur(10px);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          padding: 1.5rem 2rem;
        }
        
        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .logo {
          font-weight: 700;
          font-size: 1.5rem;
          color: #1E293B;
          text-decoration: none;
          background: linear-gradient(90deg, #3B82F6, #10B981);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        
        .nav-link {
          color: #64748B;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.3s ease;
          position: relative;
        }
        
        .nav-link:hover {
          color: #3B82F6;
        }
        
        .nav-link:after {
          content: '';
          position: absolute;
          bottom: -5px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #3B82F6, #10B981);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover:after {
          width: 100%;
        }
        
        @media (max-width: 768px) {
          nav {
            padding: 1rem;
          }
          
          .nav-links {
            display: none;
          }
        }
      </style>
      
      <nav>
        <div class="navbar-container">
          <a href="/" class="logo">Deep Pathak</a>
          <div class="nav-links">
            <a href="#about" class="nav-link">About</a>
            <a href="#projects" class="nav-link">Projects</a>
            <a href="#contact" class="nav-link">Contact</a>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);
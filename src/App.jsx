import { useState, useEffect, useRef } from 'react';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });
    const currentElement = domRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }
    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, []);

  return (
    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  const navItems = {
    'about': 'Sobre mí',
    'skills': 'Habilidades',
    'projects': 'Proyectos',
    'contact': 'Contacto'
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-content">
          <div className="logo" onClick={() => scrollToSection('home')}>EG.</div>
          <ul className="nav-links">
            {Object.keys(navItems).map((key, index) => (
              <li key={key}>
                <button
                  className={`nav-link ${activeSection === key ? 'active' : ''}`}
                  onClick={() => scrollToSection(key)}
                >
                  <span className="nav-number">0{index + 1}.</span>
                  {navItems[key]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="section hero">
          <div className="container">
            <FadeInSection>
              <p className="hero-intro">Hola, mi nombre es</p>
              <h1 className="hero-name">Emilio Guzmán.</h1>
              <h2 className="hero-subtitle"> Transformo y manipulo datos </h2>
              <p className="hero-desc">
                Soy estudiante de Ingeniería en Sistemas con enfoque e interés en
                <span className="accent-text"> Business Intelligence </span> e
                <span className="accent-text"> Ingeniería de Datos</span>.
                Transformo datos crudos en conocimiento accionable.
              </p>
              <div className="hero-cta">
                <button className="btn" onClick={() => scrollToSection('projects')}>Mira mi trabajo</button>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title"><span className="section-number">01.</span> Sobre Mí</h2>
              <div className="about-content">
                <div className="about-text">
                  <p>
                    ¡Hola! Me llamo Emilio y disfruto creando cosas que viven en internet, específicamente aquellas que involucran datos.
                    Mi interés en la ingeniería de datos comenzó cuando me di cuenta del poder de la toma de decisiones informada en las empresas.
                  </p>
                  <br />
                  <p>
                    Hoy en día, he tenido el privilegio de trabajar en proyectos universitarios que simulan la infraestructura real para el
                    <span className="accent-text"> procesamiento masivo de datos</span> y la <span className="accent-text">visualización</span>.
                    Mi enfoque principal es construir productos accesibles y experiencias digitales para una variedad de clientes.
                  </p>
                </div>
                <div className="about-tech">
                  <h3>Aquí hay algunas tecnologías con las que he estado trabajando recientemente:</h3>
                  <ul className="skills-list">
                    <li>Python (Pandas, NumPy)</li>
                    <li>SQL (PostgreSQL, MySQL)</li>
                    <li>Power BI </li>
                    <li>Procesos ETL</li>
                    <li>JavaScript </li>
                    <li>Shell Scripting </li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title"><span className="section-number">02.</span> Habilidades Técnicas</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Ingeniería de Datos</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">SQL & Diseño de BD</span>
                    <span className="skill-tag">Pipelines ETL</span>
                    <span className="skill-tag">Python</span>
                    <span className="skill-tag">Apache Spark</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Business Intelligence</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Power BI</span>
                    <span className="skill-tag">Visualización de Datos</span>
                    <span className="skill-tag">Análisis Estadístico</span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Desarrollo de Software</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag"> Javascript  </span>
                    <span className="skill-tag">Git & GitHub</span>
                    <span className="skill-tag"> APIs REST </span>
                    <span className="skill-tag"> Desarrollo web </span>
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Infraestructura & Herramientas</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Linux (RHEL) </span>
                    <span className="skill-tag">Docker Containers</span>
                    <span className="skill-tag">Bash Scripting</span>
                    <span className="skill-tag">AWS Cloud</span>
                  </div>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section">
          <div className="container">
            <FadeInSection>
              <h2 className="section-title"><span className="section-number">03.</span> Proyectos Destacados</h2>
              <div className="projects-grid">
                {/* Project 1 */}
                <div className="project-card">
                  <div className="project-header">
                    <span className="folder-icon">📂</span>
                    <div className="project-links">
                      <a href="#">🔗</a>
                    </div>
                  </div>
                  <h3 className="project-title"> Análisis de datos web </h3>
                  <p className="project-desc">
                    Desarrolle un pipeline ETL en Python para extraer datos de una base de datos SQL Server y
                    analizarlos con pandas y numpy. Proporcionando analíticas como mapas de calor, tracking de eventos y
                    análisis de procedencia.
                  </p>
                  <ul className="project-tech-list">
                    <li>Power BI</li>
                    <li>Python</li>
                    <li>Excel</li>
                  </ul>
                </div>

                {/* Project 2 */}
                <div className="project-card">
                  <div className="project-header">
                    <span className="folder-icon">📂</span>
                    <div className="project-links">
                      <a href="#">🔗</a>
                    </div>
                  </div>
                  <h3 className="project-title">Pipeline de Datos </h3>
                  <p className="project-desc">
                    Construi un pipeline en n8n para extraer datos de climas de la API de OpenWeatherMap y cargarlos en una base de datos PostgreSQL
                    y mandar un reporte diario por telegram.
                  </p>
                  <ul className="project-tech-list">
                    <li>n8n</li>
                    <li>PostgreSQL</li>
                    <li>Telegram</li>
                  </ul>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                  <div className="project-header">
                    <span className="folder-icon">📂</span>
                    <div className="project-links">
                      <a href="#">🔗</a>
                    </div>
                  </div>
                  <h3 className="project-title"> Gestor de contraseñas (En desarrollo) </h3>
                  <p className="project-desc">
                    Construí un gestor de contraseñas en React con una base de datos en Firebase para guardar mis contraseñas y contraseñas de contraseñas.
                  </p>
                  <ul className="project-tech-list">
                    <li>React</li>
                    <li>Firebase</li>
                    <li>React Router</li>
                  </ul>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="section contact-section">
          <div className="container">
            <FadeInSection>
              <p className="section-number-center">04. ¿Qué sigue?</p>
              <h2 className="contact-title">Contáctame</h2>
              <p className="contact-desc">
                Actualmente estoy buscando nuevas oportunidades en Ingeniería de Datos y BI.
                Ya sea que tengas una pregunta o simplemente quieras saludar, ¡haré lo posible por responderte!
              </p>
              <p className="contact-desc-mail"> email: guzmanemi@proton.me </p>
              <a href="mailto:guzmanemi@proton.me" className="btn contact-btn">Saludar</a>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p> <span>&copy;</span> 2026 Emilio Guzmán | Hecho con ❤️ en React </p>
      </footer>

      <style>{`
        .app-container {
          width: 100%;
        }
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(10, 25, 47, 0.85);
          backdrop-filter: blur(10px);
          z-index: 10;
          height: 80px;
          display: flex;
          align-items: center;
          box-shadow: 0 10px 30px -10px rgba(2, 12, 27, 0.7);
        }
        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        .logo {
          color: var(--accent);
          font-family: var(--font-mono);
          font-weight: bold;
          font-size: 1.5rem;
          cursor: pointer;
        }
        .nav-links {
          display: flex;
          gap: 2rem;
        }
        .nav-link {
          background: none;
          border: none;
          color: var(--text-primary);
          font-family: var(--font-mono);
          font-size: 0.8rem;
          cursor: pointer;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: var(--accent);
        }
        .nav-number {
          color: var(--accent);
          margin-right: 5px;
        }
        
        .hero-intro {
          color: var(--accent);
          font-family: var(--font-mono);
          margin-bottom: 1.5rem;
          font-size: 1.1rem;
        }
        .hero-name {
          font-size: clamp(40px, 8vw, 80px);
          font-weight: 600;
          color: var(--text-primary);
          line-height: 1.1;
        }
        .hero-subtitle {
          font-size: clamp(30px, 7vw, 70px);
          font-weight: 600;
          color: var(--text-secondary);
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }
        .hero-desc {
          max-width: 540px;
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }
        .accent-text {
          color: var(--accent);
        }

        .section-number {
          color: var(--accent);
          font-family: var(--font-mono);
          font-size: 1.5rem;
          margin-right: 10px;
        }
        
        /* Skills Grid */
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
        }
        .skill-category h3 {
            color: var(--text-primary);
            margin-bottom: 1.5rem;
        }
        .skill-item {
            margin-bottom: 0; /* Removed bottom margin */
        }
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 12px;
        }
        .skill-tag {
            background-color: rgba(100, 255, 218, 0.05); /* Slight accent tint */
            color: var(--text-primary);
            padding: 8px 16px;
            border-radius: 4px;
            font-family: var(--font-mono);
            font-size: 0.85rem;
            transition: all 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
            border: 1px solid var(--text-secondary); /* Subtle border */
        }
        .skill-tag:hover {
            border-color: var(--accent);
            color: var(--accent);
            background-color: rgba(100, 255, 218, 0.1);
            transform: translateY(-2px);
        }
        .skills-list {
            display: grid;
            grid-template-columns: repeat(2, minmax(140px, 200px));
            gap: 0 10px;
            padding: 0;
            margin: 20px 0 0 0;
            overflow: hidden;
            list-style: none;
        }
        .skills-list li {
            position: relative;
            margin-bottom: 10px;
            padding-left: 20px;
            font-family: var(--font-mono);
            font-size: 13px;
        }
        .skills-list li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: var(--accent);
        }

        /* Projects Grid */
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 15px;
          margin-top: 2rem;
        }
        .project-card {
          background-color: #112240;
          padding: 2rem 1.75rem;
          border-radius: 4px;
          transition: transform 0.25s, box-shadow 0.25s;
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px -15px rgba(2, 12, 27, 0.7);
        }
        .project-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 2rem;
        }
        .folder-icon {
          color: var(--accent);
          font-size: 40px;
        }
        .project-title {
          color: var(--text-primary);
          font-size: 1.4rem;
          margin-bottom: 10px;
        }
        .project-desc {
          color: var(--text-secondary);
          font-size: 1rem;
          margin-bottom: 20px;
          flex-grow: 1;
        }
        .project-tech-list {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
        }
        
        /* Contact */
        .contact-section {
          text-align: center;
          align-items: center; /* flex item override if needed */
        }
        .contact-section .container {
           display: flex;
           flex-direction: column;
           align-items: center;
        }
        .section-number-center {
          color: var(--accent);
          font-family: var(--font-mono);
          margin-bottom: 1rem;
        }
        .contact-title {
          font-size: clamp(40px, 5vw, 60px);
          margin-bottom: 1rem;
          color: var(--text-primary);
        }
        .contact-desc {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 3rem;
        }

        .contact-desc-mail {
          font-size: 1.1rem;
          color: var(--accent);
          margin-bottom: 3rem;
          font-weight: bold;
        }

        .contact-btn {
          padding: 1.25rem 1.75rem;
        }

        .footer {
          padding: 40px;
          text-align: center;
          font-family: var(--font-mono);
          font-size: 0.8rem;
          color: var(--text-secondary);
          background-color: #112240; /* Darker than main bg */
        }
      `}</style>
    </div>
  );
}

export default App;

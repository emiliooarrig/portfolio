import { useState, useEffect, useRef } from 'react';
import './App.css';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setIsMenuOpen(false);
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

          <button
            className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="hamburger"></span>
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
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
                <button className="btn" onClick={() => scrollToSection('contact')}> Contáctame
                </button>
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
                  <br />
                  <p>
                    Desarrollo pipelines ETL, consultas SQL optimizadas y dashboards en Power BI.
                    Actualmente busco oportunidades como Data Engineer o BI Developer.
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
                  </div>
                </div>

                <div className="skill-category">
                  <h3>Desarrollo de Software</h3>
                  <div className="skill-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag"> Javascript  </span>
                    <span className="skill-tag">Git & GitHub</span>
                    <span className="skill-tag"> APIs REST </span>
                    <span className="skill-tag"> Desarrollo web fullstack </span>
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
                  <h3 className="project-title"> Uber Data Analytics</h3>
                  <p className="project-desc">
                    Desarrollé una infraestructura completa de datos sobre BigQuery para el análisis de viajes de Uber.
                    A través de este proyecto, implementé flujos de ETL (Extract, Transform, Load) diseñados para maximizar
                    el rendimiento y reducir costos de consulta.
                  </p>
                  <ul className="project-tech-list">
                    <li> Google Cloud</li>
                    <li>Python</li>
                    <li> BigQuery</li>
                  </ul>
                  <a href="#" className="project-link-btn">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
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
                  <a href="#" className="project-link-btn">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>

                {/* Project 3 */}
                <div className="project-card">
                  <div className="project-header">
                    <span className="folder-icon">📂</span>
                    <div className="project-links">
                      <a href="#">🔗</a>
                    </div>
                  </div>
                  <h3 className="project-title"> Proceso ETL en dataset </h3>
                  <p className="project-desc">
                    Manipulé y transformé datos de un dataset sobre encuestas de salud (usando datos públicos del IMSS), donde
                    detecté y transformé datos siguiendo normas de negocio establecidas; garantizando la integridad de los datos
                    y aspectos importantes para garantizar la calidad de los mismos
                  </p>
                  <ul className="project-tech-list">
                    <li> SQL </li>
                    <li> OracleSQLDeveloper</li>
                    <li> DataCleaner </li>
                  </ul>
                  <a href="#" className="project-link-btn">
                    Ver más
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </a>
                </div>
              </div>
            </FadeInSection>
          </div>
        </section>

        <section id="experience" className='section experience-section'>

          <div className="container">
            <FadeInSection>
              <h2 className="section-title"><span className="section-number">04.</span> Experiencia Laboral</h2>
              <div className="experience-content">
                <div className="experience-card">
                  <h3 className="experience-title"> Digital Business Operations Manager </h3>
                  <h4 className="experience-company"> Vértice México </h4>
                  <h4 className="experience-date"> Mayo 2024 - Junio 2025</h4>
                  <p className="experience-desc">
                    Lideré la gestión de operaciones digitales, optimizando procesos de negocio y asegurando la calidad de los datos.
                    Implementé soluciones tecnológicas para mejorar la eficiencia operativa de procesos dentro del programa.
                  </p>
                  <ul className="experience-tech-list">
                    <li> Microsoft Excel </li>
                    <li> Power BI </li>
                    <li> MailChimp </li>
                  </ul>
                </div>

                <div className="experience-card">
                  <h3 className="experience-title"> Desarrollador Freelance </h3>
                  <h4 className="experience-company"> Independiente </h4>
                  <h4 className="experience-date"> Diciembre 2023 - Actualidad </h4>
                  <p className="experience-desc">
                    Desarrollé soluciones tecnológicas para diversos clientes, implementando herramientas personalizadas para automatizar tareas.
                    Desarrollé el ciclo completo de desarrollo de software, desde la recolección de requisitos hasta la implementación y mantenimiento de sitios web.
                  </p>
                  <ul className="experience-tech-list">
                    <li> SQL </li>
                    <li> HTML</li>
                    <li> CSS </li>
                    <li> JavaScript </li>

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
              <div className="social-contact-links">
                <a href="mailto:guzmanemi@proton.me" className="btn contact-btn">
                  <span className="btn-icon">👋</span> Saludar
                </a>
                <a href="/cv_emilio_guzman.pdf" download="cv_emilio_guzman.pdf" className="btn contact-btn" aria-label="Descargar CV">
                  <span className="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                  </span>
                  CV
                </a>
                <a href="https://github.com/emiliooarrig" target="_blank" rel="noreferrer" className="btn contact-btn" aria-label="GitHub">
                  <span className="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.5.1-.4.5-1.5-.1-3.1 0 0-1-.3-3.3 1.2a11 11 0 0 0-6 0C6.7 1.6 5.7 1.9 5.7 1.9c-.6 1.6-.2 2.7-.1 3.1-1 1-1.5 2.1-1.5 3.5 0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
                    </svg>
                  </span>
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/emilioguzmn/" target="_blank" rel="noreferrer" className="btn contact-btn" aria-label="LinkedIn">
                  <span className="btn-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </span>
                  LinkedIn
                </a>
              </div>
            </FadeInSection>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p> <span>&copy;</span> 2026 Emilio Guzmán | Hecho con ❤️ en React </p>
      </footer>


    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import { FaGithub } from 'react-icons/fa';

const PortfolioItem = ({ title, description, url, imageUrl }) => (
  <div className="portfolio-item">
    <img src={imageUrl} alt={title} />
    <div className="overlay">
      <div className="overlay-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Ver proyecto</a>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio">
    <h2>Portafolio de proyectos</h2>
    <div className="portfolio-grid">
      <PortfolioItem
        title="Proyecto 1"
        description="Breve descripción del proyecto 1."
        url="https://www.proyecto1.com"
        imageUrl="https://via.placeholder.com/300x200"
      />
      <PortfolioItem
        title="Proyecto 2"
        description="Breve descripción del proyecto 2."
        url="https://www.proyecto2.com"
        imageUrl="https://via.placeholder.com/300x200"
      />
      <PortfolioItem
        title="Proyecto 3"
        description="Breve descripción del proyecto 3."
        url="https://www.proyecto3.com"
        imageUrl="https://via.placeholder.com/300x200"
      />
    </div>
    <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub /> Ver más proyectos en GitHub
    </a>
  </section>
);

const CV = () => (
  <div className="cv">
    <header>
      <h1>Tu nombre</h1>
      <p>Tu profesión</p>
    </header>
    <main>
      <section>
        <h2>Sobre mí</h2>
        <p>Breve descripción sobre ti.</p>
      </section>
      <section>
        <h2>Experiencia laboral</h2>
        <ul>
          <li>
            <h3>Nombre de la empresa</h3>
            <p>Descripción de tus responsabilidades y logros en la empresa.</p>
            <p>Fecha de inicio - Fecha de finalización</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Formación académica</h2>
        <ul>
          <li>
            <h3>Título de la carrera</h3>
            <p>Nombre de la universidad</p>
            <p>Fecha de inicio - Fecha de finalización</p>
          </li>
        </ul>
      </section>
      <Portfolio />
    </main>
  </div>
);

export default CV;

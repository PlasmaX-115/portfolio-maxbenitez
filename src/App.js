import React from 'react';
import './App.css';

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <header>
        <div className="name-title-container">
          <h1>Nombre Completo</h1>
          <h2>Diseñador Gráfico</h2>
        </div>
        <div className="contact-container">
          <p>tuemail@gmail.com</p>
          <p>123-456-7890</p>
        </div>
      </header>
      <section className="portfolio">
        <h3>Portafolio</h3>
        <div className="project-container">
          <div className="project">
            <img src="imagen1.jpg" alt="Proyecto 1" />
            <h4>Proyecto 1</h4>
            <p>Descripción del proyecto 1</p>
          </div>
          <div className="project">
            <img src="imagen2.jpg" alt="Proyecto 2" />
            <h4>Proyecto 2</h4>
            <p>Descripción del proyecto 2</p>
          </div>
          <div className="project">
            <img src="imagen3.jpg" alt="Proyecto 3" />
            <h4>Proyecto 3</h4>
            <p>Descripción del proyecto 3</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h3>Sobre Mí</h3>
        <p>Descripción breve sobre ti y tu experiencia en diseño gráfico.</p>
      </section>
      <section className="skills">
        <h3>Habilidades</h3>
        <ul>
          <li>Adobe Creative Suite</li>
          <li>HTML/CSS</li>
          <li>JavaScript</li>
          <li>Otras habilidades relevantes</li>
        </ul>
      </section>
      <section className="contact">
        <h3>Contacto</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" required></textarea>
          </div>
          <button type="submit">Enviar</button>
        </form>
      </section>
    </div>
  );
};

export default Portfolio;

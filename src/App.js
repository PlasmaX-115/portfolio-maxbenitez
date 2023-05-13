import React from "react";
import "./App.css";
import { FaGoogleDrive } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BsFillPhoneFill } from 'react-icons/bs';
import { MdEmail } from 'react-icons/md';
import { HiLocationMarker } from 'react-icons/hi';
import pp from './images/FotoCV.png';
import AA from './images/AAlogo2.png';
import BG from './images/borregosgaming_azul.png';
import PWT from './images/PWT2.png';
import WW from './images/WWSales.png';
import PH from './images/photography.png';
import DC from './images/docum.png';

const PortfolioItem = ({ title, description, url, imageUrl }) => (
  <div className="portfolio-item">
    <img src={imageUrl} alt={title} />
    <div className="overlay">
      <div className="overlay-text">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={url} target="_blank" rel="noopener noreferrer">Link</a>
      </div>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio">
    <h2>Project Portfolio</h2>
    <div className="portfolio-grid">
      <PortfolioItem
        title="Atención Atizapán"
        description="Natural disaster alert app."
        url="https://drive.google.com/file/d/12yHstT38m6V2s7f5N6fFWu97NdCdZ9e-/view?usp=share_link"
        imageUrl= {AA}
      />
      <PortfolioItem
        title="Percussion World Tour"
        description="Rythmic Videogame"
        url="https://drive.google.com/file/d/1Pikzz16HYduOX2FwNUoAkjgy6hIwVnbw/view?usp=share_link"
        imageUrl={PWT}
      />
      <PortfolioItem
        title="Borregos Gaming"
        description="Video and Photo editing. Narration"
        url="https://drive.google.com/drive/folders/16ySZ_zrFpFFpMrW5nTjZLGGANSlmmNhJ?usp=share_link"
        imageUrl= {BG}
      />
      <PortfolioItem
        title="Wheel Wise"
        description="Project Manager at the best car selling platform."
        url="https://drive.google.com/drive/folders/16ySZ_zrFpFFpMrW5nTjZLGGANSlmmNhJ?usp=share_link"
        imageUrl= {WW}
      />
      <PortfolioItem
        title="Documentaries"
        description="Audiovisual projects about science and philosophy."
        url="https://drive.google.com/drive/folders/1pUpKLPjl1FRqWecKtB8UKYykpzmlTUqW?usp=share_link"
        imageUrl= {DC}
      />
      <PortfolioItem
        title="Photography"
        description="Landscape and action figure photo editing."
        url="https://drive.google.com/drive/folders/1XgvjNtSWSGFdI8cV1hKguJkoHYQSXkLV?usp=share_link"
        imageUrl= {PH}
      />
    </div>
    <a href="https://drive.google.com/drive/folders/1cjVGZULvn4ztx_0MPnlg9vujseo16_ud?usp=share_link" target="_blank" rel="noopener noreferrer" className="drive-link">
      <FaGoogleDrive /> Ver más proyectos en Drive
    </a>
  </section>
);

function App() {
  return (
    <div className="cv-container">
      <div className="left-column">
        <div className="profile-picture">
          <img src={pp} alt="PP" />
        </div>
        <h1>Maximiliano Benítez</h1>
        <h2>Computer Systems Engineer</h2>
        <h4>Video Editor</h4>
        <div className="contact-info">
          <p className="contacto"><BsFillPhoneFill /> 55-65-24-36-81
          </p>
          <p className="contacto"><MdEmail /> tomax935@gmail.com
          </p>
          <a href="https://github.com/PlasmaX-115" target="_blank" rel="noopener noreferrer" className="github-link">
      <FaGithub /> PlasmaX-115
          </a>
          <p className="contacto"><HiLocationMarker /> Azcapotzalco, CDMX
          </p>
        </div>
        <div className="skills">
          <h5>Idiomas</h5>
          <ul>
            <p>Native Spanish</p>
            <p>Advanced English (C1)</p>
          </ul>
        </div>
      </div>
      <div className="right-column">
        <div className="education">
          <h3>About me</h3>
          <p>📌 Professional Video Editor @ Borregos Gaming, with experience in the creation of narrated advertising videos, focused on the promotion of national esports tournaments. </p>
          <p>📌 Computer Science and Technology student @Tecnológico de Monterrey with skills such as interdisciplinary teamwork and critical thinking. I consider myself an adaptable, sociable, results-oriented, and detail- oriented person.</p>
          <p>📌 I enjoy meeting new people and hearing new perspectives. Reach out if you want to talk to me about emerging tech, creating software products or any topic that inspires you.</p>
        </div>
        <div className="experience">
          <h3>Personal Projects</h3>
          <p> 📷  Documentaries about science and philosophy.</p>
          <p> 📷  Photography Editing.</p>
          <h3>Skills</h3> 
          <p>📌 Proficient in backend development: SQL, PHP.</p>
          <p>📌 Proficient in editing software: Adobe Suite, Final Cut Pro.</p>
          <p>📌 Intermediate Python and C++.</p>




        </div>
        
        <div className="portfolio">

          <Portfolio />
        </div>
      </div>
    </div>
  );
}

export default App;

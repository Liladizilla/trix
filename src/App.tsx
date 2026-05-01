import React from 'react';
import { GridScan } from './GridScan';
import '../style.css'; // Main styles
import '../GlassIcons.css'; // Glass icons overlay

function App() {
  return (
    <div className="app">
      <GridScan 
        enableWebcam={false}
        showPreview={false}
        lineThickness={1}
        linesColor="#00ffff"
        scanColor="#ff00ff"
        gridScale={0.15}
        lineStyle="solid"
        scanGlow={1}
        scanOpacity={0.6}
        scanDirection="pingpong"
        enablePost={true}
        bloomIntensity={0.8}
        chromaticAberration={0.001}
        noiseIntensity={0.02}
        enableGyro={true}
        scanOnClick={true}
        className="gridscan-bg"
      />
      {/* Full professional layout */}
       <header>
         <nav>
           <ul>
             <li><a href="#home">Home</a></li>
             <li><a href="#apps">Apps</a></li>
             <li><a href="#services">Services</a></li>
             <li><a href="iso.html">OS</a></li>
             <li><a href="#contact">Contact</a></li>
           </ul>
         </nav>
       </header>
      <section id="home" className="hero">
        <h1>Cyberzilla</h1>
        <p>The Future of AI & Automation</p>
        <a href="#apps" className="cta-btn">Explore Apps</a>
      </section>
      <main className="main-overlay">
        <section id="apps" className="apps-section-layout">
          <h2>Cyberzilla Apps</h2>
          <p className="apps-subtitle">Cool Apps created by the company.</p>
          <div className="apps-grid icon-btns" role="group" aria-label="Cyberzilla applications">
            {/* 11 Apps - All URLs updated */}
            <a href="https://chariszelqaw.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="blue">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-gift"></i>
                </span>
                <span className="icon-btn__label">Stream Gifts</span>
              </span>
            </a>
            <a href="https://charissibikf.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="indigo">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-home"></i>
                </span>
                <span className="icon-btn__label">Dream House Designer</span>
              </span>
            </a>
            <a href="https://charisb7palv.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="green">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <span className="icon-btn__label">Money Mentor</span>
              </span>
            </a>
            <a href="https://charisj3149a.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="orange">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-chart-line"></i>
                </span>
                <span className="icon-btn__label">Life Progress Tracker</span>
              </span>
            </a>
            <a href="https://charisv9xv63.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="red">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-file-contract"></i>
                </span>
                <span className="icon-btn__label">Agreement Tracker</span>
              </span>
            </a>
            <a href="https://charisj3149a.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="purple">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-tasks"></i>
                </span>
                <span className="icon-btn__label">Local AI Task Coordinator</span>
              </span>
            </a>
            <a href="https://charis2eu88w.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="cyan">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-search"></i>
                </span>
                <span className="icon-btn__label">TraceZero Forensic Engine</span>
              </span>
            </a>
            <a href="https://chariszgm6la.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="blue">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-lock"></i>
                </span>
                <span className="icon-btn__label">Evidence Engine</span>
              </span>
            </a>
            <a href="https://charisorboof.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="teal">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <span className="icon-btn__label">Scope Guardian</span>
              </span>
            </a>
            <a href="https://chariszvccqa.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="magenta">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-vault"></i>
                </span>
                <span className="icon-btn__label">Secure Vault Sentinels</span>
              </span>
            </a>
            <a href="https://charis6e5zef.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="pink">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-robot"></i>
                </span>
                <span className="icon-btn__label">Small ChatGPT</span>
              </span>
            </a>
          </div>

        </section>
        <section id="services">
          <h2>Services</h2>
          <p>AI Development and Automation Solutions</p>
          <div className="service-card">
            <h3>AI Development</h3>
            <p>Custom AI models, chatbots, computer vision</p>
            <a href="mailto:contact@cyberzilla.ai">Get Quote</a>
          </div>
          <div className="service-card">
            <h3>Automation</h3>
            <p>Robotic Process Automation, workflow optimization</p>
            <a href="mailto:contact@cyberzilla.ai">Get Quote</a>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Message" rows={5} required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
        <footer>
          <p>&copy; 2026 Cyberzilla. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App

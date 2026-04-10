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
            {/* Full Cyberzilla Apps - 11 creative apps with descriptions preserved */}
            <a href="https://charis5ibikf.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="blue">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-gifts"></i>
                </span>
                <span className="icon-btn__label">Stream Gifts</span>
              </span>
            </a>
            <a href="https://cyberzilla-home.ai" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="indigo">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-home"></i>
                </span>
                <span className="icon-btn__label">Smart Home</span>
              </span>
            </a>
            <a href="https://cyberzilla-finance.app" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="green">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-dollar-sign"></i>
                </span>
                <span className="icon-btn__label">Money Manager</span>
              </span>
            </a>
            <a href="https://cyberzilla-chat.ai" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="purple">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-robot"></i>
                </span>
                <span className="icon-btn__label">AI Chat</span>
              </span>
            </a>
            <a href="https://cyberzilla-security.tech" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="red">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-shield-alt"></i>
                </span>
                <span className="icon-btn__label">Cyber Security</span>
              </span>
            </a>
            <a href="https://cyberzilla-data.viz" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="orange">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-chart-line"></i>
                </span>
                <span className="icon-btn__label">Data Viz</span>
              </span>
            </a>
            <a href="https://cyberzilla-ar.try" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="yellow">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-vr-cardboard"></i>
                </span>
                <span className="icon-btn__label">AR TryOn</span>
              </span>
            </a>
            <a href="https://cyberzilla-nft.market" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="purple">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-coins"></i>
                </span>
                <span className="icon-btn__label">NFT Market</span>
              </span>
            </a>
            <a href="https://cyberzilla-stream.live" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="cyan">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-video"></i>
                </span>
                <span className="icon-btn__label">Live Stream</span>
              </span>
            </a>
            <a href="https://cyberzilla-code.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="magenta">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-code"></i>
                </span>
                <span className="icon-btn__label">Code Editor</span>
              </span>
            </a>
            <a href="https://cyberzilla-bot.trade" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="green">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-robot"></i>
                </span>
                <span className="icon-btn__label">Trading Bot</span>
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
          <p>&copy; 2024 Cyberzilla. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
}

export default App

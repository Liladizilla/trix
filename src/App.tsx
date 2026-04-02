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
      {/* Overlay glass icons section */}
      <main className="main-overlay">
        <section id="apps" className="apps-section-layout">
          <h2>Cyberzilla Apps</h2>
          <p className="apps-subtitle">Cool Apps created by the company.</p>
          <div className="apps-grid icon-btns" role="group" aria-label="Cyberzilla applications">
            {/* Glass icons HTML from previous */}
            <a href="https://charis5ibikf.lastapp.dev" target="_blank" rel="noopener noreferrer" className="icon-btn" data-color="blue">
              <span className="back"></span>
              <span className="front">
                <span className="icon-btn__icon" aria-hidden="true">
                  <i className="fas fa-gifts"></i>
                </span>
                <span className="icon-btn__label">Stream Gifts</span>
              </span>
            </a>
            {/* ... 8 more ... */}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App

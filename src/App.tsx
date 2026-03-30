import { GridScan } from './GridScan';
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
        style={{position: 'fixed', inset: 0, zIndex: -1}}
      />
      {/* Overlay glass icons section */}
      <main style={{position: 'relative', zIndex: 1, minHeight: '100vh'}}>
        <section id="apps" style={{padding: '100px 20px'}}>
          <h2>Cyberzilla Apps</h2>
          <p class="apps-subtitle">Cool Apps created by the company.</p>
          <div class="apps-grid icon-btns" role="list">
            {/* Glass icons HTML from previous */}
            <a href="https://charis5ibikf.lastapp.dev" target="_blank" rel="noopener noreferrer" class="icon-btn" data-color="blue" aria-label="Launch Stream Gifts App">
              <span class="back"></span>
              <span class="front">
                <span class="icon-btn__icon" aria-hidden="true">
                  <i class="fas fa-gifts"></i>
                </span>
                <span class="icon-btn__label">Stream Gifts</span>
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

// ============================================
// 🚀 CYBERZILLA INTERSTELLAR BLACKHOLE
// Enhanced with mouse interaction, custom cursor, scroll effects
// ============================================

(function() {
    // Wait for DOM and Three.js to be ready
    if (typeof THREE === 'undefined') {
        console.error('Three.js not loaded!');
        return;
    }

    const canvas = document.getElementById('bgCanvas');
    if (!canvas) {
        console.error('Canvas not found!');
        return;
    }

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 2000);
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
        canvas: canvas, 
        antialias: true, 
        alpha: true 
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 1);

    // Mouse position for interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    // ============================================
    // 1. STARFIELD BACKGROUND
    // ============================================
    function createStarfield() {
        const starsGeometry = new THREE.BufferGeometry();
        const starCount = 4000;
        const positions = new Float32Array(starCount * 3);
        const colors = new Float32Array(starCount * 3);
        const sizes = new Float32Array(starCount);

        for (let i = 0; i < starCount; i++) {
            const i3 = i * 3;
            const radius = 50 + Math.random() * 200;
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            
            positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
            positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
            positions[i3 + 2] = radius * Math.cos(phi);

            // Star colors - white to blueish to cyan
            const colorChoice = Math.random();
            if (colorChoice < 0.6) {
                colors[i3] = 1; colors[i3 + 1] = 1; colors[i3 + 2] = 1;
            } else if (colorChoice < 0.85) {
                colors[i3] = 0.7; colors[i3 + 1] = 0.8; colors[i3 + 2] = 1;
            } else {
                colors[i3] = 0; colors[i3 + 1] = 0.9; colors[i3 + 2] = 1;
            }

            sizes[i] = Math.random() * 2.5 + 0.5;
        }

        starsGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        starsGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        starsGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        const starsMaterial = new THREE.PointsMaterial({
            size: 0.18,
            vertexColors: true,
            transparent: true,
            opacity: 0.9,
            sizeAttenuation: true
        });

        return new THREE.Points(starsGeometry, starsMaterial);
    }

    const starfield = createStarfield();
    scene.add(starfield);

    // ============================================
    // 2. GRAVITATIONAL LENSING BLACKHOLE SHADER
    // ============================================
    const blackholeGeometry = new THREE.PlaneGeometry(12, 12);
    
    const blackholeMaterial = new THREE.ShaderMaterial({
        vertexShader: `
            varying vec2 vUv;
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
            }
        `,
        fragmentShader: `
            precision highp float;
            
            uniform float uTime;
            uniform vec2 uResolution;
            uniform vec2 uMouse;
            
            varying vec2 vUv;

            #define PI 3.14159265359

            // Noise function
            float hash(vec2 p) {
                return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453);
            }

            float noise(vec2 p) {
                vec2 i = floor(p);
                vec2 f = fract(p);
                f = f * f * (3.0 - 2.0 * f);
                return mix(
                    mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
                    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x),
                    f.y
                );
            }

            // Gravitational lensing distortion
            vec2 gravitationalLens(vec2 uv, vec2 center, float mass) {
                vec2 diff = uv - center;
                float dist = length(diff);
                float strength = mass / (dist * dist + 0.01);
                strength = min(strength, 2.5);
                return uv - normalize(diff + 0.001) * strength * 0.15;
            }

            void main() {
                vec2 uv = vUv - 0.5;
                uv.x *= uResolution.x / uResolution.y;
                
                // Mouse influence on blackhole position
                vec2 mouseOffset = (uMouse - 0.5) * 0.3;
                
                float time = uTime * 0.25;
                vec2 center = mouseOffset;
                
                float dist = length(uv);
                
                // Event horizon
                float eventHorizon = 0.12;
                float photonSphere = 0.22;
                
                // Gravitational lensing - bends light around blackhole
                vec2 lensedUV = gravitationalLens(vUv - 0.5, center, 0.1);
                
                // Accretion disk
                float diskInner = 0.15;
                float diskOuter = 0.8;
                
                float diskDist = length(uv - mouseOffset * 0.5);
                float diskAngle = atan(uv.y - mouseOffset.y * 0.5, uv.x - mouseOffset.x * 0.5);
                
                // Swirling accretion disk with multiple arms
                float disk = 0.0;
                if (diskDist > diskInner && diskDist < diskOuter) {
                    float spiral = sin(diskAngle * 8.0 - time * 3.0 + diskDist * 10.0);
                    float spiral2 = sin(diskAngle * 5.0 - time * 2.0 + diskDist * 8.0) * 0.5;
                    float falloff = 1.0 - smoothstep(diskInner, diskOuter, diskDist);
                    falloff = pow(falloff, 1.2);
                    disk = falloff * (0.6 + 0.4 * (spiral + spiral2));
                    
                    // Add turbulence
                    float turb = noise(vec2(diskAngle * 4.0 + time * 2.0, diskDist * 12.0)) * 0.4;
                    disk += turb * falloff;
                }
                
                // Color the accretion disk - futuristic colors
                vec3 diskColor = vec3(0.0);
                if (disk > 0.0) {
                    // Inner hot zone - white/blue
                    vec3 innerColor = vec3(0.9, 0.95, 1.0);
                    // Mid zone - cyan
                    vec3 midColor = vec3(0.0, 0.9, 1.0);
                    // Outer zone - magenta/orange
                    vec3 outerColor = vec3(1.0, 0.2, 0.7);
                    
                    float t = (diskDist - diskInner) / (diskOuter - diskInner);
                    diskColor = mix(innerColor, midColor, smoothstep(0.0, 0.3, t));
                    diskColor = mix(diskColor, outerColor, smoothstep(0.3, 1.0, t));
                    
                    // Add glow
                    diskColor *= 1.8;
                }
                
                // Photon ring - bright ring around event horizon
                float photonRing = smoothstep(photonSphere - 0.03, photonSphere, dist) 
                                 - smoothstep(photonSphere, photonSphere + 0.03, dist);
                photonRing = pow(photonRing, 1.5);
                vec3 photonColor = vec3(1.0, 0.8, 0.4) * photonRing * 2.5;
                
                // Secondary photon ring
                float photonRing2 = smoothstep(photonSphere + 0.1 - 0.02, photonSphere + 0.1, dist) 
                                  - smoothstep(photonSphere + 0.1, photonSphere + 0.1 + 0.02, dist);
                photonRing2 = pow(photonRing2, 2.0);
                photonColor += vec3(0.0, 0.8, 1.0) * photonRing2 * 1.5;
                
                // Black hole center
                float blackhole = 1.0 - smoothstep(eventHorizon - 0.01, eventHorizon, dist);
                
                // Final color composition
                vec3 finalColor = vec3(0.0);
                finalColor += diskColor * disk;
                finalColor += photonColor;
                
                // Darken center
                finalColor *= (1.0 - blackhole);
                
                // Add subtle glow around
                float outerGlow = exp(-dist * 2.5) * 0.15;
                finalColor += vec3(0.0, 0.6, 1.0) * outerGlow;
                
                // Alpha for transparency
                float alpha = max(disk * 0.95, photonRing * 1.2);
                alpha = max(alpha, blackhole);
                alpha = max(alpha, outerGlow * 2.5);
                alpha = min(alpha, 1.0);
                
                gl_FragColor = vec4(finalColor, alpha * 0.9);
            }
        `,
        uniforms: {
            uTime: { value: 0 },
            uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
            uMouse: { value: new THREE.Vector2(0.5, 0.5) }
        },
        transparent: true,
        side: THREE.DoubleSide,
        depthWrite: false
    });

    const blackhole = new THREE.Mesh(blackholeGeometry, blackholeMaterial);
    blackhole.position.z = 0;
    scene.add(blackhole);

    // ============================================
    // 3. PARTICLE SYSTEM - STARS BEING PULLED IN
    // ============================================
    const particleCount = 800;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);
    const particleVelocities = [];
    const particleAngles = [];

    for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        const angle = Math.random() * Math.PI * 2;
        const radius = 0.4 + Math.random() * 2.5;
        
        particlePositions[i3] = Math.cos(angle) * radius;
        particlePositions[i3 + 1] = Math.sin(angle) * radius;
        particlePositions[i3 + 2] = (Math.random() - 0.5) * 0.8;
        
        // Cyan to magenta gradient
        const colorMix = Math.random();
        particleColors[i3] = colorMix;
        particleColors[i3 + 1] = 1 - colorMix * 0.5;
        particleColors[i3 + 2] = 1;
        
        particleVelocities.push({
            radius: radius,
            speed: 0.003 + Math.random() * 0.006,
            verticalSpeed: (Math.random() - 0.5) * 0.003,
            trail: []
        });
        particleAngles.push(angle);
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMaterial = new THREE.PointsMaterial({
        size: 0.04,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // ============================================
    // 4. AMBIENT SOUND SYSTEM
    // ============================================
    let audioContext = null;
    let soundEnabled = false;
    let gainNode = null;
    let oscillators = [];

    function initAudio() {
        if (audioContext) return;
        
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
            gainNode = audioContext.createGain();
            gainNode.gain.value = 0.12;
            gainNode.connect(audioContext.destination);

            // Create deep ambient drone with more frequencies
            const frequencies = [30, 50, 70, 90, 120, 180];
            
            frequencies.forEach((freq, index) => {
                const osc = audioContext.createOscillator();
                osc.type = index % 2 === 0 ? 'sine' : 'triangle';
                osc.frequency.value = freq;
                
                const oscGain = audioContext.createGain();
                oscGain.gain.value = 0.08 / (index + 1);
                
                osc.connect(oscGain);
                oscGain.connect(gainNode);
                osc.start();
                
                oscillators.push({ osc, gain: oscGain, baseFreq: freq });
            });

            // Add subtle modulation
            function modulateSound() {
                if (!audioContext || !soundEnabled) return;
                
                const time = audioContext.currentTime;
                oscillators.forEach((item, index) => {
                    const modulation = Math.sin(time * 0.3 + index * 0.5) * 8;
                    const freqMod = item.baseFreq + modulation;
                    item.osc.frequency.setValueAtTime(freqMod, time);
                });
                
                requestAnimationFrame(modulateSound);
            }
            
            modulateSound();
            soundEnabled = true;
            
        } catch (e) {
            console.log('Audio not supported:', e);
        }
    }

    // Sound toggle button
    function createSoundButton() {
        if (document.getElementById('soundToggle')) return;
        
        const btn = document.createElement('button');
        btn.id = 'soundToggle';
        btn.innerHTML = '<i class="fas fa-volume-up"></i>';
        btn.style.cssText = `
            position: fixed;
            bottom: 25px;
            left: 25px;
            background: linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2));
            border: 2px solid #00ffff;
            color: #00ffff;
            padding: 15px 20px;
            border-radius: 50%;
            cursor: pointer;
            z-index: 10000;
            font-size: 20px;
            transition: all 0.3s ease;
            backdrop-filter: blur(10px);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
        `;
        
        btn.onclick = function() {
            if (!soundEnabled) {
                initAudio();
                btn.innerHTML = '<i class="fas fa-volume-up"></i>';
                btn.style.background = 'linear-gradient(135deg, rgba(0, 255, 255, 0.4), rgba(255, 0, 255, 0.4))';
                btn.style.boxShadow = '0 0 25px #00ffff, 0 0 50px #ff00ff';
            } else {
                if (audioContext) {
                    audioContext.suspend();
                    soundEnabled = false;
                    btn.innerHTML = '<i class="fas fa-volume-mute"></i>';
                    btn.style.background = 'linear-gradient(135deg, rgba(255, 0, 100, 0.3), rgba(255, 0, 50, 0.3))';
                    btn.style.borderColor = '#ff0066';
                    btn.style.color = '#ff0066';
                    btn.classList.add('muted');
                }
            }
        };
        
        document.body.appendChild(btn);
    }

    createSoundButton();

    // ============================================
    // 5. CUSTOM CURSOR
    // ============================================
    function initCustomCursor() {
        const cursor = document.querySelector('.cursor');
        const cursorFollower = document.querySelector('.cursor-follower');
        
        if (!cursor || !cursorFollower) return;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            cursor.style.left = mouseX + 'px';
            cursor.style.top = mouseY + 'px';
        });

        // Add hover effects
        const interactiveElements = document.querySelectorAll('a, button, .app-card, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorFollower.classList.add('hover');
            });
            el.addEventListener('mouseleave', () => {
                cursorFollower.classList.remove('hover');
            });
        });
    }

    // ============================================
    // 6. SCROLL PROGRESS
    // ============================================
    function initScrollProgress() {
        const scrollProgress = document.querySelector('.scroll-progress');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            
            if (scrollProgress) {
                scrollProgress.style.width = scrollPercent + '%';
            }
        });
    }

    // ============================================
    // 7. NAV SCROLL EFFECT
    // ============================================
    function initNavScroll() {
        const header = document.querySelector('header');
        
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // ============================================
    // 8. LOADING SCREEN
    // ============================================
    function hideLoader() {
        const loader = document.getElementById('loader');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => {
                loader.style.display = 'none';
            }, 800);
        }
    }

    // Glass Icons support + disable moving background (particles/blackhole)
    const gradientMapping = {
      blue: 'linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))',
      purple: 'linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))',
      red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
      indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
      orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
      green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))'
    };

    // Set gradient backgrounds for glass icons
    document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.icon-btn[data-color]').forEach(btn => {
        const color = btn.dataset.color;
        if (gradientMapping[color]) {
          btn.querySelector('.back').style.background = gradientMapping[color];
        }
      });
    });

    // Disable moving background (keep static starfield)
    if (particles) particles.visible = false;
    if (blackholeMaterial) {
      blackholeMaterial.uniforms.uTime.value = 0; // Freeze time
      blackholeMaterial.opacity = 0.1; // Fade out
    }

    // Initialize after a short delay
    setTimeout(() => {
        hideLoader();
        initCustomCursor();
        initScrollProgress();
        initNavScroll();
    }, 2000);

    // ============================================
    // 9. ANIMATION LOOP
    // ============================================
    const clock = new THREE.Clock();

    function animate() {
        requestAnimationFrame(animate);
        
        const elapsedTime = clock.getElapsedTime();
        
        // Smooth mouse movement
        targetMouseX += (mouseX / window.innerWidth - targetMouseX) * 0.05;
        targetMouseY += (mouseY / window.innerHeight - targetMouseY) * 0.05;
        
        // Update shader uniforms
        blackholeMaterial.uniforms.uTime.value = elapsedTime;
        blackholeMaterial.uniforms.uMouse.value.set(targetMouseX, 1 - targetMouseY);
        
        // Rotate starfield slowly
        starfield.rotation.y = elapsedTime * 0.015;
        starfield.rotation.x = Math.sin(elapsedTime * 0.008) * 0.1;
        
        // Animate particles being pulled into blackhole
        const positions = particles.geometry.attributes.position.array;
        const colors = particles.geometry.attributes.color.array;
        
        for (let i = 0; i < particleCount; i++) {
            const i3 = i * 3;
            const vel = particleVelocities[i];
            
            // Move particles inward (faster when closer)
            const speedMultiplier = 1 + (2 / (vel.radius + 0.1));
            vel.radius -= vel.speed * speedMultiplier;
            
            // Update angle (spiral motion)
            const spiralSpeed = 0.015 + (1 / (vel.radius + 0.1)) * 0.08;
            particleAngles[i] += spiralSpeed;
            
            // Calculate new position
            const x = Math.cos(particleAngles[i]) * vel.radius;
            const y = Math.sin(particleAngles[i]) * vel.radius;
            
            positions[i3] = x;
            positions[i3 + 1] = y;
            positions[i3 + 2] += vel.verticalSpeed;
            
            // Color shift based on distance (more magenta when closer)
            const colorShift = Math.min(1, 0.5 / (vel.radius + 0.1));
            colors[i3] = 0.2 + colorShift;
            colors[i3 + 2] = 1 - colorShift * 0.5;
            
            // Reset particle when it reaches the center
            if (vel.radius < 0.15) {
                vel.radius = 1.8 + Math.random() * 2;
                positions[i3 + 2] = (Math.random() - 0.5) * 0.6;
            }
        }
        
        particles.geometry.attributes.position.needsUpdate = true;
        particles.geometry.attributes.color.needsUpdate = true;
        
        // Subtle camera movement following mouse
        camera.position.x = Math.sin(elapsedTime * 0.08) * 0.4 + (targetMouseX - 0.5) * 0.5;
        camera.position.y = Math.cos(elapsedTime * 0.1) * 0.3 + (targetMouseY - 0.5) * 0.5;
        camera.lookAt(0, 0, 0);
        
        renderer.render(scene, camera);
    }

    // ============================================
    // 10. WINDOW RESIZE HANDLER
    // ============================================
    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
        blackholeMaterial.uniforms.uResolution.value.set(window.innerWidth, window.innerHeight);
    }

    window.addEventListener('resize', onWindowResize);

    // Start animation
    animate();
    
    console.log('🚀 Cyberzilla Blackhole Enhanced initialized!');
})();


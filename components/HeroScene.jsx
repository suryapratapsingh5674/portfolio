'use client';

import { useRef, useEffect } from 'react';
import * as THREE from 'three';

// High-End Isometric Developer Desk Workstation
// Features:
// – Ultra-wide curved coding monitor with dynamic syntax-highlighted code animation
// – Secondary vertical display with live terminal logs
// – Studio desktop speakers, custom mechanical keyboard with underglow
// – Architectural desk lamp with warm amber spotlight & steaming coffee mug
// – Perfectly bounded floating tech stack chips (React, Next.js, TS, Node, AI, Docker)
// – Smooth mouse parallax tilt & ambient floating motion

const BADGES = [
  { name: 'React', color: '#E43D12', x: -1.05, y: 1.25, z: 0.1 },
  { name: 'Next.js', color: '#16161A', x: -0.55, y: 1.55, z: -0.3 },
  { name: 'TypeScript', color: '#D6536D', x: 0.45, y: 1.58, z: -0.25 },
  { name: 'Node.js', color: '#EFB11D', x: 1.02, y: 1.28, z: 0.05 },
  { name: 'Gemini AI', color: '#D6536D', x: -1.02, y: 0.82, z: 0.25 },
  { name: 'Docker', color: '#E43D12', x: 1.0, y: 0.82, z: 0.25 },
];

export default function HeroScene() {
  const mountRef = useRef(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const isMobile = window.innerWidth < 768;
    const W = container.clientWidth || 580;
    const H = container.clientHeight || 540;

    // --- Renderer ---
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // --- Scene & Camera (More Horizontal Isometric Angle) ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(34, W / H, 0.1, 100);
    camera.position.set(1.8, 2.2, 4.3);
    camera.lookAt(0, 0.72, 0);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0xFFFAF2, 2.0);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xFFFFFF, 2.6);
    dirLight.position.set(4, 7, 3);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    // Monitor screen glow
    const monitorLight = new THREE.PointLight(0x38BDF8, 2.4, 3.5);
    monitorLight.position.set(-0.1, 1.1, 0.2);
    scene.add(monitorLight);

    // Warm desk lamp glow
    const lampLight = new THREE.PointLight(0xEFB11D, 2.5, 4.0);
    lampLight.position.set(0.75, 1.4, -0.2);
    scene.add(lampLight);

    // Vermilion accent rim
    const rimLight = new THREE.PointLight(0xE43D12, 1.4, 4.5);
    rimLight.position.set(-2.5, 2.0, -1.5);
    scene.add(rimLight);

    // Master Group
    const root = new THREE.Group();
    root.scale.set(0.95, 0.95, 0.95);
    scene.add(root);

    // Material Library
    const woodMat = new THREE.MeshStandardMaterial({ color: 0xE8D8C8, roughness: 0.35 });
    const darkMat = new THREE.MeshStandardMaterial({ color: 0x18181C, roughness: 0.25, metalness: 0.6 });
    const metalMat = new THREE.MeshStandardMaterial({ color: 0x30313A, roughness: 0.2, metalness: 0.8 });
    const whiteMat = new THREE.MeshStandardMaterial({ color: 0xFFFFFF, roughness: 0.2 });
    const orangeMat = new THREE.MeshStandardMaterial({ color: 0xE43D12, roughness: 0.3 });
    const amberMat = new THREE.MeshStandardMaterial({ color: 0xEFB11D, roughness: 0.3 });
    const pinkMat = new THREE.MeshStandardMaterial({ color: 0xD6536D, roughness: 0.3 });
    const greenMat = new THREE.MeshStandardMaterial({ color: 0x22C55E, roughness: 0.4 });
    const grayMat = new THREE.MeshStandardMaterial({ color: 0x2C2D35, roughness: 0.8 });

    // ==========================================
    // 1. SLEEK DESK TABLE & METAL FRAME
    // ==========================================
    const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.1, 0.07, 1.15), woodMat);
    deskTop.position.set(0, 0.72, 0);
    deskTop.castShadow = true;
    deskTop.receiveShadow = true;
    root.add(deskTop);

    // Chamfered edge trim
    const deskTrim = new THREE.Mesh(new THREE.BoxGeometry(2.12, 0.015, 1.17), metalMat);
    deskTrim.position.set(0, 0.68, 0);
    root.add(deskTrim);

    // Desk Legs & Crossbar
    const legGeo = new THREE.CylinderGeometry(0.028, 0.028, 0.72, 16);
    [[-0.92, 0.36, -0.46], [0.92, 0.36, -0.46], [-0.92, 0.36, 0.46], [0.92, 0.36, 0.46]].forEach(([x, y, z]) => {
      const leg = new THREE.Mesh(legGeo, darkMat);
      leg.position.set(x, y, z);
      leg.castShadow = true;
      root.add(leg);
    });

    const crossBarL = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.92), darkMat);
    crossBarL.position.set(-0.92, 0.2, 0);
    const crossBarR = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.03, 0.92), darkMat);
    crossBarR.position.set(0.92, 0.2, 0);
    root.add(crossBarL, crossBarR);

    // Stitched Leather Desk Mat
    const deskMat = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.012, 0.62), grayMat);
    deskMat.position.set(0.05, 0.76, 0.08);
    root.add(deskMat);

    // ==========================================
    // 2. MAIN CURVED CODING MONITOR (LIVE SYNTAX)
    // ==========================================
    const codeCanvas = document.createElement('canvas');
    codeCanvas.width = 512;
    codeCanvas.height = 300;
    const codeCtx = codeCanvas.getContext('2d');

    const drawCode = (tick) => {
      codeCtx.fillStyle = '#141418';
      codeCtx.fillRect(0, 0, 512, 300);

      // Window title bar
      codeCtx.fillStyle = '#22232B';
      codeCtx.fillRect(0, 0, 512, 32);
      codeCtx.fillStyle = '#E43D12';
      codeCtx.beginPath(); codeCtx.arc(18, 16, 5, 0, Math.PI * 2); codeCtx.fill();
      codeCtx.fillStyle = '#EFB11D';
      codeCtx.beginPath(); codeCtx.arc(34, 16, 5, 0, Math.PI * 2); codeCtx.fill();
      codeCtx.fillStyle = '#22C55E';
      codeCtx.beginPath(); codeCtx.arc(50, 16, 5, 0, Math.PI * 2); codeCtx.fill();

      // Window tab
      codeCtx.fillStyle = '#141418';
      codeCtx.beginPath();
      codeCtx.roundRect(70, 6, 140, 26, [6, 6, 0, 0]);
      codeCtx.fill();
      codeCtx.fillStyle = '#FFFFFF';
      codeCtx.font = 'bold 12px "JetBrains Mono", monospace';
      codeCtx.fillText('App.tsx • Surya', 85, 23);

      // Code lines
      const snippet = [
        { c: '#E43D12', t: 'const engineer = "Surya Tomar";' },
        { c: '#38BDF8', t: 'import { NextEngine } from "next";' },
        { c: '#EFB11D', t: 'async function buildExperience() {' },
        { c: '#4ADE80', t: '  const stack = ["React", "AI", "Node"];' },
        { c: '#FFA2B6', t: '  return await shipProject({' },
        { c: '#FFFFFF', t: '    speed: "ultra_fast",' },
        { c: '#EFB11D', t: '    aesthetic: "vibrant_2026",' },
        { c: '#38BDF8', t: '    status: "ready 🚀"' },
        { c: '#FFA2B6', t: '  });' },
        { c: '#E43D12', t: '}' },
      ];

      codeCtx.font = 'bold 15px "JetBrains Mono", monospace';
      snippet.forEach((line, idx) => {
        codeCtx.fillStyle = line.c;
        const len = Math.min(line.t.length, Math.floor((tick * 22 + idx * 7) % 65));
        codeCtx.fillText(line.t.substring(0, len), 24, 66 + idx * 22);
      });

      if (Math.sin(tick * 5) > 0) {
        codeCtx.fillStyle = '#E43D12';
        codeCtx.fillRect(240, 220, 8, 16);
      }
    };
    drawCode(0);
    const codeTexture = new THREE.CanvasTexture(codeCanvas);

    // Primary Monitor
    const mon = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.62, 0.035), darkMat);
    mon.position.set(-0.15, 1.18, -0.22);
    mon.rotation.y = 0.08;
    mon.castShadow = true;
    root.add(mon);

    const monScreen = new THREE.Mesh(new THREE.PlaneGeometry(1.0, 0.57), new THREE.MeshBasicMaterial({ map: codeTexture }));
    monScreen.position.set(0, 0, 0.02);
    mon.add(monScreen);

    // Monitor Arm / Stand
    const monPole = new THREE.Mesh(new THREE.CylinderGeometry(0.022, 0.022, 0.38, 16), metalMat);
    monPole.position.set(-0.15, 0.9, -0.22);
    root.add(monPole);

    const monBase = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.015, 24), darkMat);
    monBase.position.set(-0.15, 0.765, -0.22);
    root.add(monBase);

    // ==========================================
    // 3. SECONDARY VERTICAL MONITOR / TERMINAL
    // ==========================================
    const termCanvas = document.createElement('canvas');
    termCanvas.width = 256;
    termCanvas.height = 384;
    const termCtx = termCanvas.getContext('2d');

    const drawTerm = (tick) => {
      termCtx.fillStyle = '#0D1117';
      termCtx.fillRect(0, 0, 256, 384);

      termCtx.fillStyle = '#161B22';
      termCtx.fillRect(0, 0, 256, 26);
      termCtx.fillStyle = '#E43D12';
      termCtx.beginPath(); termCtx.arc(14, 13, 3.5, 0, Math.PI * 2); termCtx.fill();
      termCtx.fillStyle = '#EFB11D';
      termCtx.beginPath(); termCtx.arc(26, 13, 3.5, 0, Math.PI * 2); termCtx.fill();
      termCtx.fillStyle = '#22C55E';
      termCtx.beginPath(); termCtx.arc(38, 13, 3.5, 0, Math.PI * 2); termCtx.fill();

      termCtx.fillStyle = '#22C55E';
      termCtx.font = 'bold 11px "JetBrains Mono", monospace';
      termCtx.fillText('surya@node:~$ npm run build', 14, 48);
      termCtx.fillStyle = '#8B949E';
      termCtx.fillText('✓ Compiled in 240ms', 14, 68);
      termCtx.fillText('✓ Optimized 12 routes', 14, 88);
      termCtx.fillStyle = '#38BDF8';
      termCtx.fillText('▶ Listening on :3001', 14, 108);

      termCtx.fillStyle = '#EFB11D';
      termCtx.fillText('[AI Pipeline] Active', 14, 138);
      termCtx.fillStyle = '#F472B6';
      termCtx.fillText('Latency: 18ms', 14, 158);
      termCtx.fillText('TPS: 1,420 req/s', 14, 178);

      termCtx.fillStyle = '#22C55E';
      termCtx.fillText('All systems operational', 14, 208);
      termCtx.fillText('● Online', 14, 228);
    };
    drawTerm(0);
    const termTexture = new THREE.CanvasTexture(termCanvas);

    const vertMon = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.64, 0.03), darkMat);
    vertMon.position.set(0.58, 1.18, -0.16);
    vertMon.rotation.y = -0.35;
    vertMon.castShadow = true;
    root.add(vertMon);

    const vertScreen = new THREE.Mesh(new THREE.PlaneGeometry(0.39, 0.6), new THREE.MeshBasicMaterial({ map: termTexture }));
    vertScreen.position.set(0, 0, 0.018);
    vertMon.add(vertScreen);

    const vertPole = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.38, 16), metalMat);
    vertPole.position.set(0.58, 0.9, -0.16);
    root.add(vertPole);

    // ==========================================
    // 4. DESK PERIPHERALS & SOUND MONITORS
    // ==========================================
    // Desktop Studio Speakers (Left & Right)
    const speakerGeo = new THREE.BoxGeometry(0.14, 0.22, 0.14);
    const speakerL = new THREE.Mesh(speakerGeo, darkMat);
    speakerL.position.set(-0.85, 0.86, -0.22);
    speakerL.rotation.y = 0.25;
    const speakerR = new THREE.Mesh(speakerGeo, darkMat);
    speakerR.position.set(0.88, 0.86, -0.22);
    speakerR.rotation.y = -0.25;
    root.add(speakerL, speakerR);

    // Speaker Cones (Vermilion cone accent)
    const coneL = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.01, 16), orangeMat);
    coneL.position.set(0, 0.02, 0.072);
    coneL.rotation.x = Math.PI / 2;
    speakerL.add(coneL);

    const coneR = new THREE.Mesh(new THREE.CylinderGeometry(0.045, 0.045, 0.01, 16), orangeMat);
    coneR.position.set(0, 0.02, 0.072);
    coneR.rotation.x = Math.PI / 2;
    speakerR.add(coneR);

    // Custom 75% Mechanical Keyboard
    const kb = new THREE.Mesh(new THREE.BoxGeometry(0.54, 0.022, 0.18), darkMat);
    kb.position.set(-0.05, 0.77, 0.12);
    root.add(kb);

    const keycaps = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.014, 0.15), whiteMat);
    keycaps.position.set(-0.05, 0.785, 0.12);
    root.add(keycaps);

    // Accent Keycaps (ESC & ENTER in Vermilion)
    const escKey = new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.018, 0.035), orangeMat);
    escKey.position.set(-0.27, 0.79, 0.06);
    const enterKey = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.018, 0.035), orangeMat);
    enterKey.position.set(0.18, 0.79, 0.14);
    root.add(escKey, enterKey);

    // Wireless Ergonomic Mouse
    const mouse = new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.028, 0.11), darkMat);
    mouse.position.set(0.36, 0.775, 0.14);
    root.add(mouse);

    const mouseWheel = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.018, 12), orangeMat);
    mouseWheel.position.set(0.36, 0.792, 0.11);
    mouseWheel.rotation.z = Math.PI / 2;
    root.add(mouseWheel);

    // Ceramic Coffee Mug with Rising Steam
    const mug = new THREE.Mesh(new THREE.CylinderGeometry(0.05, 0.045, 0.09, 16), pinkMat);
    mug.position.set(-0.58, 0.8, 0.08);
    mug.castShadow = true;
    root.add(mug);

    const mugHandle = new THREE.Mesh(new THREE.TorusGeometry(0.028, 0.008, 8, 16, Math.PI), pinkMat);
    mugHandle.position.set(-0.63, 0.8, 0.08);
    mugHandle.rotation.y = Math.PI / 2;
    root.add(mugHandle);

    const steamPuffs = [];
    for (let i = 0; i < 6; i++) {
      const s = new THREE.Mesh(
        new THREE.SphereGeometry(0.014, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0xFFFFFF, transparent: true, opacity: 0.35 })
      );
      s.position.set(-0.58 + (Math.random() - 0.5) * 0.02, 0.86 + i * 0.028, 0.08 + (Math.random() - 0.5) * 0.02);
      root.add(s);
      steamPuffs.push(s);
    }

    // Modern Architectural Desk Lamp
    const lampB = new THREE.Mesh(new THREE.CylinderGeometry(0.075, 0.075, 0.016, 16), amberMat);
    lampB.position.set(0.72, 0.76, -0.32);
    root.add(lampB);

    const lampPole1 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.38, 12), metalMat);
    lampPole1.position.set(0.72, 0.94, -0.32);
    lampPole1.rotation.z = -0.2;
    root.add(lampPole1);

    const lampPole2 = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.01, 0.34, 12), metalMat);
    lampPole2.position.set(0.66, 1.2, -0.28);
    lampPole2.rotation.z = 0.45;
    root.add(lampPole2);

    const lampShade = new THREE.Mesh(new THREE.ConeGeometry(0.085, 0.14, 16), amberMat);
    lampShade.position.set(0.55, 1.34, -0.2);
    lampShade.rotation.x = 0.65;
    lampShade.rotation.z = 0.5;
    root.add(lampShade);

    // Minimalist Ceramic Potted Plant
    const pot = new THREE.Mesh(new THREE.CylinderGeometry(0.055, 0.042, 0.075, 16), whiteMat);
    pot.position.set(-0.62, 0.79, -0.36);
    root.add(pot);

    const plantLeaves = new THREE.Mesh(new THREE.DodecahedronGeometry(0.058), greenMat);
    plantLeaves.position.set(-0.62, 0.86, -0.36);
    root.add(plantLeaves);

    // ==========================================
    // 5. TIGHTLY BOUNDED FLOATING TECH BADGES
    // ==========================================
    const badgeMeshes = [];
    BADGES.forEach((b, i) => {
      const bCanvas = document.createElement('canvas');
      bCanvas.width = 240;
      bCanvas.height = 70;
      const bCtx = bCanvas.getContext('2d');

      // White Badge Card
      bCtx.fillStyle = '#FFFFFF';
      bCtx.beginPath();
      bCtx.roundRect(4, 4, 232, 62, 12);
      bCtx.fill();

      // Bold Outline
      bCtx.strokeStyle = '#16161A';
      bCtx.lineWidth = 3;
      bCtx.beginPath();
      bCtx.roundRect(4, 4, 232, 62, 12);
      bCtx.stroke();

      // Dot Indicator
      bCtx.fillStyle = b.color;
      bCtx.beginPath();
      bCtx.arc(28, 35, 8, 0, Math.PI * 2);
      bCtx.fill();

      // Text
      bCtx.fillStyle = '#16161A';
      bCtx.font = 'bold 24px "Plus Jakarta Sans", sans-serif';
      bCtx.textBaseline = 'middle';
      bCtx.fillText(b.name, 48, 36);

      const bTex = new THREE.CanvasTexture(bCanvas);
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: bTex, transparent: true, opacity: 0.98 }));
      sprite.position.set(b.x, b.y, b.z);
      sprite.scale.set(0.68, 0.21, 1);
      root.add(sprite);

      badgeMeshes.push({ sprite, baseY: b.y, phase: i * 0.95 });
    });

    // --- Subtle Micro-Responsive Mouse Parallax ---
    let targetRotY = 0;
    let targetRotX = 0;
    let targetPosX = 0;
    let targetPosY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      // Minimal horizontal movement (nearly locked horizontally with tiny depth feel)
      targetRotY = x * 0.012;
      targetRotX = -y * 0.025;
      targetPosX = x * 0.015;
      targetPosY = -y * 0.03;
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    // --- Resize ---
    const onResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize, { passive: true });

    // --- Animation Loop ---
    let rafId;
    let clock = 0;

    const animate = () => {
      rafId = requestAnimationFrame(animate);
      clock += 0.016;

      // Subtle, gentle micro-movement (stays horizontal and stable)
      root.rotation.y += (-0.08 + targetRotY - root.rotation.y) * 0.05;
      root.rotation.x += (targetRotX - root.rotation.x) * 0.05;
      root.position.x += (targetPosX - root.position.x) * 0.05;
      root.position.y += (targetPosY + Math.sin(clock * 1.4) * 0.015 - root.position.y) * 0.05;

      // Update syntax code and terminal textures
      drawCode(clock);
      codeTexture.needsUpdate = true;
      drawTerm(clock);
      termTexture.needsUpdate = true;

      // Rising steam
      steamPuffs.forEach((p, idx) => {
        p.position.y += 0.0028;
        p.position.x += Math.sin(clock * 2.5 + idx) * 0.0004;
        if (p.position.y > 1.08) p.position.y = 0.86;
      });

      // Floating tech badges bobbing smoothly
      badgeMeshes.forEach((b) => {
        b.sprite.position.y = b.baseY + Math.sin(clock * 1.6 + b.phase) * 0.045;
      });

      renderer.render(scene, camera);
    };

    animate();

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="hero-canvas-container"
      role="img"
      aria-label="Interactive 3D isometric developer desk setup with dual coding monitors, mechanical keyboard, studio speakers, and tech stack tags"
    />
  );
}

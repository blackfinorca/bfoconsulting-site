import React, { useEffect, useRef } from 'react';

const VERT = `attribute vec2 a; void main(){ gl_Position = vec4(a, 0.0, 1.0); }`;

// A pale liquid wash over the site's cream background. The void drifts down the page as
// you scroll, the edge is warped by slow noise (faster while scrolling), and
// the pointer pulls the surface toward it like a magnet.
const FRAG = `
precision highp float;
uniform vec2 uRes;
uniform float uTime;
uniform vec2 uMouse;
uniform float uScroll;
uniform float uVel;
uniform float uPull;

float hash(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
float noise(vec2 p){
  vec2 i = floor(p), f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  return mix(mix(hash(i), hash(i + vec2(1.0, 0.0)), f.x),
             mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), f.x), f.y);
}
float fbm(vec2 p){
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++){ v += a * noise(p); p = p * 2.03 + 17.0; a *= 0.5; }
  return v;
}

void main(){
  float aspect = uRes.x / uRes.y;
  vec2 p = gl_FragCoord.xy / uRes - 0.5;
  p.x *= aspect;

  // pointer: lens the surface toward the cursor
  vec2 m = (uMouse - 0.5) * vec2(aspect, 1.0);
  vec2 dm = p - m;
  p += dm * (uPull * 0.28 * exp(-dot(dm, dm) * 5.0));

  // liquid warp: slow drift, stirred by scroll velocity
  float t = uTime * 0.06;
  vec2 q = vec2(fbm(p * 1.4 + vec2(t, -t * 0.7)), fbm(p * 1.4 + vec2(5.2, 1.3) - vec2(t * 0.8, t)));
  p += (q - 0.5) * (0.5 + uVel * 0.9);

  // the void travels across the viewport as the page scrolls
  vec2 c = vec2(-0.95 + 0.55 * sin(uScroll * 5.2), 0.35 - uScroll * 1.5);
  float edge = length(p - c) - 1.15;

  vec3 cream = vec3(0.957, 0.945, 0.925);
  vec3 pale  = vec3(0.80, 0.86, 0.97);
  vec3 aster = vec3(0.61, 0.67, 0.85);
  vec3 royal = vec3(0.13, 0.20, 0.51);

  // soft wash that thickens away from the void, never fully opaque
  vec3 col = mix(cream, pale, 0.65 * smoothstep(-0.6, 0.2, edge));
  col = mix(col, aster, 0.32 * smoothstep(0.05, 1.2, edge));
  col = mix(col, royal, 0.09 * exp(-pow((edge - 0.05) * 7.0, 2.0)));
  // a trace of the brand orange where the liquid thins out
  col = mix(col, vec3(0.98, 0.52, 0.07), 0.06 * smoothstep(0.35, 1.3, edge) * smoothstep(0.1, -0.6, p.y));
  col = mix(cream, col, 0.9);

  col += (hash(gl_FragCoord.xy + uTime) - 0.5) / 200.0;
  gl_FragColor = vec4(col, 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, src: string) {
  const s = gl.createShader(type);
  if (!s) return null;
  gl.shaderSource(s, src);
  gl.compileShader(s);
  return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null;
}

export const LiquidBackground: React.FC = () => {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, powerPreference: 'low-power' });
    if (!gl) return;

    const vs = compile(gl, gl.VERTEX_SHADER, VERT);
    const fs = compile(gl, gl.FRAGMENT_SHADER, FRAG);
    const prog = gl.createProgram();
    if (!vs || !fs || !prog) return;
    gl.attachShader(prog, vs);
    gl.attachShader(prog, fs);
    gl.linkProgram(prog);
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return;
    gl.useProgram(prog);

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'a');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);

    const u = (n: string) => gl.getUniformLocation(prog, n);
    const uRes = u('uRes'), uTime = u('uTime'), uMouse = u('uMouse'), uScroll = u('uScroll'), uVel = u('uVel'), uPull = u('uPull');

    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    // render at reduced resolution; the surface is soft, so nobody sees it
    const scale = 0.5;
    const resize = () => {
      canvas.width = Math.max(2, Math.round(canvas.clientWidth * scale));
      canvas.height = Math.max(2, Math.round(canvas.clientHeight * scale));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };
    resize();

    const mouse = { x: 0.7, y: 0.5, tx: 0.7, ty: 0.5, pull: 0, tpull: 0 };
    const onMove = (e: PointerEvent) => {
      mouse.tx = e.clientX / window.innerWidth;
      mouse.ty = 1 - e.clientY / window.innerHeight;
      mouse.tpull = 1;
    };
    const onLeave = () => { mouse.tpull = 0; };

    let scroll = 0, targetScroll = 0, lastY = window.scrollY, vel = 0;
    const readScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      targetScroll = Math.min(1, Math.max(0, window.scrollY / max));
    };
    readScroll();
    scroll = targetScroll;

    const draw = (time: number) => {
      gl.uniform2f(uRes, canvas.width, canvas.height);
      gl.uniform1f(uTime, time);
      gl.uniform2f(uMouse, mouse.x, mouse.y);
      gl.uniform1f(uScroll, scroll);
      gl.uniform1f(uVel, vel);
      gl.uniform1f(uPull, mouse.pull);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    let raf = 0;
    const start = performance.now();
    const frame = (now: number) => {
      mouse.x += (mouse.tx - mouse.x) * 0.06;
      mouse.y += (mouse.ty - mouse.y) * 0.06;
      mouse.pull += (mouse.tpull - mouse.pull) * 0.04;
      readScroll();
      scroll += (targetScroll - scroll) * 0.07;
      const dy = Math.abs(window.scrollY - lastY) / Math.max(1, window.innerHeight);
      lastY = window.scrollY;
      vel += (Math.min(1, dy * 12) - vel) * 0.1;
      draw((now - start) / 1000);
      raf = requestAnimationFrame(frame);
    };

    const run = () => {
      cancelAnimationFrame(raf);
      if (motion.matches || document.hidden) {
        draw(4);
        return;
      }
      raf = requestAnimationFrame(frame);
    };
    const onResize = () => { resize(); run(); };

    window.addEventListener('pointermove', onMove, { passive: true });
    document.addEventListener('pointerleave', onLeave);
    window.addEventListener('resize', onResize);
    document.addEventListener('visibilitychange', run);
    motion.addEventListener('change', run);
    run();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerleave', onLeave);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', run);
      motion.removeEventListener('change', run);
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0"
      style={{ background: 'radial-gradient(120% 90% at 100% 60%, #D3DCF2 0%, #F4F1EC 62%)' }}
    >
      <canvas ref={ref} className="h-full w-full" />
    </div>
  );
};

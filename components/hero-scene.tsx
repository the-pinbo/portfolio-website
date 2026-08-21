"use client";

import { Canvas, ThreeEvent, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { ShaderMaterial, Vector2 } from "three";

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform vec2 uPointer;
  uniform float uPulse;
  uniform float uActive;
  varying vec2 vUv;

  void main() {
    float d = distance(vUv, uPointer);
    float ripple = sin(d * 48.0 - uPulse * 8.0) * exp(-d * 9.0) * uActive;
    vec3 base = vec3(0.090, 0.169, 0.235);
    vec3 vermilion = vec3(0.800, 0.333, 0.247);
    vec3 slate = vec3(0.424, 0.478, 0.525);
    float ray = smoothstep(0.8, 0.0, d) * uActive;
    vec3 color = mix(base, slate, 0.16 + ripple * 0.18);
    color = mix(color, vermilion, max(0.0, ripple) * 0.22 + ray * 0.06);
    gl_FragColor = vec4(color, 0.46 * ray + max(0.0, ripple) * 0.18);
  }
`;

function DisplacedPlane() {
  const material = useRef<ShaderMaterial>(null);
  const target = useRef(new Vector2(0.5, 0.5));
  const current = useRef(new Vector2(0.5, 0.5));
  const pulseAt = useRef(0);
  const needsPulse = useRef(false);
  const isActive = useRef(0);
  const { invalidate } = useThree();

  const uniforms = useMemo(
    () => ({
      uPointer: { value: new Vector2(0.5, 0.5) },
      uPulse: { value: 0 },
      uActive: { value: 0 },
    }),
    [],
  );

  useFrame(({ clock }) => {
    if (!material.current) return;
    const elapsed = clock.getElapsedTime();
    if (needsPulse.current) {
      pulseAt.current = elapsed;
      needsPulse.current = false;
    }
    current.current.lerp(target.current, 0.18);
    const active = Math.max(0, 1 - (elapsed - pulseAt.current) / 0.8) * isActive.current;

    material.current.uniforms.uPointer.value.copy(current.current);
    material.current.uniforms.uPulse.value = elapsed - pulseAt.current;
    material.current.uniforms.uActive.value = active;

    if (active > 0.005 || current.current.distanceTo(target.current) > 0.001) {
      invalidate();
    }
  });

  function move(event: ThreeEvent<PointerEvent>) {
    if (!event.uv) return;
    target.current.copy(event.uv);
    needsPulse.current = true;
    isActive.current = 1;
    invalidate();
  }

  function leave() {
    isActive.current = 0;
    invalidate();
  }

  return (
    <mesh onPointerMove={move} onPointerOut={leave} scale={[2, 2, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        fragmentShader={fragmentShader}
        ref={material}
        transparent
        uniforms={uniforms}
        vertexShader={vertexShader}
      />
    </mesh>
  );
}

export default function HeroScene() {
  return (
    <div aria-hidden="true" className="hero-canvas">
      <Canvas
        camera={{ position: [0, 0, 1], zoom: 1 }}
        dpr={[1, 1.25]}
        frameloop="demand"
        gl={{ alpha: true, antialias: false, powerPreference: "low-power" }}
        orthographic
      >
        <DisplacedPlane />
      </Canvas>
    </div>
  );
}

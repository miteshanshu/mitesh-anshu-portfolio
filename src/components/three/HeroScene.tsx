import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Torus } from '@react-three/drei';
import type { Group, Mesh } from 'three';
import './HeroScene.css';

function CoreGeometry() {
  const group = useRef<Group>(null);
  const torus = useRef<Mesh>(null);
  const core = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.12;
    if (torus.current) torus.current.rotation.x += delta * 0.25;
    if (core.current) core.current.rotation.z += delta * 0.18;
  });

  return (
    <group ref={group}>
      <Float speed={2} rotationIntensity={0.6} floatIntensity={1}>
        <Torus ref={torus} args={[1.4, 0.04, 16, 100]} rotation={[Math.PI / 3, 0, 0]}>
          <meshBasicMaterial color="#ff6b35" wireframe transparent opacity={0.7} />
        </Torus>
      </Float>

      <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
        <mesh ref={core} scale={0.85}>
          <icosahedronGeometry args={[1, 2]} />
          <MeshDistortMaterial
            color="#8b5cf6"
            emissive="#ff6b35"
            emissiveIntensity={0.2}
            roughness={0.15}
            metalness={0.9}
            distort={0.35}
            speed={2}
            wireframe
          />
        </mesh>
      </Float>

      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <ringGeometry args={[1.8, 1.82, 64]} />
        <meshBasicMaterial color="#22d3ee" transparent opacity={0.25} side={2} />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#ff6b35" />
      <pointLight position={[-4, -2, 3]} intensity={0.8} color="#8b5cf6" />
      <pointLight position={[2, 3, -2]} intensity={0.5} color="#22d3ee" />
      <Stars radius={60} depth={50} count={2000} factor={4} saturation={0} fade speed={0.4} />
      <CoreGeometry />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5.5], fov: 42 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
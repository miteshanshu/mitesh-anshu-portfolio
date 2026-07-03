import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars } from '@react-three/drei';
import type { Mesh } from 'three';
import './HeroScene.css';

function FloatingShape() {
  const meshRef = useRef<Mesh>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} scale={1.6}>
        <icosahedronGeometry args={[1, 1]} />
        <MeshDistortMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.15}
          roughness={0.2}
          metalness={0.8}
          distort={0.25}
          speed={1.5}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <directionalLight position={[4, 4, 4]} intensity={1.2} color="#7dd3fc" />
      <pointLight position={[-3, -2, 2]} intensity={0.6} color="#38bdf8" />
      <Stars radius={50} depth={40} count={1200} factor={3} saturation={0} fade speed={0.5} />
      <FloatingShape />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 1.5]}>
        <Scene />
      </Canvas>
      <div className="hero-scene__glow" />
    </div>
  );
}
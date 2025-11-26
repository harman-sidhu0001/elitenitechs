/**
 * Animated 3D Background Component
 * Creates floating geometric shapes with GSAP-controlled animations
 */

import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface AnimatedBackgroundProps {
  count?: number;
  color?: string;
}

const AnimatedBackground = ({ 
  count = 50,
  color = '#F59E0B' 
}: AnimatedBackgroundProps) => {
  const meshRef = useRef<THREE.InstancedMesh>(null!);

  // Generate random positions and scales for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const t = Math.random() * 100;
      const factor = 20 + Math.random() * 100;
      const speed = 0.01 + Math.random() / 200;
      const x = Math.random() * 20 - 10;
      const y = Math.random() * 20 - 10;
      const z = Math.random() * 20 - 10;
      const scale = 0.1 + Math.random() * 0.5;
      
      temp.push({ t, factor, speed, x, y, z, scale, mx: 0, my: 0 });
    }
    return temp;
  }, [count]);

  // Dummy object for matrix operations
  const dummy = useMemo(() => new THREE.Object3D(), []);

  // Animation loop
  useFrame(() => {
    if (!meshRef.current) return;

    particles.forEach((particle, i) => {
      let { t, factor, speed, x, y, z, scale } = particle;

      // Update time
      t = particle.t += speed / 2;

      // Calculate positions with oscillation
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      
      dummy.position.set(
        x + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
        y + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
        z + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );

      // Rotation
      dummy.rotation.set(a * 2, b * 2, 0);

      // Scale pulsing
      const s = scale + Math.sin(t * 2) * 0.1;
      dummy.scale.set(s, s, s);

      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    });

    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.3}
        roughness={0.5}
        metalness={0.5}
      />
    </instancedMesh>
  );
};

export default AnimatedBackground;

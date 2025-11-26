/**
 * 3D Text Component
 * Extruded 3D text with dynamic material for hero section
 */

import { Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface Text3DComponentProps {
  text: string;
  color?: string;
  position?: [number, number, number];
  size?: number;
  depth?: number;
  animate?: boolean;
}

const Text3DComponent = ({
  text,
  color = '#F59E0B',
  position = [0, 0, 0],
  size = 1,
  depth = 0.2,
  animate = true,
}: Text3DComponentProps) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    if (!meshRef.current || !animate) return;

    // Gentle rotation animation
    meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    
    // Subtle scale pulsing
    const scale = 1 + Math.sin(state.clock.elapsedTime) * 0.02;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Center position={position}>
      <Text3D
        ref={meshRef}
        font="/fonts/helvetiker_regular.typeface.json"
        size={size}
        height={depth}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
      >
        {text}
        <meshStandardMaterial
          color={color}
          metalness={0.7}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.3}
        />
      </Text3D>
    </Center>
  );
};

export default Text3DComponent;

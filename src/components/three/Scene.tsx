/**
 * Three.js Scene Component
 * Base wrapper for all 3D scenes with camera and lighting setup
 */

import { Canvas } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { Suspense, type ReactNode } from 'react';

interface SceneProps {
  children: ReactNode;
  className?: string;
  cameraPosition?: [number, number, number];
  enableControls?: boolean;
  background?: string;
}

const Scene = ({
  children,
  className = '',
  cameraPosition = [0, 0, 5],
  enableControls = false,
  background = 'transparent',
}: SceneProps) => {
  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
        style={{ background }}
      >
        <Suspense fallback={null}>
          {/* Camera */}
          <PerspectiveCamera
            makeDefault
            position={cameraPosition}
            fov={75}
          />

          {/* Lighting */}
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} />
          <spotLight
            position={[-10, 10, 10]}
            angle={0.3}
            penumbra={1}
            intensity={0.5}
            castShadow
          />

          {/* Controls (optional) */}
          {enableControls && <OrbitControls enableZoom={false} />}

          {/* Scene content */}
          {children}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;


import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader, Vector3, DoubleSide } from 'three';

const USERS = [
  { id: 1, lat: 24.8607, lng: 67.0011, avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=60" }, 
  { id: 2, lat: 40.7128, lng: -74.0060, avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&auto=format&fit=crop&q=60" }, 
  { id: 3, lat: 51.5074, lng: -0.1278, avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&auto=format&fit=crop&q=60" }
];

function convertLatLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  const x = -(radius * Math.sin(phi) * Math.sin(theta));
  const y = radius * Math.cos(phi);
  const z = radius * Math.sin(phi) * Math.cos(theta);
  return new Vector3(x, y, z);
}

function GlobeInstance({ radius = 2.6 }) {
  const groupRef = useRef();
  
  const earthTexture = useLoader(TextureLoader, 'https://raw.githubusercontent.com/mrdoob/three.js/master/examples/textures/planets/earth_atmos_2048.jpg');
  const avatarTextures = useLoader(TextureLoader, USERS.map(u => u.avatar));

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.002; 
    }
  });

  const calculatedNodes = useMemo(() => {
    return USERS.map((user, index) => {
      const surfacePoint = convertLatLngToVector3(user.lat, user.lng, radius);
      const lineLength = 0.35; 
      const outerPoint = surfacePoint.clone().normalize().multiplyScalar(radius + lineLength);

      return {
        id: user.id,
        start: surfacePoint,
        end: outerPoint,
        texture: avatarTextures[index]
      };
    });
  }, [radius, avatarTextures]);

  return (
    // Shift the globe center coordinate to the bottom right of the canvas viewport panel
    <group ref={groupRef} position={[1.4, -1.4, 0]}>
      {/* Muted luxury sphere mesh */}
      <mesh>
        <sphereGeometry args={[radius, 64, 64]} />
        <meshStandardMaterial 
          map={earthTexture} 
          roughness={0.7} 
          metalness={0.2}
          color="#a1a8b5"
        />
      </mesh>

      {/* Pins and round avatar badges */}
      {calculatedNodes.map((node) => (
        <group key={node.id}>
          <line>
            <bufferGeometry attach="geometry" onUpdate={(self) => self.setFromPoints([node.start, node.end])} />
            <lineBasicMaterial attach="material" color="#cbd5e1" linewidth={1.5} transparent opacity={0.6} />
          </line>

          <mesh position={node.start}>
            <sphereGeometry args={[0.02, 16, 16]} />
            <meshBasicMaterial color="#0c0d12" />
          </mesh>

          <mesh position={node.end}>
            <circleGeometry args={[0.16, 32]} />
            <meshBasicMaterial map={node.texture} side={DoubleSide} toneMapped={false} />
          </mesh>

          <mesh position={node.end}>
            <ringGeometry args={[0.16, 0.17, 32]} />
            <meshBasicMaterial color="#ffffff" side={DoubleSide} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function GlobeEngine() {
  return (
    <div className="canvas-container-viewport">
      <Canvas 
        camera={{ position: [0, 0, 4.2], fov: 45 }} 
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={0.6} />
        {/* Lighting focused from upper-left to match drop-off shadows shown in video */}
        <directionalLight position={[-5, 5, 4]} intensity={2.0} />
        <Suspense fallback={null}>
          <GlobeInstance radius={2.5} />
        </Suspense>
      </Canvas>
    </div>
  );
}
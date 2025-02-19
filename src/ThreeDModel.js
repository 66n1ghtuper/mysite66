import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

export function RotatedModel({ modelPath }) {
  const { scene } = useGLTF(modelPath);
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
    }
  });

  return scene ? (
    <primitive
      ref={meshRef}
      object={scene}
      castShadow
      receiveShadow
    />
  ) : (
    <mesh>Loading model...</mesh>
  );
}

import React, { useState, useEffect, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from '@react-three/drei';

function Model({ url, initialPosition }) {
  const [model, setModel] = useState(null);
  const [position, setPosition] = useState(initialPosition);
  const groupRef = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    loader.load(url, gltf => {
      setModel(gltf.scene);
    });
  }, [url]);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.position.x = position.x;
      groupRef.current.position.y = position.y;
      groupRef.current.position.z = position.z;
    }
  });

  return (
    <group ref={groupRef}>
      {model && (
        <mesh>
          <primitive object={model} />
        </mesh>
      )}
    </group>
  );
}

function ModelApp() {
  return (
    <div style={{ width: '100%', height: '90vh' }}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Model url="3D-models/scene.gltf" initialPosition={{ x: 0, y: 0, z: 0 }} />
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ModelApp;

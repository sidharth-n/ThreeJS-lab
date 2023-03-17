import {
  OrbitControls,
  useHelper,
  PivotControls,
  BakeShadows,
  AccumulativeShadows,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";

export default function Experience() {
  const cube = useRef();
  const dirLight = useRef();
  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  useFrame((state, delta) => {
    cube.current.rotation.y += delta;
  });

  return (
    <>
      <Perf position="top-left" />
      <OrbitControls makeDefault />
      <PivotControls>
        <directionalLight
          ref={dirLight}
          castShadow
          position={[1, 2, 3]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        />
      </PivotControls>
      <ambientLight intensity={0.5} />

      <mesh position={[-2, 0, 0]} castShadow>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh position-x={2} scale={[1, 1, 1]} ref={cube} castShadow>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}

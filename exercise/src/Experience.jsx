import {
  OrbitControls,
  useHelper,
  PivotControls,
  BakeShadows,
  AccumulativeShadows,
  Sky,
  Environment,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";

export default function Experience() {
  const cube = useRef();
  const dirLight = useRef();
  const { sunPosition } = useControls("SUN", {
    sunPosition: { value: [1, 2, 3] },
  });

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  useFrame((state, delta) => {
    cube.current.rotation.y += delta;
  });

  return (
    <>
      <Environment
        ground={{
          height: 7,
          radius: 50,
          scale: 100,
        }}
        files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
      />
      <Perf position="top-left" />
      <OrbitControls makeDefault />

      {/*     <directionalLight
          ref={dirLight}
          castShadow
          position={[1, 2, 3]}
          intensity={1.5}
          shadow-mapSize={[1024, 1024]}
        /> */}

      {/*  <Sky sunPosition={sunPosition} /> */}
      {/*   <ambientLight intensity={0.5} /> */}

      <mesh position={[-2, 1, 0]} castShadow>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh>

      <mesh
        position-x={2}
        position-y={0}
        scale={[1, 1, 1]}
        ref={cube}
        castShadow
      >
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      {/*  <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
    </>
  );
}

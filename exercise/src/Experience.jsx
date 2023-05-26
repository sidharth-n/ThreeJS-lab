import {
  OrbitControls,
  useHelper,
  PivotControls,
  BakeShadows,
  AccumulativeShadows,
  Sky,
  Environment,
  Stage,
  useGLTF,
  Clone,
  useAnimations,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";
import music from "./bgm.mp3";

export default function Experience() {
  const model = useGLTF("./iphone2.gltf");

  const { animationName = "" } = useControls("Animation", {
    animationName: { options: ["000", "Freeze", "Flair"] },
  });

  const dirLight = useRef();

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  useFrame((state, delta) => {
    //state.camera.position.x += delta;
    //state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {/*   <Environment
          ground={{
            height: 7,
            radius: 100,
            scale: 100,
          }}
          files={"./environmentMaps/studio_small_03_1k.hdr"}
        /> */}
      {/*  <Perf position="top-left" /> */}

      <directionalLight
        ref={dirLight}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      />

      {/*  <Sky sunPosition={sunPosition} /> */}
      {/*   <ambientLight intensity={0.5} /> */}
      {/* 
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
      </mesh> */}

      {/*  <mesh
        receiveShadow
        position-y={-1}
        rotation-x={-Math.PI * 0.5}
        scale={10}
        
      >
        <planeGeometry />
        <meshStandardMaterial color="greenyellow" />
      </mesh> */}
      <Stage>
        <primitive
          object={model.scene}
          scale={[1, 1, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
        />
        {/*   <Clone
        object={model.scene}
        scale={[0.025, 0.025, 0.025]}
        receiveShadow
        position
        -x={-4}
      /> */}
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}

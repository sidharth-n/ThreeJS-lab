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
import bgm from "./bgm.mp3";

export default function Experience() {
  const model = useGLTF("./Fox/glTF/dancingGirl2.gltf");
  const animations = useAnimations(model.animations, model.scene);
  console.log(animations.actions);

  const { animationName = "" } = useControls("Animation", {
    animationName: { options: ["Twerk", "Freeze", "Flair"] },
  });

  useEffect(() => {
    const action = animations.actions[animationName];
    action.reset().fadeIn(0.5).play();
    const music = new Audio(bgm);
    music.play();
    return () => {
      action.fadeOut(2);
    };
  }, [animationName]);

  const dirLight = useRef();

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  useFrame((state, delta) => {
    state.camera.position.x += delta;
    state.camera.lookAt(-10, 2.4, 0);
  });

  return (
    <>
      {
        <Environment
          ground={{
            height: 7,
            radius: 100,
            scale: 100,
          }}
          files={"./environmentMaps/the_sky_is_on_fire_2k.hdr"}
        />
      }
      {/*  <Perf position="top-left" /> */}
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
      {/*  <Stage> */}
      <primitive
        object={model.scene}
        scale={[0.04, 0.04, 0.04]}
        position-y={2.4}
        position-x={-10}
        receiveShadow
      />
      {/*   <Clone
        object={model.scene}
        scale={[0.025, 0.025, 0.025]}
        receiveShadow
        position-x={-4}
      /> */}
      {/*  </Stage> */}
    </>
  );
}

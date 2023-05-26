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

  const { preset, environment, shadow } = useControls({
    preset: { options: ["rembrandt", "soft", "upfront", "portrait"] },
    environment: {
      options: [
        "sunset",
        "dawn",
        "night",
        "warehouse",
        "forest",
        "apartment",
        "studio",
        "city",
        "park",
        "lobby",
      ],
    },
    shadow: { options: ["contact", "accumulative"] },
  });

  const dirLight = useRef();

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  useFrame((state, delta) => {
    //state.camera.position.x += delta;
    //state.camera.lookAt(0, 0, 0);
  });

  return (
    <>
      {environment !== "none" && (
        <Environment
          preset={environment}
          files={`./environmentMaps/${environment}`}
        />
      )}

      {/* <Perf position="top-left" /> */}

      {/*    <directionalLight
        ref={dirLight}
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-mapSize={[1024, 1024]}
      /> */}

      <Stage
        preset={preset}
        intensity={1}
        environment={environment !== "none" && environment}
        shadows={shadow}
      >
        <primitive
          object={model.scene}
          scale={[1, 1, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
        />
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}

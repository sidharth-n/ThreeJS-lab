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
  TransformControls,
} from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useEffect, useMemo } from "react";
import { Perf } from "r3f-perf";
import * as THREE from "three";
import { useControls } from "leva";
import music from "./bgm.mp3";

export default function Experience() {
  const { preset, environment, shadow, extraLight, model } = useControls({
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
    extraLight: { value: false },
    model: {
      value: "./iphone2.gltf",
      options: ["./iphone2.gltf", "./iphone.glb"],
    },
  });

  const modelGLTF = useGLTF(model);

  const spotLight = useRef();
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

      {extraLight && (
        <PivotControls object={spotLight}>
          <directionalLight
            ref={spotLight}
            castShadow
            position={[0, 0, 0]}
            intensity={1.5}
            shadow-mapSize={[1024, 1024]}
          />
        </PivotControls>
      )}

      <Stage
        preset={preset}
        intensity={1}
        environment={environment !== "none" && environment}
        shadows={shadow}
      >
        <primitive
          object={modelGLTF.scene}
          scale={[1, 1, 1]}
          rotation={[Math.PI / 2, 0, 0]}
          receiveShadow
        />
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}

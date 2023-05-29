import {
  OrbitControls,
  useHelper,
  PivotControls,
  BakeShadows,
  AccumulativeShadows,
  Sky,
  Environment,
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
import { Stage } from "././CustomStage/Stage";
import React from "react";

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
      value: "./laptop.gltf",
      options: ["./iphone.gltf", "./iphone.glb", "./iphone2.gltf"],
    },
  });

  const modelGLTF = useGLTF(model);
  useEffect(() => {
    console.log("Rotation-x : " + modelGLTF.scene.rotation.x);
    console.log("Rotation-y : " + modelGLTF.scene.rotation.y);
    console.log("Rotation-z : " + modelGLTF.scene.rotation.z);
  }, [model]);
  const spotLight = useRef();
  const dirLight = useRef();

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  /*       useFrame((state, delta) => {
    const { camera } = state;

    const angle = Date.now() * 0.0009; // Adjust rotation speed as needed
    const radius = 4; // Adjust distance from the object as needed
    const objectPosition = new THREE.Vector3(0, 0, 0); // Set the position of the object

    const cameraX = objectPosition.x + Math.cos(angle) * radius;
    const cameraY = objectPosition.y; // + radius;  // Adjust height of the camera if needed
    const cameraZ = objectPosition.z + Math.sin(angle) * radius;
    camera.position.set(cameraX, cameraY, cameraZ);

    camera.lookAt(objectPosition);
  });  */

  // Add a key to the Stage component to force a re-render when the model changes
  const stageKey = useMemo(() => model, [model]);

  return (
    <React.Fragment key={stageKey}>
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
        key={stageKey} // Add the same key to the Stage component
        preset={preset}
        intensity={1}
        environment={environment !== "none" && environment}
        shadows={shadow}
        adjustCamera={2}
      >
        <primitive object={modelGLTF.scene} receiveShadow />
        <OrbitControls makeDefault />
      </Stage>
    </React.Fragment>
  );
}

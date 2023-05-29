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
  });

  const modelGLTF = useGLTF("./iphone.gltf");

  const spotLight = useRef();
  const dirLight = useRef();

  useHelper(dirLight, THREE.DirectionalLightHelper, 1);
  /*   useFrame((state, delta) => {
    const { camera } = state;

    const angle = Date.now() * 0.0009; // Adjust rotation speed as needed
    const radius = 0.3; // Adjust distance from the object as needed
    const objectPosition = new THREE.Vector3(0, 0, 0); // Set the position of the object

    const cameraX = objectPosition.x + Math.cos(angle) * radius;
    const cameraY = objectPosition.y; // + radius;  // Adjust height of the camera if needed
    const cameraZ = objectPosition.z + Math.sin(angle) * radius;
    camera.position.set(cameraX, cameraY, cameraZ);

    camera.lookAt(objectPosition);
  }); */

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
          /*   scale={[1, 1, 1]}
          rotation={[0, 0, 0]} */
          receiveShadow
        />
        <OrbitControls makeDefault />
      </Stage>
    </>
  );
}

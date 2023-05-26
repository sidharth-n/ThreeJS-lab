import { useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Html } from "@react-three/drei";

const InfoDisplay = ({ object }) => {
  const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0, z: 0 });
  const [scale, setScale] = useState({ x: 0, y: 0, z: 0 });

  useFrame(() => {
    if (object.current) {
      setPosition(object.current.position);
      setRotation(object.current.rotation);
      setScale(object.current.scale);
    }
  });

  return (
    <Html position={[-3, 0, 0]}>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          right: 0,
          color: "black",
          margin: "100px",
        }}
      >
        <div>
          Position: x={position.x.toFixed(2)}, y={position.y.toFixed(2)}, z=
          {position.z.toFixed(2)}
        </div>
        <div>
          Rotation: x={rotation.x.toFixed(2)}, y={rotation.y.toFixed(2)}, z=
          {rotation.z.toFixed(2)}
        </div>
        <div>
          Scale: x={scale.x.toFixed(2)}, y={scale.y.toFixed(2)}, z=
          {scale.z.toFixed(2)}
        </div>
      </div>
    </Html>
  );
};

export default InfoDisplay;

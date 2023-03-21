import { OrbitControls, Text3D, Center } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/*   <mesh scale={1.5}>
          <boxGeometry />
          <meshNormalMaterial />
        </mesh> */}
      <Center>
        <Text3D font="./fonts/helvetiker_regular.typeface.json">
          hello world
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}

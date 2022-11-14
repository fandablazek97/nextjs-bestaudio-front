import { Suspense, useMemo, useRef, useCallback } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
// import { OrbitControls } from "@react-three/drei";

type PointsProps = {
  t?: number;
  f?: number;
  a?: number;
  count?: number;
  gap?: number;
  tSpeed?: number;
};

function Points({
  t = 0,
  f = 0.0025,
  a = 3,
  count = 120,
  gap = 3,
  tSpeed = 50,
}: PointsProps) {
  const pointTexture = useLoader(TextureLoader, "/images/3d/pt.png");
  const bufferRef = useRef<any>(null);

  const graph = useCallback(
    (x: number, z: number) => {
      return Math.sin(f * (x ** 2 + z ** 2 + t)) * a;
    },
    [t, f, a]
  );

  let positions = useMemo(() => {
    let positions: any = [];

    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = gap * (xi - count / 2);
        let z = gap * (zi - count / 2);
        let y = graph(x, z);
        positions.push(x, y, z);
      }
    }

    return new Float32Array(positions);
  }, [count, gap, graph]);

  useFrame(() => {
    if (!bufferRef.current) {
      return;
    }

    t += tSpeed;

    const positions = bufferRef.current.array;

    let i = 0;
    for (let xi = 0; xi < count; xi++) {
      for (let zi = 0; zi < count; zi++) {
        let x = gap * (xi - count / 2);
        let z = gap * (zi - count / 2);

        positions[i + 1] = graph(x, z);
        i += 3;
      }
    }

    bufferRef.current.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          ref={bufferRef}
          attach="attributes-position"
          array={positions}
          count={positions.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        attach="material"
        map={pointTexture}
        color={0x00aaff}
        size={0.5}
        sizeAttenuation
        transparent={false}
        alphaTest={0.5}
        opacity={1.0}
      />
    </points>
  );
}

type Scene3DProps = {
  position?: [number, number, number];
  rotation?: [number, number, number];
  fov?: number;
  t?: number;
  f?: number;
  a?: number;
  count?: number;
  gap?: number;
  tSpeed?: number;
  className?: string;
};

export default function Scene3D({
  position = [100, 10, 10],
  fov = 75,
  t = 0,
  f = 0.0025,
  a = 3,
  count = 120,
  gap = 3,
  tSpeed = 50,
  className = "",
}: Scene3DProps) {
  return (
    <div className={`${className}`}>
      <Canvas camera={{ position: position, fov: fov }}>
        {/* <OrbitControls /> */}
        <Suspense fallback={null}>
          <Points t={t} f={f} a={a} count={count} gap={gap} tSpeed={tSpeed} />
        </Suspense>
      </Canvas>
      <div className="absolute left-0 right-0 bottom-0 z-10 h-60 w-full bg-gradient-to-t from-body"></div>
    </div>
  );
}

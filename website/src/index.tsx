import * as THREE from 'three'
import { MeshStandardMaterial, Box3, Vector3 } from 'three'
import { createRoot } from 'react-dom/client'
import React, { useRef, useEffect, useState, Suspense } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader, useThree } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

// import App.css
import './App.css'

type Axis = "x" | "y" | "z"

function Box(props: ThreeElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  const [rotationState, setRotationState] = useState<{
    axis: Axis;
    radiansRotated: number;
  }>({
      axis: "x",
      radiansRotated: 0
  })
  const { camera, size } = useThree()

  const texture_1 = useLoader(TextureLoader, 'textures/1_dice.webp')
  const texture_2 = useLoader(TextureLoader, 'textures/2_dice.png')
  const texture_3 = useLoader(TextureLoader, 'textures/3_dice.jpeg')
  const texture_4 = useLoader(TextureLoader, 'textures/4_dice.png')
  const texture_5 = useLoader(TextureLoader, 'textures/5_dice.webp')
  const texture_6 = useLoader(TextureLoader, 'textures/6_dice.webp')
  
  const materials = React.useMemo(() => [
    new MeshStandardMaterial({ map: texture_1 }),
    new MeshStandardMaterial({ map: texture_2 }),
    new MeshStandardMaterial({ map: texture_3 }),
    new MeshStandardMaterial({ map: texture_4 }),
    new MeshStandardMaterial({ map: texture_5 }),
    new MeshStandardMaterial({ map: texture_6 }),
  ], []);

  useFrame(() => {
    if (ref.current) {
        let rotationIncrement = 0.01; // Change this to adjust speed
        let newRadiansRotated = rotationState.radiansRotated + rotationIncrement;

        ref.current.rotation[rotationState.axis] += rotationIncrement;

        if (newRadiansRotated >= 2 * Math.PI) {
            setRotationState({
                axis: rotationState.axis === "x" ? "y" : "x",
                radiansRotated: 0
            });
        } else {
            setRotationState({
                ...rotationState,
                radiansRotated: newRadiansRotated
            });
        }
    }
})
  
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
      material={materials}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  )
}

createRoot(document.getElementById('root') as HTMLElement).render(
  <>
    <div className='canvas-container'>
      <Canvas camera={{ fov: 75, position: [0, 0, 5] }}>
        <ambientLight  intensity={2} />
        <Suspense fallback={null}>
          <Box position={[0, 0, 0]} />
        </Suspense>    
      </Canvas>
    </div>
    <div className='claim'>qubic is rolling the dice ...</div>
  </>,
)
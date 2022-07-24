
import React from 'react';
import { useFrame, useLoader } from '@react-three/fiber'; 
import { TextureLoader } from 'three/src/loaders/TextureLoader';
// import * as THREE from 'three';
import imgDisp from './textures/planet_height.png';




const  Box = (props)  => {
  
  const plane = React.useRef();

  const diffuse = useLoader(TextureLoader, imgDisp);

  useFrame((state, delta) => {
    plane.current.rotation.x = -1.3;
  });
  return (
    <mesh 
      {...props}
      ref={plane}
      scale={.6}
      >
      <planeGeometry args={[20, 20, 1]}  />
      <meshStandardMaterial 
      color='#6D9886'
      map={diffuse}  />
    </mesh>
  )
}
export default Box;
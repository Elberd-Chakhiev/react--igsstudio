
import React from 'react';
import { Canvas } from '@react-three/fiber';

import MainScene from './MainScene';


const Background = (props) => {
  const fogColor = 0x00212121;
  return (
    <div id="bg" className='absolute top-0 left-0 w-full h-full'>

          <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 22 }}>
            <ambientLight />
            <directionalLight color={0x00212121} position={[10, 10, 10]} />
            <fog attach="fog" color={fogColor} near={.1} far={15} />

            <MainScene />
            
          </Canvas>
    </div>
  )
  
}
export default Background;


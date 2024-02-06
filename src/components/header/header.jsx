import { Float, OrbitControls, Text3D,  } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div id='header'>
            <Canvas  camera={{ fov: 80, position: [0, 0, 7]}}>
                <Perf position="top-left" />
                <OrbitControls makeDefault />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Float
                speed={2.5}>
                    <Text3D font={'fonts/optimer_bold.typeface.json'} position={[-6,0,0]} scale={[2,2,1]}> 
                        Gabe Asay
                        <meshStandardMaterial attach="material" color='#A5243D' />
                    </Text3D>
                    <Box />
                </Float>
            </Canvas>
            
        </div>
    );
};

function Box() {
    return(
        <mesh
        position={[0.25,0.65,-0.5]}
        scale={[1,1,1]}>
            <boxGeometry args={[15, 4, 1]} />
            <meshStandardMaterial attach="material" color='#B9CFD4' />
        </mesh>
    )
}

export default Header;
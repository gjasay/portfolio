import { Float, OrbitControls, Text3D, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div id='header'>
            <div id='name'>
                <Canvas  camera={{ fov: 60, position: [0, 1, 8]}}>
                    {/* <Perf position="top-left" /> */}
                    <OrbitControls makeDefault />
                    <spotLight intensity={150} position={[0, 3, 8]} decay={2} angle={Math.PI/2}/>
                    <ambientLight position={[10,0,0]} intensity={0.9}/>

                    <Float
                    speed={5}>
                        <Text3D font={'fonts/optimer_bold.typeface.json'} position={[-6,1,0]} scale={[2,2,1]} onClick={e => console.log('clicky clack')}> 
                            Gabe Asay
                            <meshStandardMaterial attach="material" color='#B1EDE8' />
                        </Text3D>
                        <Box />
                    </Float>
                    <mesh position={[0, -3, 2]}>
                        <boxGeometry args={[window.innerWidth/5, 1, 8]} />
                        <meshStandardMaterial attach="material" color='#6D435A' />
                    </mesh>
                    <mesh position={[0, 2, -2.5]}>
                        <boxGeometry args={[window.innerWidth/5, 12, 1]} />
                        <meshStandardMaterial attach="material" color='#6D435A' />
                    </mesh>
                </Canvas>
            </div>
            
        </div>
    );
};

function Box() {
    return(
        <mesh position={[0, -1, 0]}>
            <RoundedBox args={[15, 1, 2.5]} radius={.5}>
                <meshStandardMaterial attach="material" color='#FF6978' />
            </RoundedBox>
        </mesh>
    )
}

export default Header;
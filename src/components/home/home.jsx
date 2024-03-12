import { Float, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React from 'react';
import './home.css';

const Header = () => {
    return (
        <div id='home'>
            <Canvas camera={{ fov: 60, position: [0, 2, 8]}}>
                {/* <OrbitControls /> */}
                <Float speed={2} rotationIntensity={0.01} floatIntensity={2} floatingRange={[-0.1, 0.1]}>
                    <mesh position={[0, 3, -10]} onClick={e => <OrbitControls />}>
                        <Text3D font={'fonts/optimer_bold.typeface.json'} position={[-3, -0.5, 0.5]} >
                            About Me
                        </Text3D>
                        <boxGeometry args={[7, 2, 1]} /> 
                        <meshStandardMaterial attach="material" color='#6D435A' />
                    </mesh>
                </Float>
            </Canvas>
        </div>
    );
};

export default Header;
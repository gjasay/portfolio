import { Float, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas} from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React from 'react';

const Header = () => {
    return (
        <div>
            <Canvas>
                {/* <Perf position="top-left" /> */}
                <OrbitControls makeDefault />
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <camera position={[0, 0, 10]} />
                <Float
                speed={2.5}>
                    <Text3D font={'fonts/optimer_bold.typeface.json'} position={[-5,0,0]} scale={[2,2,1]}> 
                        Gabe Asay
                        <meshStandardMaterial attach="material" color="black" />
                    </Text3D>
                </Float>
            </Canvas>
            
        </div>
    );
};

export default Header;
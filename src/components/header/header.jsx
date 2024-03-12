import { Float, Text3D, RoundedBox } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './header.css'

const Header = () => {
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false); // new state variable
    const ringRef = useRef();

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered]);

    const handleClick = () => {
        gsap.to(ringRef.current.scale, {
            x: isOpen ? 0 : 1, // if the ring is open, close it, otherwise open it
            y: isOpen ? 0 : 1,
            z: isOpen ? 0 : 1,
            duration: 1,
            ease: "power3.out",
            onComplete: () => setIsOpen(!isOpen) // update the state variable when the animation completes
        });
    };

    const items = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 2 * Math.PI; // calculate the angle for this item
        const x = Math.cos(angle) * 15; // calculate the x position using cosine
        const y = Math.sin(angle) * 15; // calculate the z position using sine
        return <Item key={i} pos={[x, y, 0]} scale={[2, 2, 2]} />; // added scale prop
    });

    return (
        <div id='header'>
            <Canvas  camera={{ fov: 60, position: [0, 1, 50]}}>
                <spotLight intensity={150} position={[0, 3, 8]} angle={Math.PI/2}/>
                <ambientLight position={[10,0,0]} intensity={1.75}/>

                <Float speed={5}>
                    <Text3D onClick={handleClick} font={'fonts/optimer_bold.typeface.json'} position={[-5.4,1,0]} scale={[2,2,1]}> 
                        Click Me!
                        <meshStandardMaterial attach="material" color='#FFF7EB' />
                    </Text3D>
                    
                    <mesh position={[0.5, 1.75, -0.65]} onClick={handleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                        <Box />
                    </mesh>
                </Float>
                <mesh ref={ringRef} scale={[0, 0, 0]}>
                        {items}
                </mesh>
                <mesh position={[0,0,-3]}>
                    <planeGeometry args={[200, 100]}/>
                    <meshStandardMaterial attach="material" color='#19294D' />
                </mesh> 
            </Canvas>
        </div>
    );
};

function Box() {
    return(
        <RoundedBox args={[15, 5, 1]} radius={0.5}>
            <meshStandardMaterial attach="material" color='#FCA311' />
        </RoundedBox>
    )
}

function Item({pos, scale}) {
    return(
        <Float speed={3}>
            <mesh position={pos} scale={scale}>
                <mesh>
                    <sphereGeometry />
                </mesh>
                <mesh>
                    <ringGeometry args={[1.2, 1.5, 32]} />
                </mesh>
            </mesh>
        </Float>
    )
}

export default Header;
import { Float, Text3D, RoundedBox, useTexture } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './header.css'

const BOX_COLOR = '#007EA7';
const TEXT_COLOR = '#FFF7EB';
const BACKGROUND_COLOR = '#003459';

const Header = () => {
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([0, 1, 50]); // initial camera position
    const ringRef = useRef();

    useEffect(() => {
        document.body.style.cursor = hovered ? 'pointer' : 'auto'
    }, [hovered]);

    useEffect(() => {
        const handleResize = () => {
            setCameraPosition(window.innerWidth > window.innerHeight ? [0, 1, 50] : [0, 1, 30]);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const handleClick = () => {
        gsap.to(ringRef.current.scale, {
            x: isOpen ? 0 : 1,
            y: isOpen ? 0 : 1,
            z: isOpen ? 0 : 1,
            duration: 1,
            ease: "power3.out",
            onComplete: () => setIsOpen(!isOpen)
        });
    };

    const textures = ['icons/github.png', 'icons/linkedin.png', 'icons/medium.png', 'icons/unity.png', 'icons/javascript.png', 'icons/about.png', 'icons/github.jpg', 'icons/github.jpg'];
    const urls = ['https://github.com/gjasay', 'https://www.linkedin.com/in/gabriel-asay/', 'https://medium.com/@gabeasay', 'https://unity.com', 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', 'https://github.com', 'https://github.com', 'https://github.com'];

    const items = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const x = Math.cos(angle) * (window.innerWidth > window.innerHeight ? 15 : 10); // reduced distance from center
        const y = Math.sin(angle) * (window.innerWidth > window.innerHeight ? 15 : 10); // reduced distance from center
        return <Item key={i} pos={[x, y, 0]} scale={window.innerWidth > window.innerHeight ? [4, 4, 4] : [2, 2, 2]} texture={textures[i % textures.length]} url={urls[i % urls.length]} />;
    });

    return (
        <div id='header'>
            <Canvas camera={{ fov: 60, position: cameraPosition }}>
                <spotLight intensity={150} position={[0, 3, 8]} angle={Math.PI/2}/>
                <ambientLight position={[10,0,0]} intensity={1.75}/>

                <Float speed={5}>
                    <Text3D onClick={handleClick} font={'fonts/optimer_bold.typeface.json'} position={window.innerWidth > window.innerHeight ? [-4,1,0] : [-2.5,0,0]} scale={window.innerWidth > window.innerHeight ? [1.5,1.5,1] : [1,1,1]}> 
                        Click Me!
                        <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                    </Text3D>
                    
                    <mesh position={window.innerWidth > window.innerHeight ? [0.5, 1.75, -0.65] : [0.5, 0.5, -0.65]} onClick={handleClick} onPointerOver={() => setHovered(true)} onPointerOut={() => setHovered(false)}>
                        <Box />
                    </mesh>
                </Float>
                <mesh ref={ringRef} scale={[0, 0, 0]}>
                        {items}
                </mesh>
                <mesh position={[0,0,-3]}>
                    <planeGeometry args={[200, 100]}/>
                    <meshStandardMaterial attach="material" color={BACKGROUND_COLOR} />
                </mesh> 
            </Canvas>
        </div>
    );
};

function Box() {
    return(
        <RoundedBox args={window.innerWidth > window.innerHeight ? [10, 3.5, 1] : [8, 2.5, 1]} radius={0.5}>
            <meshStandardMaterial attach="material" color={BOX_COLOR} />
        </RoundedBox>
    )
}

function Item({pos, scale, texture, url}) {
    const textureMap = useTexture(texture);

    const handleClick = () => {
        window.open(url, "_blank");
    };

    return(
        <Float speed={3}>
            <mesh position={pos} scale={scale} onClick={handleClick} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <boxGeometry />
                <meshBasicMaterial attach="material" map={textureMap} />
            </mesh>
        </Float>
    )
}

export default Header;
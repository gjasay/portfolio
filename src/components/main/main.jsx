import { Float, Text3D, RoundedBox, useTexture, OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import './main.css'

const BUTTON_COLOR = '#B71C1C'; // A dark red
const TEXT_COLOR = '#ECEFF1'; // A very light grey for maximum contrast
const BACKGROUND_COLOR = '#212121'; // A dark grey, almost black
const WINDOW_COLOR = '#424242'; // A medium grey

const TEXT_FONT = 'fonts/Poppins_Regular.json';
const BUTTON_FONT = 'fonts/Poppins_Bold.json';

const ABOUT_TEXT = `I'm Gabe, a passionate developer in C# and Unity, bringing a dedicated 
enthusiasm for game development. Proficient in both C# for game 
development and JavaScript for web development, I'm driven to excel in
full-time Developer roles. Eager to contribute my skills and passion to
innovative projects, I'm committed to making a meaningful impact and 
eager to embark on new professional opportunities.
`
const CONTACT_TEXT = `Email: gabeasay@gmail.com

Phone: 804-210-0530

LinkedIn: linkedin.com/in/gabriel-asay
`

let overlay = false;

const Main = () => {
    const [hovered, setHovered] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [cameraPosition, setCameraPosition] = useState([0, 1, 50]);
    const ringRef = useRef();
    const [showAbout, setShowAbout] = useState(false);
    const [showContact, setShowContact] = useState(false);

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
            duration: 1.5,
            ease: "power3.out",
            onComplete: () => setIsOpen(!isOpen)
        });
    };

    const textures = ['icons/github.png', 'icons/linkedin.png', 'icons/medium.png', 'icons/unity.png', 'icons/javascript.png', 'icons/about.png', 'icons/projects.png', 'icons/contact.png'];
    const urls = ['https://github.com/gjasay', 'https://www.linkedin.com/in/gabriel-asay/', 'https://medium.com/@gabeasay', 'https://projects.gabeasay.dev/#unity-csharp', 'https://projects.gabeasay.dev/#javascript', 'https://placeholder.com', 'https://projects.gabeasay.dev/', 'https://placeholder.com'];

    const items = Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * 2 * Math.PI;
        const x = Math.cos(angle) * (window.innerWidth > window.innerHeight ? 15 : 8); // reduced distance from center
        const y = Math.sin(angle) * (window.innerWidth > window.innerHeight ? 15 : 8); // reduced distance from center
        return <Item key={i} pos={[x, y, 0]} scale={window.innerWidth > window.innerHeight ? [4, 4, 4] : [2.5, 2.5, 2.5]} texture={textures[i % textures.length]} url={urls[i % urls.length]} setShowAbout={setShowAbout} showAbout={showAbout} setShowContact={setShowContact}/>;
    });

    return (
        <div id='main'>
            <Canvas camera={{ fov: 60, position: cameraPosition }}>
                {/* <spotLight intensity={10} position={[0, 3, 8]} angle={Math.PI/2}/> */}
                <ambientLight position={[10,0,0]} intensity={2.25}/>
                {/* <OrbitControls /> */}
                <Float speed={5}>
                    <Text3D onClick={handleClick} font={BUTTON_FONT} position={window.innerWidth > window.innerHeight ? [-4,-0.1,0] : [-2.5,0,0]} scale={window.innerWidth > window.innerHeight ? [1.5,1.5,1] : [1,1,1]}> 
                        Click Me
                        <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                    </Text3D>
                    
                    <mesh position={window.innerWidth > window.innerHeight ? [0.5, 0.5, -0.65] : [0.5, 0.5, -0.65]} onClick={overlay ? null : handleClick} onPointerOver={() => overlay ? null : document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
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
                {showAbout && (
                    <About setShowAbout={setShowAbout} />
                )}
                {showContact && (
                    <Contact setShowContact={setShowContact} />
                )}
            </Canvas>
        </div>
    );
};

function Box() {
    return(
        <RoundedBox args={window.innerWidth > window.innerHeight ? [10, 3.5, 1] : [8, 2.5, 1]} radius={0.5}>
            <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
        </RoundedBox>
    )
}

function Item({pos, scale, texture, url, setShowAbout, showAbout, setShowContact}) {
    const textureMap = useTexture(texture);

    const handleClick = () => {
        if (texture === 'icons/about.png') {
            setShowAbout(true);
            overlay=true;
        } else if (texture === 'icons/contact.png') {
            setShowContact(true);
            overlay=true;
        } else {
            if (url === 'https://projects.gabeasay.dev/#unity-csharp' || url === 'https://projects.gabeasay.dev/#javascript' || url === 'https://projects.gabeasay.dev/') {
                window.location.href = url;
            } else {
                window.open(url, "_blank");
            }
        }
    };
    return(
        <Float speed={3}>
            <mesh position={pos} scale={scale} onClick={overlay ? null : handleClick} onPointerOver={() => overlay ? null : document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <boxGeometry />
                <meshBasicMaterial attach="material" map={textureMap} />
            </mesh>
        </Float>
    )
}

function About({setShowAbout}) {
    const aboutRef = useRef();

    useEffect(() => {
        gsap.fromTo(aboutRef.current.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1 });
    }, []);

    return(
        <mesh ref={aboutRef} className="about">
            <Float speed={5} floatIntensity={0.5} rotationIntensity={0.1} scale={window.innerWidth < window.innerHeight ? [0.5,0.5,1] : [1,1,1]}>
            <mesh position={[0,0,5]}>
                <RoundedBox args={[40, 40]} radius={1}>
                <meshStandardMaterial attach="material" color={WINDOW_COLOR} />
                </RoundedBox>
            </mesh>
            
            <mesh onClick={() => {
                gsap.to(aboutRef.current.scale, { x: 0, y: 0, z: 0, duration: .35, onComplete: () => {setShowAbout(false); overlay=false;} });
            }} onPointerOver={() => document.body.style.cursor = 'pointer'} onPointerOut={() => document.body.style.cursor = 'auto'}>
                <RoundedBox position={[16,17,6]} args={[5, 5]} radius={1}>
                    <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
                </RoundedBox>
                <Text3D font={BUTTON_FONT} position={[14,15.6,6]} scale={[4,3,5]}>
                    X
                    <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                </Text3D>
            </mesh>
                <RoundedBox position={[0,17,6]} args={[15, 5]} radius={1}>
                    <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
                </RoundedBox>
            <Text3D font={BUTTON_FONT} position={[-6.75,16,6]} scale={[2,2,3]}>
                About Me
                <meshStandardMaterial attach="material" color={TEXT_COLOR} />
            </Text3D>
            <Text3D font={TEXT_FONT} position={[-18.5,12,6]} scale={[.75,.75,1.2]}> 
                {ABOUT_TEXT}
                <meshStandardMaterial attach="material" color={TEXT_COLOR} />
            </Text3D>
        </Float>
        </mesh>
    )
}

function Contact({setShowContact}) {
    const contactRef = useRef();

    useEffect(() => {
        gsap.fromTo(contactRef.current.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1, duration: 1 });
    }, []);

    return(
        <mesh ref={contactRef} className="contact">
            <Float speed={5} floatIntensity={0.5} rotationIntensity={0.1} scale={window.innerWidth < window.innerHeight ? [0.5,0.5,1] : [1,1,1]}>
            <mesh position={[0,0,5]}>
                <RoundedBox args={[40, 40]} radius={1}>
                <meshStandardMaterial attach="material" color={WINDOW_COLOR} />
                </RoundedBox>
            </mesh>
            
            <mesh 
            onClick={() => {
                gsap.to(contactRef.current.scale, { x: 0, y: 0, z: 0, duration: .35, onComplete: () => {setShowContact(false); overlay=false;} });
            }} 
            onPointerOver={() => document.body.style.cursor = 'pointer'} 
            onPointerOut={() => document.body.style.cursor = 'auto'}
        >
                <RoundedBox position={[16,17,6]} args={[5, 5]} radius={1}>
                    <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
                </RoundedBox>
                <Text3D font={BUTTON_FONT} position={[14,15.6,6]} scale={[4,3,5]}>
                    X
                    <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                </Text3D>
            </mesh>
                <RoundedBox position={[0,17,6]} args={[17, 5]} radius={1}>
                    <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
                </RoundedBox>
            <Text3D font={BUTTON_FONT} position={[-8.25,16,6]} scale={[2,2,3]}>
                Contact Me
                <meshStandardMaterial attach="material" color={TEXT_COLOR} />
            </Text3D>
            <Text3D font={TEXT_FONT} position={[-18.5,6,6]} scale={[1.35,1.35,1.2]}> 
                {CONTACT_TEXT}                
                <meshStandardMaterial attach="material" color={TEXT_COLOR} />
            </Text3D>
            <RoundedBox position={[14,6.5,6]} args={[8, 3]} radius={1} 
            onClick={() => window.location.href = 'mailto:gabeasay@gmail.com'} 
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
                <Text3D font={BUTTON_FONT} position={[-3,-0.65,0]} scale={[1.5,1.5,3]}>
                    Email
                    <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                </Text3D>
                <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
            </RoundedBox>
            <RoundedBox position={[6.25,0.5,6]} args={[8, 3]} radius={1} 
            onClick={() => window.location.href = 'tel:+18042100530'}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
                <Text3D font={BUTTON_FONT} position={[-3.35,-0.65,0]} scale={[1.5,1.5,3]}>
                    Phone
                    <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                </Text3D>
                <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
            </RoundedBox>
            <RoundedBox position={[0,-10,6]} args={[13, 3]} radius={1} 
            onClick={() => window.location.href = 'https://www.linkedin.com/in/gabriel-asay/'}
            onPointerOver={() => document.body.style.cursor = 'pointer'}
            onPointerOut={() => document.body.style.cursor = 'auto'}>
                <Text3D font={BUTTON_FONT} position={[-4.5,-0.65,0]} scale={[1.5,1.5,3]}>
                    LinkedIn
                    <meshStandardMaterial attach="material" color={TEXT_COLOR} />
                </Text3D>
                <meshStandardMaterial attach="material" color={BUTTON_COLOR} />
            </RoundedBox>
            </Float>
        </mesh>
    )
}

export default Main;
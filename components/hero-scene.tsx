'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars, Torus } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';

function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.x+=d*.12;ref.current.rotation.y+=d*.18}});return <Float speed={1.5} rotationIntensity={.65} floatIntensity={1.1}><Sphere ref={ref} args={[1.38,48,48]}><MeshDistortMaterial color="#b8c4d8" roughness={.15} metalness={.9} distort={.32} speed={1.7}/></Sphere></Float>}
function Ring({scale,rotation,speed}:{scale:number;rotation:[number,number,number];speed:number}){const ref=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(ref.current)ref.current.rotation.z+=d*speed});return <Torus ref={ref} args={[1.9,.012,12,96]} rotation={rotation} scale={scale}><meshBasicMaterial color="#67e8f9" transparent opacity={.34}/></Torus>}
function Scene(){return <><ambientLight intensity={1.1}/><pointLight position={[3,3,4]} intensity={16} color="#d8fbff"/><pointLight position={[-4,-2,-2]} intensity={9} color="#8b5cf6"/><Stars radius={70} depth={32} count={1100} factor={2} saturation={0.15} fade speed={.35}/><Core/><Float speed={.7} rotationIntensity={.25} floatIntensity={.3}><Ring scale={1} rotation={[1.05,.15,.2]} speed={.18}/><Ring scale={1.18} rotation={[.15,.8,.7]} speed={-.12}/><Ring scale={1.35} rotation={[.8,.1,1.3]} speed={.08}/></Float></>}
export default function HeroScene(){return <div className="absolute inset-0 -z-10"><Canvas camera={{position:[0,0,5],fov:42}} dpr={[1,1.5]}><Scene/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.18}/></Canvas></div>}

'use client';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sphere, Stars } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
function Core(){const ref=useRef<THREE.Mesh>(null);useFrame((_,d)=>{if(ref.current){ref.current.rotation.x+=d*.12;ref.current.rotation.y+=d*.18}});return <Float speed={1.5} rotationIntensity={.7} floatIntensity={1.2}><Sphere ref={ref} args={[1.45,64,64]}><MeshDistortMaterial color="#9ca3af" roughness={.18} metalness={.85} distort={.28} speed={1.8}/></Sphere></Float>}
export default function HeroScene(){return <div className="absolute inset-0 -z-10"><Canvas camera={{position:[0,0,5],fov:42}} dpr={[1,1.7]}><ambientLight intensity={1.2}/><pointLight position={[3,3,4]} intensity={15}/><pointLight position={[-4,-2,-2]} intensity={8}/><Stars radius={70} depth={30} count={1200} factor={2} saturation={0} fade speed={.4}/><Core/><OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={.25}/></Canvas></div>}

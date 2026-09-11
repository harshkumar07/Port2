'use client';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, FileText, Mail, MapPin, Sparkles, Terminal, Gamepad2, ExternalLink } from 'lucide-react';
import { SiDotnet, SiReact, SiPython, SiJavascript, SiTypescript, SiAzurefunctions, SiPostgresql, SiMysql, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiOkta, SiDocker, SiNextdotjs, SiTailwindcss } from '@icons-pack/react-simple-icons';

const HeroScene = dynamic(() => import('@/components/hero-scene'), { ssr: false });
type Tech = { name: string; Icon: React.ElementType };
type Project = { number:string; title:string; kind:string; description:string; tags:Tech[]; href:string; featured?:boolean };
const coreStack:Tech[]=[{name:'C#',Icon:SiDotnet},{name:'.NET',Icon:SiDotnet},{name:'React',Icon:SiReact},{name:'Python',Icon:SiPython},{name:'Azure',Icon:SiAzurefunctions},{name:'PostgreSQL',Icon:SiPostgresql},{name:'MySQL',Icon:SiMysql},{name:'TypeScript',Icon:SiTypescript},{name:'JavaScript',Icon:SiJavascript},{name:'Node.js',Icon:SiNodedotjs},{name:'MongoDB',Icon:SiMongodb},{name:'Git',Icon:SiGit},{name:'Okta',Icon:SiOkta},{name:'Docker',Icon:SiDocker},{name:'Next.js',Icon:SiNextdotjs},{name:'Tailwind',Icon:SiTailwindcss}];
const projects:Project[]=[
{number:'01',title:'Healthcare Platform',kind:'PRODUCTION · HEALTHCARE',description:'Production healthcare/dental software used by doctors and staff. Worked across C#/.NET, React and MySQL on appointments, Month View scheduling, auditability, outside-doctor workflows and multi-tenant configuration.',tags:[{name:'C#',Icon:SiDotnet},{name:'.NET',Icon:SiDotnet},{name:'React',Icon:SiReact},{name:'MySQL',Icon:SiMysql}],href:'#experience',featured:true},
{number:'02',title:'Python ETL Pipeline',kind:'DATA · AUTOMATION',description:'SFTP → Azure Blob → Python Functions → Pandas → PostgreSQL. Built scheduled and event-driven processing around CSV ingestion, validation, transformation and business rules.',tags:[{name:'Python',Icon:SiPython},{name:'Azure',Icon:SiAzurefunctions},{name:'PostgreSQL',Icon:SiPostgresql}],href:'#work'},
{number:'03',title:'PayMe App',kind:'PROJECT · MERN',description:'Full-stack payment application with JWT authentication, transaction management, responsive UI and real-time updates.',tags:[{name:'MongoDB',Icon:SiMongodb},{name:'React',Icon:SiReact},{name:'Node.js',Icon:SiNodedotjs}],href:'https://github.com/harshkumar07'}];
const fade={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.16},transition:{duration:.65}};
function Section({id,children,className='' }:{id:string;children:React.ReactNode;className?:string}){return <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-24 md:px-8 ${className}`}>{children}</section>}

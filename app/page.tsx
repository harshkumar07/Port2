'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowDownRight, ArrowUpRight, Download, FileText, Mail, MapPin, Sparkles, Terminal, Gamepad2, ExternalLink } from 'lucide-react';
import { SiCsharp, SiDotnet, SiReact, SiPython, SiJavascript, SiTypescript, SiPostgresql, SiMysql, SiNodedotjs, SiMongodb, SiGit, SiGithub, SiOkta, SiDocker, SiNextdotjs, SiTailwindcss } from '@icons-pack/react-simple-icons';
import { Cloud } from 'lucide-react';

const HeroScene = dynamic(() => import('@/components/hero-scene'), { ssr: false });
type Tech = { name: string; Icon: React.ElementType };
type Project = { number:string; title:string; kind:string; description:string; tags:Tech[]; href:string; featured?:boolean };

const coreStack:Tech[]=[
  {name:'C#',Icon:SiCsharp},{name:'.NET',Icon:SiDotnet},{name:'React',Icon:SiReact},{name:'Python',Icon:SiPython},
  {name:'Azure',Icon:Cloud},{name:'PostgreSQL',Icon:SiPostgresql},{name:'MySQL',Icon:SiMysql},{name:'TypeScript',Icon:SiTypescript},
  {name:'JavaScript',Icon:SiJavascript},{name:'Node.js',Icon:SiNodedotjs},{name:'MongoDB',Icon:SiMongodb},{name:'Git',Icon:SiGit},
  {name:'Okta',Icon:SiOkta},{name:'Docker',Icon:SiDocker},{name:'Next.js',Icon:SiNextdotjs},{name:'Tailwind',Icon:SiTailwindcss}
];

const projects:Project[]=[
  {number:'01',title:'Healthcare Platform',kind:'PRODUCTION · HEALTHCARE',description:'Production healthcare/dental software used by doctors and staff. Worked across C#/.NET, React and MySQL on appointments, Month View scheduling, auditability, outside-doctor workflows and multi-tenant configuration.',tags:[{name:'C#',Icon:SiCsharp},{name:'.NET',Icon:SiDotnet},{name:'React',Icon:SiReact},{name:'MySQL',Icon:SiMysql}],href:'#experience',featured:true},
  {number:'02',title:'Python ETL Pipeline',kind:'DATA · AUTOMATION',description:'SFTP → Azure Blob → Python Functions → Pandas → PostgreSQL. Built scheduled and event-driven processing around CSV ingestion, validation, transformation and business rules.',tags:[{name:'Python',Icon:SiPython},{name:'Azure',Icon:Cloud},{name:'PostgreSQL',Icon:SiPostgresql}],href:'#work'},
  {number:'03',title:'PayMe App',kind:'PROJECT · MERN',description:'Full-stack payment application with JWT authentication, transaction management, responsive UI and real-time updates.',tags:[{name:'MongoDB',Icon:SiMongodb},{name:'React',Icon:SiReact},{name:'Node.js',Icon:SiNodedotjs}],href:'https://github.com/harshkumar07/PayMe'}
];

const fade={initial:{opacity:0,y:24},whileInView:{opacity:1,y:0},viewport:{once:true,amount:.16},transition:{duration:.65}};
function Section({id,children,className='' }:{id:string;children:React.ReactNode;className?:string}){return <section id={id} className={`mx-auto w-full max-w-7xl px-5 py-24 md:px-8 ${className}`}>{children}</section>}
function TechRow({items}:{items:Tech[]}){return <div className="flex flex-wrap gap-2">{items.map(({name,Icon})=><span key={name} title={name} className="tech-chip"><Icon aria-hidden="true"/><span>{name}</span></span>)}</div>}

export default function Home(){
  return <main className="site-shell min-h-screen text-white">
    <div className="ambient ambient-cyan"/><div className="ambient ambient-violet"/><div className="scanline"/>
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4"><nav className="nav-glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 md:px-5">
      <a href="#top" className="brand-mark"><span>HK</span><i>/</i><b>24</b></a>
      <div className="hidden items-center gap-7 text-[11px] tracking-[.16em] text-white/50 lg:flex"><a href="#experience" className="nav-link">EXPERIENCE</a><a href="#work" className="nav-link">WORK</a><a href="#stack" className="nav-link">STACK</a><a href="#about" className="nav-link">ABOUT</a></div>
      <div className="flex items-center gap-2"><a href="/projects" className="nav-icon" title="Projects"><ExternalLink size={15}/><span className="hidden sm:inline">PROJECTS</span></a><a href="/lab" className="nav-icon" title="Lab"><Terminal size={15}/><span className="hidden sm:inline">LAB</span></a><a href="/games" className="nav-icon" title="Games"><Gamepad2 size={15}/><span className="hidden sm:inline">GAMES</span></a></div>
    </nav></header>

    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20"><HeroScene/><div className="hero-grid"/><div className="hero-fade"/><div className="mx-auto w-full max-w-7xl px-5 md:px-8"><div className="max-w-6xl">
      <motion.div initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} className="eyebrow"><span className="live-dot"/> SOFTWARE ENGINEER · FULL STACK · BENGALURU</motion.div>
      <motion.h1 initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{delay:.08,duration:.8}} className="hero-title">ENGINEERING<br/><span>REAL SYSTEMS.</span></motion.h1>
      <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.28}} className="hero-copy">I’m <strong>Harsh Kumar</strong> — a Software Engineer building production applications with <strong>C# / .NET, React, Python and Azure</strong>. Backend systems, data pipelines, cloud services and product interfaces.</motion.p>
      <motion.div initial={{opacity:0,y:12}} animate={{opacity:1,y:0}} transition={{delay:.4}} className="mt-8 flex flex-wrap gap-3"><a href="#work" className="btn-primary">Explore work <ArrowDownRight size={16}/></a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary"><FileText size={16}/> View Resume</a><a href="/resume.pdf" download="Harsh-Kumar-Resume.pdf" className="btn-secondary"><Download size={16}/> Download</a></motion.div>
      <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.55}} className="mt-10"><TechRow items={coreStack.slice(0,9)}/></motion.div>
    </div></div><div className="hero-corner">SCROLL TO EXPLORE <ArrowDownRight size={14}/></div></section>

    <div className="signal-strip"><div><b>~2</b><span>YEARS</span></div><div><b>10K+</b><span>APPOINTMENTS / MONTH</span></div><div><b>C#</b><span>CORE</span></div><div><b>AZURE</b><span>CLOUD</span></div></div>

    <Section id="experience"><motion.div {...fade} className="section-heading"><div><p>01 / EXPERIENCE</p><h2>Production, not demos.</h2></div><span>HEALTHCARE · CLOUD · DATA</span></motion.div><motion.div {...fade} className="experience-card"><div className="experience-top"><div><span className="status">● CURRENT</span><h3>Software Engineer</h3><p>HealthAsyst · Bengaluru</p></div><div className="experience-date">AUG 2024 — PRESENT</div></div><p className="experience-lead">Building and enhancing a production healthcare/dental application used by doctors and staff, working across backend services, frontend workflows, data processing and Azure.</p><div className="experience-grid"><div><span>01</span><h4>Product engineering</h4><p>C#/.NET, React, EF Core, LINQ, MySQL, REST/OData, Microservices and Micro Frontends.</p></div><div><span>02</span><h4>Scheduling at scale</h4><p>Month View with doctor/chair/location filters, working hours, holidays and dynamic availability for 10K+ monthly appointments.</p></div><div><span>03</span><h4>Cloud & data</h4><p>Azure Functions, Blob Storage, SFTP ingestion, Python/Pandas ETL, PostgreSQL and Entra Managed Identity.</p></div><div><span>04</span><h4>Security & reliability</h4><p>Okta OIDC/OAuth 2.0, RBAC, auditability, query optimization, caching, pagination and observability.</p></div></div></motion.div></Section>

    <Section id="work" className="pt-10"><motion.div {...fade} className="section-heading"><div><p>02 / SELECTED WORK</p><h2>Things I actually build.</h2></div><a href="/projects" className="section-link">VIEW ALL <ArrowUpRight size={15}/></a></motion.div><div className="project-grid">{projects.map((project,i)=><motion.article key={project.number} initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.12}} transition={{delay:i*.06}} className={`project-card ${project.featured?'project-featured':''}`}><div className="project-no">{project.number}</div><div className="project-kind">{project.kind}</div><h3>{project.title}</h3><p>{project.description}</p><TechRow items={project.tags}/><a href={project.href} target={project.href.startsWith('http')?'_blank':undefined} rel={project.href.startsWith('http')?'noreferrer':undefined} className="project-action">OPEN <ArrowUpRight size={15}/></a></motion.article>)}</div></Section>

    <Section id="stack"><motion.div {...fade} className="section-heading"><div><p>03 / TECHNOLOGY</p><h2>My tools have logos now.</h2></div><span>NO RANDOM BUZZWORDS</span></motion.div><div className="logo-wall">{coreStack.map(({name,Icon},i)=><motion.div key={name} initial={{opacity:0,scale:.92}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*.025}} className="logo-tile"><Icon size={28}/><span>{name}</span></motion.div>)}</div></Section>

    <Section id="about"><div className="about-grid"><motion.div {...fade}><p className="eyebrow-small">04 / ABOUT</p><h2 className="about-title">I like the part where<br/><span>everything connects.</span></h2></motion.div><motion.div {...fade} className="about-copy"><p>My strongest lane is full-stack product engineering: <strong>C#/.NET on the backend, React on the frontend, Python for data workflows and Azure for cloud services.</strong></p><p>I work on the details that make production software dependable — authentication, authorization, multi-tenant configuration, query performance, caching, audit trails, data ingestion and operational visibility.</p><div className="about-links"><a href="https://github.com/harshkumar07" target="_blank" rel="noreferrer"><SiGithub/> GitHub <ArrowUpRight size={14}/></a><a href="https://www.linkedin.com/in/harshkumargupta/" target="_blank" rel="noreferrer"><span className="linkedin-mark">in</span> LinkedIn <ArrowUpRight size={14}/></a><a href="mailto:Harshku068@gmail.com"><Mail size={15}/> Email <ArrowUpRight size={14}/></a></div></motion.div></div></Section>

    <section className="play-section"><div className="play-orbit"/><div className="mx-auto max-w-7xl px-5 md:px-8"><motion.div {...fade} className="play-card"><div><span className="eyebrow-small"><Sparkles size={13}/> SIDE QUESTS</span><h2>There is more than work.</h2><p>Interactive experiments, tiny games, terminal toys and things I build just because I can.</p></div><div className="play-actions"><a href="/lab" className="btn-secondary"><Terminal size={16}/> Open Lab</a><a href="/games" className="btn-primary"><Gamepad2 size={16}/> Play Games</a></div></motion.div></div></section>

    <section id="contact" className="contact-section"><div className="contact-glow"/><div className="relative mx-auto max-w-7xl px-5 py-32 md:px-8"><p className="eyebrow-small">05 / CONTACT</p><h2>LET’S BUILD<br/><span>THE NEXT THING.</span></h2><div className="mt-9 flex flex-wrap gap-3"><a href="mailto:Harshku068@gmail.com" className="btn-primary"><Mail size={16}/> Harshku068@gmail.com</a><a href="/resume.pdf" target="_blank" rel="noreferrer" className="btn-secondary"><FileText size={16}/> Resume</a><a href="https://github.com/harshkumar07" target="_blank" rel="noreferrer" className="btn-secondary"><SiGithub size={16}/> GitHub</a></div><div className="mt-16 flex items-center gap-2 text-xs text-white/30"><MapPin size={13}/> Bengaluru, India <span>·</span> Software Engineer</div></div></section>

    <footer className="footer"><span>HARSH KUMAR</span><span>FULL STACK · C# · .NET · REACT · AZURE</span><span>© 2026</span></footer>
  </main>;
}

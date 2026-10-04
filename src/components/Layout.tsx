import { useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import { Icon } from './Icon';

const nav=[['/','Home'],['/properties','Properties'],['/about','About'],['/agents','Agents'],['/services','Services'],['/contact','Contact']];
export function Layout(){
 const [open,setOpen]=useState(false);
 return <div className="min-h-screen bg-[#faf9f6]">
  <div className="bg-forest text-white text-center text-[11px] tracking-wide py-2 px-4">DEMO CONCEPT • All properties, people, prices and company information on this site are fictional.</div>
  <header className="sticky top-0 z-40 border-b border-line/70 bg-[#faf9f6]/95 backdrop-blur">
   <div className="container-shell flex h-20 items-center justify-between">
    <Link to="/" className="flex items-center gap-3" onClick={()=>setOpen(false)}><span className="grid size-10 place-items-center rounded-full bg-forest text-white"><Icon name="building" size={19}/></span><span><span className="block font-display text-xl leading-none">HavenStone</span><span className="block text-[9px] font-bold uppercase tracking-[.22em] text-muted">Properties</span></span></Link>
    <nav className="hidden lg:flex items-center gap-7">{nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/' } className={({isActive})=>`text-sm font-medium transition ${isActive?'text-forest':'text-muted hover:text-ink'}`}>{label}</NavLink>)}</nav>
    <div className="hidden lg:flex items-center gap-3"><Link to="/contact" className="rounded-full bg-forest px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-light">Talk to an advisor <Icon name="arrow" size={15} className="ml-1 inline"/></Link></div>
    <button className="lg:hidden p-2" onClick={()=>setOpen(v=>!v)} aria-label={open?'Close menu':'Open menu'}>{<Icon name={open?'close':'menu'}/>}</button>
   </div>
   {open&&<div className="border-t border-line bg-[#faf9f6] lg:hidden"><nav className="container-shell flex flex-col py-3">{nav.map(([to,label])=><NavLink key={to} to={to} end={to==='/' } onClick={()=>setOpen(false)} className={({isActive})=>`border-b border-line/60 py-4 text-sm ${isActive?'font-bold text-forest':'text-muted'}`}>{label}</NavLink>)}<Link to="/contact" onClick={()=>setOpen(false)} className="my-4 rounded-full bg-forest px-5 py-3 text-center text-sm font-semibold text-white">Talk to an advisor</Link></nav></div>}
  </header>
  <Outlet/>
  <Footer/>
 </div>
}
function Footer(){return <footer className="mt-24 bg-forest text-white"><div className="container-shell grid gap-12 py-16 md:grid-cols-[1.3fr_.7fr_.7fr]"><div><div className="flex items-center gap-3"><span className="grid size-10 place-items-center rounded-full border border-white/20"><Icon name="building" size={18}/></span><span className="font-display text-2xl">HavenStone</span></div><p className="mt-5 max-w-sm text-sm leading-7 text-white/60">A fictional Lagos real estate brand concept created for portfolio demonstration. Sample content only.</p></div><div><p className="eyebrow text-white/50">Explore</p><div className="mt-5 grid gap-3 text-sm text-white/70">{nav.slice(1).map(([to,label])=><Link key={to} to={to} className="hover:text-white">{label}</Link>)}</div></div><div><p className="eyebrow text-white/50">Contact</p><div className="mt-5 space-y-3 text-sm text-white/70"><p>+234 800 000 1000</p><p>hello@example.com</p><p>Lagos, Nigeria</p></div></div></div><div className="border-t border-white/10"><div className="container-shell flex flex-col gap-2 py-5 text-xs text-white/40 sm:flex-row sm:justify-between"><span>© {new Date().getFullYear()} HavenStone Properties — Demo concept.</span><span>Not a real estate company.</span></div></div></footer>}

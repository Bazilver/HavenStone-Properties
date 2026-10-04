import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Icon } from './Icon';
export interface SearchValues { location:string; type:string; purpose:string; min:string; max:string; beds:string; }
export const defaultSearch:SearchValues={location:'',type:'',purpose:'',min:'',max:'',beds:''};
export function SearchPanel({compact=false,initial=defaultSearch}:{compact?:boolean;initial?:SearchValues}){
 const nav=useNavigate(); const [v,setV]=useState(initial);
 const set=(k:keyof SearchValues,val:string)=>setV(x=>({...x,[k]:val}));
 const submit=(e:React.FormEvent)=>{e.preventDefault();const p=new URLSearchParams(Object.entries(v).filter(([,x])=>x));nav(`/properties?${p}`)};
 return <form onSubmit={submit} className={`grid gap-2 rounded-2xl border border-white/20 bg-white p-2 shadow-[0_20px_50px_rgba(15,35,31,.18)] ${compact?'md:grid-cols-6':'md:grid-cols-3 lg:grid-cols-6'}`}>
  <label className="flex min-w-0 flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Location</span><input value={v.location} onChange={e=>set('location',e.target.value)} placeholder="e.g. Ikoyi" className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-[#a3aaa7]"/></label>
  <label className="flex flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Type</span><select value={v.type} onChange={e=>set('type',e.target.value)} className="mt-1 bg-transparent text-sm outline-none"><option value="">Any type</option><option>Apartment</option><option>House</option><option>Villa</option><option>Terrace</option><option>Penthouse</option></select></label>
  <label className="flex flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Purpose</span><select value={v.purpose} onChange={e=>set('purpose',e.target.value)} className="mt-1 bg-transparent text-sm outline-none"><option value="">Buy or rent</option><option>Buy</option><option>Rent</option></select></label>
  <label className="flex flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Min price</span><input inputMode="numeric" value={v.min} onChange={e=>set('min',e.target.value)} placeholder="₦ min" className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-[#a3aaa7]"/></label>
  <label className="flex flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Max price</span><input inputMode="numeric" value={v.max} onChange={e=>set('max',e.target.value)} placeholder="₦ max" className="mt-1 w-full bg-transparent text-sm outline-none placeholder:text-[#a3aaa7]"/></label>
  <div className="flex gap-2"><label className="flex min-w-0 flex-1 flex-col rounded-xl px-4 py-3 hover:bg-sand"><span className="text-[10px] font-bold uppercase tracking-widest text-muted">Beds</span><select value={v.beds} onChange={e=>set('beds',e.target.value)} className="mt-1 bg-transparent text-sm outline-none"><option value="">Any</option>{[1,2,3,4,5,6].map(n=><option key={n} value={n}>{n}+</option>)}</select></label><button className="grid size-[60px] shrink-0 place-items-center self-center rounded-xl bg-forest text-white transition hover:bg-forest-light" aria-label="Search properties"><Icon name="search"/></button></div>
 </form>
}

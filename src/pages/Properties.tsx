import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { properties, type PropertyType } from '../data/properties';
import { PropertyCard } from '../components/PropertyCard';
import { Icon } from '../components/Icon';
import { SEO } from '../components/SEO';
import { SectionHeading } from '../components/SectionHeading';
import { defaultSearch, SearchPanel } from '../components/SearchPanel';

export function Properties(){
 const [params]=useSearchParams(); const [sort,setSort]=useState('featured'); const [view,setView]=useState<'grid'|'list'>('grid');
 const q={...defaultSearch, ...Object.fromEntries(params.entries())};
 const filtered=useMemo(()=>properties.filter(p=>{
  const loc=q.location.toLowerCase(); const matchLoc=!loc||p.location.toLowerCase().includes(loc)||p.title.toLowerCase().includes(loc);
  const matchType=!q.type||p.type===q.type as PropertyType; const matchPurpose=!q.purpose||p.purpose===q.purpose;
  const min=!q.min||p.price>=Number(q.min.replace(/[^0-9]/g,'')); const max=!q.max||p.price<=Number(q.max.replace(/[^0-9]/g,'')); const beds=!q.beds||p.bedrooms>=Number(q.beds); return matchLoc&&matchType&&matchPurpose&&min&&max&&beds;
 }).sort((a,b)=>sort==='price-low'?a.price-b.price:sort==='price-high'?b.price-a.price:a.title.localeCompare(b.title)),[q,sort]);
 return <main><SEO title="Properties — HavenStone Demo" description="Browse fictional sample property listings in this Lagos real estate website concept."/><section className="border-b border-line bg-sand"><div className="container-shell py-14 md:py-20"><SectionHeading eyebrow="Property collection" title="Find your next address." text="Browse fictional sample listings and test the search experience. Prices and availability are illustrative only."/><div className="mt-9"><SearchPanel compact initial={q}/></div></div></section>
 <section className="container-shell py-16"><div className="flex flex-col gap-5 border-b border-line pb-6 md:flex-row md:items-center md:justify-between"><p className="text-sm text-muted"><strong className="text-ink">{filtered.length}</strong> sample {filtered.length===1?'property':'properties'} found</p><div className="flex items-center gap-2"><select value={sort} onChange={e=>setSort(e.target.value)} className="rounded-full border border-line bg-white px-4 py-2.5 text-xs font-semibold outline-none"><option value="featured">Sort: Featured</option><option value="price-low">Price: Low to high</option><option value="price-high">Price: High to low</option></select><div className="hidden rounded-full border border-line bg-white p-1 sm:flex"><button onClick={()=>setView('grid')} className={`rounded-full p-2 ${view==='grid'?'bg-forest text-white':''}`} aria-label="Grid view"><Icon name="grid" size={16}/></button><button onClick={()=>setView('list')} className={`rounded-full p-2 ${view==='list'?'bg-forest text-white':''}`} aria-label="List view"><Icon name="list" size={16}/></button></div></div></div>
 {filtered.length?<div className={view==='grid'?'mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3':'mt-10 grid gap-5'}>{filtered.map(p=><PropertyCard key={p.id} property={p}/>)}</div>:<div className="grid min-h-80 place-items-center py-16 text-center"><div><span className="mx-auto grid size-14 place-items-center rounded-full bg-sand text-forest"><Icon name="search"/></span><h3 className="mt-5 font-display text-2xl">No matching sample properties</h3><p className="mt-2 max-w-md text-sm leading-6 text-muted">Try a wider location, price range or fewer bedrooms. This is demo data, so availability is intentionally limited.</p><Link to="/properties" className="mt-5 inline-block text-sm font-bold text-forest">Clear filters</Link></div></div>}
 </section></main>}

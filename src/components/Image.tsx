import { useState } from 'react';

export function SafeImage({src, alt, className=''}:{src:string; alt:string; className?:string}) {
  const [failed,setFailed]=useState(false);
  if (failed) return <div className={`flex items-center justify-center bg-stone-200 text-muted ${className}`} role="img" aria-label={alt}><span className="text-xs uppercase tracking-widest">Image unavailable</span></div>;
  return <img src={src} alt={alt} className={className} onError={()=>setFailed(true)} />;
}

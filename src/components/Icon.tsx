import type { ReactNode, SVGProps } from 'react';

type Name = 'arrow'|'chevron'|'search'|'menu'|'close'|'bed'|'bath'|'area'|'heart'|'phone'|'mail'|'map'|'calendar'|'clock'|'whatsapp'|'check'|'filter'|'grid'|'list'|'quote'|'building'|'shield'|'key'|'chart'|'ruler'|'users'|'spark';
export function Icon({name, size=20, ...props}:{name:Name; size?:number} & SVGProps<SVGSVGElement>) {
  const p={width:size,height:size,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.8,strokeLinecap:'round' as const,strokeLinejoin:'round' as const,...props};
  const paths:Record<Name, ReactNode>={
    arrow:<><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>, chevron:<path d="m6 9 6 6 6-6"/>,
    search:<><circle cx="11" cy="11" r="7"/><path d="m20 20-4-4"/></>, menu:<><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></>,
    close:<><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>, bed:<><path d="M3 18v-7a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v7"/><path d="M12 13h5a4 4 0 0 1 4 4v1H3"/><path d="M5 14h6"/></>,
    bath:<><path d="M3 13h18"/><path d="M5 13v3a4 4 0 0 0 4 4h6a4 4 0 0 0 4-4v-3"/><path d="M5 13V7a2 2 0 0 1 4 0v1"/><path d="M3 20h18"/></>,
    area:<><path d="M4 9V4h5"/><path d="M15 4h5v5"/><path d="M20 15v5h-5"/><path d="M9 20H4v-5"/><path d="M8 8 4 4"/><path d="m16 8 4-4"/><path d="m16 16 4 4"/><path d="m8 16-4 4"/></>,
    heart:<path d="M20.8 8.9c0 5.5-8.8 10.1-8.8 10.1S3.2 14.4 3.2 8.9A5 5 0 0 1 12 6.1a5 5 0 0 1 8.8 2.8Z"/>,
    phone:<><path d="M5 4h3l2 5-2 1a12 12 0 0 0 6 6l1-2 5 2v3a2 2 0 0 1-2 2C10 21 3 14 3 6a2 2 0 0 1 2-2Z"/></>, mail:<><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    map:<><path d="M9 18 3 21V6l6-3 6 3 6-3v15l-6 3-6-3Z"/><path d="M9 3v15"/><path d="M15 6v15"/></>, calendar:<><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>, clock:<><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></>,
    whatsapp:<><path d="M20.5 11.7a8.5 8.5 0 0 1-12.6 7.4L4 20l.9-3.6A8.5 8.5 0 1 1 20.5 11.7Z"/><path d="M8.7 8.4c.3-.4.7-.4 1-.1l1.1 1.3c.2.2.2.5 0 .8l-.5.6c.8 1.4 1.8 2.4 3.2 3.2l.6-.5c.3-.2.6-.2.8 0l1.3 1.1c.3.3.3.7-.1 1-.4.4-.9.7-1.5.6-2.1-.4-5.9-4.1-6.3-6.3-.1-.6.2-1.1.6-1.5Z"/></>,
    check:<path d="m5 12 4 4L19 6"/>, filter:<><path d="M4 6h16M7 12h10M10 18h4"/></>, grid:<><rect x="4" y="4" width="6" height="6"/><rect x="14" y="4" width="6" height="6"/><rect x="4" y="14" width="6" height="6"/><rect x="14" y="14" width="6" height="6"/></>, list:<><path d="M8 6h12M8 12h12M8 18h12"/><path d="M4 6h.01M4 12h.01M4 18h.01"/></>, quote:<path d="M9 11H5a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h3v7Zm11 0h-4a1 1 0 0 1-1-1V6a2 2 0 0 1 2-2h3v7Z"/>,
    building:<><path d="M4 21V5l8-3 8 3v16"/><path d="M8 9h2M14 9h2M8 13h2M14 13h2M10 21v-4h4v4"/></>, shield:<path d="M12 3 4 6v5c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6l-8-3Z"/>, key:<><path d="m15 7 2 2"/><circle cx="9" cy="15" r="4"/><path d="m12 12 7-7"/></>, chart:<><path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 5-7"/></>, ruler:<><path d="m6 3 15 15-3 3L3 6l3-3Z"/><path d="m9 6-3 3M13 10l-3 3M17 14l-3 3"/></>, users:<><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></>, spark:<><path d="m12 3-1.2 5.8L5 10l5.8 1.2L12 17l1.2-5.8L19 10l-5.8-1.2L12 3Z"/><path d="m19 16-.5 2.5L16 19l2.5.5L19 22l.5-2.5L22 19l-2.5-.5L19 16Z"/></>
  };
  return <svg {...p} aria-hidden="true">{paths[name]}</svg>;
}

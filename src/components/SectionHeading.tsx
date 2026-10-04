import type { ReactNode } from 'react';

export function SectionHeading({eyebrow,title,text,action}:{eyebrow?:string;title:string;text?:string;action?:ReactNode}){return <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div>{eyebrow&&<p className="eyebrow text-forest">{eyebrow}</p>}<h2 className="mt-2 max-w-2xl font-display text-4xl leading-tight tracking-tight md:text-5xl">{title}</h2>{text&&<p className="mt-4 max-w-xl text-sm leading-7 text-muted">{text}</p>}</div>{action}</div>}

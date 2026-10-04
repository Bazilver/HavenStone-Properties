import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Properties } from './pages/Properties';
import { PropertyDetails } from './pages/PropertyDetails';
import { About } from './pages/About';
import { Agents } from './pages/Agents';
import { Services } from './pages/Services';
import { Contact } from './pages/Contact';

function ScrollToTop(){const {pathname}=useLocation();useEffect(()=>{window.scrollTo(0,0);},[pathname]);return null;}
export default function App(){return <><ScrollToTop/><Routes><Route element={<Layout/>}><Route path="/" element={<Home/>}/><Route path="/properties" element={<Properties/>}/><Route path="/properties/:id" element={<PropertyDetails/>}/><Route path="/about" element={<About/>}/><Route path="/agents" element={<Agents/>}/><Route path="/services" element={<Services/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<Navigate to="/" replace/>}/></Route></Routes></>}

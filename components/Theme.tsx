'use client';
import {useEffect,useState} from 'react';
export default function Theme(){const [dark,setDark]=useState(false);useEffect(()=>{setDark(document.documentElement.dataset.theme==='dark')},[]);return <button className="theme" aria-label={dark?'Switch to light mode':'Switch to dark mode'} onClick={()=>{const next=!dark;setDark(next);document.documentElement.dataset.theme=next?'dark':'light';try{localStorage.setItem('theme',next?'dark':'light')}catch{}}}>{dark?'☀ Light':'☾ Dark'}</button>}

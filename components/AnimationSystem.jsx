'use client';import {useEffect} from 'react';export default function AnimationSystem({enabled}){useEffect(()=>{document.body.classList.toggle('animate',enabled)},[enabled]);return null}

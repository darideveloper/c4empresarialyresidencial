"use client"

import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit () {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      delay: window.innerWidth < 768 ? 0 : 100,
      once: true,
    });
  }, [])

  return null
}
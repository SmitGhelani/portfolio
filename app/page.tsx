"use client"
import Image from "next/image";
import Card from "./components/profile";
import SidePanel from "./components/sidepanel";
import Main from "./components/main";
import { useEffect, useState } from "react";

export default function Home() {
  const [bgImage, setBgImage] = useState({});

  useEffect(() => {
    setBgImage({
      backgroundImage: `linear-gradient(45deg,rgba(84, 90, 104, 0.75),rgba(240, 230, 167, 0.75)), url('bg.jpg')`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    });
  }, []);
  return ( 
    <div className="flex flex-row p-2" style={bgImage}>
      <Main />
      <div className="p-2"></div>
      <SidePanel />
    </div>
  )
}

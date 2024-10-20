"use client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

const SidePanel = () => {
  
  const closeSidebar = (e: Event) => {
    const sidepanel = window.document.getElementById("sidebarpanel")
    const mainpanel = window.document.getElementById("mainpanel")
    
  }

  return (
    <div id="sidebarpanel" className="flex flex-col p-2 rounded-lg basis-1/4 bg-gradient-to-tr from-black via-gray-900 to-black p-30 justify-start items-center text-center h-screen w-full bg-300% animate-gradient">
        <div className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer" onClick={e => closeSidebar(e)}>Close</div>
        <Link href="/project" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">My Works</Link>
        <Link href="/" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">About Me</Link>
        <Link href="https://drive.google.com/file/d/1WSx56tKwDIfkC_1NH5YjzPqLuDcCE6ZM/view?usp=drive_link" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">Download Resume</Link>
    </div>
  );
};

export default SidePanel;
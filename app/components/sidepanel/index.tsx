"use client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

const SidePanel = () => {

  return (
    <div id="sidebarpanel" className="flex flex-col p-2 rounded-lg p-30 justify-start items-start text-center h-[32rem] w-[12rem] bg-300% animate-gradient absolute right-1">
        {/* <div className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">Close</div> */}
        <Link href="/projects" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">My Works</Link>
        <Link href="/" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">About Me</Link>
        <Link href="https://drive.google.com/file/d/1WSx56tKwDIfkC_1NH5YjzPqLuDcCE6ZM/view?usp=drive_link" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">Download Resume</Link>
    </div>
  );
};

export default SidePanel;
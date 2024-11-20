"use client"
import { redirect } from "next/dist/server/api-utils";
import Image from "next/image";
import Link from "next/link";

const SidePanel = () => {

  const toggleSidebar = () => {
    const sidebarpanel = document.getElementById("sidebarpanel");
    const shrnkbtn = document.getElementById("shrinkbtn");
    const btn1 = document.getElementById("btns1");
    const btn2 = document.getElementById("btns2");
    const btn3 = document.getElementById("btns3");
    if (btn1 == null || btn2 == null || btn3 == null || sidebarpanel == null || shrnkbtn == null) {
      return
    }

    if (btn1.style.display == "none") {
      btn1.style.display = "block";
      btn2.style.display = "block";
      btn3.style.display = "block";
      sidebarpanel.classList.remove("h-wrap");
      sidebarpanel.classList.add("h-[95vh]");
      shrnkbtn.classList.add("fa-down-left-and-up-right-to-center");
      shrnkbtn.classList.remove("fa-up-right-and-down-left-from-center");
    } else{
      btn1.style.display = "None";
      btn2.style.display = "None";
      btn3.style.display = "None";
      sidebarpanel.classList.remove("h-[95vh]");
      sidebarpanel.classList.add("h-wrap");
      shrnkbtn.classList.remove("fa-down-left-and-up-right-to-center");
      shrnkbtn.classList.add("fa-up-right-and-down-left-from-center");
    }
  }

  return (
    <div id="sidebarpanel" className="sidebarpanel flex flex-col p-2 mt-2 rounded-lg p-30 mr-2 justify-start items-start text-center w-wrap bg-300% animate-gradient absolute right-1 h-wrap bg-gradient-animated bg-gradient-to-br from-[#3B2F2F]/[0.75] via-[#a66600]/[0.75] to-[#d09c00]/[0.75] via-[#8a663e]/[0.75] content-center">
        <div id="sidebartogglebtn" className=" text-white font-poppins h-[60px] w-[60px] text-[24px] animate-gradient items-center justify-center text-center mb-2 rounded-md hover:cursor-pointer bg-gradient-to-br from-[#585a3e]/[0.25] to-[#ffb949]/[0.25] content-center" onClick={e => toggleSidebar()}><i id="shrinkbtn" className="fa-solid fa-up-right-and-down-left-from-center text-center items-center justify-center"></i></div>
        <Link id="btns2" href="/" className=" text-white font-poppins h-[60px] w-[60px] text-[24px]  animate-gradient items-center justify-center text-center mb-2 rounded-md hover:cursor-pointer bg-gradient-to-br from-[#585a3e]/[0.25] to-[#ffb949]/[0.25] content-center" style={{display:"none"}}><i className="fa-solid fa-house items-center justify-center"></i><div className="text-[12px]">Home</div></Link>
        <Link id="btns1" href="/projects" className=" text-white font-poppins h-[60px] w-[60px] text-[24px]  animate-gradient items-center justify-center text-center mb-2 rounded-md hover:cursor-pointer bg-gradient-to-br from-[#585a3e]/[0.25] to-[#ffb949]/[0.25] content-center" style={{display:"none"}}><i className="fa-solid fa-briefcase text-center items-center justify-center"></i><div className="text-[12px]">Projects</div></Link>
        <Link id="btns3" href="https://drive.google.com/file/d/15BBD06Oqb_wqMLJ7Ju-5svPEvmqBgokG/view?usp=drive_link" className="text-white font-poppins h-[60px] w-[60px] text-[24px] items-center justify-center text-center mb-2 rounded-md hover:cursor-pointer bg-gradient-animated bg-gradient-to-br from-[#585a3e]/[0.25] to-[#ffb949]/[0.25] content-center" style={{display:"none"}}><i className="fa-solid fa-file-arrow-down text-center items-center justify-center"></i><div className="text-[12px]">Resume</div></Link>
    </div>
  );
};

export default SidePanel;
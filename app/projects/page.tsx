"use client"
import Link from "next/link";
import SidePanel from "../components/sidepanel";
import { useEffect, useState } from "react";

const Project = () => {
  const [bgImage, setBgImage] = useState({});
  const [cardImgoneStyle, setCardImgoneStyle] = useState({});
  const [cardImgtwoStyle, setCardImgtwoStyle] = useState({});

  useEffect(() => {
    setBgImage({
      backgroundImage: "linear-gradient(45deg,rgba(84, 90, 104, 0.75),rgba(240, 230, 167, 0.75)), url('bg.jpg')", backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'
    })
    setCardImgoneStyle({
      backgroundImage: "linear-gradient(45deg,rgba(35, 90, 35, 0.65),rgba(15, 15, 10, 0.65)), url('ecommerce.png')", 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'
    })
    setCardImgtwoStyle({
      backgroundImage: "linear-gradient(155deg, rgba(255, 223, 186, 0.7), rgba(0, 139, 139, 0.3)), url('studentsearch.png')", 
      backgroundRepeat: 'no-repeat', 
      backgroundSize: 'cover'})
  },[]);

  return (
    <div style={bgImage}>
      <div className="flex flex-col h-screen"> 
        <div className="p-2">
          <h1 className="flex flex-row rounded-lg p-30 justify-center items-center text-center h-20 w-full bg-300% animate-gradient text-white font-cour text-2xl">My Projects</h1>      
        </div>
        <div className="flex flex-wrap rounded-lg basis-3/4  p-30 justify-center items-center text-center h-screen w-full bg-300% animate-gradient" >
            <Link href="https://ecommerce.smitghelani.site/" className="text-white p-5 font-poppins object-fill w-[18rem] h-[20rem] items-center justify-center text-center m-2 rounded-xl hover:cursor-pointer" style={cardImgoneStyle} >
              <div className="flex flex-row items-center justify-center text-center w-full">
                <div className="flex basis-1/4 w-fit justify-start"><img src="store.png" className="h-10 w-10 rounded-xl" width="20" height="20" alt="" /></div>
                <div className="flex basis-3/4">eCommerce Store</div>
              </div>
              <div className="mt-10 justify-start text-left text-sm">NextJS based e-commerece store written with TypeScript. Well architectured redux store based cart and user state management.</div>
              <div className="mt-10 font-bebas justify-start text-left text-sm italic">NextJS | TypeScript | MongoDB | Postman</div>
            </Link>
            <Link href="https://unionboard.smitghelani.site/" className="text-white p-5 font-poppins object-fill w-[18rem] h-[20rem] items-center justify-center text-center m-2 rounded-xl hover:cursor-pointer bg-[#19B79D]" style={cardImgtwoStyle} >
              <div className="flex flex-row items-center justify-center text-center w-full">
                <div className="flex basis-1/4 w-fit justify-start items-center text-center"><img src="logoPayment.png" className="h-10 w-10 rounded-xl" width="20" height="20" alt="" /></div>
                <div className="flex basis-3/4 justify-start items-center text-center">UniOnBoard</div>
              </div>
              <div className="mt-10 justify-start text-left text-sm">Node.js framework ExpressJS based University admission and EdTech platform for Gujarat Engineering Colleges with React based Frontend having RazorPay payment gateway integration.</div>
              <div className="mt-10 font-bebas justify-start text-left text-sm italic">Node.js | ReactJS | JavaScript | MongoDB | ExpressJS</div>
            </Link>
          </div>
        <div className="p-2 absolute"></div>
        <SidePanel />
      </div>
    </div>
  );
};

export default Project;
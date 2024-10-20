import Image from "next/image";
import Link from "next/link";
import SidePanel from "../components/sidepanel";

const Project = () => {
  return (
    <div className="flex flex-row p-2 m-2">  
      <div className="flex flex-row rounded-lg basis-3/4 bg-gradient-to-tr from-gray-900 via-black to-gray-900 p-30 justify-center items-center text-center h-screen w-full bg-300% animate-gradient" >
          <Link href="https://ecommerce.smitghelani.xyz/" className="text-white p-5 font-poppins object-fill w-[18rem] h-[20rem] items-center justify-center text-center m-2 rounded-xl hover:cursor-pointer" style={{backgroundImage: "linear-gradient(45deg,rgba(66, 71, 86, 0.65),rgba(225, 215, 152, 0.65)), url('ecommerce.png');", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
            <div className="flex flex-row items-center justify-center text-center w-full">
              <div className="flex basis-1/4 w-fit justify-start"><img src="store.png" className="h-10 w-10 rounded-xl" width="20" height="20" alt="" /></div>
              <div className="flex basis-3/4">eCommerce Store</div>
            </div>
          </Link>
          <Link href="https://unionboard.smitghelani.xyz/" className="text-white p-5 font-poppins object-fill w-[18rem] h-[20rem] items-center justify-center text-center m-2 rounded-xl hover:cursor-pointer bg-[#19B79D]" style={{backgroundImage: "linear-gradient(155deg, rgba(255, 223, 186, 0.7), rgba(0, 139, 139, 0.3)), url('studentsearch.png');", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}} >
            <div className="flex flex-row items-center justify-center text-center w-full">
              <div className="flex basis-1/4 w-fit justify-start items-center text-center"><img src="logoPayment.png" className="h-10 w-10 rounded-xl" width="20" height="20" alt="" /></div>
              <div className="flex basis-3/4 justify-start items-center text-center">UniOnBoard</div>
            </div>
          </Link>
        </div>
      <div className="p-2"></div>
      <SidePanel />
    </div>
  );
};

export default Project;
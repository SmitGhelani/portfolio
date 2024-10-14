import Image from "next/image";
import Link from "next/link";

const Project = () => {
  return (
    <div className="flex flex-col rounded-lg basis-3/4 bg-gradient-to-tr from-gray-900 via-black to-gray-900 p-30 justify-center items-center text-center h-screen w-full bg-300% animate-gradient" >
        <Link href="https://ecommerce.smitghelani.xyz/" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">E-Commerce Store</Link>
        <Link href="https://unionboard.smitghelani.xyz/" className="h-10 text-white font-poppins bg-slate-900 w-full items-center justify-center text-center m-2 p-2 rounded-md hover:cursor-pointer">UniOnBoard - The College Guide</Link>
    </div>
  );
};

export default Project;
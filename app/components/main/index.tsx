import Image from "next/image";

const Main = () => {
  return (
    <div className="flex flex-col rounded-lg basis-2/3 bg-gradient-to-tr from-gray-900 via-black to-gray-900 p-30 justify-center items-center text-center h-screen w-full bg-300% animate-gradient" >
        <div className="font-vibes text-3xl justify-center items-center text-center text-white">Hey I'm</div>
        <div className="font-cour text-5xl justify-center items-center text-center text-white">Smit Ghelani</div>
        <div className="font-vibes text-xl justify-center items-center text-center text-white">Machine Learning Enthusiast & DevOps Engineer</div>
    </div>
  );
};

export default Main;
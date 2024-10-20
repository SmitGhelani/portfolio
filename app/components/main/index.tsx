import Image from "next/image";

const Main = () => {
  return (
    <div id="mainpanel" className="flex flex-col rounded-lg p-30 justify-center items-center text-center h-screen w-full bg-300%">
        <div className="font-vibes text-3xl justify-center items-center text-center text-white">Hey I'm</div>
        <div className="font-cour text-5xl justify-center items-center text-center text-white">Smit Ghelani</div>
        <div className="font-vibes text-xl justify-center items-center text-center text-white">Machine Learning Enthusiast & DevOps Engineer</div>
    </div>
  );
};

export default Main;
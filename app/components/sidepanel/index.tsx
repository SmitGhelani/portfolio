import Image from "next/image";

const SidePanel = () => {
  return (
    <div className="flex flex-col bg-gradient-to-tr from-orange-700 via-blue-500 to-green-400 p-30 justify-center items-center text-center h-screen bg-300% animate-gradient" >
        <div className="font-vibes justify-center items-center text-center text-white">Hey I'm Smit Ghelani</div>
        <div className="font-cour justify-center items-center text-center text-white">Machine Learning Enthusiast & DevOps Engineer</div>
    </div>
  );
};

export default SidePanel;
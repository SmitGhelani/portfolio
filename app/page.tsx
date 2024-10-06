import Image from "next/image";
import Card from "./components/profile";
import SidePanel from "./components/sidepanel";
import Main from "./components/main";

export default function Home() {
  return ( 
    <div className="flex flex-row p-2 m-2">
      <Main />
      <div className="p-2"></div>
      <SidePanel />
    </div>
  )
}

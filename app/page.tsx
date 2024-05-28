import { SettingsIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-cyan-500 h-screen overflow-y-auto">
      {/* {Header} */}
      <header  className="flex justify-between fixed top-0 text-white w-full p-5">
        <Image
          alt="Logo"
          src="https://i.imgur.com/MCHWJZS.png" height={50} width={50}
          className="object-contain"
        />
        <SettingsIcon 
          size={40}
          className="p-2 m-2 rounded-full cursor-pointer bg-cyan-600
          text-black transition-all ease-in-out duration-150
          hover:bg-cyan-700 hover:text-white"
        />
      </header>
      {/* {Form} */}
      <form className="flex flex-col bg-black">
        <div className="">
          {/* message */}
        </div>
        {/* hidden field */}
        <input type="file"/>
        <button type="submit" hidden></button>
        <div>
          {/* Recorder */}
          {/* Voice Synthesiser - output of the Assistant voice */}
        </div>
      </form>
    </main>
  );
}

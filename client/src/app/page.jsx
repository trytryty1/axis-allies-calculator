"use client";
import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Home() {
  const [gameCode, setGameCode] = useState("");
  const { theme, getBackgroundImage, setTheme } = useContext(ThemeContext);
  if (!theme) return null;
  const router = useRouter();

  const createGame = () => {
    
  };

  const joinGame = () => {
    
  };

  // I literally have no idea why, but the theme only works if I have these random values here
  const greatBritain = "great-britain";
  const usa = "usa";
  const france = "france";
  const anzac = "anzac";
  const russia = "russia";
  const china = "china";
  const germany = "germany";
  const japan = "japan";
  const italy = "italy";

  return (
    <main
      className={`flex  min-h-full flex-col items-center justify-between p-24`}
    >
      <div className="bg-nation-background absolute inset-0 w-full h-full -z-10 bg-cover pointer-events-none" />
      <div>
        <Image
          src="/axis-and-allies-logo.png"
          width={605}
          height={230}
          className="pointer-events-none"
        />

        <div className="flex flex-col gap-4 mt-14 px-6 py-10 bg-gray-500 bg-opacity-75 rounded-lg text-black">
          <button
            onClick={createGame}
            className="p-4 bg-secondary text-primary text-lg rounded-md"
          >
            Create game
          </button>

          <button
            onClick={joinGame}
            className="p-4 bg-primary text-secondary text-lg rounded-md"
          >
            Join game
          </button>

          <input
            value={gameCode}
            onChange={(e) => setGameCode(e.target.value)}
            placeholder="Game Code"
            className="bg-primary p-4 h-10 text-secondary focus-visible:false"
          />
        </div>
      </div>
    </main>
  );
}

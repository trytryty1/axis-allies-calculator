"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [gameCode, setGameCode] = useState("");
  const router = useRouter();

  const createGame = () => {
    fetch("/api/create-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: gameCode,
      }),
    }).then(async (response) => {
      if (response.err) {
        console.log(response.error);
        return;
      }
      const data = await response.json();
      if (data.playerId) {
        router.push("/nations-setup");
      }
    });
  };

  const joinGame = () => {
    fetch("/api/create-game", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        gameId: gameCode,
      }),
    }).then(async (response) => {
      if (response.err) {
        console.log(response.error);
        return;
      }
      const data = await response.json();
      if (data.playerId) {
        router.push("/nations-setup");
      }
    });
  };

  return (
    <main className="flex germany min-h-full flex-col items-center justify-between p-24">
      <div className="bg-nation-background bg-cover w-full -z-10 h-full fixed top-0 bg-no-repeat bg-center" />
      <div>
        <Image src="/axis-and-allies-logo.png" width={605} height={230} />

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

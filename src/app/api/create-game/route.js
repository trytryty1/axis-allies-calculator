import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { createGame, joinGame, getGame } from "../../../../game/currentGames";

export async function POST(request) {
  const gameId = createGame();
  if (!gameId) return NextResponse.error("Could not create game");

  const playerId = joinGame(gameId);

  cookies().set("gameId", gameId);
  cookies().set("playerId", playerId);

  const game = getGame(gameId);

  return NextResponse.json({ gameId, playerId });
}

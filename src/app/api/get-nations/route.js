import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { currentGames, createGame, joinGame, getGame } from "../../../../game/currentGames";

export async function POST(request) {
  const gameId = await cookies().get("gameId").value;
  console.log(currentGames);
  console.log(gameId);
  const game = getGame(gameId);
  if (!game) return NextResponse.error(500);

  const nations = game.getAllNations();

  return NextResponse.json({ nations: nations || {} });
}

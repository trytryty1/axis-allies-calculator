import { NextResponse } from "next/server";
import { getGame, joinGame } from "../../../../game/currentGames";

export async function POST(request) {
    const body = await request.json();
    const playerId = joinGame(body.gameId)
    if (!playerId) {
        return NextResponse.error("Could not join game")
    }

    cookies().set("playerId", playerId)
    cookies().set("gameId", body.gameId)

    const game = getGame(body.gameId);
    const nations = game.getAllNations();

    return NextResponse.json({ playerId });
}

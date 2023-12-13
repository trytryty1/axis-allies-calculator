import { NextResponse } from "next/server";

let counter = 1;

export async function GET(request) {
    console.log(`Counter: ${counter}`)
    return NextResponse.json({ body: { counter: counter++ } });
}

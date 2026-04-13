import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  const url = `https://serpapi.com/search.json?engine=amazon&q=${query}&api_key=feb978c1aa948d99ffa740eb10c69728c39791d852d2a86059382c5dfc2f4152`;

  const res = await fetch(url);
  const data = await res.json();

  return NextResponse.json(data);
}
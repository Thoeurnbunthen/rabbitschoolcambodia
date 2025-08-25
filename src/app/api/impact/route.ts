import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const impacts = await prisma.impact.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(impacts);
}

export async function POST(req: Request) {
  const { title, value, unit, icon } = await req.json();
  const impact = await prisma.impact.create({
    data: { title, value, unit, icon },
  });
  return NextResponse.json(impact);
}

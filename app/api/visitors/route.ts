import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import {
  getVisitorCount,
  incrementVisitors,
  shouldCountVisit,
} from "@/lib/visitors";

const COOKIE = "visited";
const YEAR = 60 * 60 * 24 * 365;

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  const jar = await cookies();
  const countNew = shouldCountVisit(
    jar.has(COOKIE),
    request.headers.get("user-agent"),
  );
  const count = countNew ? await incrementVisitors() : await getVisitorCount();

  if (count === null) {
    return NextResponse.json({ count: null });
  }

  const response = NextResponse.json({ count });
  if (countNew) {
    response.cookies.set(COOKIE, "1", {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      maxAge: YEAR,
      path: "/",
    });
  }
  return response;
}

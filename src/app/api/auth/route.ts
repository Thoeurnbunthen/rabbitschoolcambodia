import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "secret123"; // use env in production

// Example: Login route handler
export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Dummy check (replace with real DB check)
    if (email === "admin@example.com" && password === "password123") {
      // Sign JWT
      const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: "1h" });

      return NextResponse.json({ token }, { status: 200 });
    }

    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  } catch (err) {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}

// Example: Verify token route handler
export async function GET(req: Request) {
  try {
    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return NextResponse.json({ error: "Missing token" }, { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, JWT_SECRET);

    return NextResponse.json({ user: decoded }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Invalid or expired token" }, { status: 403 });
  }
}

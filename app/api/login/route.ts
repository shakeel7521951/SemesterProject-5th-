import User from "@/app/models/userSchema";
import connectDb from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDb();
  const { email, password } = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "All fields required!" },
      { status: 400 }
    );
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    const matchPassword = await bcrypt.compare(password, user.password);
    if (!matchPassword) {
      return NextResponse.json({ message: "Wrong password!" }, { status: 401 });
    }

    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

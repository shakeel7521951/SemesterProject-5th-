import User from "@/app/models/userSchema";
import connectDb from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const users = await User.find();
    if (users.length < 1) {
      return NextResponse.json({ message: "No users found!" }, { status: 404 });
    }
    return NextResponse.json(
      { users, message: "All users fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}

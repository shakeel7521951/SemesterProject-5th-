import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDb from '@/app/lib/mongodb';
import User from '@/app/models/userSchema';

export async function POST(req: Request) {
  await connectDb();

  const { name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      { message: 'All fields are required!' },
      { status: 400 }
    );
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json({ message: 'User already exists!' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return NextResponse.json({ message: 'User registered successfully!' }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: 'Server error. Please try again later.' },
      { status: 500 }
    );
  }
}

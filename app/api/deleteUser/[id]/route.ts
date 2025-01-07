// app/api/delete/[id]/route.ts
import { NextResponse } from 'next/server';
import User from '@/app/models/userSchema';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  console.log("user id...........",id)
  try {
    const user = await User.findById(id);
    if (!user) {
      return NextResponse.json({ message: 'User not found!' }, { status: 404 });
    }

    await User.deleteOne({ _id: id });

    return NextResponse.json({ message: 'User deleted successfully' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Server error! Please try again later.' }, { status: 500 });
  }
}

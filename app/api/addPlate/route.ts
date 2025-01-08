import plateNumber from "@/app/models/numberPlateSchema";
import connectDb from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request:any) {
  try {
    await connectDb();

    const { plateNo, price, discount, category } = await request.json();

    const existingPlate = await plateNumber.findOne({ plateNo });
    if (existingPlate) {
      return NextResponse.json(
        { message: "This Plate Number Already Exists" },
        { status: 401 }
      );
    }
    const newPlateNumber = new plateNumber({
      plateNo,
      price,
      discount,
      category,
    });

    await newPlateNumber.save();

    return NextResponse.json(
      { message: "Plate Number Saved Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

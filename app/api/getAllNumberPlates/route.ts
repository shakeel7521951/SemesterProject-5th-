import plateNumber from "@/app/models/numberPlateSchema";
import connectDb from "@/app/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDb();
    const plates = await plateNumber.find();
    if (plates.length === 0) {
      return NextResponse.json(
        { message: "No Number Plates Available!" },
        { status: 200 }
      );
    }

    return NextResponse.json(
      { plates, message: "Plates fetched successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching plates:", error);
    return NextResponse.json(
      { message: "Internal Server Error! Please try again later" },
      { status: 500 }
    );
  }
}

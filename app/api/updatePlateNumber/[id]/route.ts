import connectDb from "@/app/lib/mongodb";
import plateNumber from "@/app/models/numberPlateSchema";
import { NextResponse } from "next/server";

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();
    const { id } = params;
    console.log("Received params:", params);

    // Parse request body
    const { plateNo, price, discount, category } = await req.json();

    // Field validation
    if (!plateNo || !price || !discount || !category) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check if plate number exists
    const existingPlate = await plateNumber.findById(id);
    if (!existingPlate) {
      return NextResponse.json(
        { message: "Plate Number Not Exist!" },
        { status: 404 }
      );
    }

    // Prepare the update object
    const updatePlate = { plateNo, price, discount, category };

    // Attempt to update the plate number
    const updatedPlate = await plateNumber.findByIdAndUpdate(id, updatePlate, {
      new: true,
    });

    // If no document was updated
    if (!updatedPlate) {
      return NextResponse.json(
        { message: "Failed to update the plate number" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { message: "Plate number updated successfully", updatedPlate },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);  // Log the error for debugging
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

import connectDb from "@/app/lib/mongodb";
import plateNumber from "@/app/models/numberPlateSchema";
import { NextResponse } from "next/server";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    await connectDb();

    const { id } = params;
    const deletePlate = await plateNumber.findByIdAndDelete(id);

    if (!deletePlate) {
      return NextResponse.json(
        { message: "Error in deleting number plate" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Number plate deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting number plate:", error);
    return NextResponse.json(
      { message: "Internal Server Error! Please Try Again Later" },
      { status: 500 }
    );
  }
}

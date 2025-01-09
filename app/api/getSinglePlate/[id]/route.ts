import connectDb from "@/app/lib/mongodb";
import plateNumber from "@/app/models/numberPlateSchema";
import { NextResponse } from "next/server";

export async function GET(req: Request, { params }: { params: { id: string } }) {
    try {
        await connectDb();
        const { id } = params;
        const numberPlate = await plateNumber.findById(id);
        if (!numberPlate) {
            return NextResponse.json({ message: "This Plate Number Not Exist!" }, { status: 404 });
        }
        return NextResponse.json({ numberPlate, message: 'Number plate fetched successfully' }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error! Please Try Again Later" }, { status: 500 });
    }
}

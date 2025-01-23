import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();

        console.log(data);

        if (!data) {
            return NextResponse.json({ message: "Wallet not connected! Connect Wallet to continue" }, { status: 400 });
        }

        return NextResponse.json({ message: "Wallet data received successfully", data });
    } catch (error) {
        console.error("Error processing request:", error);
        return NextResponse.json({ message: "Server Error" }, { status: 500 });
    }
}

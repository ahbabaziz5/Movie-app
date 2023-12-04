import dbConn from "@/utils/dbConn";
import Contact from "@/models/contact";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        // Parse JSON from the request body
        const body = await req.json();

        // Establish the database connection
        await dbConn();

        // Create a new contact
        await Contact.create(body);

        // Send a success response
        return NextResponse.json({
            message: "Message sent successfully!",
        }, {
            status: 200
        });

    } catch (e) {
        // Handle errors and send an error response
        return NextResponse.json(
            { message: "Server error, please try again!" },
            { status: 500 }
        );
    }
}
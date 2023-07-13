import Prompt from "@models/prompt";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  try {
    await connectDB();

    const prompts = await Prompt.find({ creator: params.id }).populate(
      "creator"
    );
    return new Response(JSON.stringify(prompts));
  } catch (error) {
    return NextResponse.json({
      message: error,
      ok: false,
    });
  }
};

import Prompt from "@models/prompt";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectDB();
    const prompts = await Prompt.find().populate("creator");
    console.log("get called");
    return NextResponse.json({
      message: prompts,
      ok: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: error,
      ok: false,
    });
  }
};

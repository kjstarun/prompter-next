import Prompt from "@models/prompt";
import connectDB from "@utils/database";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectDB();

    const newPrompt = new Prompt({
      creator: userId,
      prompt: prompt,
      tag: tag,
    });

    await newPrompt.save();

    return NextResponse.json({
      message: "Prompt Saved",
      ok: true,
    });
  } catch (error) {
    // console.log(error);
    return NextResponse.json({
      message: "Failed saving prompt",
      ok: false,
    });
  }
};

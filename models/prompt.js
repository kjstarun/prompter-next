import { Schema, model, models } from "mongoose";

const PromptSchema = new Schema(
  {
    creator: {
      type: Schema.Types.ObjectId,
      ref: "PromptUsers",
    },
    prompt: {
      type: String,
      required: [true, "Prompt is required"],
    },
    tag: {
      type: String,
      required: [true, "Tag is required"],
    },
  },
  { timestamps: true }
);

const Prompt = models.Prompts || model("Prompts", PromptSchema);

export default Prompt;

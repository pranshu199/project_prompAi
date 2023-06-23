import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate("creator");
    if (!prompts || prompts.length === 0) {
      return new Response("Prompt Not Found", { status: 404 });
    }

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    console.error("Error retrieving prompts:", error);
    return new Response("Internal Server Error", { status: 500 });
  }
};
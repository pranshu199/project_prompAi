import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";

export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate("creator")
        if (!prompts) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompts), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

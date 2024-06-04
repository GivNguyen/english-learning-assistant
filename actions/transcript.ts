'use server'

import { 
    AzureKeyCredential,
    ChatRequestMessage,
    OpenAIClient
} from "@azure/openai";

async function transctipt(prevState: any, formData: FormData) {
    console.log("PREVIOUS STATE:", prevState);

    if (
        process.env.AZURE_API_KEY === undefined ||
        process.env.AZURE_ENDPOINT === undefined ||
        process.env.AZURE_DEPLOYMENT_NAME === undefined ||
        process.env.AZURE_DEPLOYMENT_COMPLETIONS_NAME === undefined
    ) {
        console.error("Azure credentials not set");
        return {
            sender: "",
            response: "Azure credentials not set",
        };
    }
    const file = formData.get("audio") as File

    if (file.size === 0) {
        return {
            sender: "",
            response: "No audio file provided"
        }
    }
    console.log(">>", file)

    const arrayBuffer = await file.arrayBuffer()
    const audio = new Uint8Array(arrayBuffer)

    // get audio transciption from azure whisper AI service
    console.log("== Transcibe Audio Sample")

    const client = new OpenAIClient(
        process.env.AZURE_ENDPOINT,
        new AzureKeyCredential(process.env.AZURE_API_KEY)
    )
}

export default transctipt;
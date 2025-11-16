import { Inngest} from "inngest";

 export const inngest = new Inngest({
    id: 'potato-trades',
    ai: { gemini: { apiKey: process.env.GEMINI_API_KEY! }}
})


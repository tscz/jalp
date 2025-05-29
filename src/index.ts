import dotenv from 'dotenv';
dotenv.config();

import { App } from "@slack/bolt";

import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages that contain "hello"
app.message(async ({ message, say }) => {
    app.logger.info(message)

    if (message.subtype === 'bot_message' || message.subtype === "message_changed" || message.subtype === "message_deleted" || message.subtype === "message_replied") return;

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: message.text || "error",
    });
    app.logger.info(response)

    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
    await say(response.text || "error")
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    app.logger.info('⚡️ Bolt app is running!');
})();
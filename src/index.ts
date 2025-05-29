import dotenv from 'dotenv';
dotenv.config();

import { App } from "@slack/bolt";

const app = new App({
    token: process.env.SLACK_BOT_TOKEN,
    signingSecret: process.env.SLACK_SIGNING_SECRET,
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    app.logger.info(message)

    if (message.subtype === 'bot_message' || message.subtype === "message_changed" || message.subtype === "message_deleted" || message.subtype === "message_replied") return;

    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
});

(async () => {
    // Start your app
    await app.start(process.env.PORT || 3000);

    app.logger.info('⚡️ Bolt app is running!');
})();
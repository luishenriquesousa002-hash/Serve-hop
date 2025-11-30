import express from "express";
import axios from "axios";

const app = express();
app.use(express.json());

// Seu Webhook do Discord
const WEBHOOK_URL = "https://discord.com/api/webhooks/1444784263705919661/_FuJBhA2smFxs2WL9Q2LPQp7DLTusnXHumH0wj57jYJ3lKsDddEv4zPLQyOdWcEDO13u";

// Rota para receber feedbacks do Roblox
app.post("/api/feedback", async (req, res) => {
    const { player, message } = req.body;

    if (!player || !message) {
        return res.status(400).json({ error: "Player e message são obrigatórios!" });
    }

    try {
        await axios.post(WEBHOOK_URL, {
            content: `📩 **Novo Feedback Recebido!**\n👤 Jogador: ${player}\n💬 Mensagem:

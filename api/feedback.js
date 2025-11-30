const express = require("express");
const router = express.Router();
const axios = require("axios");

const WEBHOOK_URL = "https://discord.com/api/webhooks/1444784263705919661/_FuJBhA2smFxs2WL9Q2LPQp7DLTusnXHumH0wj57jYJ3lKsDddEv4zPLQyOdWcEDO13u";

router.post("/", async (req, res) => {
  const { player, message } = req.body;

  if (!player || !message) {
    return res.status(400).json({ error: "player e message obrigatórios" });
  }

  await axios.post(WEBHOOK_URL, {
    content: `📩 **Feedback recebido**\n👤 Jogador: ${player}\n💬 Mensagem: ${message}`
  });

  return res.json({ status: "Enviado com sucesso!" });
});

module.exports = router;

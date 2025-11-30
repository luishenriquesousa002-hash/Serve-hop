const express = require("express");
const app = express();
const feedback = require("./api/feedback");

app.use(express.json());
app.use("/api/feedback", feedback);

app.get("/", (req, res) => {
  res.send("Servidor está ONLINE!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Rodando na porta " + PORT));

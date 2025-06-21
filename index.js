const express = require("express");
const fetch = require("node-fetch");
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/sim", async (req, res) => {
  const { num } = req.query;
  if (!num) return res.status(400).json({ error: "Missing 'num' parameter" });
  try {
    const resp = await fetch(`https://tmphpscripts.xyz/Tajammal/Sim.php?num=${num}`);
    const data = await resp.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch SIM data" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Proxy listening on port ${PORT}`));

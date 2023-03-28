import Express from "express";

const app = Express();

app.get("/planets", (req, res) => {
  res.json([{ name: "Giove" }, { name: "Saturno" }]);
});

export default app;
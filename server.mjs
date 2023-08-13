import express from "express";
import cors from "cors";
import path from "path";
const __dirname = path.resolve();

const app = express();
app.use(cors());

import apiv1Router from "./APIV1/main.mjs";

app.use(express.json());

app.use("/api/v1", apiv1Router);
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Example server listening on port ${PORT}`);
});

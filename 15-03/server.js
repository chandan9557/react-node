import express from "express";
import connectdata from "./db/connect.js";
import router from "./route/web.js";

import cors from "cors";
const app = express();
const port = 8000;
app.use(cors());
const database_url = "mongodb://localhost:27017";

connectdata(database_url);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router);

app.listen(port, () => {
  console.log(`server start at http://localhost:${port}`);
});

process.on("uncaughtException", (err) => {
  console.log(err);
});
import express from "express";
import { dbConn } from "../database/dbConnection.js";
import bootstrab from "./bootstrab.js";

const app = express();
const port = 3000;
app.use(express.json());
bootstrab(app);

app.listen(port, () => console.log(`app listening on port ${port}!`));

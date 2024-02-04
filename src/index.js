import express from "express";
import bodyParser from "body-parser";
import viewEngine from "./config/viewEngine";
import innitWebRoutes from "./route/web";
require("dotenv").config();

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
innitWebRoutes(app);

app.listen(8000, () => {
  console.log("backend-nodejs is running on the port: 8000");
});

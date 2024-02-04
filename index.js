const express = require("express");
const v1Router = require("./routes/v1");

const { PORT } = require("./utils/config");

const app = express();
app.use(express.json());

app.use("/", v1Router);

app.listen(PORT, () => {
  console.log("Listening on port ", PORT);
});

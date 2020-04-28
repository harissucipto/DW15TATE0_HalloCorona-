require("dotenv").config();
const express = require("express");
const router = require("./routes");
const cors = require("cors");

const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/v1", router);

app.listen(port, () => console.log(`Server c is running in port a ${port}`));

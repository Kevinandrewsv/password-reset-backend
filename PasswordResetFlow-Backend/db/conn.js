const mongoose = require("mongoose");

const DB = "mongodb+srv://kevinandrews1:kevin1234@password-reset-flow.ee0fzgc.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("DataBase Connected Successfully!!!"))
  .catch((errr) => {
    console.log(errr);
  });

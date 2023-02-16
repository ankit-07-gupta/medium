const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err.message));

mongoose.connection.on("connected", () => {
  console.log("Mongoose connected to Database");
});

mongoose.connection.on("error", (err) => {
  console.log(err.message);
});

mongoose.connection.on("disconnected", () => {
  console.log("Mongoose connection is disconnected.");
});

process.on("SIGINT", async () => {
  await mongoose.connection.close();
  process.exit(0);
});

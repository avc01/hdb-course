const mongoose = require("mongoose");

mongoose
  .connect(process.env.URI)
  .then(() => console.log("Database successfully connected"))
  .catch((error) =>
    console.log(`There was an error while connecting to database: ${error}`)
  );

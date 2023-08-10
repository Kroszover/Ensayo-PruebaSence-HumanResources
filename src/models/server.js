import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Midlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

routes();
app.listen(3000, () => console.log("Server running on port 3000"));
{
  this.app.use("/", (req, res) => {
    res.send("Hello World!");
  });
}

app.listen(3000, () => console.log("Server running on port 3000"));
//

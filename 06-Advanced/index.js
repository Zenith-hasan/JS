import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/hi",(req,res) => {
  res.send("Hi, This is HI Page...")
})

app.get("/about",(req,res) => {
  res.send("Hey You are in About page!!!!")
})
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});

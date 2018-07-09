require("dotenv").config();
const express = require("express"),
  app = express(),
  cors = require("cors"),
  { json } = require("body-parser"),
  stripe = require("stripe")(process.env.STRIPE_KEY),
  PORT = 3001;

app.use(json());
app.use(cors());

app.post("/charge", async (req, res) => {
  console.log(req.body);
  // try {
  //   let { status } =
  // await
  // stripe.charges
  //   .create({
  //     amount: 5000,
  //     currency: "usd",
  //     description: "An Example Charge",
  //     source: req.body
  //   })
  //   .then(res => console.log(res))
  //   .catch(err => console.log(err));
  //   res.json({ status });
  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

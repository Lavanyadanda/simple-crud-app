console.log("hello");
//if you run npm run server, where server is index.js file updated in pacage.json

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/product.model.js");
let port = 3000;
//load environment variables
dotenv.config();

//use  middleware for using json in express js,by default json is not supported
app.use(express.json());

//to send data in the form of 'forms lie form datause middleware 
app.use(express.urlencoded({extended:false}))
app.get("/", (req, res) => {
  res.send("hello from node apii");
});

app.post("/api/products", async (req, res) => {
  //     //console.log(req.body);
  //    res.send("Data received");
  // //    res.send(req.body);

  try {
    const product = await Product.create(req.body);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({}); //find all products in Product table and store in product variabel
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messgae: err.message });
  }
});

//get product with id
app.get("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ messgae: err.message });
  }
});

//update api
app.put("/api/product/:id", async (req, res) => {
  // Fixed async
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//delete a prodtc
app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const findproduct = await Product.findByIdAndDelete(id);
    if (!findproduct) {
      res.status(404).json({ messafe: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted succesfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

mongoose
  .connect(process.env.MONGO_URL)
  //mongoose.connect("mongodb+srv://admin:abcd1234@cluster0.dq9ihnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0mongodb+srv://admin:<abcd1234>@cluster0.dq9ihnd.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log("successfully connected to db"))
  .catch((err) => console.log("error in connection", err));
app.listen(3000, () => console.log(`server is running at ${port}`));

import express from "express";
import { ProductManager } from "./ProductManager.js";

const app = express();
const PORT = 8080;
const productManager = new ProductManager("productos.json");
let productos = [];

app.get("/", (req, res) => {
  res.send("Hola mundo");
});

app.get("/productos", async (req, res) => {
  const { limit } = req.query;
  try {
    let response = await productManager.getProduct();
    if (limit) {
      let tempArray = response.filter((data, e) => e < limit);
      res.json(tempArray.slice(0, limit));
    } else {
      res.json({ response, limit: false });
    }
  } catch (err) {
    console.log(err);
  }
});

app.get("/productos/:pid", async (req, res) => {
  const { pid } = req.params;

  let product = await new productManager.getProductById(pid);
  if (product) {
    res.json(product);
  } else {
    res.json({
      message: "el producto solicitado no existe",
    });
  }
});

app.listen(PORT, () => {
  console.log("corriendo el servidor en " + PORT);
});

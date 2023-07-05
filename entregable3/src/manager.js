import { ProductManager } from "./ProductManager.js";
import { __dirname } from "./utils.js";

console.log("dirname", __dirname);
let myFirstStore = new ProductManager("/productos.json");
myFirstStore.getProducts().then((data) => console.log(data));

// let mySecondProduct = new ProductManager("./productos.json");

// mySecondProduct.addProduct(
//   "Zapatillas Jordan Air XXXVII",
//   "Llevá la moda del básquet a tus días en la ciudad ",
//   220,
//   "Sin imagen",
//   "1",
//   12
// );

// mySecondProduct.addProduct(
//   "Zapatillas Urbanas Nike Court Vision",
//   "Para destacar",
//   150,
//   "Sin imagen",
//   "2",
//   30
// );

// mySecondProduct.getProduct().then((data) => console.log(data));
// mySecondProduct
//   .deleteProduct("586bf959-534f-4760-b19c-1b172598e626")
//   .then((data) => console.log("El producto fue eliminado", data));

// mySecondProduct.getProduct().then((data) => console.log("get products", data));
// mySecondProduct
//   .getProductById("1962d936-4bfc-4896-9f1f-ca5efe19f7d9")
//   .then((data) => console.log("get product by id", data));
// mySecondProduct
//   .updateProductoById("55ed9557-bcb1-4r5c-9v62-519831f2qd7n", {
//     title: "Zapatilla Yeezy",
//     description: "Nueva moda",
//     price: 190,
//     thumbnail: "foto.jpg",
//     code: 3,
//     stock: 9,
//   })
//   .then((data) => console.log("resultado", data));

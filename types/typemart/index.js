"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = __importDefault(require("./products"));
const productName = "fanny pack";
const product = products_1.default.find(
  (product) => product.name === productName
);
console.log(product);
if (product && product.preOrder === true) {
  console.log("We will send you a message when your product is on its way.");
}
let shipping;
let taxPercent;
let taxTotal;
let total;
const shippingAddress = "575 Broadway, New York City, New York";
if (
  Number(product === null || product === void 0 ? void 0 : product.price) >= 25
) {
  shipping = 0;
  console.log("Free Shipping for this Product");
} else {
  shipping = 5;
}
if (shippingAddress.match("New York")) {
  taxPercent = 0.1;
} else {
  taxPercent = 0.05;
}
if (!product) {
  throw new Error("Product not found");
  // or handle this case in another way that makes sense for your application
}
// Now it's safe to access product.price without optional chaining
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;
taxTotal = Number(product.price) * taxPercent;
total = Number(product.price) + taxTotal + shipping;

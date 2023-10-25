import products from "./products";

const productName: string = "fanny pack";

const product = products.find((product) => product.name === productName);

console.log(product);

if (product && product.preOrder === true) {
  console.log("We will send you a message when your product is on its way.");
}

let shipping: number;
let taxPercent: number;
let taxTotal: number;
let total: number;

const shippingAddress: string = "575 Broadway, New York City, New York";

if (Number(product?.price) >= 25) {
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

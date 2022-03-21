const { resolve } = require("path");
const { defineConfig } = require("vite");

import htmlPartialiser from "./src/js/utilities/_vite-html-partials.js";

module.exports = defineConfig({
  build: {
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products.html"),
        stores: resolve(__dirname, "stores.html"),
        category: resolve(__dirname, "category.html"),
        faq: resolve(__dirname, "faq.html"),
        contact: resolve(__dirname, "contact.html"),
        "single-product": resolve(__dirname, "single-product.html"),
        payment: resolve(__dirname, "payment.html"),
        checkout: resolve(__dirname, "checkout.html"),
        cart: resolve(__dirname, "cart.html"),
        story: resolve(__dirname, "our-story.html"),
        cannabis: resolve(__dirname, "cannabis-101.html")
      }
    }
  },
  server: { host: true },
  plugins: [htmlPartialiser()]
});

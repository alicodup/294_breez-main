/*
  Dependencies + Imports
*/
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => ({
  /*
    Variables
  */
  name: "categoryGrid",
  products: [
    {
      image: "/Mints/Breez-Mints-BerryDaytime.png",
      name: "Berry Daytime",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-BerryNighttime.png",
      name: "Berry Nighttime",
      price: "$30",
      tag: "Mint",
      type: "Sativa"
    },
    {
      image: "/Mints/Breez-Mints-Cinnamon1-1.png",
      name: "Cinnamon 1:1",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-CitrusRecovery.png",
      name: "Citrus Recovery",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-OriginalMint.png",
      name: "Original Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Hybrid"
    },
    {
      image: "/Mints/Breez-Mints-RoyalMint-Indica.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Indica"
    },
    {
      image: "/Mints/Breez-Mints-RoyalMint-Sativa.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Sativa"
    }
  ],

  /*
    Functions
  */
  viewMoreFlavours() {
    const cards = document.querySelectorAll(".flavours__card");

    cards.forEach((el, index) => {
      if (index < 4) {
        el.classList.remove("is-hidden");
      }
    });

    // Remove view more button when no more cards
    const card = document.querySelectorAll(".flavours__card");
    if (card.length === 0) {
      this.$el.classList.add("is-hidden");
    }
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.$nextTick(() => {
      const cards = document.querySelectorAll(".flavours__card");
      cards.forEach((el, index) => {
        if (index > 5) {
          el.classList.add("is-hidden");
        }
      });
    });
  }
});

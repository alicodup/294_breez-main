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
  name: "flavoursGrid",
  products: [
    {
      name: "Berry Daytime",
      image: "/Sprays/Breez-Sprays-BerryDaytime.png",
      hoverColor: "#FA6A85"
    },
    {
      name: "Royal Mint",
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      hoverColor: "#ABD9DD"
    },
    {
      name: "Cinnamon Relief",
      image: "/Mints/Breez-Mints-Cinnamon1-1.png",
      hoverColor: "#F43344"
    },
    {
      name: "Citrus Recovery",
      image: "/Sprays/Breez-Sprays-CitrusRecovery.png",
      hoverColor: "#FEB561"
    },
    {
      name: "Berry Nighttime",
      image: "/Sprays/Breez-Sprays-BerryNighttime.png",
      hoverColor: "#AB5178"
    },
    {
      name: "Hybrid",
      image: "/Tablets/Breez-Tablets-Hybrid.png",
      hoverColor: "#ABD9DD"
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

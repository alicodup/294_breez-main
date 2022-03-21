/*
  Dependencies + Imports
*/
import Swiper from "swiper";
import gsap from "gsap";

export default () => ({
  /*
    Variables
  */
  name: "productSwiper",
  swiper: null,
  currentSlider: 0,

  // add products to feature products sliders
  essentials: [
    {
      image: "/Sprays/Breez-Sprays-BerryDaytime.png",
      name: "Berry Nighttime",
      price: "$30",
      tag: "Spray",
      type: "Sativa"
    },
    {
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-Cinnamon1-1.png",
      name: "Cinnamon Relief",
      price: "$30",
      tag: "Mint",
      type: "Sativa"
    },
    {
      image: "/Sprays/Breez-Sprays-CitrusRecovery.png",
      name: "Citrus Recovery",
      price: "$30",
      tag: "Spray",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-BerryDaytime.png",
      name: "Berry Daytime",
      price: "$30",
      tag: "Spray",
      type: "Sativa"
    },
    {
      image: "/Mints/Breez-Mints-OriginalMint.png",
      name: "Original Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    }
  ],
  newly: [
    {
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      name: "Royal Mint",
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
      image: "/Sprays/Breez-Sprays-CitrusRecovery.png",
      name: "Citrus Recovery",
      price: "$30",
      tag: "Spray",
      type: "Active"
    },
    {
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    }
  ],
  popular: [
    {
      image: "/Mints/Breez-Mints-RoyalMint-Hybrid.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-BerryDaytime.png",
      name: "Berry Nighttime",
      price: "$30",
      tag: "Spray",
      type: "Sativa"
    },
    {
      image: "/Mints/Breez-Mints-OriginalMint.png",
      name: "Original Mint",
      price: "$30",
      tag: "Mint",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-CitrusRecovery.png",
      name: "Citrus Recovery",
      price: "$30",
      tag: "Spray",
      type: "Active"
    }
  ],

  toggle(state) {
    this.currentSlider = state;
    this.checkSlider();
  },

  gsapSet(el) {
    this.$nextTick(() => {
      const products = el.querySelectorAll(".lg-feature");

      products.forEach((product) => {
        gsap.set(product, { opacity: 0, y: 10 });
      });
    });
  },

  gsapEntry(el) {
    this.$nextTick(() => {
      const products = el.querySelectorAll(".lg-feature");
      gsap.to(products, {
        opacity: 1,
        y: 0,
        stagger: 0.175,
        ease: "power2.out"
      });
    });
  },

  /*
    Functions
  */
  checkSlider() {
    if (this.swiper) this.swiper.destroy();

    this.$nextTick(() => {
      if (window.matchMedia("(max-width: 1023px)").matches) {
        // Mobile tablet screens - init swiper
        this.swiper = new Swiper(this.$root.querySelector(".c-swiper"), {
          grabCursor: true,
          preloadImages: true,
          preventClicks: true,
          preventClicksPropagation: true,
          slidesPerView: "auto",
          noSwiping: true,
          noSwipingClass: "swiper-no-swiping"
        });
      } else {
        // Desktop - destroy swiper
        if (this.swiper) this.swiper.destroy();
      }
    });
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.$nextTick(() => {
      this.checkSlider();
    });
  }
});

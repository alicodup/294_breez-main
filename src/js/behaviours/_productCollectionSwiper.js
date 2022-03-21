/*
  Dependencies + Imports
*/
import Swiper, { Navigation, Pagination } from "swiper";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default () => ({
  /*
    Variables
  */
  name: "productCollectionSwiper",
  swiper: null,
  mints: [
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
  sprays: [
    {
      image: "/Sprays/Breez-Sprays-BerryDaytime.png",
      name: "Berry Daytime",
      price: "$30",
      tag: "Spray",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-BerryNighttime.png",
      name: "Berry Nighttime",
      price: "$30",
      tag: "Spray",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-Cinnamon1-1.png",
      name: "Cinnamon 1:1",
      price: "$30",
      tag: "Spray",
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
      image: "/Sprays/Breez-Sprays-OriginalMint.png",
      name: "Original Mint",
      price: "$30",
      tag: "Spray",
      type: "Active"
    },
    {
      image: "/Sprays/Breez-Sprays-RoyalMint-Hybrid.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Spray",
      type: "Hybrid"
    },
    {
      image: "/Sprays/Breez-Sprays-RoyalMint-Indica.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Spray",
      type: "Indica"
    },
    {
      image: "/Sprays/Breez-Sprays-RoyalMint-Sativa.png",
      name: "Royal Mint",
      price: "$30",
      tag: "Spray",
      type: "Sativa"
    }
  ],
  tablets: [
    {
      image: "/Tablets/Breez-Tablets-Hybrid.png",
      name: "Hybrid",
      price: "$30",
      tag: "Tablet",
      type: "Active"
    },
    {
      image: "/Tablets/Breez-Tablets-Indica.png",
      name: "Indica",
      price: "$30",
      tag: "Tablets",
      type: "Active"
    },
    {
      image: "/Tablets/Breez-Tablets-Nighttime.png",
      name: "Nighttime",
      price: "$30",
      tag: "Tablets",
      type: "Active"
    },
    {
      image: "/Tablets/Breez-Tablets-Recovery-CA.png",
      name: "Recovery CA",
      price: "$30",
      tag: "Tablets",
      type: "Active"
    },
    {
      image: "/Tablets/Breez-Tablets-Recovery.png",
      name: "Recovery",
      price: "$30",
      tag: "Tablets",
      type: "Active"
    },
    {
      image: "/Tablets/Breez-Tablets-Relief1-1.png",
      name: "Relief 1:1",
      price: "$30",
      tag: "Tablets",
      type: "Hybrid"
    },
    {
      image: "/Tablets/Breez-Tablets-Sativa.png",
      name: "Sativa",
      price: "$30",
      tag: "Tablets",
      type: "Indica"
    }
  ],

  /*
    Functions
  */
  initSwiper() {
    const nextBtn = document.querySelectorAll(".swiper-button-next"),
      prevBtn = document.querySelectorAll(".swiper-button-prev"),
      productSwipers = document.querySelectorAll(".c-swiper");

    productSwipers.forEach((slider, index) => {
      let sliderLength = slider.children[0].children.length;
      let result = sliderLength > 1 ? true : false;

      this.swiper = new Swiper(slider, {
        modules: [Navigation, Pagination],
        grabCursor: true,
        preloadImages: true,
        preventClicks: true,
        preventClicksPropagation: true,
        slidesPerView: "auto",
        noSwiping: true,
        noSwipingClass: "swiper-no-swiping",
        navigation: {
          nextEl: nextBtn[index],
          prevEl: prevBtn[index]
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerGroupAuto: false
          },
          // when window width is >= 766px
          766: {
            slidesPerGroupAuto: true,
            slidesPerGroup: 1
          }
        }
      });
    });
  },

  /*
    Init (automatically called on DOM load)
  */
  init() {
    this.initSwiper();
  }
});

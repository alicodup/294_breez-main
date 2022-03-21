/*
  Dependencies + Imports
*/
import Alpine from "alpinejs";
import collapse from "@alpinejs/collapse";
import intersect from "@alpinejs/intersect";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

window.gsap = gsap;

/*
  Behaviours 🕹
*/
import ageGate from "./behaviours/_ageGate";
Alpine.data("ageGate", ageGate);

import productSwiper from "./behaviours/_productSwiper";
Alpine.data("productSwiper", productSwiper);

import flavoursGrid from "./behaviours/_flavoursGrid";
Alpine.data("flavoursGrid", flavoursGrid);

import categoryGrid from "./behaviours/_categoryGrid";
Alpine.data("categoryGrid", categoryGrid);

import productCollectionSwiper from "./behaviours/_productCollectionSwiper";
Alpine.data("productCollectionSwiper", productCollectionSwiper);

import accordion from "./behaviours/_accordion";
Alpine.data("accordion", accordion);

import quantity from "./behaviours/_quantity";
Alpine.data("quantity", quantity);

import singleProductImages from "./behaviours/_singleProductImages";
Alpine.data("singleProductImages", singleProductImages);

import formatsParallax from "./behaviours/_formatsParallax";
Alpine.data("formatsParallax", formatsParallax);

import storeLocator from "./behaviours/_storeLocator";
Alpine.data("storeLocator", storeLocator);

import mapMarkers from "./behaviours/_mapMarkers";
Alpine.data("mapMarkers", mapMarkers);

import findPopup from "./behaviours/_findPopup";
Alpine.data("findPopup", findPopup);

import menu from "./behaviours/_menu";
Alpine.data("menu", menu);

import filterDropdown from "./behaviours/_filterDropdown";
Alpine.data("filterDropdown", filterDropdown);

import hpGallery from "./behaviours/_hpGallery";
Alpine.data("hpGallery", hpGallery);

import testimonialSwiper from "./behaviours/_testimonialSwiper";
Alpine.data("testimonialSwiper", testimonialSwiper);

// Expose to window for Alpine
window.Alpine = Alpine;

// 🌐 Global Store
Alpine.store("global", {
  /*
    Variables
  */
  menu: false,
  findModal: false,
  filterModal: false,
  navLink: false,

  /*
    Functions
  */

  // Store locator modal
  toggleFindModal() {
    this.findModal = !this.findModal;
  },

  // Stores > Filter modal
  toggleFilterModal() {
    this.filterModal = !this.filterModal;

    const filterModalComponent = document.querySelector(".c-filter-modal");
    // body scroll lock
    if (this.filterModal) {
      // open - disable body scroll
      disableBodyScroll(filterModalComponent);
    } else {
      // Close - allow site access
      enableBodyScroll(filterModalComponent);
    }
  },

  activeNavLink() {
    const navLinks = document.querySelectorAll(".c-secondary-nav a");
    this.navLink = !this.navLink;

    navLinks.forEach((link) => {
      if (this.navLink) {
        link.classList.add(".is-active");
      }
    });
  },

  init() {
    console.log("Breez 🔥");
  }
});

// Alpine plugins
Alpine.plugin(collapse);
Alpine.plugin(intersect);

// Initialise Alpine
Alpine.start();

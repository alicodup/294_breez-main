# 294_breez

## Approach

Modular build - JS split into ‘behaviours’ that can be reused across the site

[Utility First CSS](https://tailwindcss.com/docs/utility-first) - with custom config prepared to handover.

Static site - Each page has its own html file, content blocks are split into their own partial files that can be easily migrated to a conventional CMS pattern (`include`, `get-template-part()` etc.)

## FE Static Site build process

Vite 2.8.0 [https://vitejs.dev/guide/](https://vitejs.dev/guide/)

## Build dependencies

Tailwind 3.0.19 [https://tailwindcss.com/](https://tailwindcss.com/)

Area17 Tailwind Plugins (For flex grid column utilities) [http://tailwind-plugins.dev.area17.com/](http://tailwind-plugins.dev.area17.com/)

## Frontend dependencies

Alpine.js [https://alpinejs.dev/start-here](https://alpinejs.dev/start-here)

Swiper.js [https://swiperjs.com/](https://swiperjs.com/)

Gsap [https://greensock.com/get-started/](https://greensock.com/get-started/)

## Getting Started

```jsx
npm install
npm run dev
```

import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetUno,
  presetWebFonts,
  presetTagify,
  // presetMini
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
  transformerCompileClass,
  // transformerAttributifyJsx
} from 'unocss';

export default defineConfig({
  shortcuts: [
    ['btn', 'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50'],
    ['icon-btn', 'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600'],
    [
      "pr",
      "relative"
    ],
    [
      "pa",
      "absolute"
    ],
    [
      "pf",
      "fixed"
    ],
    [
      "p-c",
      "pa top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
    ],
    [
      "f-c",
      "flex justify-center items-center"
    ],
    [
      "f-jc-col",
      "f-c flex-col"
    ],
    [
      "f-jc",
      "flex justify-center"
    ],
    [
      "f-ic",
      "flex items-center"
    ],
    [
      "f-jc-ic",
      "flex justify-center items-center"
    ],
    [
      "f-js",
      "flex justify-start"
    ],
    [
      "f-js-ic",
      "flex justify-start items-center"
    ],
    [
      "f-js-ie",
      "flex justify-start items-end"
    ],
    [
      "f-je",
      "flex justify-end"
    ],
    [
      "f-je-ic",
      "flex justify-end items-center"
    ],
    [
      "f-jb",
      "flex justify-between"
    ],
    [
      "f-jb-ic",
      "flex justify-between items-center"
    ],
    [
      "f-ja",
      "flex justify-around"
    ],
    [
      "f-ja-ic",
      "flex justify-around items-center"
    ],
    [
      "f-jw",
      "flex justify-wrap"
    ],
    [
      "f-jwr",
      "flex justify-wrap-reverse"
    ],
    [
      "f-ic",
      "flex items-center"
    ],
    [
      "f-jc-ic-col",
      "flex justify-center items-center flex-col"
    ],
    [
      "trans",
      "transition-all-350 ease-linear"
    ],
    [
      "text",
      "c-text dark:c-text-dark"
    ],
    [
      "bg",
      "trans bg-bg dark:bg-bg-dark"
    ],
    [
      "base",
      "trans text"
    ],
    [
      "icon",
      "w-5.5 h-5.5 cursor-pointer select-none transition-opacity-300 ease-in-out text"
    ],
    [
      "icon-btn",
      "icon color-inherit op64 hover-op100 hover-color-teal-500 dark-hover-color-inherit"
    ],
    [
      "icon-link",
      "icon color-inherit op64 hover:op100 hover-text-red-300 dark-hover-color-inherit"
    ]
  ],
  presets: [
    presetUno(),
    presetWind(),
    presetAttributify({
      prefix: 'un-',
      prefixedOnly: true,
    }),
    presetIcons({
      scale: 1.2,
      warn: true,
    }),
    presetTypography(),
    presetWebFonts({
      fonts: {
        sans: 'DM Sans',
        serif: 'DM Serif Display',
        mono: 'DM Mono',
      },
    }),
    // @ts-ignore
    presetTagify({ prefix: 'un-' }),
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
    transformerCompileClass(),
  ],
  safelist: 'prose prose-sm m-auto text-left'.split(' '),
});

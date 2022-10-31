export default {
  head: {
    title: "currency-converter",
    htmlAttrs: {
      lang: "ru",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: true,
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&family=Rubik:wght@400;500;700&display=swap",
      },
    ],
  },

  css: ["@/assets/css/main.css"],

  plugins: [
    '~plugins/vue-bem-cn',
  ],

  components: true,

  buildModules: ["@nuxt/postcss8"],

  modules: [
    "@nuxtjs/axios",
  ],

  axios: {
    baseURL: process.env.API_URL,
    proxyHeaders: false,
    credentials: false,
  },

  build: {
    babel: {
      compact: false,
      presets() {
        return [
          ["@nuxt/babel-preset-app", {
            useBuiltIns: 'entry',
            corejs: { version: 3 }
          }]
        ]
      },
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
};

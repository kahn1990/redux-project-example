require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  apiHost: process.env.APIHOST || 'localhost',
  apiPort: process.env.APIPORT,
  app: {
    title: 'React Redux Example',
    description: 'All the modern best practices in one example.',
    head: {
      titleTemplate: '瑞博科技: %s',
      meta: [
        {name: 'description', content: 'All the modern best practices in one example.'},
        {name: 'author-name', content: 'kahn1990'},
        /* {name: 'flexible', content: 'initial-dpr=2'}, */
        {name: 'apple-mobile-web-app-capable', content: 'yes'},
        {name: 'apple-touch-fullscreen', content: 'yes'},
        {name: 'format-detection', content: 'telephone=no,email=no'},
        {name: 'App-Config', content: 'fullscreen=yes,useHistoryState=yes,transition=yes'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'},
        {charset: 'utf-8'},
        {property: 'og:site_name', content: 'React Redux Example'},
        {property: 'og:locale', content: 'en_US'},
        {property: 'og:title', content: 'React Redux Example'},
        {property: 'og:description', content: 'All the modern best practices in one example.'},
        {property: 'og:card', content: 'summary'},
        {property: 'og:site', content: '@erikras'},
        {property: 'og:creator', content: '@erikras'},
        {property: 'og:title', content: 'React Redux Example'},
        {property: 'og:description', content: 'All the modern best practices in one example.'},
        {property: 'og:image', content: './logo.jpg'},
        {property: 'og:image:width', content: '200'},
        {property: 'og:image:height', content: '200'}
      ],
      script: [
        {src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.2/??flexible_css.js,flexible.js'}
      ],
      link: [
        {href: './logo.jpg', rel: 'Shortcut Icon', type: 'image/x-icon'}
      ]
    }
  }

}, environment);

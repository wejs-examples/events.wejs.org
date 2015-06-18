
module.exports.clientside = {
  publicVars: {
    appLogo: '/core/images/logo.png',
    appName: 'We.js site',
    appAbout: 'A We.js Blog Theme with Start Bootstrap clean theme',

    // default background images
    blogHomeBg: '/core/images/bgs/home-bg.jpg',
    blogArticlesBg: '/core/images/bgs/post-bg.jpg',

    // footer social links
    socialLinks: {
      twitter: 'https://twitter.com/we_js',
      github: 'https://github.com/wejs/we'
    },

    menus: {
      // your app main menu
      main: {
        links: [
          {
            text: 'Home',
            type: 'page',
            model: 'home'
          },
          {
            text: 'Get started',
            type: 'resource',
            model: 'wejsdoc',
            modelId: 'we'
          },
          // {
          //   text: 'Features',
          //   type: 'resource',
          //   model: 'page',
          //   modelId: '3'
          // },
          // {
          //   text: 'Forum',
          //   type: 'page',
          //   model: 'groups'
          // },
          {
            text: 'Github',
            external: true,
            href: 'https://github.com/wejs/we',
            target: '_blank'
          }
        ]
      }
    }
  } // end publicVars
};
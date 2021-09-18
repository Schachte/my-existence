module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "blog",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Montserrat\:700`,
          `Lora\:400i`,
          `Inconsolata`,
          `Source Sans Pro\:200,400,600,700,700i`

        ],
      },
      display: 'swap'
    },
    'gatsby-transformer-remark',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      }
    },
    {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        {
          resolve: `gatsby-remark-prismjs`,
          options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              showLineNumbers: true,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: "superscript",
                  extend: "javascript",
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: "root",
                host: "localhost",
                global: false,
              },
              escapeEntities: {},
            },
          },
        ],
      }
    }
  ],
};

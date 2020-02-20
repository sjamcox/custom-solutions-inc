require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `custom-solutions-inc`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Custom Solutions Inc.`,
        short_name: `CSI`,
        start_url: `/`,
        background_color: `#eCe2d0`,
        theme_color: `#eCe2d0`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
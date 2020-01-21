require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `custom-solutions-inc`,
        accessToken: `${process.env.API_KEY}`,
        linkResolver: ({ node, key, value }) => post => `/${post.uid}`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Gelasio`,
            variants: [`400`,`400i`, `700`,`700i`],
          },
          {
            family: `Roboto`,
            variants: [`400`, `400i`]
          },
        ],
      },
    },
  ],
}
var dotenv = require("dotenv");
dotenv.config();

// const { spaceId, accessToken, snipcart } = process.env;

module.exports = {
  siteMetadata: {
    title: `Alternatura`,
    description: `E-Commerce site with Gatsby and React`,
    author: '',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Alternatura`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/Alternatura.png`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.spaceId,
        accessToken: process.env.accessToken
      }
    },
    {
      resolve: "gatsby-plugin-snipcartv3",
      options: {
        apiKey: process.env.snipcart,
        autopop: true,
      },
    },
  ],
}

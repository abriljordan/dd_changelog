module.exports = {
  siteMetadata: {
    url: `www.datadesign.io`,
    title: `DataDesign Changelog`,
    description: `Changelog for DataDesign.`,
    author: `The DataDesign Team`,
    logo: `logo-icon.png`,
    locale: `en`,
    themeConfig: {
			themeSwitcher: true, // enable theme switcher
			loadMorePosts: false, // enable load more posts
			postsPerPage: 10, // posts to display per page
			postsIncrementBy: 5 // posts increment value
		}
  },
  plugins: [
    {
      resolve: `gatsby-theme-changelog`,
			options: {
				basePath: "", // base url "/"
				tagsPath: "", // tags url "/tags"
				contentPath: `/content/posts`, // content url for posts"/content/posts"
				assetPath: "" //  assets url "/content/assets"
			},
    },
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
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

const path = require(`path`)

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      return createPage({
        path: `${node.frontmatter.slug}`,
        component: path.resolve("./src/templates/post-template.js"),
        context: { id: node.id },
      })
    })
  })
}

const path = require(`path`);
const { createFilePath } = require("gatsby-source-filesystem");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const value = createFilePath({ node, getNode, basePath: "blog/" });
    console.log(`/blog${value}`);
    createNodeField({
      name: "slug",
      node,
      value: `/blog${value}`,
    });
  }
};

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions;

  await graphql(`
    {
      allMdx {
        nodes {
          slug
        }
      }
    }
  `).then((result) => {
    result.data.allMdx.nodes.forEach(({ slug }) => {
      return createPage({
        path: `blog/${slug}`,
        component: path.resolve("./src/templates/post-template.js"),
        context: { slug },
      });
    });
  });
};

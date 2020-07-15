const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    const TiendaTemplate=  path.resolve('src/templates/store.js');
    const StoreTemplate = path.resolve('src/templates/details.js');
    const BlogTemplate = path.resolve('src/templates/blogDetails.js');
    resolve(
      graphql(`
        {
          allContentfulAuthor{
            edges{
              node{
                id
                slug
              }
            }
          }
          allContentfulProduct{
            edges{
              node{
                id
                slug
              }
            }
          }
          allContentfulBlogs {
            edges {
              node {
                id
                slug
              }
            }
          }
        }
      `).then((result) => {
        if (result.errors) {
          reject(result.errors);
        }
        result.data.allContentfulAuthor.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: TiendaTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        result.data.allContentfulProduct.edges.forEach((edge) => {
          createPage({
            path: edge.node.slug,
            component: StoreTemplate,
            context: {
              slug: edge.node.slug,
            },
          });
        });
        result.data.allContentfulBlogs.edges.forEach((data) => {
          createPage({
            path: data.node.slug,
            component: BlogTemplate,
            context: {
              slug: data.node.slug,
            },
          });
        });
      }),
    );
  });
};

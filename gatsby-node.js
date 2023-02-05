const path = require("path")

// create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      CaseStudies: allStrapiCaseStudies {
        nodes {
          slug
        }
      }
    }
  `)

  result.data.CaseStudies.nodes.forEach(caseStudy => {
    createPage({
      path: `/case-studies/${caseStudy.slug}`,
      component: path.resolve(`src/templates/blog-template.js`),
      context: {
        slug: caseStudy.slug,
      },
    })
  })
}

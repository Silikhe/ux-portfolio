import React from "react"
import Title from "./Title"
import Project from "./Project"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"

const Projects = () => {
  const query = graphql`
    {
      allStrapiCaseStudies {
        nodes {
          id
          project_name
          theme
          strapiId
          short_description
          company_logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          project_cover {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          contribution {
            id
            percentage
            skill
          }
          context
          featured
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const {
    allStrapiCaseStudies: { nodes: CaseStudies },
  } = data

  console.log(CaseStudies);

  return <h2>projects list</h2>
}

export default Projects

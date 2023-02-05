import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Project from "../components/Project"
import Blogs from "../components/Blogs"
import Article from "../components/Article"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import SingleProject from "../components/SingleProject"
import Projects from "../components/Projects"
export default ({data}) => {



  // const {allStrapiCaseStudies:{nodes:CaseStudies}}
  return (
    <Layout>
      <Hero />
      <SingleProject  />
      <Article />
      <Jobs />
      <Projects/>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiCaseStudies(filter: { featured: { eq: true } }) {
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

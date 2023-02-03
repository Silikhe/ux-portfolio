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
export default () => {
  return (
    <Layout>
      <Hero />
      <Project/>
      <Article/>
      <Jobs/>
      <Contact/>
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

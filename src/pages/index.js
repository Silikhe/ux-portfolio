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
export default () => {
  return (
    <Layout>
      <Hero />
      <SingleProject/>
      <Article/>
      <Jobs/>
      <Contact/>
      <Footer/>
    </Layout>
  )
}
// ...GatsbyImageSharpFluid

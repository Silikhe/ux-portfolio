import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

const query = graphql`
  {
    file(relativePath: { eq: "profile_image.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <h1 className="hero-title">
              Product Designer
            </h1>
            <div className="underline" />
            <div className="p-content">
              <p>
                Designing for impact, crafting innovative solutions from the
                heart of Nairobi, available for consulting and ready to elevate
                your user experience
              </p>
            </div>
            <div className="p-content">
              <p>
                @<a href="mailto:silikhesilas@gmail.com">silikhesilas@gmail.com</a>
              </p>
            </div>
          </div>
        </article>
        <div className="image-info">
          <Image fluid={fluid} className="hero-img" />
        </div>
      </div>
    </header>
  )
}

export default Hero
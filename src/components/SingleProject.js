import React from "react"
import { AiOutlineCaretRight } from "react-icons/ai"
import { graphql } from "gatsby"
import { useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import { Link } from "gatsby"

export default function SingleProject() {
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
          topic
          slug
        }
      }
    }
  `

  const data = useStaticQuery(query)
  const {
    allStrapiCaseStudies: { nodes: CaseStudies },
  } = data

  const [value, setValue] = React.useState(0)
  const {
    id,
    project_name,
    theme,
    strapiId,
    short_description,
    company_logo,
    project_cover,
    contribution,
    context,
    featured,
    topic,
    slug,
  } = CaseStudies[value]

  // console.log(CaseStudies)

  return (
    <div>
      {/* {CaseStudies.map((item, index) => {
        return ( */}
      <div className="project-container">
        <div className="project">
          <div className="project-header">
            <p>BookMarked Projects</p>
            <div className="divider"></div>
          </div>
          <div className="grid-container">
            {CaseStudies.map((item, index) => {
              return (
                <Link to={`/case-studies/${slug}`} key={id}>
                  <div className="grid-project card">
                    <div className="project-content ">
                      <div className="card-header" key={index}>
                        <p className="article-title">{item.project_name}</p>
                        <div className="card-cartegory">
                          <p className="date">{item.topic} </p>
                          <div className="dot"></div>
                          <p className="date">{item.context}</p>
                        </div>
                      </div>
                      <div className="card-body">
                        <p className="article-subtitle">
                          {item.short_description}
                          {/* {item.contribution.map(item => {
                          return <div>{item.skill}</div>
                        })} */}
                        </p>
                        <button
                          className="btn"
                          style={{ border: `${item.theme}` }}
                        >
                          View Case Study
                          <AiOutlineCaretRight />{" "}
                        </button>
                      </div>
                    </div>
                    <div
                      className="project-image"
                      // style={{
                      //   border: `${item.theme}`,
                      //   cursor: "pointer",
                      //   transition: "0.3s",
                      //   "&:hover": {
                      //     boxShadow: ` 7px 7px 3px 0px ${item.theme}`,
                      //     border: `${item.theme}`,
                      //   },
                      // }}
                    >
                      <Image
                        className="img"
                        fluid={project_cover.childImageSharp.fluid}
                      />
                      {console.log(project_cover.childImageSharp.fluid)}
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
          <div>
            <button className="btn btn-project">view the archive</button>
          </div>
        </div>
      </div>
      {/* )
      })} */}
    </div>
  )
}

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"
import { duration } from "@material-ui/core"
import ProgressBar from "../components/ProgressBar"
import Image from "gatsby-image"

const ComponentName = ({ data }) => {
  console.log(data)
  const {
    context,
    project_name,
    theme,
    company_logo,
    project_cover,
    contribution,
    project_type,
    about_company,
    company_link,
    individual_contribution,
    role,
    contributors,
    duration,
    design_challenge,
    case_study,
  } = data.caseStudy
  return (
    <Layout>
      <div className="case-study">
        <div className="case-header">
          <div class="case-bunner">
            <div class="burne-overlay">
              <div className="case-burner-item"></div>
              <p className="artice-subtitle case-type">{project_type}</p>
              <p className="article-title">{project_name}</p>
            </div>
            <Image
              className="img"
              fluid={project_cover.childImageSharp.fluid}
            />
            {/* <img
              src="https://invotech.co/blog/wp-content/uploads/2020/02/image_processing20200210-10615-9mhw3e-1200x675.png"
              alt=""
            /> */}
          </div>
          <div className="case-basic-info">
            <p className="article-subtitle">
              <span>Role: </span> {role}
            </p>

            <p className="article-subtitle">
              <span>Context: </span>
              {context}
            </p>
            <p className="article-subtitle">
              <span>Duration: </span>
              {duration}
            </p>
          </div>
          <div className="case-contribution">
            <div className="case-contribut">
              <p className="article-title">My individual contribution</p>
              <p className="article-subtitle">{individual_contribution}</p>
            </div>
            <div className="case-skills">
              {contribution.map(item => {
                return (
                  <div className="case-skill" key={item.id}>
                    <div className="">
                      <a className="article-subtitle">{item.skill}</a>
                    </div>
                    <div class="progress-container">
                      <ProgressBar percentage={60} color={theme} />
                      {/* <div class="progress-bar"></div> */}
                    </div>
                  </div>
                )
              })}
              {/* <div className="case-skill">
                <div className="">
                  <a className="article-subtitle">Navigate to website</a>
                </div>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <div className="">
                  <a className="article-subtitle">Navigate to website</a>
                </div>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <div className="">
                  <a className="article-subtitle">Navigate to website</a>
                </div>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="client-details">
            <p style={{ color: `${theme}` }}>Client Details</p>
            <div>
              <p className="article-title">
                Understanding the<span>Client</span>.
              </p>
              <div className="case-contribution">
                <div className="case-contribut">
                  <div>
                    <p className="case-title">About</p>
                    <p className="article-subtitle">{about_company}</p>
                    <p className="case-title">Design Challenge</p>
                    <p className="article-subtitle">{design_challenge}</p>
                  </div>
                </div>
                <div className="case-skills">
                  <div className="case-img">
                    {/* <img
                      src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png"
                      alt="company logo"
                    /> */}
                    <Image
                      className="img"
                      fluid={company_logo.childImageSharp.fluid}
                    />
                  </div>
                  <div>
                    {company_link.map(item => {
                      return (
                        <div className="case-company" key={item.id}>
                          <div className="case-link">
                            <p className="">{item.link_name}</p>
                          </div>
                          <div className="case-link">
                            <a href={item.url} className="">
                              {item.link_holder}
                            </a>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-basic-info">
            {contributors.map(item => {
              return (
                <div className="case-contributer" key={item.id}>
                  <h2>{item.percentage}</h2>
                  <p className="article-subtitle">{item.skill}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className="case-study-main">
          <Image
            fluid={case_study.childImageSharp.fluid}
            quality={100}
            className="img"
            // resize={((width: "1000"), (height: 1000), (quality: 100))}
            alt="your alt text"
          />
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f43b9108902513.5fcfd248e34aa.jpg"
            alt=""
          />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleCase($slug: String) {
    caseStudy: strapiCaseStudies(slug: { eq: $slug }) {
      id
      project_name
      theme
      strapiId
      short_description
      company_logo {
        childImageSharp {
          fluid(maxWidth: 1080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      project_cover {
        childImageSharp {
          fluid(maxWidth: 4080, quality: 100) {
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
      about_company
      company_link {
        link_holder
        link_name
        url
        id
      }
      individual_contribution
      role
      project_type
      contributors {
        id
        skill
        percentage
      }
      duration
      design_challenge
      case_study {
        childImageSharp {
          fluid(maxWidth: 5080, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

export default ComponentName

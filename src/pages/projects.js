import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
// ...GatsbyImageSharpFluid

const ProjectsPage = () => {
  return (
    <Layout>
      <div className="case-study">
        <div className="case-header">
          <div class="case-bunner">
            <div class="burne-overlay">
              <div className="case-burner-item"></div>
              <p className="artice-subtitle case-type">Passion Project</p>
              <p className="article-title">Regsco Decorators</p>
            </div>
            <img
              src="https://invotech.co/blog/wp-content/uploads/2020/02/image_processing20200210-10615-9mhw3e-1200x675.png"
              alt=""
            />
          </div>
          <div className="case-basic-info">
            <p className="article-subtitle">
              <span>Role:</span> Product Designer
            </p>

            <p className="article-subtitle">
              <span>Context:</span> Edu-Tech
            </p>
            <p className="article-subtitle">
              <span>Duration:</span> Feb 2015 - Aug 2016
            </p>
          </div>
          <div className="case-contribution">
            <div className="case-contribut">
              <p className="article-title">My individual contribution</p>
              <p className="article-subtitle">
                I was hired as the only designer on the team, working under the
                product team, while also assisting in marketing design efforts.
                I reported directly to the VP of product and the CEO (who was a
                design advocate). Being a part of a team where leadership was
                built on the understanding that great design is important,
                allowed me to create my best work. I was originally hired to
                work on the marketing landing pages, banner ads and social media
                collateral, but quickly moved into a product design role.
              </p>
            </div>
            <div className="case-skills">
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
              </div>
              <div className="case-skill">
                <div className="">
                  <a className="article-subtitle">Navigate to website</a>
                </div>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="client-details">
            <p>Client Details</p>
            <div>
              <p className="article-title">Understanding the company.</p>
              <div className="case-contribution">
                <div className="case-contribut">
                  <div>
                    <p className="case-title">About</p>
                    <p className="article-subtitle">
                      VacayBug is about authenticity and ease of exploration.
                      Create a “Passport” and document your favorite trips and
                      favorite spots along the way. Then share those insights
                      and recommendations with others while searching for unique
                      places to explore yourself.
                    </p>
                    <p className="case-title">Design Challenge</p>
                    <p className="article-subtitle">
                      VacayBug is about authenticity and ease of exploration.
                      Create a “Passport” and document your favorite trips and
                      favorite spots along the way. Then share those insights
                      and recommendations with others while searching for unique
                      places to explore yourself.
                    </p>
                  </div>
                </div>
                <div className="case-skills">
                  <div className="case-img">
                    <img
                      src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png"
                      alt="company logo"
                    />
                  </div>
                  <div className="case-company">
                    <div className="case-link">
                      <p className="">Website</p>
                    </div>
                    <div className="case-link">
                      <a className="">Navigate to website</a>
                    </div>
                  </div>
                  <div className="case-company">
                    <div className="case-link">
                      <p className="">Website</p>
                    </div>
                    <div className="case-link">
                      <a className="">Navigate to website</a>
                    </div>
                  </div>
                  <div className="case-company">
                    <div className="case-link">
                      <p className="">Website</p>
                    </div>
                    <div className="case-link">
                      <a className="">Navigate to website</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-basic-info">
            <div className="case-contributer">
              <h2>1</h2>
              <p className="article-subtitle">User Research</p>
            </div>
            <div className="mid"></div>
            <div className="case-contributer ">
              <h2>1</h2>
              <p className="article-subtitle">User Research</p>
            </div>
            <div className="mid"></div>

            <div className="case-contributer">
              <h2>1</h2>
              <p className="article-subtitle">User Research</p>
            </div>
          </div>
        </div>
        <div className="case-study-main">
          {/* <h1 className="case-h1">Case Study</h1> */}
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0f43b9108902513.5fcfd248e34aa.jpg" alt="" />
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

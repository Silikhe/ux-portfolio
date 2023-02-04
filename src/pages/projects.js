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
              <p className="article-subtitle">Passion Project</p>
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
              <span>Role:</span> Product Designer
            </p>
            <p className="article-subtitle">
              <span>Role:</span> Product Designer
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
                <p className="article-subtitle">User Research</p>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <p className="article-subtitle">User Research</p>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <p className="article-subtitle">User Research</p>
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
                    <p className="article-title">About</p>
                    <p className="article-subtitle">
                      VacayBug is about authenticity and ease of exploration.
                      Create a “Passport” and document your favorite trips and
                      favorite spots along the way. Then share those insights
                      and recommendations with others while searching for unique
                      places to explore yourself.
                    </p>
                    <p className="article-title">Design Challenge</p>
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
                  <div className="case-skill">
                    <p className="article-subtitle">User Research</p>
                    <div class="progress-container"></div>
                  </div>
                  <div className="case-skill">
                    <p className="article-subtitle">User Research</p>
                    <div class="progress-container"></div>
                  </div>
                  <div className="case-skill">
                    <p className="article-subtitle">User Research</p>
                    <div class="progress-container"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="case-basic-info">
            <p className="article-subtitle">
              <span>Role:</span> Product Designer
            </p>

            <p className="article-subtitle">
              <span>Role:</span> Product Designer
            </p>
            <p className="article-subtitle">
              <span>Role:</span> Product Designer
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

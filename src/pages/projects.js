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
            <p className="">
              <span>Role:</span> Product Designer
            </p>

            <p className="">
              <span>Role:</span> Product Designer
            </p>
            <p className="">
              <span>Role:</span> Product Designer
            </p>
          </div>
          <div className="case-contribution">
            <div className="case-contribut">
              <p>My individual contribution</p>
              <p>
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
                <p>User Research</p>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <p>User Research</p>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
              <div className="case-skill">
                <p>User Research</p>
                <div class="progress-container">
                  <div class="progress-bar"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProjectsPage

import React from "react"
import Blog from "./Blog"
import { StaticQuery, graphql } from "gatsby"
import { FiDownload } from "react-icons/fi"

const Article = () => (
  <StaticQuery
    query={graphql`
      {
        allMediumPost {
          edges {
            node {
              title
              type
              createdAt(fromNow: false)
              mediumUrl
              content {
                subtitle
                postDisplay {
                  coverless
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <div className="containe">
        <div className="project-container, articles-container">
          <div className="project article-section">
            <div className="project-header">
              <p>Articles</p>
              <div className="divider"></div>
            </div>
            <div className="articles">
              {data.allMediumPost.edges.map(({ node }, index) => (
                <a target="_blank"
                  href="https://medium.com/@silikhesilas"
                  className="article-card"
                  key={index}
                >
                  <div className="article-content">
                    <p className="article-title">{node.title}</p>
                    <p className="article-subtitle">{node.content.subtitle}</p>
                  </div>
                  <div className="card-cartegory addition">
                    <p className="date">
                      {" "}
                      {new Date(node.createdAt).toLocaleDateString("en-US")}
                    </p>
                    <a target="_blank"
                      href="https://medium.com/@silikhesilas"
                      className="article-icon"
                    >
                      <FiDownload className="social-icon"></FiDownload>
                    </a>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  />
)

export default Article

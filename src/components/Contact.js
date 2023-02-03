import React from "react"
import { StaticQuery, graphql } from "gatsby"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
export default function Contact() {
  return (
    <div className="container">
      <div className="project-container, articles-container koko">
        <div className="project koko article-section">
          {/* <div className="project-header">
            <p>Articles</p>
            <div className="divider"></div>
          </div> */}
          <div className="articles">
            <div className="contact-card">
              <p className="article-title">
                "Empowering Communities through Co-Design"
              </p>
              <div style={{ display: "flex" }}>
                <div className="contact-icon">
                  <div>
                    <FaLinkedin className=""></FaLinkedin>
                  </div>
                  <div>
                    <a
                      href=""
                      target="_blank"
                      className="article-subtitle modal-heading modal-link"
                    >
                      Linkedin
                    </a>
                  </div>
                </div>
                <div className="contact-icon">
                  <div>
                    <FaBehanceSquare className=""></FaBehanceSquare>
                  </div>
                  <div>
                    <a
                      href=""
                      target="_blank"
                      className="article-subtitle modal-heading modal-link"
                    >
                      Behance
                    </a>
                  </div>
                </div>
                <div className="contact-icon">
                  <div>
                    <FaTwitterSquare className=""></FaTwitterSquare>
                  </div>
                  <div>
                    <a
                      href=""
                      target="_blank"
                      className="article-subtitle modal-heading modal-link"
                    >
                      Twitter
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <a
                  href="mailto:silikhesilas@gmail.com"
                  className="btn btn-project contact-btn"
                >
                  Lets Connect
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

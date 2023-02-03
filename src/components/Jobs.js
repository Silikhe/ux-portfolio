import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import Tooltip from "./Toolpit"
import { FiDownload } from "react-icons/fi"

const Jobs = () => {
  const [scrollX, setScrollX] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isTooltipOpen, setIsTooltipOpen] = useState(false)

  const handleCardHover = () => {
    setIsTooltipOpen(!isTooltipOpen)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setScrollX(scrollX => scrollX + 0)
    }, 0)
    return () => clearInterval(interval)
  }, [])

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <Modal closeModal={() => setIsModalOpen(false)} isOpen={isModalOpen}>
        <div className="modal-header">
          <div className="modal-job-header">
            <p className="article-title modal-title">
              Senior Product Designer Technical Mentor
            </p>
            <p className="article-subtitle modal-heading modal-push">
              <span>Moringa School</span>, <span>Full Time</span>{" "}
            </p>
            <div className="card-cartegory icon-cartegory">
              <div className="modal-icons card-cartegory">
                <FiDownload className="social-icon"></FiDownload>
                <p className="article-subtitle modal-heading">Nairobi, Kenya</p>
              </div>
              <div className="modal-icons card-cartegory">
                <FiDownload className="social-icon"></FiDownload>
                <a
                  href=""
                  target="_blank"
                  className="article-subtitle modal-heading modal-link"
                >
                  www.moringaschool.com
                </a>
              </div>
            </div>
            <div className="card-cartegory modal-wrapper">
              <div>
                <p className="article-subtitle">
                  Experience Length: <span>1</span> Year
                </p>
              </div>
              <div className="article-subtitle card-cartegory labels">
                <p>Skills:</p>
                <div className="article-subtitle card-cartegory">
                  <div className="label">User Experience</div>
                  <div className="label">User Research</div>
                  <div className="label">User Interface</div>
                </div>
              </div>
            </div>
          </div>

          <div className="modal-main-content">
            <p className="article-subtitle">
              I was hired as the only designer on the team, working under the
              that great design is important, allowed me to create my best work.
            </p>
            <p className="article-subtitle">
              I was hired as the only designer on the team, working under the
              that great design is important, allowed me to create my best work.
              I was originally hired to work on the marketing landing pages,
              banner ads and social media collateral, but quickly moved into a
              product design role.
            </p>
            <div className="company">
              <h6 className="article-subtitle">
                About <span>MoringaSchool</span>
              </h6>
              <p className="article-subtitle">
                I was hired as the only designer on the team, working under the
                that great design is important, allowed me to create my best
                work. I was originally hired
              </p>
              <a
                target="_blank"
                href=""
                className="article-subtitle modal-heading"
              >
                www.moringaschool.com
              </a>
            </div>
          </div>
        </div>
      </Modal>
      <div className="job-card">
        <div class="carousel">
          <div class="card-container">
            <div class="card job" onClick={handleCardClick}>
              <img
                className="job-logo"
                src="https://moringaschool.com/wp-content/themes/moringa/public/images/logo.png"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://e7.pngegg.com/pngimages/328/113/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text-thumbnail.png"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
            <div class="card job">
              <img
                className="job-logo"
                src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                alt="Image 3"
              />
              <p className="job-name article-subtitle">Wiggle Technology</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Jobs

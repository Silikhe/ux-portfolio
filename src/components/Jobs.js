import React, { useState, useEffect } from "react"
import Modal from "./Modal"
import Tooltip from "./Toolpit"
import { FiDownload } from "react-icons/fi"
import { useStaticQuery } from "gatsby"

const Jobs = () => {
  // const [scrollX, setScrollX] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setScrollX(scrollX => scrollX + 0)
  //   }, 0)
  //   return () => clearInterval(interval)
  // }, [])

  const handleCardClick = () => {
    setIsModalOpen(true)
  }

  const query = graphql`
    {
      allStrapiJobs {
        nodes {
          Location
          Skills {
            id
            Skills
          }
          company
          coumpany_details
          job_logo {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
          website
          role
          responsibility {
            description
            id
          }
          end_date(fromNow: false)
          start_date(fromNow: false)
          strapiId
          type
        }
      }
    }
  `

  const diffTime = parseInt(end_date) - parseInt(start_date)
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
  const diffYears = Math.floor(diffDays / 365)
  const diffMonths = Math.floor((diffDays % 365) / 30)

  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data

  const [value, setValue] = React.useState(0)
  const {
    company,
    role,
    Location,
    Skills,
    coumpany_details,
    job_logo,
    website,
    responsibility,
    end_date,
    start_date,
    strapiId,
  } = jobs[value]

  // console.log(jobs[value])

  return (
    <>
      {jobs.map((item, index) => {
        const diffTime = parseInt(item.end_date) - parseInt(item.start_date)
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
        const diffYears = Math.floor(diffDays / 365)
        const diffMonths = Math.floor((diffDays % 365) / 30)
        console.log(diffDays)
        return (
          <div>
            <Modal
              closeModal={() => setIsModalOpen(false)}
              isOpen={isModalOpen}
            >
              <div className="modal-header">
                <div className="modal-job-header">
                  <p className="article-title modal-title">{item.role}</p>
                  <p className="article-subtitle modal-heading modal-push">
                    <span>{item.company}</span>, <span>{item.type}</span>{" "}
                  </p>
                  <div className="card-cartegory icon-cartegory">
                    <div className="modal-icons card-cartegory">
                      <FiDownload className="social-icon"></FiDownload>
                      <p className="article-subtitle modal-heading">
                        {item.Location}
                      </p>
                    </div>
                    <div className="modal-icons card-cartegory">
                      <FiDownload className="social-icon"></FiDownload>
                      <a
                        href={`https://${item.link}`}
                        target="_blank"
                        className="article-subtitle modal-heading modal-link"
                      >
                        {item.website}
                      </a>
                    </div>
                  </div>
                  <div className="card-cartegory modal-wrapper">
                    <div>
                      <p className="article-subtitle">
                        Experience Length:
                        <span>
                          {diffMonths > 12 ? diffYears : diffMonths}
                        </span>{" "}
                        {diffMonths > 12 ? "Years" : "Months"}
                      </p>
                    </div>
                    <div className="article-subtitle card-cartegory labels">
                      <p>Skills:</p>
                      {Skills.map(it => {
                        console.log(it)
                        return (
                          <div className="label" key={it.id}>
                            {it.Skills}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
                {responsibility.map(it => {
                  console.log(it)
                  return (
                    // <div className="label" key={it.id}>
                    //   {it.Skills}
                    // </div>
                    <p className="article-subtitle" key={it.id}>
                      {it.description}
                    </p>
                  )
                })}
                <div className="modal-main-content">
                  <div className="company">
                    <h6 className="article-subtitle">
                      About <span>{item.company}</span>
                    </h6>
                    <p className="article-subtitle">{item.coumpany_details}</p>
                    <a
                      target="_blank"
                      href={`https://${item.link}`}
                      className="article-subtitle modal-heading"
                    >
                      {item.link}
                    </a>
                  </div>
                </div>
              </div>
            </Modal>
            <div className="job-card">
              <div class="carousel">
                <div class="card-container">
                  <div
                    class="card job"
                    key={item.strapiId}
                    // onClick={handleCardClick}
                    onClick={() => {
                      setValue(index)
                      handleCardClick()
                    }}
                  >
                    {/* {job_logo.map(item => { */}
                    {/* return ( */}
                    <img
                      className="job-logo"
                      src="https://e7.pngegg.com/pngimages/328/113/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text-thumbnail.png"
                      // src={item}
                      alt={item.company}
                    />
                    <div className="label" key={item.id}>
                      {item.skills}
                    </div>
                    {/* )
                    })} */}

                    <p className="job-name article-subtitle">{item.company}</p>
                  </div>
                  {/* <div class="card job">
                    <img
                      className="job-logo"
                      src="https://e7.pngegg.com/pngimages/328/113/png-clipart-freelancer-freelance-marketplace-logo-job-graphic-designer-design-web-design-text-thumbnail.png"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div>
                  <div class="card job">
                    <img
                      className="job-logo"
                      src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div>
                  <div class="card job">
                    <img
                      className="job-logo"
                      src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div>
                  <div class="card job">
                    <img
                      className="job-logo"
                      src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div>
                  <div class="card job">
                    <img
                      className="job-logo"
                      src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div>
                  <div class="card job">
                    <img
                      className="job-logo"
                      src="https://imtconferences.com/wp-content/uploads/2017/06/Safaricom-Mpesa-imtc-300x150.jpg"
                      alt="Image 3"
                    />
                    <p className="job-name article-subtitle">
                      Wiggle Technology
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default Jobs

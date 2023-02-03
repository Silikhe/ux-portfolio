import React from "react"
import { AiOutlineCaretRight } from "react-icons/ai"
import SingleProject from "./SingleProject"

const Project = () => {
  return (
    <div className="project-container">
      <div className="project">
        <div className="project-header">
          <p>BookMarked Projects</p>
          <div className="divider"></div>
        </div>
        <div className="grid-container">
          <SingleProject />
          <SingleProject />
          <SingleProject />
          <SingleProject />
        </div>
        <div>
          <button className="btn btn-project">view the archive</button>
        </div>
      </div>
    </div>
  )
}

Project.propTypes = {}

export default Project

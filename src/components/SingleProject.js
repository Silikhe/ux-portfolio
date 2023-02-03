import React from "react"
import { AiOutlineCaretRight } from "react-icons/ai"

export default function SingleProject() {
  return (
    <div className="grid-project card">
      <div className="project-content ">
        <div className="card-header">
          <p className="article-title">Regsco Decorators</p>
          <div className="card-cartegory">
            <p className="date">UI DESING </p>
            <div className="dot"></div>
            <p className="date">2023</p>
          </div>
        </div>
        <div className="card-body">
          <p className="article-subtitle">
            Designing for impact, crafting innovative solutions from the heart
            of Nairobi, available for consulting and ready to elevate your user
            experience
          </p>
          <button className="btn btn-success">
            View Case Study
            <AiOutlineCaretRight />{" "}
          </button>
        </div>
      </div>
      <div className="project-image">
        <img
          src="https://assets-global.website-files.com/625816a3416990dd61391b9b/62d539610e8043b9e8937355_800.jpg"
          alt="project cover"
        />
      </div>
    </div>
  )
}

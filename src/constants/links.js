import React from "react"
import {
  FaHome,
  FaLinkedin,
  FaDribbbleSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"
import { AiFillHome, AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from 'react-icons/bs';
import { GrDocument } from "react-icons/gr";
import { FiDownload } from 'react-icons/fi';





import { Link } from "gatsby"
const data = [
  {
    id: 1,
    icon: <AiFillHome  className="social-icon"></AiFillHome>,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    icon: <BsFillPersonFill className="social-icon"></BsFillPersonFill>,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    icon: <AiFillProject className="social-icon"></AiFillProject>,
    text: "projects",
    url: "/projects/",
  },
  // {
  //   id: 4,
  //   icon: <GrDocument className="social-icon"></GrDocument>,
  //   text: "blog",
  //   url: "/blog/",
  // },
  {
    id: 4,
    icon: <FiDownload className="social-icon"></FiDownload>,
    text: "Resume",
    url: "/blog/",
  },


]

const tempLinks = data.map(link => {
  return (
    <li className="p-li" key={link.id}>
      <Link to={link.url}>
        <div className="link-items">
          <div style={{margin: "5px 4px"}}>{link.icon}</div>
          <div>{link.text}</div>
        </div>
      </Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}

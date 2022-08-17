import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="2015 - 2019"
          iconStyle={{background:"#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}

        >
          <h3 className="vertical-timeline-element-title"> 
          Fort Hamilton High School
          </h3>
          <p>  Advanced High School Diploma</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--education" 
          date="2019 — 2023"
          iconStyle={{background:"#3e497a", color: "#fff"}}
          icon={<SchoolIcon />}

        >
          <h3 className="vertical-timeline-element-title"> 
          Stony Brook University
          </h3>
          <h4 className="vertical-timeline-element-title">
          Bachelor of Science Degree
          </h4>
          <p>Applied Mathematics and Statistics/ Economics</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          date="2021 — 2022"
          iconStyle={{background:"#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}

        >
          <h3 className="vertical-timeline-element-title"> 
          Web Developer Contractor — 5605 Henry's Cleaner
          </h3>
          <p> Brooklyn, NY</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className="vertical-timeline-element--work" 
          date="2022 — 2022"
          iconStyle={{background:"#e9d35b", color: "#fff"}}
          icon={<WorkIcon />}

        >
          <h3 className="vertical-timeline-element-title"> 
          Data Specialist — Sanofi
          </h3>
          <p> Bridgewater, NJ</p>
        </VerticalTimelineElement>

      </VerticalTimeline>
    </div>
  )
}

export default Experience

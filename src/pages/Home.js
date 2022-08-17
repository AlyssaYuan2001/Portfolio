import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import GithubIcon from '@material-ui/icons/GitHub'
import '../styles/Home.css'


function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My name is Alyssa</h2>
        <div className="prompt"> 
          <p> A software developer with a passion for learning and creating</p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <div className="skills"> 
        <h1>Skills</h1>
        <ol classname="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, HTML, CSS, NPM, MaterialUI
            </span>
          </li>
          <li className="item">
            <h2> Back-End</h2>
            <span>
              NodeJS, Java Spring, .NET/C#, ExpressJS, MySQL, Flask
            </span>
          </li>
          <li className="item">
            <h2> Langauges</h2>
            <span>
              JavaScript, Java, Python, C#
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home

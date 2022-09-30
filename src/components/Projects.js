import ProjectCard from "./ProjectCard";
import "./projects.css";
import React from "react";


export const Projects = () => {
  return (
    <section id="projects" className="website projects">
        <div
          style={{ color: "black", textAlign: "center" }}
          className="container-fluid"
        >
          <h2
            className="heading"
            style={{
              marginBottom: "80px",
              marginTop: "30px",
              padding: "10px",
              textAlign: "center",
            }}
          >
            Projects
          </h2>
          <div>
            <div className="projects-box">
              <ProjectCard
                title="EXAMPLE PROJECT TITLE"
                href="https://flowcharts-csi.vercel.app/"
                description=" DESCRIPTION"
                image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
                url="https://github.com/androrezkalla"
              />
              <ProjectCard
                title="EXAMPLE PROJECT TITLE"
                href="https://flowcharts-csi.vercel.app/"
                description=" DESCRIPTION"
                image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
                url="https://github.com/androrezkalla"
              />

              <ProjectCard
                title="EXAMPLE PROJECT TITLE"
                href="https://flowcharts-csi.vercel.app/"
                description=" DESCRIPTION"
                image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
                url="https://github.com/androrezkalla"
              />
              <ProjectCard
                title="EXAMPLE PROJECT TITLE"
                href="https://flowcharts-csi.vercel.app/"
                description=" DESCRIPTION"
                image="https://htmlcolorcodes.com/assets/images/colors/dark-blue-color-solid-background-1920x1080.png"
                url="https://github.com/androrezkalla"
              />

            </div>
          </div>
        </div>
      </section>
  )
}

















  

  



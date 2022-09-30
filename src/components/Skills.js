import React from "react";
import SkillCard from "./SkillCard";
import "./skills.css";


export const Skills = () => {

    const frontend_badges = {
        ts: "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white",
        html5:
          "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white",
        css3: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white",
        react:
          "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB",
      };
      const backend_badges = {
        python:
          "https://img.shields.io/badge/python-%2314354C.svg?style=for-the-badge&logo=python&logoColor=white",
        cplusplus:
          "https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white",
        java: "https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=java&logoColor=white",

      };
      const databases_badges = {
        mysql:
          "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white",
        netlify:
          "https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white",
      };
      const texteditors_badges = {
        VisualStudioCode:
          "https://img.shields.io/badge/VisualStudioCode-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white",
        VisualStudio:
          "https://img.shields.io/badge/VisualStudio-5C2D91.svg?style=for-the-badge&logo=visual-studio&logoColor=white",
        Xcode:
          "https://img.shields.io/badge/Xcode-007ACC?style=for-the-badge&logo=Xcode&logoColor=white",
        Vim: "https://img.shields.io/badge/VIM-%2311AB00.svg?style=for-the-badge&logo=vim&logoColor=white",
      };
      const os_badges = {
        windows10:
          "https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white",
        android:
          "https://img.shields.io/badge/Android-3DDC84?style=for-the-badge&logo=android&logoColor=white",
        linux:
          "https://img.shields.io/badge/Linux-FCC624?style=for-the-badge&logo=linux&logoColor=black",
        macos:
          "https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=apple&logoColor=white",
      };
      const tools_badges = {
        figma:
          "https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white",
        git: "https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white",
        github:
          "https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white",
  
      };

    return (
                <section className="skills" id="skills">
                <div className="container">
                  <div className="heading">
                    <h2
                      style={{
                        padding: "1.3rem",
                        textAlign: "center",
                      }}
                    >
                      SKILLS
                    </h2>
                  </div>
                  <span className="skills">
                    <SkillCard
                      title="Frontend"
                      alt_logo="frontend"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/frontend_xqwylm.svg"
                      badges={frontend_badges}
                    />
                    <SkillCard
                      title="Backend"
                      alt_logo="backend"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079887/backend_poqzuc.svg"
                      badges={backend_badges}
                    />
                    <SkillCard
                      title="Databses and Servers"
                      alt_logo="databases"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/databases_uvqgga.svg"
                      badges={databases_badges}
                    />
                  </span>
                  <br></br>
                  <span className="skills">
                    <SkillCard
                      title="Text Editors and IDE"
                      alt_logo="editors"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079887/editor_m9mijf.svg"
                      badges={texteditors_badges}
                    />
                    <SkillCard
                      title="Operating Systems"
                      alt_logo="os"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/os_qvsrtp.svg"
                      badges={os_badges}
                    />
                    <SkillCard
                      title="Others/Tools"
                      alt_logo="tools"
                      logo="https://res.cloudinary.com/andreahabib/image/upload/v1627079886/tools_gdo28k.svg"
                      badges={tools_badges}
                    />
                  </span>
                </div>
              </section>   
      );
  }
  






  

  



import { Container, Row, Col } from "react-bootstrap";
import Resumecontent from "./ResumeContent";

export function Resume() {
  return (
    <Container fluid className="resume-section" id="resume">
      <Container>
        <Row style={{ justifyContent: "center", position: "flex", maxWidth: "300px", }}>
        </Row>
        <h2
                      style={{
                        padding: "1.3rem",
                        textAlign: "center",
                      }}
                    >
                      EXPERIENCE
                    </h2>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Work</h3>
            <Resumecontent
              company="CUNY Research Foundation"
              title="Software Engineer Intern"
              date="Feb 2023 - Present"
              content={[
                "Developing a full-stack software application for the education sector, rotating between front-end and back-end development",
                "Supporting the development team in creating new functions and QA testing for existing projects.",
              ]}
            />
            <Resumecontent
              company="Teladoc Health"
              title="Software Engineer Intern"
              date="Jan 2023 - Feb 2023"
              content={[
                "Completed a full-stack software development internship to deliver a large-scale project for the healthcare industry",
                "Utilized comprehensive web technologies such as TypeScript, React, Node.js and API’s",
                "Worked with backend data and Axios libraries to pull and parse XML data using JIRA API.",
                "Gained experience in Agile development and version control systems such as Git.",
              ]}
            />
            <Resumecontent
              company="SYEP"
              title="IT Support/Admin"
              date="Oct 2022 - Nov 2022"
              content={[
                "Managing and updating sensitive employee files, tax and payroll documents",
                "Creating, managing and maintaining employee databases",
                "Database entry of various forms and documents"
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
          <h3 className="resume-title">Education</h3>
            <Resumecontent
              company="City University of New York - CSI"
              date="Anctipiated Graduation: May 2024"
              title="BS in Computer Science"
              content={[]}
            />
            <h3 className="resume-title">Coursework</h3>
            <Resumecontent
              title=""
              content={[
                "CSC 326 - Data Structures",
                "CSC 228 - Discrete Mathematical Structures ",
                "CSC 382 - Analysis of Algorithms",
                "CSC 436 - Modern Web Development",
                "CSC 330 - Object-Oriented Software Design ",
                "CSC 220 - Computers, Networking & Security",
                "CSC 347 - Computer Circuits Laboratory",
                "CSC 346 - Switching & Automata Theory ",
                "CSC 211 - Intermediate Programming",
              ]}
            />
        
            <h3 className="resume-title">Clubs</h3>
            <Resumecontent
              company="Hack-A-Project Club"
              title="City University of New York - CSI"
              date="2020 - Present"
              content={[
              ]}
            />
            <Resumecontent
              company="FRC Robotics Team 333"
              title="John Dewey High School"
              date="2016 - 2020"
              content={[
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
        </Row>
      </Container>
    </Container>
  );
}
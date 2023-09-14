import React from "react";

import image from "../images/wunu.png";
const imageAltText = "University image";

const educationList = [
    {
        name: `West Ukrainian National University, Ternopil, Ukraine`,
        faculty: `Faculty of Computer Information Technology`,
        specialty: `Software Engineering`,
        degree: `Master's degree`,
    },
    {
        name: `IT company ELEKS`,
        faculty: `Backend Development Training Courses with ASP.NET Core 3.1 MVC`,
        degree: `Internship`,
    },
    {
        name: `West Ukrainian National University, Ternopil, Ukraine`,
        faculty: `Faculty of Computer Information Technology`,
        specialty: `Software Engineering`,
        degree: `Bachelor's degree`,
    },  
];

const Education = () => {
  return (
      <section className="padding" id="education">
      <h2 style={{ textAlign: "center" }}>Education</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
      <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {educationList.map((project) => (
            <div className="box" key={project.title}>
              <div>
                <h3 style={{ flexBasis: "40px" }}>{project.name}</h3>
              </div>
              <p className="small">{project.degree}</p>
              <p className="small">{project.faculty} position</p>
              <p className="small">{project.specialty}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

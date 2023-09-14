/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */

const imageAltText = "Digitl cloud";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */


const projectList = [
  {
    title: "TimeBooker",
    position: "Developer",
    period: "September 2022 - Current",
    description: "The project is aimed to simplify the schedule management of small enterprises that need to book appointments that include employees and clients.",
    stack: "C#, JavaScript, .NET 6, ASP .NET Core, Blazor WebAssembly, Azure Functions, Node.js",
  },
  {
    title: "Humanitarian",
    position: "Developer",
    period: "February 2022 – September 2022",
    description: "This is an application that should help in supplying humanitarian aid to Ukrainians.",
    stack: "C#, .NET 6, ASP .NET Core, Blazor WebAssembly, Blazor Server, GitHub actions",
  },
  {
    title: "REMT",
    position: "Developer",
    period: "January 2021 – February 2022",
    description: "The main idea of the project is to provide users with the ability to configure documents (forms for data collection) and fill them out on mobile devices.",
    stack: "C#, .NET 6, ASP .NET Core, Blazor WebAssembly, Azure Functions, Azure DevOps pipeline",
  }
];

const Experience = () => {
  return (
    <section className="padding" id="experience">
      <h2 style={{ textAlign: "center" }}>Experience</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "2rem" }}>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <div>
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </div>
              <p className="small">{project.period}</p>
              <p className="small">{project.position} position</p>
              <p className="small">{project.description}</p>
              <p className="small">Stack: {project.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

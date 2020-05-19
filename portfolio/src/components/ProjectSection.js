import React from "react";
import ProjectCard from "./ProjectCard";

function ProjectSection(){
    const projects=[
        {
            id:1,
            title: "Blog Article-1",
            excerpt: "Cloud gaming",
            imageUrl:require("../assets/cloud.png"),
            // link: "https://medium.com/@annanyaved.07/cloud-gaming-aa807f68de1c",
            
        },
        {
            id:2,
            title: "Blog Article-2",
            excerpt: "Twin Computing",
            imageUrl:require("../assets/twin.jpeg"),
            // link:"https://medium.com/@annanyaved.07/digital-twins-9f20a63b95b3",
            
        },
    ];
    return(
        <div className="container my-5 text-center">
      <h1 className="font-weight-light">
      <span className="text-info">My</span> Blogs</h1>
      <div className="lead">I love writing blog articles.</div>
      <div className="row my-5 pt-3">
          {
              projects.map((project)=> (
                <div key={project.id}className="col-12 col-md-6 my-2">
                    <ProjectCard project={project}/>
                    </div>
            ))}
      </div>
      </div>
        
    );
}

export default ProjectSection;
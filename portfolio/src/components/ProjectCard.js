import React from "react";


function ProjectCard(props){
    const {title, excerpt, imageUrl}= props.project;
    return(
    <div key="id" classame="card-shadow h-100">
      <img className="card-img-top" src={imageUrl} alt="twin" />
      <div className="card-body">
      <h4 className="card-title"> 
      {title}
      </h4>
      <p className="card-text">{excerpt}</p>
      < a href="/" className="stretchedlink"></a>
      </div>
    </div>
    );
}

export default ProjectCard;
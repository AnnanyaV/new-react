import React from "react";

function Skill(props){
    const {name, imageUrl}= props.skill;
    return(
        <div>
          <img
          className="rounded circle"
          alt={name}
          src={imageUrl}
          style={{width:"25", height:"25"}}
          />
          
          </div>
    );
}

export default Skill;
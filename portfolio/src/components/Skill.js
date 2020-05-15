import React from "react";

function Skill(props){
    const {name, imageUrl}= props.skill;
    return(
        <div>
          <img
          className="rounded circle"
          alt={name}
          src={imageUrl}
          style={{width:"75", height:"75"}}
          />
          
          </div>
    );
}

export default Skill;
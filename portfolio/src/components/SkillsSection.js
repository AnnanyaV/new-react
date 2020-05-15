import React from "react";
import Skill from "./Skill";
import {v4 as uuid} from "uuid";
function SkillsSection(){
    const skills=[
        {
            id:1,
            name:"HTML5",
            imageUrl: require("../assets/html5.jpeg"),
        },
        {
            id:2,
            name:"SQL",
            imageUrl:require("../assets/sql.png"),
        },
        {
            id:3,
            name:"BOOTSTRAP",
            imageUrl: require("../assets/bootstrap.png"),
        },
        {
            id:4,
            name:"PYTHON",
            imageUrl: require("../assets/python.png"),
        },
        {
            id:5,
            name:"C",
            imageUrl: require("../assets/c.png"),
        },
        {
            id:6,
            name:"FLASK",
            imageUrl: require("../assets/flask.png"),
        },
        {
            id:7,
            name:"CSS",
            imageUrl: require("../assets/css.jpeg"),
        },
        {
            id:8,
            name:"C++",
            imageUrl: require("../assets/c++.png"),
        },
    ]
    const finalSkillRow=[];
    for(let i=0; i<2; i++){
        let skillRow=skills.slice(i*4, (i+1)*4);
        finalSkillRow.push(
            <div key={uuid()}className ="d-flex justify-content-around py-3 ">
            {skillRow.map((skill)=>(
                <Skill key={uuid()}skill={skill}/>
                
            ))}
        </div>
        );
        
    }
    return (

        <div className="bg-light w-100">
        <div className="container-fluid">
          <h1 className="font-weight-light text-center"><span className="font-weight-light text-info">Technology </span>Stack</h1>
          <div className="lead text-center">I design, develop and deliver with the following weapons</div>
          {finalSkillRow}
          <div className="d-flex justify-content-around py-3"></div> 
          </div>
          </div>
          );
}
export default SkillsSection;
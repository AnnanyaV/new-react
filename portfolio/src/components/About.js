import React from "react";

function About(){
    return(
        <div className="container-fluid">
        <div className="row text-center">
        <div className="col-12 py-3">
        <h3><span className="text-info py-3" >About</span> me</h3>
        <p>I am a technology enthusiast with a passion for evangelism and coding. I am a firm believer that technology can only be spread through communities and should be used for empowerment. Machine Learning and Artificial Intelligence are two computing technologies that excite me the most and I hope to contribute to their advancements in the near future.</p>
        </div>
        </div>
        <div className="row text-center py-3">
        <div className="col-12 col-md-6 py-3 text-weight-light">
        <h4><span className="text-info">Organisational</span> experience</h4>
        <p> I am currently a microsoft student partner and an Unschool Community Influencer. I have done virtual internships with JPMC and KPMG. In addition to this, I have been an ML and AI intern with Caravel.AI. I am also the cofounder of a girls-only coding community called the girlscode.</p>
        </div>
        <div className="col-12 col-md-6 py-3 text-weight-light">
        <h4><span className="text-info ">My</span> hobbies</h4>
        <p> I can be considered a workaholic. I love spending my time learning about new technoligies and writing about them. In addition to that I am a trained kuchipudi dancer. I also love working out and playing sports. Community events excite me and I hope to one day make this passion my proffession.</p>
        </div>
        </div>
        </div>
    );
}

export default About;
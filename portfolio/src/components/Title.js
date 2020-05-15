import React from "react"
import Annanya from "../assets/Annanya.jpg"

function Title(){
    const name= "Annanya Vedala";
    return(
        <div className="container">
            <div className="row text-center pd-5 my-5">
                <div className="col-12 col-md-6 py-5">
                    <img className= "img-fluid rounded-circle w-50"
                    src={Annanya} 
                    alt="Annanya Vedala"/>
              </div>
                <div className="col-12 col-md-6 py-5">
                    <div className="font-weight-light" style={{fontSize: "50px"}}>
                      <span className="text-info">Hi</span> I am {name}
                    </div>
                    <h4 className="font-weight-light"> I am a technology enthusiast and a passionate technology evangelist. I find machine learning and artificial intelligence tecnologies extremely interesting. I hope to be able to contribute greatly in the same. </h4>
                </div>
            </div>
        </div>
    );

}

export default Title;
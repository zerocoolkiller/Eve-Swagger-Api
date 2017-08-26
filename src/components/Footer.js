import React from "react";
import Img from "../Pictures/footer.jpg"

// Home page component
export default class Banner extends React.Component {
  // render
  render() {
    return (
      <div className="page-footer">
    <img src={ Img } alt="oh no" width='100%' height='100%'/>
       <div className= "Text2">
    
    <p3>Material related to EVE-Online is used with limited permission of CCP Games hf. No official affiliation or endorsement by CCP Games hf is stated or implied. </p3>
        </div>
      </div>
    );
  }
}

import React from "react";
import Img from "../Pictures/logo.jpg";

// Home page component
export default class Banner extends React.Component {
  // render
  render() {
    return (
      <div className="page-banner">
          <img src={ Img } alt="oh no" width='100%' height='100%'/>
      </div>
    );
  }
}

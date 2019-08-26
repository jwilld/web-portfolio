import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon-bar.css";

class IconBar extends React.Component {
  render() {
    let brandIcons = [
      "github",
      "linkedin-in",
      "youtube",
      "twitter",
      "instagram"
    ];

    let iconBar = brandIcons.map((icon,i) => (
      <div key={i}>
        <FontAwesomeIcon key = {i} className='icon' icon={["fab", `${icon}`]} />
      </div>
    ));
    return (
      <div className="icon-bar">
        <div className="icon-bar-container">{iconBar}</div>
      </div>
    );
  }
}
export default IconBar;

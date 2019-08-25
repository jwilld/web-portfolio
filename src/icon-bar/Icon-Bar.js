import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon-bar.css";

class IconBar extends React.Component {
  render() {
    let brandIcons = [
      "github-square",
      "linkedin",
      "youtube-square",
      "twitter-square",
      "instagram"
    ];

    let iconBar = brandIcons.map(icon => (
      <div>
        <FontAwesomeIcon className='icon' icon={["fab", `${icon}`]} />
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

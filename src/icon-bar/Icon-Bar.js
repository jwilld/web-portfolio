import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./icon-bar.css";

class IconBar extends React.Component {
  render() {
    let brandIcons = [
      ["github",'https://github.com/jwilld'],
      ["linkedin-in", 'https://www.linkedin.com/in/jerry-davidson-3a62b8182/'],
      ["youtube",'https://www.youtube.com/channel/UCfGlfPbx8itcD4idUL-TtqA?view_as=subscriber'],
      ["twitter",'https://twitter.com/home'],
      ["instagram",'https://www.instagram.com/j_willd/']
    ];

    let iconBar = brandIcons.map((icon,i) => (
      <div key={i}>
        <a href={icon[1]} target='_blank'><FontAwesomeIcon key = {i} className='icon' icon={["fab", `${icon[0]}`]} /></a>
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

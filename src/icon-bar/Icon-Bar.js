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
      ["file",'https://docs.google.com/document/d/1ec650FAwyhkrB83kmnincVdIz2GTJxGt7NvCIliYgjk/edit?usp=sharing']
    ];

    let iconBar = brandIcons.map((icon,i) => (
      icon[0] === 'file' ?
      <div key={i}>
        <a rel='noopener noreferrer'href={icon[1]} target='_blank'><FontAwesomeIcon key = {i} className='icon' icon={["fa", `${icon[0]}`]} /></a>
      </div>
      :
      <div key={i}>
        <a rel='noopener noreferrer'href={icon[1]} target='_blank'><FontAwesomeIcon key = {i} className='icon' icon={["fab", `${icon[0]}`]} /></a>
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

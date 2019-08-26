import React from 'react'
import TextLoop from "react-text-loop"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class IconLoop extends React.Component{
    render(){
        let brandIcons = [
            "js-square",
            "react",
            "git",
            "python",
            "css3-alt",
            "html5"
          ];
      
          let iconLoop = brandIcons.map((icon,i ) => (
            <div key={i}>
              <FontAwesomeIcon key={i} className='icon' icon={["fab", `${icon}`]} />
            </div>
          ));

        return(
            <div className='icon-loop'>
            <h1>
                <TextLoop springConfig={{ stiffness: 180, damping: 8}}>
                    {iconLoop}

                </TextLoop>
                    
            </h1>
            </div>

        )
    }
}

export default IconLoop
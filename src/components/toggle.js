import { useState } from "react"
import '../stylesheets/toggle.css'
import chevron from '../images/icons/chevron.svg'
import { PortableText } from "@portabletext/react";

export default function ToggleMenu({title, content}){

    const [toggled, setIsToggled] = useState(false);

    const toggle = () => setIsToggled(!toggled);

    const chevronUp = (<img src={chevron} className="upChev"/>);
    const chevronDown = (<img src={chevron}  className="downChev"/>);

    return(
        <>
      <div className="accordian">
        <div className="accordian-header" onClick={toggle}>
          <div>{title}</div>
          <div className="arrow">{toggled ? chevronUp : chevronDown}</div>
        </div>
        {toggled && (
          <div className="accordian-body">
            <PortableText value={content}/>
          </div>
        )}
      </div>
        </>
    )

}
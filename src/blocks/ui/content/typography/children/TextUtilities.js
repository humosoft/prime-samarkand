import React from 'react'
import { Link } from "react-scroll";

const TextUtilities = () => {
    return (
        <div id="text-utilities" className="spacer p-top-lg">
            <h4>Text utilities</h4>
            <p>Change text alignment, transform, style, weight, and color with our <Link className="scroll-to-id" to="text" spy={ true } smooth={ true } duration={ 0 } href="#text">text utilities</Link> and <Link className="scroll-to-id" to="colors" spy={ true } smooth={ true } duration={ 0 } href="#colors">color utilities</Link>.</p>
        </div>
    );
};

export default TextUtilities;

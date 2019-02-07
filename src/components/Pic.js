import React, { Component } from 'react';
import './Pic.css';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Pic = (props) => {

    let poemStyles, poemXPosition, poemYPosition;
    let scrollMultiplier;

    if (props.scroll < props.info.scrollTrigger){
        if (props.info.id === 1){
            poemStyles = "intro fadeOut"
        } else {
            poemStyles = "poem fadeOut"
        }
    }

    if (props.scroll > props.info.scrollTrigger) {
        if (props.info.id === 1){
            poemStyles = "intro fadeIn"
        } else if (props.info.id > 1 && props.info.poem !== false){
            poemStyles = "poem fadeIn"
            if (props.scroll < (props.info.scrollTrigger + 1.3) && props.info.poem === "right"){
                poemXPosition = 0 - (props.scroll * props.info.scrollMultiplier);
                poemYPosition = 0;
                console.log("POSITION", poemXPosition)
            } else if (props.scroll < (props.info.scrollTrigger + 1.3) && props.info.poem === "midDown"){
                poemXPosition = -400
                poemYPosition = -165 + (props.scroll * props.info.scrollMultiplier);
            } else if (props.scroll < (props.info.scrollTrigger + 1.3) && props.info.poem === "left"){
                poemXPosition = -650 + (props.scroll * props.info.scrollMultiplier);
                poemYPosition = -10;
            }
        }
    }

    return (
        <div className="pic-container">
            <div className="sticky-pic">
                <div className="relContainer">
                <img className="photo" src={props.info.imgPath}/>
                <div className={poemStyles} style={{transform: `translate(${poemXPosition}%, ${poemYPosition}%)`}}>{ReactHtmlParser(props.info.text)}</div>
                </div>
            </div>
        </div>
    )
}

export default Pic;
import React from 'react';
import './Pic.css';

const Cover = (props) => {

    let sunScrollRate = (props.scroll * 8)
    let sunPosition = 0 - sunScrollRate;
    let titleClass, bylineSub, coverClasses, blackSunStyles, horizonStyles;

    if (props.scroll === 0) {
        coverClasses = "pic-container white cover"
        horizonStyles = "horizon white"
    } else {
        coverClasses = "pic-container cover"
        horizonStyles = "horizon"
    }

    if (props.scroll < .5 && titleClass === "fadeIn") {
        titleClass = "fadeOut"
    }
    if (props.scroll > .5) {
        titleClass = "fadeIn"
    }
    if (props.scroll > 1.7) {
        bylineSub = "fadeIn"
    }
    if (props.scroll < 1.7 && bylineSub === "fadeIn") {
        bylineSub = "fadeOut"
    }
    if (props.scroll > 6.5){
        titleClass = "fadeOut"
        bylineSub = "fadeOut"
        sunScrollRate = (props.scroll * .05)
    }
    console.log("SUN POSITION", sunPosition);
        
    return(
        <div className={coverClasses}>
            <div id="sticky-pic">
                <h1 id="title" className={titleClass}>Chanting the Sun into the Sky</h1>
                <div id="blackSun" onClick={props.handleSunClick}></div>
                <div id="sun" style={{transform: `translateY(${sunPosition}%)`}}></div>
                <div className={horizonStyles}></div>
                <div id="byline" className={bylineSub}>
                    <div className="author">Words | Tom Barnes </div><div className="author">Photos | Alycia Kravitz</div>
                </div>
            </div>
        </div>
    )

}

export default Cover
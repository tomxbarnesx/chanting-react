import React from 'react';
import './Pic.css';

const Cover = (props) => {

    let sunScrollRate = props.scroll/2
    let sunPosition = 57 - sunScrollRate;
    let titleClass;

    if (props.scroll > 600) {
        sunScrollRate = props.scroll/20
    }

    if (props.scroll < 2.5) {
        titleClass = "fadeOut"
    }
    if (props.scroll > 2.5) {
        titleClass = "fadeIn"
    }

    // if (scrolltop < 800 && byline.classList == "fadeIn") {
    //     byline.classList.add("fadeOut")
    //     byline.classList.remove("fadeIn");    }
    // if (scrolltop > 800) {
    //     byline.classList.remove("fadeOut");
    //     byline.classList.add("fadeIn");
    // }

    // if (scrolltop < 2200){
    //     title.style.display = "block";
    //     byline.style.display = "flex";
    // } else if (scrolltop > 2200){
    //     title.style.display = "none";
    //     byline.style.display = "none";
    // }

        
    return(
        <div className="pic-container">
            <div id="sticky-pic">
                <h1 id="title" className={titleClass}>Chanting the Sun into the Sky</h1>
                <div id="sun" style={{top: `${sunPosition}%`}}></div>
                <div className="horizon"></div>
                <div id="byline">
                    <div className="author">Words | Tom Barnes </div><div className="author">Photos | Alycia Kravitz</div>
                </div>
            </div>
        </div>
    )

}

export default Cover
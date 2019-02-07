import React, { Component } from 'react';
import './Pic.css';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Pic = (props) => {

    let poemStyles;

    if (props.scroll < (7 * props.info.id)){
        if (props.info.id === 1){
            poemStyles = "intro fadeOut"
        } else {
            poemStyles = "poem fadeOut"
        }
    }

    if (props.scroll > (7 * props.info.id)) {
        if (props.info.id === 1){
            poemStyles = "intro fadeIn"
        } else if (props.info.id !== 1 && props.info.poem !== false){
            poemStyles = "poem fadeIn"
        }
    }

    return (
        <div className="pic-container">
            <div className="sticky-pic">
                <img className="photo" src={props.info.imgPath}/>
                <div className={poemStyles}>{ReactHtmlParser(props.info.text)}</div>
            </div>
        </div>
    )
}

export default Pic;
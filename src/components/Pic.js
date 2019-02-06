import React, { Component } from 'react';
import './Pic.css';

import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';

const Pic = (props) => {

    let poemStyles;

    if (props.scroll < (7 * props.info.id)){
        poemStyles = "intro fadeOut"
    }

    if (props.scroll > (7 * props.info.id)) {
        if (props.info.id === 1){
            poemStyles = "intro fadeIn"
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
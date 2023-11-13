import React from "react";
import "./HomePageTile.css";

function HomePageTile(props) {
    return (
        <div className="tile-container">
            <div className="tile-title">{props.title}</div>   
            <div className="tile-body">
                {props.items.map((item)=><div className="tile-item">{item}</div>)}
            </div>        
        </div>
    );
}

export default HomePageTile;
import React from "react";
import "./RegionList.css";

function RegionList() {
    return (<>
        <div className='region-container'>
            <div className='global'>Worldwide</div>
            <div className='country-container'>
                <div className='country-name'>Nepal</div>
                <div className='state-container'>
                    <div className='state-name'>Pradesh 1</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
                <div className='state-container'>
                    <div className='state-name'>Pradesh 2</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
                <div className='state-container'>
                    <div className='state-name'>Pradesh 3</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
            </div>
        </div>
    </>);
}

export default RegionList;
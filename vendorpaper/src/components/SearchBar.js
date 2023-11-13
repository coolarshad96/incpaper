import React,{useState} from "react";
import "./SearchBar.css"
import searchIcon from "../assets/search-icon.png"
import crossIcon from "../assets/close.png"
function SearchBar() {
    const [icon,setIcon]=useState(searchIcon);

    const handleIconClick = () => {
       if(icon == crossIcon){
        setIcon(searchIcon)
       }
       else{
        setIcon(crossIcon)
       }
       
      };
    return (
    <div className="searchbar-container">
        <div className="searchbar-input">
        <input type="text" className="searchbar-input-text" placeholder="search by company name" />
        </div>
        <div className="searchbar-icon" onClick={handleIconClick}>
          <img src={icon} alt="search-icon" width={30} height={30} />
        </div>
    </div>);
}

export default SearchBar;
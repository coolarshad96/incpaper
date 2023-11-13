import React, { useState } from "react";
import "./ListItem.css";

function ListItem(props) {
    const [data, setData] = useState(props.data)
    return (<>
        <div key={props.index} className='searchlist-container'>
            <div className='searchlist-data'>

                <div className='searchlist-company-logo'>
                    <img src={`http://localhost:8000${data.logo}`} alt='' />
                </div>
                <div className='searchlist-company-contact'>
                    <div className='company-name'>{data.name}</div>
                    <div className='company-address'>{data.address}</div>
                    <div className='company-phone'>{data.phone}</div>
                    <div className='company-email'>{data.email}</div>
                    <div className='company-website'>{data.website}</div>
                    <div className='company-fax'>{data.fax}</div>
                </div>
                <div className='searchlist-company-categories'>
                    {data.categories?.map((category, index) => (
                        <div className="company-category" key={index}>{category.category}</div>
                    ))}
                </div>
            </div>
            <div className='searchlist-data-tags'>
                {data.tags[0].split(",").map((tag, index) => (
                    <div className="data-tags" key={index}>{tag}</div>
                ))}

            </div>
        </div>
    </>);
}

export default ListItem;
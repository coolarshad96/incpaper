import React, { useEffect, useState } from "react";
import "./ProductImageViewer.css";
import pic from "../assets/brand.jpg";
import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"

function ProductImageViewer(props) {
    const [image,setImage]=useState(pic);
    const ChangePic=(e)=>{
        const image=e.target.getAttribute('src');
        setImage(image)
        const galleryImages = document.querySelectorAll('.image-viewer-gallary img');
        galleryImages.forEach((img) => {
            img.style.border = '1px solid #000'; // Reset to black border
        });
        e.target.style.border = '1px solid rgb(245, 4, 4)';
    }

    const getProductImage = (img) => {
        
        if (img) {
            return `http://localhost:8000${img}`
        }
        return pic;
    }

    useEffect(() => {
        if (props.images && props.images.length > 0) {
            const firstImage = props.images[0];
            if (firstImage && firstImage.image) {
              const imageUrl = firstImage.image;
              setImage(imageUrl)
            } else {
              // Handle the case where 'image' property is missing
            }
          } else {
            // Handle the case where 'props.images' is undefined or an empty array
          }
      }, []); // 
    return (
    <div className="image-viewer-container">
        <div className="image-viewer-pic">
            <img src={getProductImage(image)} alt="product-image"  />
        </div>
        <div className="image-viewer-gallary">
                {props.images?.map(image => (
                    <div key={image.id}>
                        <img src={getProductImage(image.image)} alt={image.product_name} onClick={(e)=>ChangePic(e)}/>
                    </div>
                ))}
            {/* <img src={logo1} alt="" onClick={(e)=>ChangePic(e)}/>
            <img src={pic} alt="" onClick={(e)=>ChangePic(e)}/> */}
        </div>
    </div> );
}

export default ProductImageViewer;
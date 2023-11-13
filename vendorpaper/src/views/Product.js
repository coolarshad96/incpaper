import React, { useEffect, useState } from 'react';
import axios from 'axios';
import pic from './../assets/brand.jpg';
import NavBar from '../components/NavBar';
import "./Product.css";
import ProductImageViewer from '../components/ProductImageViewer';

const api = axios.create({
    baseURL: 'http://localhost:8000',
});


function Product(props) {
    const [product, setProduct] = useState({
        "id": "",
        "company": "",
        "product_name": "",
        "product_description": "",
        "price": "",
        "unit": "",
        "video_url": "",
        "tags": [],
        "product_images": [],
        "product_features": []
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await api.get('/product/productdetail/3/');
            const data = response.data;
            setProduct(data);
            console.log(product)
        };
        fetchData();
    }, []);

    const getProductImage = (img) => {
        if (img) {
            return `http://localhost:8000${img}`
        }
        return pic;
    }

    return (
        <>
            <NavBar />
            <div className='product-container'>
                <div className="homepage-left"></div>
                <div className="product-content">
                    <div className="extra-section"></div>
                    <div className="main-section">
                        <div>
                            <ProductImageViewer images={product.product_images} />
                        </div>

                        <div className='product-detail'>
                            <div className='product-name'>{product.product_name}</div>
                            <div className='product-description'>{product.product_description}</div>
                            <div className='product-price'>Price: ${product.price} /- (per {product.unit})</div>
                            <div className='product-unit'>Unit: {product.unit}</div>
                            <div className='product-tags'>Tags: {product.tags.join(', ')}</div>
                        </div>
                        <div className='product-tags'>
                           
                        </div>
                        <div>
                            <iframe
                                width="640"
                                height="360"
                                src="https://www.youtube.com/embed/0oEIQKV5akQ"
                                title="YouTube Video"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        {product.video_url && <p>Video URL: {product.video_url}</p>}
                        <hr />
                        {/* <div>
                            {product.product_images?.map(image => (
                                <div key={image.id}>
                                    <img src={getProductImage(image.image)} alt={product.product_name} width={200} height={200} />
                                </div>
                            ))}
                        </div>
                        <hr /> */}
                        <h2>Features</h2>
                        <div>
                            {product.product_features?.map(feature => (
                                <div key={feature.id}>
                                    {feature.feature_key}: {feature.feature_value}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="region-section"></div>
                </div>
                <div className="homepage-right"></div>
            </div>


        </>
    );
}

export default Product;





{/* <div>
<div>
    <img src={getProductImage(product.company.logo)} alt={product.company.name} width={300} height={200}/>
</div>
<p>Company Name: {product.company.name}</p>
<p>Company Address: {product.company.address}</p>
<p>Company Phone: {product.company.phone}</p>
<p>Company Email: {product.company.email}</p>
<p>Company Website: {product.company.website}</p>
<p>Company Fax: {product.company.fax}</p>
<p>Company Description: {product.company.description}</p>
</div>
<hr />
<h1>{product.product_name}</h1>
<p>{product.product_description}</p>
<p>Price: ${product.price}</p>
<p>Unit: {product.unit}</p>
<p>Tags: {product.tags.join(', ')}</p>
{ product.video_url && <p>Video URL: {product.video_url}</p> }
<hr />
<h2>Images</h2>
<div>
{product.product_images?.map(image => (
    <div key={image.id}>
        <img src={getProductImage(image.image)} alt={product.product_name} />
    </div>
))}
</div>
<hr />
<h2>Features</h2>
<div>
{product.product_features?.map(feature => (
    <div key={feature.id}>
        {feature.feature_key}: {feature.feature_value}
    </div>
))}
</div> */}
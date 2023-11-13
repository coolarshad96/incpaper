import React, { useEffect, useState } from 'react';
import "./ShowPage.css";
import { Link } from 'react-router-dom';
import pic from './../assets/vendor-paper-logo.png';
import axios from 'axios';
import NavBar from '../components/NavBar';
import Carousel from 'react-bootstrap/Carousel';
import CategoryList from '../components/CategoryList';
import { Button } from 'bootstrap';
import ProductTile from '../components/ProductTile';


const api = axios.create({
    baseURL: 'http://localhost:8000',
});


export default function ShowPage() {
    const daysOfWeek = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
    const [companyInfo, setCompanyInfo] = useState({
        id: '',
        name: 'Company name',
        address: 'Company address',
        phone: '++977 9809211878',
        email: 'coolarshad96@gmailcom',
        website: 'http://noticevalley.com',
        fax: '+977 40023',
        description: '',
        logo: '',
        location: '',
        tags: '',
        images: [],
        categories: [],
        time: [],
        products: []
    });

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/company/companyproduct/20/');
                const data = response.data;
                setCompanyInfo(data);
                console.log(data)
            } catch (error) {
                // Handle errors if necessary
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getProductImage = (product) => {
        const img = product.product_images?.[0];
        if (img) {
            return `http://localhost:8000${img.image}`
        }
        return pic;
    }

    const items = [{
        "Telecommunications and Computing": ['Computing and Technology',
            'Data Storage and Management',
            'Internet and E-Commerce',
            'Telecommunications and Networks']
    }, {
        "Pharmaceuticals": ['Anesthetic Drugs',
            'Animal Pharmaceuticals',
            'Antibiotics',
            'Biopharmaceuticals',
            'Clinical Trials',
            'Drug Delivery',
            'Drug Discovery',
            'Drugs by Therapeutic Area',
            'Generic Drugs',
            'Oncology Drugs',
            'Over the Counter (OTC) Drugs',
            'Pharmaceutical Intermediates',
            'Pharmaceutical Manufacturing',
            'Pharmacoeconomics',
            'Vitamins and Dietary Supplements']
    }]

    // Get all accordion items
    const accordionItems = document.querySelectorAll('.product-type-container');

    // Add click event listeners to each header
    accordionItems.forEach((item) => {
        const header = item.querySelector('.product-type-header');
        const content = item.querySelector('.product-type-content');

        header.addEventListener('click', () => {
            if (content.style.height === '250px') {
                content.style.height = '500px';
            } else {
                content.style.height = '250px';
            }
        });
    });


    return (
        <>
            <NavBar />
            <div className='company-container'>
                <div className="homepage-left"></div>
                <div className="company-content">
                    <div className='content-top'>
                        <div className='category-section'>
                            <CategoryList items={items} />
                        </div>
                        <div className='carousel-section'>
                            <Carousel>
                                <Carousel.Item interval={1000}>
                                    <img className='carousel-img' src={pic} alt="First Slide" />
                                    <Carousel.Caption>
                                        <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={500}>
                                    <img className='carousel-img' src={pic} alt="Second Slide" />
                                    <Carousel.Caption>
                                        <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img className='carousel-img' src={pic} alt="Third Slide" />
                                    <Carousel.Caption>
                                        <h3>Third slide label</h3>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                        </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                    <div className='main-section'>
                        <div className='product-type-container'>
                            <div className='product-type-header'>
                                <p>Pharmaceuticals</p>
                               <p>More</p>
                            </div>
                            <div className='product-type-content'>
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            </div>
                           
                        </div>

                        <div className='product-type-container'>
                            <div className='product-type-header'>
                                <p>Telecommunications and Computing</p>
                               <p>More</p>
                            </div>
                            <div className='product-type-content'>
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            </div>
                           
                        </div>

                        <div className='product-type-container'>
                            <div className='product-type-header'>
                                <p>Chemicals</p>
                               <p>More</p>
                            </div>
                            <div className='product-type-content'>
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            <ProductTile />
                            </div>
                           
                        </div>
                    </div>
                    {/* <div className="extra-section"></div>
                <div className="main-section"></div> */}
                </div>
                <div className="homepage-right"></div>
            </div>
        </>

    )
}


{/* <div className='menu'></div>
            <div className='company-data'>
                <div className='company-card'>
                    <div className="company-logo">
                        <img src={pic} style={{ height: '10%', width: '10%' }} alt="" />
                    </div>
                    <div className='company-contact'>
                        <div className='company-name'>{companyInfo.name}</div>
                        <div className='company-address'>{companyInfo.address}</div>
                        <div className='company-phone'>{companyInfo.phone}</div>
                        <div className='company-email'>{companyInfo.email}</div>
                        <div className='company-website'>{companyInfo.website}</div>
                        <div className='company-fax'>{companyInfo.fax}</div>
                    </div>

                </div>

                <div className='company-detail'>{companyInfo.description}</div>
                <div className='meta'>
                    <div className='company-meta1'>
                        <div className='company-ratings'>Ratings</div>
                        <div className='company-reviews'>Reviews</div>
                        <div className='share-btn'>Share</div>
                    </div>
                    <div className='company-meta2'>
                        <div className='company-category'>{companyInfo.categories?.map((category, index) => category.category)}</div>
                        <div className='company-views'>1440 views</div>
                        <div className='last-update'>Last Update: Aug 8,2023</div>
                    </div>

                </div>

                <div className='company-images'>
                    {companyInfo.images?.map((img, ind) => (
                        <img src={`http://localhost:8000${img.image}`} style={{ height: 200, width: 200 }} alt="" />
                    ))}
                </div>


                <div className='company-products'>
                    {companyInfo.products?.map((product, index) => (
                        <div className='product-item'>
                            <div className='item-img'>
                                <img src={getProductImage(product)} style={{ height: 200, width: 150 }} alt="" />
                            </div>
                            <div className='item-detail'>
                                <div>{product.product_name}</div>
                                <div>Rs. {product.price}/ {product.unit}-</div>
                                <div>
                                    {product.product_features?.map((feature, index) => (
                                        <p>{feature.feature_key}: {feature.feature_value}</p>
                                    ))}
                                </div>
                                <div><Link to="/product">Read more...</Link></div>
                            </div>
                        </div>
                    ))}
                    <div className='product-item'>
                        <div className='item-img'>
                            <img src={pic} style={{ height: 200, width: 150 }} alt="" />
                        </div>
                        <div className='item-detail'>
                            <div>Manifold Absolute Pressure Sensor, 20-120 KPa</div>
                            <div>Rs. 1050/-</div>
                            <div>
                                <p>Pressure Range: 20 to 120 kPa</p>
                                <p>Supply Voltage: 450-4750 mV</p>
                                <p>Colour: Black</p>
                                <p>Signal Type: Voltage Signal</p>
                            </div>
                            <div><Link to="/product">Read more...</Link></div>
                        </div>
                    </div>

                </div>

                <div className='company-info'>
                    <div className='company-opening-daytime'>
                        <table>
                            {daysOfWeek.map((day, index) => {
                                const dayTime = companyInfo.time.find(time => time.day === day);
                                return (
                                    <tr key={index}>
                                        <th>{capitalizeFirstLetter(day)}</th>
                                        <td>{dayTime ? `${dayTime.opening} - ${dayTime.closing}` : 'Closed'}</td>
                                    </tr>
                                );
                            })}
                        </table>
                    </div>
                    <div className='company-map'>
                        <div className="google-map-code">
                            <iframe title="ss" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15282225.79979123!2d73.7250245393691!3d20.750301298393563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30635ff06b92b791%3A0xd78c4fa1854213a6!2sIndia!5e0!3m2!1sen!2sin!4v1587818542745!5m2!1sen!2sin" width="250" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </div>
                </div>

            </div>
            <div className='filters'></div>
        </div> */}
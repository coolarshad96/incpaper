import React, { useState, useEffect } from "react";
import './SearchPage.css';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import pic from './../assets/brand.jpg';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import axios from 'axios';
import ListItem from "../components/ListItem";
import CategoryList from "../components/CategoryList";
import RegionList from "../components/RegionList";

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

export default function SearchPage() {
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/company/companylist/');
                const data = response.data;
                setSearchData(data);
                console.log(data)

            } catch (error) {
                // Handle errors if necessary
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);


    const items = [
        {
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
        }, {
            "Military Aerospace and Defense": ['Ammunition',
                'Biodefense',
                'C4ISR',
                'Homeland Defense',
                'Infantry Weapons and Equipment',
                'Military Aircraft',
                'Military Logistics',
                'Military Unmanned Systems',
                'Missiles and Missiles Technology',
                'Naval Vessels',
                'Radar Systems',
                'Tanks and Armored Vehicles'
            ]
        }, {
            "Manufacturing and Construction": ['Construction',
                'Engineering',
                'Manufacturing and Industry',
                'Security Services']
        }, {
            "Healthcare": ['Biotechnology',
                'Healthcare Services',
                'Laboratory Equipment',
                'Medical Devices']
        }, {
            "Food and Beverage": ['Agriculture',
                'Beverage',
                'Food',
                'Food Ingredients',
                'Food Processing',
                'Food Safety',
                'Food Service',
                'Tobacco']
        }, {
            "Energy and Natural Resources": ['Biofuels',
                'Combined Heat and Power (CHP)',
                'Electricity',
                'Energy Maps',
                'Energy Storage',
                'Environmental',
                'Fossil Fuels',
                'Mining',
                'Nuclear Power',
                'Pipelines',
                'Renewable Energy',
                'Utilities',
                'Water']
        }, {
            "Business and Finance": ['Banking',
                'Business',
                'Economics',
                'Finance',
                'Insurance',
                'Legal',
                'Property']
        }, {
            "Automotive and Transport": ['Automotive',
                'Commercial Aerospace',
                'Maritime',
                'Private Transport Services',
                'Public Transport',
                'Private Transport']
        }]


    return (
        <>
            <NavBar />
            <div className="searchpage-container">
                <div className="searchpage-left"></div>
                <div className="searchpage-body">
                    <div className="extra-section">
                        <CategoryList items={items} />
                    </div>
                    <div className="main-section">
                        {searchData.map((data, index) => (
                            <ListItem data={data} key={index} />
                        ))}
                        {searchData.map((data, index) => (
                            <ListItem data={data} key={index} />
                        ))}
                        {searchData.map((data, index) => (
                            <ListItem data={data} key={index} />
                        ))}
                        {searchData.map((data, index) => (
                            <ListItem data={data} key={index} />
                        ))}
                    </div>
                    <div className="region-section">
                        <RegionList />
                    </div>
                </div>
                <div className="searchpage-right"></div>
            </div>

        </>

    )
}




{/* <div className='content'>
    <div className='content-body'>
        <div className='menu'>
            <div className='menu-body'>
                <div className='menu-heading'>All Categories</div>
                <div className='menu-category'>
                    <div className='category-title'>Category Title</div>
                    <div className='category-item'>Category One</div>
                    <div className='category-item'>Category Two</div>
                    <div className='category-item'>Category Three</div>
                    <div className='category-item'>Category Four</div>
                </div>
                <div className='menu-category'>
                    <div className='category-title'>Category Title</div>
                    <div className='category-item'>Category One</div>
                    <div className='category-item'>Category Two</div>
                    <div className='category-item'>Category Three</div>
                    <div className='category-item'>Category Four</div>
                </div>
                <div className='menu-category'>
                    <div className='category-title'>Category Title</div>
                    <div className='category-item'>Category One</div>
                    <div className='category-item'>Category Two</div>
                    <div className='category-item'>Category Three</div>
                    <div className='category-item'>Category Four</div>
                </div>
                <div className='menu-category'>
                    <div className='category-title'>Category Title</div>
                    <div className='category-item'>Category One</div>
                    <div className='category-item'>Category Two</div>
                    <div className='category-item'>Category Three</div>
                    <div className='category-item'>Category Four</div>
                </div>
            </div>
        </div>
        <div className='search-body'>
            {searchData.map((result, index) => (
                <div key={index} className='search-layout'>
                    <div className='search-result'>
                      
                        <div className='search-company-logo'>
                            <img src={`http://localhost:8000${result.logo}`} style={{ height: '100%', width: '100%' }} alt='' />
                        </div>
                        <div className='search-company-contact'>
                            <div className='company-name'>{result.name}</div>
                            <div className='company-address'>{result.address}</div>
                            <div className='company-phone'>{result.phone}</div>
                            <div className='company-email'>{result.email}</div>
                            <div className='company-website'>{result.website}</div>
                            <div className='company-fax'>{result.fax}</div>
                        </div>
                        <div className='search-company-products'>
                            {result.categories?.map((category, index) => (
                                <div key={index}>{category.category}</div>
                            ))}
                        </div>
                    </div>
                    <div className='search-result-tags'>
                        {result.tags[0].split(",").map((tag, index) => (
                            <div key={index}>{tag}</div>
                        ))}

                    </div>
                </div>
            ))}
            <div className='search-layout'>
                <div className='search-result'>
                    <div className="search-company-logo">
                        <img src={pic} style={{ height: '100%', width: '100%' }} alt="" />
                    </div>
                    <div className='search-company-contact'>
                        <div className='company-name'>Company name</div>
                        <div className='company-address'>Company address</div>
                        <div className='company-phone'>++977 9809211878</div>
                        <div className='company-email'>coolarshad96@gmailcom</div>
                        <div className='company-website'>http://noticevalley.com</div>
                        <div className='company-fax'>+977 40023</div>
                    </div>
                    <div className='search-company-products'>
                        <div>Texttile</div>
                        <div>Clothing</div>
                        <div>Manufacturing</div>
                        <div>Texttile</div>
                        <div>Manufacturing</div>
                        <div>Texttile</div>
                        <div>and 10  more..</div>
                    </div>
                </div>
                <div className='search-result-tags'>
                    <div>Texttile</div>
                    <div>Clothing</div>
                    <div>Manufacturing</div>
                    <div>Texttile</div>
                    <div>Clothing</div>
                    <div>Manufacturing</div>
                    <div>Texttile</div>
                    <div>Clothing</div>
                </div>
            </div>

        </div>
        <div className='filters'>
            <div className='filter-country'>
                <div className='country-name'>Worldwide</div>
                <div className='country-name'>Nepal</div>
                <div className='filter-state'>
                    <div className='state-name'>Pradesh 1</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
                <div className='filter-state'>
                    <div className='state-name'>Pradesh 2</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
                <div className='filter-state'>
                    <div className='state-name'>Pradesh 3</div>
                    <div className='city-name'>City One</div>
                    <div className='city-name'>City Two</div>
                    <div className='city-name'>City Three</div>
                    <div className='city-name'>City Four</div>
                </div>
            </div>

        </div>
    </div>
</div> */}
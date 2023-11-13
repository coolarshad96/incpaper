import React from "react";
import "./HomePage.css";
import logo from "../assets/vendor-paper-high-resolution-color-logo.png"
import HomePageTile from "./HomePageTile";
import RegionList from "./RegionList";

function HomePage() {
    const items = [['Computing and Technology',
        'Data Storage and Management',
        'Internet and E-Commerce',
        'Telecommunications and Networks'], ['Anesthetic Drugs',
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
        'Vitamins and Dietary Supplements'], ['Ammunition',
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
            ], ['Construction',
                'Engineering',
                'Manufacturing and Industry',
                'Security Services'], ['Biotechnology',
                    'Healthcare Services',
                    'Laboratory Equipment',
                    'Medical Devices'], ['Agriculture',
                        'Beverage',
                        'Food',
                        'Food Ingredients',
                        'Food Processing',
                        'Food Safety',
                        'Food Service',
                        'Tobacco'], ['Biofuels',
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
                            'Water'], ['Banking',
                                'Business',
                                'Economics',
                                'Finance',
                                'Insurance',
                                'Legal',
                                'Property'], ['Automotive',
                                    'Commercial Aerospace',
                                    'Maritime',
                                    'Private Transport Services',
                                    'Public Transport',
                                    'Private Transport']]
    return (
        <div className="homepage-container">
            <div className="homepage-left"></div>
            <div className="homepage-body">
                <div className="extra-section">
                    <div>
                        <img src={logo} alt="logo" />
                    </div>
                </div>
                <div className="main-section">
                    {/* <h3>COMPANIES</h3> */}
                    <div className="main-section-tiles">
                        <HomePageTile title="Telecommunications and Computing" items={items[0]} />
                        <HomePageTile title="Pharmaceuticals" items={items[1]} />
                        <HomePageTile title="Military Aerospace and Defense" items={items[2]} />
                        <HomePageTile title="Manufacturing and Construction" items={items[3]} />
                        <HomePageTile title="Healthcare" items={items[4]} />
                        <HomePageTile title="Food and Beverage" items={items[5]} />
                        <HomePageTile title="Energy and Natural Resources" items={items[6]} />
                        <HomePageTile title="Business and Finance" items={items[7]} />
                        <HomePageTile title="Automotive and Transport" items={items[8]} />
                        <HomePageTile title="Automotive and Transport" items={items[8]} />
                    </div>
                </div>
                <div className="region-section">
                    <RegionList />
                </div>
            </div>
            <div className="homepage-right"></div>
        </div>);
}

export default HomePage;
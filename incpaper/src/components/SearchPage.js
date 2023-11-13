import './SearchPage.css';
import pic from './../assets/brand.jpg';
import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function SearchPage() {
    return (
        <div className='content'>
            <div className='navbar'>
               <div className='header-logo'>Logo</div>
               <div className='header-search-bar'>
                <input placeholder='Search Bar' value=""/>
               </div>
               <div className='header-userinfo'>
                    <DropdownButton
                        as={ButtonGroup}
                        key={'Primary'}
                        id={`dropdown-variants-Primary`}
                        variant={'Primary'.toLowerCase()}
                        title={'Howdy, Saiyad'}
                    >
                        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                        <Dropdown.Item eventKey="3" active>
                            Active Item
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                    </DropdownButton>
    
               </div>
            </div>
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
                    </div>
                </div>
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
                    </div>
                </div>
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
        </div>
    )
}

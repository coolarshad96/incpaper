import React from "react";
import "./CategoryList.css";
import Accordion from 'react-bootstrap/Accordion';

function CategoryList(props) {
  return (<>
    <Accordion>
      {/* {props.items.map((item, index) => {
        const category = Object.keys(item)[0]; // Access the category (key)
        const subcategories = Object.values(item)[0];
        <Accordion.Item eventKey={index}>
          <Accordion.Header>{category}</Accordion.Header>
          <Accordion.Body>
            {subcategories.map((i) => <div className="tile-item">{i}</div>)}
          </Accordion.Body>
        </Accordion.Item>
      })} */}
      {props.items.map((item, index) => {
        const category = Object.keys(item)[0]; // Access the category (key)
        const subcategories = Object.values(item)[0]; // Access the subcategories (value)

        return (
          <Accordion.Item key={index} eventKey={index.toString()}>
            <Accordion.Header>{category}</Accordion.Header>
            <Accordion.Body>
              
                {subcategories.map((subcategory, subIndex) => (
                  <div className="tile-item">{subcategory}</div>
                ))}
             
            </Accordion.Body>
          </Accordion.Item>
        );
      })}
    </Accordion>
  </>);
}

export default CategoryList;
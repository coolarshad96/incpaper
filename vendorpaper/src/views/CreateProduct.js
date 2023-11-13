import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CreateProduct.css";
import NavBar from "../components/NavBar";

const api = axios.create({
    baseURL: 'http://localhost:8000',
});

function CreateProduct() {
    const [inputSets, setInputSets] = useState(1);
    const [inputFields, setInputFields] = useState([{ feature_key: '', feature_value: '' }]);
    const [uploadedImages, setUploadedImages] = useState([]);
    const [productData, setProductData] = useState({
        id: '',
        product_name: '',
        product_description: '',
        price: '',
        unit: '',
        video_url: '',
        tags: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type } = event.target;
        const newValue = type === 'file' ? event.target.files[0] : value;
        setProductData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    function getCookie(name) {
        const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
        return cookieValue ? cookieValue.pop() : '';
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);

        formData.append('product_name', event.target.product_name.value);
        formData.append('product_description', event.target.product_description.value);
        formData.append('price', event.target.price.value);
        formData.append('unit', event.target.unit.value);
        formData.append('video_url', event.target.video_url.value);
        formData.append('tags', event.target.tags.value);

        const csrftoken = getCookie('csrftoken');
        console.log(csrftoken)
        formData.append('csrfmiddlewaretoken', csrftoken);

        // Access form data using formData.get('field_name')
        // Perform actions with the form data, e.g., make an API request

        try {
            const response = await api.post('/product/product/', formData, {
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Handle the response here
            console.log(response);
        } catch (error) {
            // Handle errors here
            console.error(error);
        }
    }

    const handleImageSubmit = async (event) => {
        event.preventDefault();
        // Handle form submission logic here
        try {
            await Promise.all(
                uploadedImages.map(async (image) => {
                    await uploadImage(image, 3);
                })
            );

            // Handle successful form submission here
            console.log('All images uploaded successfully!');
        } catch (error) {
            console.error('Error uploading images', error);
        }
    };

    const uploadImage = async (file, product_id) => {
        const csrftoken = getCookie('csrftoken');
        try {

            const formData = new FormData();
            formData.append('image', file); // Make sure the file is appended with the correct key 'image'
            formData.append('product', product_id); // Make sure the company_id is appended with the correct key 'company'

            const response = await api.post('/product/images/', formData, {
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly
                },
            });

            if (response.status === 200) {
                // Image uploaded successfully
                console.log('Image uploaded successfully!');
            } else {
                // Handle upload failure
                console.error('Failed to upload image');
            }
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };


    const handleAddInputSet = () => {
        setInputSets((prevInputSets) => prevInputSets + 1);
    };
    const getUrl = (file) => {
        return file.image || URL.createObjectURL(file);
    }
    const handleFileChange = (event, index) => {
        const file = event.target.files[0];
        // const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the selected image file
        setUploadedImages((prevImages) => {
            const newImages = [...prevImages];
            newImages[index] = file; // Use the URL as the src for the image
            return newImages;
        });
    };

    const handleFeatureChange = (index, field, value) => {
        const values = [...inputFields];
        values[index][field] = value;
        setInputFields(values);
    };

    const handleFeatureAddFields = () => {
        const values = [...inputFields];
        values.push({ text1: '', text2: '' });
        setInputFields(values);
    };

    const handleFeatureSubmit = async(event) => {
        event.preventDefault();
        console.log(inputFields);
        // You can perform further actions like sending the data to an API here
        try {
            await Promise.all(
                inputFields.map(async (inputField) => {
                    await SubmitFeature(inputField, 3);
                })
            );

            // Handle successful form submission here
            console.log('All images uploaded successfully!');
        } catch (error) {
            console.error('Error uploading images', error);
        }
    };
    const SubmitFeature = async (inputField, product_id) => {
        const csrftoken = getCookie('csrftoken');
        try {

            const formData = new FormData();
            formData.append('feature_key', inputField['feature_key']); 
            formData.append('feature_value', inputField['feature_value']);
            formData.append('product', product_id); 

            const response = await api.post('/product/feature/', formData, {
                headers: {
                    'X-CSRFToken': csrftoken,
                    'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly
                },
            });

            if (response.status === 200) {
                // Image uploaded successfully
                console.log('Feature saved successfully!');
            } else {
                // Handle upload failure
                console.error('Failed to save Features');
            }
        } catch (error) {
            console.error('Error uploading image', error);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response1 = await api.get('/product/product/3/');
            const productDataFromApi = response1.data;
            setProductData(productDataFromApi);
            console.log(productDataFromApi)
           
            const response2 = await api.get('/product/images/');
            setUploadedImages(response2.data);
            console.log(response2.data)
    
          
            const response3 = await api.get('/product/feature/');
            setInputFields(response3.data);
            // console.log(response3)
          } catch (error) {
            // Handle errors if necessary
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);

      

    return (
        <>
            <NavBar />
            <div className='companyproduct-container'>
                <div className="companyproduct-left"></div>
                <div className="companyproduct-body">
                    <div className="product-form">
                        <p>Create New Product</p>
                        <form onSubmit={handleSubmit}>
                            <div>
                                <label>Name</label>
                                <input type="text" name="product_name" value={productData.product_name} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Description</label>
                                <input type="text" name="product_description" value={productData.product_description} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="text" name="price" value={productData.price} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Unit</label>
                                <input type="text" name="unit" value={productData.unit} onChange={handleInputChange} />
                            </div>

                            <div>
                                <label>Video</label>
                                <input type="text" name="video_url" value={productData.video_url} onChange={handleInputChange} />
                            </div>
                            <div>
                                <label>Tags</label>
                                <input type="text" name="tags" value={productData.tags} onChange={handleInputChange} />
                            </div>

                            <div>
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="product-images">
                        <p>Product Images</p>
                        <form onSubmit={handleImageSubmit}>
                            {Array.from({ length: inputSets }).map((_, index) => (    //uploadedImages.length   inputSets
                                <div key={index} style={{ position: 'relative' }}>
                                    <label>Product Image</label>
                                    <input
                                        type="file"
                                        name={`company_logo_${index}`}
                                        onChange={(event) => handleFileChange(event, index)}
                                    />
                                    {/* {uploadedImages && <span>Selected file: {uploadedImages[index].image}</span>} */}
                                    {uploadedImages[index] && (
                                        <img
                                            src={getUrl(uploadedImages[index])}
                                            // src={uploadedImages[index]}
                                            alt="Uploaded"
                                            style={{ position: 'absolute', top: 0, right: 50, width: 50, height: 50 }}
                                        />
                                    )}
                                </div>
                            ))}
                            <div className="product-images-btns">
                                <input type="button" value="Add" onClick={handleAddInputSet} />
                                <input type="submit" value="Submit" />
                            </div>
                        </form>
                    </div>
                    <div className="product-features">
                    <p>Product Features</p>
                        <form onSubmit={handleFeatureSubmit}>
                            {inputFields.map((inputField, index) => (
                                <div key={index} className="feature-fields">
                                    <input
                                        type="text"
                                        value={inputField.feature_key}
                                        onChange={(e) => handleFeatureChange(index, 'key', e.target.value)}
                                        placeholder="Key"
                                        style={{ width: '45%' }} // Adjust the width as needed
                                    />
                                    <input
                                        type="text"
                                        value={inputField.feature_value}
                                        onChange={(e) => handleFeatureChange(index, 'value', e.target.value)}
                                        placeholder="Value"
                                        style={{ width: '45%' }} // Adjust the width as needed
                                    />
                                </div>
                            ))}
                            <div className="product-images-btns">
                                <input type="button" value="Add" onClick={handleFeatureAddFields} />
                                <input type="submit" value="Submit" />
                            </div>
                         
                        </form>
                    </div>
                </div>
                <div className="companyproduct-right"></div>
            </div>
            </>
    );
}

export default CreateProduct;


{/* <div>
<p>Create New Product</p>
<form onSubmit={handleSubmit}>
    <div>
        <label>Name</label>
        <input type="text" name="product_name" value={productData.product_name} onChange={handleInputChange} />
    </div>
    <div>
        <label>Description</label>
        <input type="text" name="product_description" value={productData.product_description} onChange={handleInputChange} />
    </div>
    <div>
        <label>Price</label>
        <input type="text" name="price" value={productData.price} onChange={handleInputChange} />
    </div>
    <div>
        <label>Unit</label>
        <input type="text" name="unit" value={productData.unit} onChange={handleInputChange} />
    </div>

    <div>
        <label>Video</label>
        <input type="text" name="video_url" value={productData.video_url} onChange={handleInputChange} />
    </div>
    <div>
        <label>Tags</label>
        <input type="text" name="tags" value={productData.tags} onChange={handleInputChange} />
    </div>

    <div>
        <input type="submit" value="Submit" />
    </div>
</form>
</div>
<hr />
<div style={{ position: 'relative' }}>
<p>Product Images</p>
<form onSubmit={handleImageSubmit}>
    {Array.from({ length: inputSets }).map((_, index) => (    //uploadedImages.length   inputSets
        <div key={index} style={{ position: 'relative' }}>
            <label>Product Image</label>
            <input
                type="file"
                name={`company_logo_${index}`}
                onChange={(event) => handleFileChange(event, index)}
            />
            {/* {uploadedImages && <span>Selected file: {uploadedImages[index].image}</span>}
            {uploadedImages[index] && (
                <img
                    // src={getUrl(uploadedImages[index])}
                    src={uploadedImages[index]}
                    alt="Uploaded"
                    style={{ position: 'absolute', top: 0, right: 50, width: 50, height: 50 }}
                />
            )} */}
//         </div>
//     ))}
//     <div>
//         <input type="submit" value="Submit" />
//     </div>
// </form>

{/* <button onClick={handleAddInputSet} style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
    Add
</button>
</div>
<hr />
<div>
<form onSubmit={handleFeatureSubmit}>
    {inputFields.map((inputField, index) => (
        <div key={index}>
            <input
                type="text"
                value={inputField.feature_key}
                onChange={(e) => handleFeatureChange(index, 'key', e.target.value)}
                placeholder="Key 1"
            />
            <input
                type="text"
                value={inputField.feature_value}
                onChange={(e) => handleFeatureChange(index, 'value', e.target.value)}
                placeholder="Value 2"
            />
        </div>
    ))}
    <button type="button" onClick={handleFeatureAddFields}>
        Add More
    </button>
    <button type="submit">Submit</button>
</form>
</div> */}
import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./CreateCompany.css";
import NavBar from "../components/NavBar";

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

function CreateCompany() {
  const [inputSets, setInputSets] = useState(1);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [companyData, setCompanyData] = useState({
    id: '',
    name: '',
    logo: null,
    address: '',
    phone: '',
    email: '',
    fax: '',
    website: '',
    description: '',
    location: '',
  });
  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === 'file' ? event.target.files[0] : value;
    setCompanyData((prevFormData) => ({
      ...prevFormData,
      [name]: newValue,
    }));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await api.get('/company/company/20/');
        const companyDataFromApi = response1.data;
        setCompanyData(companyDataFromApi);
        console.log(companyDataFromApi)

        const response2 = await api.get('/company/images/');
        setUploadedImages(response2.data);
        // console.log(response2)


        const response3 = await api.get('/company/time/');
        setData(response3.data);
        // console.log(response3)
      } catch (error) {
        // Handle errors if necessary
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);



  function getCookie(name) {
    const cookieValue = document.cookie.match('(^|;)\\s*' + name + '\\s*=\\s*([^;]+)');
    return cookieValue ? cookieValue.pop() : '';
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);

    formData.append('name', event.target.company_name.value);
    formData.append('logo', event.target.company_logo.files[0]);
    formData.append('address', event.target.company_address.value);
    formData.append('phone', event.target.company_phone.value);
    formData.append('email', event.target.company_email.value);
    formData.append('fax', event.target.company_fax.value);
    formData.append('website', event.target.company_website.value);
    formData.append('description', event.target.company_description.value);
    formData.append('location', event.target.company_location.value);

    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken)
    formData.append('csrfmiddlewaretoken', csrftoken);

    // Access form data using formData.get('field_name')
    // Perform actions with the form data, e.g., make an API request

    try {
      const response = await api.post('http://localhost:8000/company/company/', formData, {
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
  };

  const handleImageSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    try {
      await Promise.all(
        uploadedImages.map(async (image) => {
          await uploadImage(image, 20);
        })
      );

      // Handle successful form submission here
      console.log('All images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images', error);
    }
  };

  const uploadImage = async (file, company_id) => {
    const csrftoken = getCookie('csrftoken');
    try {

      const formData = new FormData();
      formData.append('image', file); // Make sure the file is appended with the correct key 'image'
      formData.append('company', company_id); // Make sure the company_id is appended with the correct key 'company'

      const response = await api.post('/company/images/', formData, {
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

  const [data, setData] = useState([
    { day: 'monday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'tuesday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'wednesday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'thursday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'friday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'saturday', opening: '9:00 AM', closing: '5:00 PM' },
    { day: 'sunday', opening: 'Closed', closing: 'Closed' },
  ]);

  const handleTimeChange = (index, field, value) => {
    const newData = [...data];
    newData[index][field] = value;
    setData(newData);
  };
  const handleTimeSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission logic here
    try {
      await Promise.all(
        data.map(async (time) => {
          await uploadTime(time, 20);
        })
      );

      // Handle successful form submission here
      console.log('All images uploaded successfully!');
    } catch (error) {
      console.error('Error uploading images', error);
    }
  };
  const uploadTime = async (time, company_id) => {
    const csrftoken = getCookie('csrftoken');
    try {

      const formData = new FormData();
      formData.append('day', time['day']);
      formData.append('opening', time['opening']);
      formData.append('closing', time['closing']);
      formData.append('company', company_id); // Make sure the company_id is appended with the correct key 'company'

      const response = await api.post('/company/time/', formData, {
        headers: {
          'X-CSRFToken': csrftoken,
          'Content-Type': 'multipart/form-data', // Ensure Content-Type is set correctly
        },
      });

      if (response.status === 200) {
        // Image uploaded successfully
        console.log('Time table uploaded successfully!');
      } else {
        // Handle upload failure
        console.error('Failed to upload time table');
      }
    } catch (error) {
      console.error('Error uploading time table', error);
    }
  };

  return (
    <>
      <NavBar />
      <div className='companycreate-container'>
        <div className="companycreate-left"></div>
        <div className="companycreate-body">
          <div className="company-form">
            <p>Create New Company</p>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Company Name</label>
                <input type="text" name="company_name" value={companyData.name} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Logo</label>
                <input type="file" name="company_logo" onChange={handleInputChange} />
                {companyData.logo && <span>Selected file: {companyData.logo}</span>}
              </div>
              <div>
                <label>Company Address</label>
                <input type="text" name="company_address" value={companyData.address} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Phone</label>
                <input type="text" name="company_phone" value={companyData.phone} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Email</label>
                <input type="text" name="company_email" value={companyData.email} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Fax</label>
                <input type="text" name="company_fax" value={companyData.fax} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Website</label>
                <input type="text" name="company_website" value={companyData.website} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Description</label>
                <input type="text" name="company_description" value={companyData.description} onChange={handleInputChange} />
              </div>
              <div>
                <label>Company Location</label>
                <input type="text" name="company_location" value={companyData.location} onChange={handleInputChange} />
              </div>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <hr />
          <div className="company-images">
            <p>Company Images</p>
            <form onSubmit={handleImageSubmit}>
              {Array.from({ length: inputSets }).map((_, index) => (    //uploadedImages.length   inputSets
                <div key={index} style={{ position: 'relative' }}>
                  <label>Company Logo</label>
                  <input
                    type="file"
                    name={`company_logo_${index}`}
                    onChange={(event) => handleFileChange(event, index)}
                  />
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
              <div className="company-images-btns">
                <input type="button" value="Add" onClick={handleAddInputSet} />
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
          <hr />
          <div className="company-working-time">
            <p>WORKING TIME</p>
            <form onSubmit={handleTimeSubmit}>
              <table>
                <thead>
                  <tr>
                    <th>Days</th>
                    <th>Opening</th>
                    <th>Closing</th>
                  </tr>
                </thead>
                <tbody>

                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.day}</td>
                      <td>
                        {item.day === 'Closed' ? (
                          <span>{item.opening}</span>
                        ) : (
                          <input
                            type="time"
                            value={item.opening}
                            onChange={(e) => handleTimeChange(index, 'opening', e.target.value)}
                          />
                        )}
                      </td>
                      <td>
                        {item.day === 'Closed' ? (
                          <span>{item.closing}</span>
                        ) : (
                          <input
                            type="time"
                            value={item.closing}
                            onChange={(e) => handleTimeChange(index, 'closing', e.target.value)}
                          />
                        )}
                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
              <div>
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
        <div className="companycreate-right"></div>
      </div>
    </>
  );
}

export default CreateCompany;



{/* <div>
<p>Create New Company</p>
<form onSubmit={handleSubmit}>
  <div>
    <label>Company Name</label>
    <input type="text" name="company_name" value={companyData.name} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Logo</label>
    <input type="file" name="company_logo" onChange={handleInputChange} />
    {companyData.logo && <span>Selected file: {companyData.logo}</span>}
  </div>
  <div>
    <label>Company Address</label>
    <input type="text" name="company_address" value={companyData.address} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Phone</label>
    <input type="text" name="company_phone" value={companyData.phone} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Email</label>
    <input type="text" name="company_email" value={companyData.email} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Fax</label>
    <input type="text" name="company_fax" value={companyData.fax} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Website</label>
    <input type="text" name="company_website" value={companyData.website} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Description</label>
    <input type="text" name="company_description" value={companyData.description} onChange={handleInputChange} />
  </div>
  <div>
    <label>Company Location</label>
    <input type="text" name="company_location" value={companyData.location} onChange={handleInputChange} />
  </div>
  <div>
    <input type="submit" value="Submit" />
  </div>
</form>
</div>
<hr />
<div style={{ position: 'relative' }}>
<p>Company Images</p>
<form onSubmit={handleImageSubmit}>
  {Array.from({ length: inputSets.length }).map((_, index) => (    //uploadedImages.length   inputSets
    <div key={index} style={{ position: 'relative' }}>
      <label>Company Logo</label>
      <input
        type="file"
        name={`company_logo_${index}`}
        onChange={(event) => handleFileChange(event, index)}
      />
      {uploadedImages[index] && (
        <img
          // src={getUrl(uploadedImages[index])}
          src={uploadedImages[index]}
          alt="Uploaded"
          style={{ position: 'absolute', top: 0, right: 50, width: 50, height: 50 }}
        />
      )}
    </div>
  ))}
  <div>
    <input type="submit" value="Submit" />
  </div>
</form>

<button onClick={handleAddInputSet} style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
  Add
</button>
</div>
<hr />
<form onSubmit={handleTimeSubmit}>
<table>
  <thead>
    <tr>
      <th>Days</th>
      <th>Opening</th>
      <th>Closing</th>
    </tr>
  </thead>
  <tbody>

    {data.map((item, index) => (
      <tr key={index}>
        <td>{item.day}</td>
        <td>
          {item.day === 'Closed' ? (
            <span>{item.opening}</span>
          ) : (
            <input
              type="time"
              value={item.opening}
              onChange={(e) => handleTimeChange(index, 'opening', e.target.value)}
            />
          )}
        </td>
        <td>
          {item.day === 'Closed' ? (
            <span>{item.closing}</span>
          ) : (
            <input
              type="time"
              value={item.closing}
              onChange={(e) => handleTimeChange(index, 'closing', e.target.value)}
            />
          )}
        </td>
      </tr>
    ))}

  </tbody>
</table>
<div>
  <input type="submit" value="Submit" />
</div>
</form> */}
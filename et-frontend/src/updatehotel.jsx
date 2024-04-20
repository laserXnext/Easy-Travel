import React, { useState, useEffect } from 'react';
import { addhotel, gethotel, listdistrict, updatehotel } from './service/districtservice.js';
import Add from './component/addhead.jsx';
import Update from './component/updatehead.jsx';
import './css/addhotel.css';
import { useNavigate, useParams } from 'react-router-dom';
import useLocalStorage from "use-local-storage";

const UpdateHotel = () => {
  const [districts, setDistricts] = useState([]);
  const [hotel_name, setHotelname] = useState('');
  const [hotel_address, setHoteladdress] = useState('');
  const [hotel_city, setHotelcity] = useState('');
  const [hotel_state, setHotelstate] = useState('');
  const [hotel_country, setHotelcountry] = useState('');
  const [hotel_rating, setHotelrate] = useState('');
  const [hotel_phone, setHotelcontact] = useState('');
  const [hotel_description, setHoteldescription] = useState('');
  const [hotel_price, setHotelprice] = useState('');
  const [hotel_image, setHotelimage] = useState('');
  const [hotel_website, setHotelwebsite] = useState('');

  const { hotel_id } = useParams();
  const navigate = useNavigate();

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    listdistrict()
      .then((response) => {
        setDistricts(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, []);

  useEffect(() => {
    if (hotel_id) {
      gethotel(hotel_id)
        .then((response) => {
          const data = response.data;
          setHoteladdress(data.hotel_address);
          setHotelcity(data.hotel_city);
          setHotelcountry(data.hotel_country);
          setHoteldescription(data.hotel_description);
          setHotelimage(data.hotel_image);
          setHotelname(data.hotel_name);
          setHotelcontact(data.hotel_phone);
          setHotelrate(data.hotel_rating);
          setHotelstate(data.hotel_state);
          setHotelwebsite(data.hotel_website);
          setHotelprice(data.hotel_price);
        })
        .catch((error) => {
          console.error('Error fetching data', error);
        });
    }
  }, [hotel_id]);

  const [error, setError] = useState({
    hotel_name: '',
    hotel_address: '',
    hotel_city: '',
    hotel_state: '',
    hotel_rating: '',
    hotel_phone: '',
    hotel_price: '',
    hotel_image: ''
  });

  function validate()
  {
    let valid = true;
    const errors = {...error};

    if(hotel_name.trim()){
      errors.hotel_name = '';
    }else{
      errors.hotel_name = 'Hotel Name is required';
      valid = false;
    }

    if(hotel_address.trim()) {
      errors.hotel_address = '';
    } else {
      errors.hotel_address = 'Hotel Address is required';
      valid = false;
    }
    
    if(hotel_city.trim()) {
      errors.hotel_city = '';
    } else {
      errors.hotel_city = 'Hotel City is required';
      valid = false;
    }
    
    if(hotel_image.trim()) {
      errors.hotel_image = '';
    } else {
      errors.hotel_image = 'Hotel Image is required';
      valid = false;
    }
    
    if(hotel_name.trim()) {
      errors.hotel_name = '';
    } else {
      errors.hotel_name = 'Hotel Name is required';
      valid = false;
    }
    
    if(hotel_phone.trim()) {
      errors.hotel_phone = '';
    } else {
      errors.hotel_phone = 'Hotel Phone is required';
      valid = false;
    }
    
    if(hotel_rating.trim()) {
      errors.hotel_rating = '';
    } else {
      errors.hotel_rating = 'Hotel Rating is required';
      valid = false;
    }
    
    if(hotel_state.trim()) {
      errors.hotel_state = '';
    } else {
      errors.hotel_state = 'Hotel State is required';
      valid = false;
    }
    
    if(hotel_price.trim()) {
      errors.hotel_price = '';
    } else {
      errors.hotel_price = 'Hotel Price is required';
      valid = false;
    }
    setError(errors);

    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      const hotel = {
        hotel_address,
        hotel_city,
        hotel_country,
        hotel_description,
        hotel_image,
        hotel_name,
        hotel_phone,
        hotel_rating,
        hotel_state,
        hotel_website,
        hotel_price
      };
      if (hotel_id) {
        updatehotel(hotel_id, hotel)
          .then((response) => {
            console.log(response);
            alert('Hotel updated successfully');
            navigate('/admin');
          })
          .catch((error) => {
            console.error('Error updating data', error);
          });
      } else {
        addhotel(hotel)
          .then((response) => {
            console.log(response);
            alert('Hotel added successfully');
            navigate('/admin');
          })
          .catch((error) => {
            console.error('Error adding data', error);
          });
      }
    }
  };

  function handletitle()
  {
    if(hotel_id)
    {
      return <Update />
    }
    else
    {
      return <Add/>
    }
  }
  return (
    <div data-theme={isDark ? 'dark' : 'light'}>
      {handletitle()}
      <div className='addhotel'>
        <form>
          <label>Hotel Name</label>
          <input type='text' placeholder='Enter Hotel Name' value={hotel_name} name='hotel_name' onChange={(e) => setHotelname(e.target.value)} required/>
          <div className='address'>
            <label>Address</label>
          </div>
          <div className='addr-field'>
            <input type='text' placeholder='Enter Address' value={hotel_address} name='hotel_address' onChange={(e) => setHoteladdress(e.target.value)} required/>
            <input type='text' placeholder='Enter City' value={hotel_city} name='hotel_city' onChange={(e) => setHotelcity(e.target.value)} required/>
            <select value={hotel_state} onChange={(e) => setHotelstate(e.target.value)} required>
              <option value=''>Select State</option>
              {districts.map((district) => (
                <option key={district.id} value={district.name_en}>
                  {district.name_en}
                </option>
              ))}
            </select>
            <input type='text' placeholder='Enter Country' value={hotel_country}  name='hotel_country' onChange={(e) => setHotelcountry(e.target.value)}/>
          </div>
          <label>Rating</label>
          <input type='text' placeholder='Enter Rating' value={hotel_rating} name='hotel_rate'  maxLength={1} onChange={(e) => setHotelrate(e.target.value)} required/>
          <label>Contact No</label>
          <input type='text' placeholder='Enter Contact No' maxLength={10} value={hotel_phone} name='hotel_contact' onChange={(e) => setHotelcontact(e.target.value)} required/>
          <label>Description</label>
          <input type='text' placeholder='Enter Description' value={hotel_description} name='hotel_description' onChange={(e) => setHoteldescription(e.target.value)}/>
          <label>Price</label>
          <input type='text' placeholder='Enter Price' value={hotel_price} name='hotel_price' onChange={(e) => setHotelprice(e.target.value)} required/>
          <label>Image</label>
          <input type='text' placeholder='Enter Image Path' name='hotel_image' value={hotel_image} onChange={(e) => setHotelimage(e.target.value)} required/>
          <label>Website</label>
          <input type='text' placeholder='Enter Website' value={hotel_website} name='hotel_website' onChange={(e) => setHotelwebsite(e.target.value)}/>
          <div className='btn'>
            <button value='edit Hotel' onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateHotel;
import './css/hoteldata.css';
import React,{useEffect, useState} from 'react';
import {listhotel} from './service/districtservice.js';
import{Link} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Error from './error.jsx';
import useLocalStorage from "use-local-storage";
import './component/searchbar.css'

const data = () =>{
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    const[hotel,sethotel] = useState([]);
    const { search } = useLocation();
    const queryParams = new URLSearchParams(search);
    const [searchname,setSearch] = useState('');
    console.log(searchname);
    const district = queryParams.get('district');

    useEffect (() => 
    {
        listhotel().then((response) => {
            if (district) 
            {
            const filteredHotels = response.data.filter(hotel => hotel.hotel_state === district);
            sethotel(filteredHotels);
            } 
            else 
            {
            sethotel(response.data);
            }

        }).catch(error => {

            console.error('Error fetching data: ', error);

        })
    },
    [])

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 0; i < rating; i++) {
            stars.push(<i key={i} className="uil uil-star"></i>);
        }
        return stars;
    };

    return(
        <div>
            <div className='search'>
                <input type='text'  placeholder='Search by hotel name' className='searchbar'  onChange={(e) => setSearch(e.target.value)}/>
            </div>
            <div className="hotels"  data-theme={isDark ? 'dark' : 'light'}>
            {hotel.length === 0 && <Error/>}
            {
                hotel.filter((hotel) =>{
                    return searchname.toLowerCase() === '' ? hotel : hotel.hotel_name.toLowerCase().includes(searchname);
                }).map(hotel =>
                <div class="hotel">
                    <img src={"./src/assets/Hotel/"+hotel.hotel_image} class="hotel-img"/>
                    <div class="hotel-info">
                        <p class="hotel-name">{hotel.hotel_name}</p>
                        <div className="ratings">
                            {generateStars(parseFloat(hotel.hotel_rating))}
                        </div>
                        <p class="hotel-addr">{hotel.hotel_address}, {hotel.hotel_city}, {hotel.hotel_state}</p>
                        <p className="hotel-available"> Bookings - <a className='hotel-a' data-available={hotel.hotel_available === '1' ? 'true' : 'false'}>{hotel.hotel_available === '1' ? 'Available' : 'Not available'}</a></p>
                        <p class="hotel-price">Rs. {hotel.hotel_price}  (per night)</p>
                        <p class="hotel-contact">Phone No - {hotel.hotel_phone}</p>
                        <Link to={hotel.hotel_website}><p class="hotel-website"><i class="uil uil-globe"/> Visit the Website</p></Link>
                    </div>
                </div>
                )
            }
            </div>
        </div>
    );
}

export default data;
import './css/hoteltable.css'
import React,{useEffect, useState} from 'react';
import {deletehotel, listhotel} from './service/districtservice.js';
import Adminhead from './component/adminhead.jsx';
import useLocalStorage from "use-local-storage";

const hoteltable = () =>{
    
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    const[hotel,sethotel] = useState([])
    useEffect (() => {
        gethoteldata();
    },
    [])

    function gethoteldata()
    {
        listhotel().then((response) => {

            sethotel(response.data);

        }).catch(error => {

            console.error('Error fetching data: ', error);

        })
    }
    function addnewhotel()
    {
        window.location.href = '/addhotel';
    }

    function updatehotel(hotel_id)
    {
        window.location.href = `/update/${hotel_id}`;
    }

    function deletehoteldata(hotel_id) {

        const confirmDelete = window.confirm('I think you click the wrong button. Are you sure you want to delete this data ?');

        if (confirmDelete) {
            console.log(hotel_id);

            deletehotel(hotel_id).then((response) => 
            {
                gethoteldata();
            })
            .catch(error => 
            {
                console.error('Error deleting data: ', error);
            });
        }
    }

    return(
        <div data-theme={isDark ? 'dark' : 'light'}>
            <Adminhead/>
            <div className='table'>
                <button className='add-btn' onClick={addnewhotel}>Add Hotel</button>
                <table className='.table-hover'>
                    <tr>
                        <th>Hotel Name</th>
                        <th>Address</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Country</th>
                        <th>Rating</th>
                        <th>Contact No</th>
                        <th>Price</th>
                        <th>Image</th>
                        <th>Availability</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    {hotel.map(hotel =>
                    <tr>
                        <td>{hotel.hotel_name}</td>
                        <td>{hotel.hotel_address}</td>
                        <td>{hotel.hotel_city}</td>
                        <td>{hotel.hotel_state}</td>
                        <td>{hotel.hotel_country}</td>
                        <td>{hotel.hotel_rating}</td>
                        <td>{hotel.hotel_phone}</td>
                        <td>{hotel.hotel_price}</td>
                        <td>{hotel.hotel_image}</td>
                        <td>{hotel.hotel_available === '1' ? 'Available' : 'Not available'}</td>
                        <td>{hotel.hotel_website}</td>
                        <td><i onClick={() => updatehotel(hotel.hotel_id)} class="uil uil-edit icon"/><i onClick={() => deletehoteldata(hotel.hotel_id)} class="uil uil-trash-alt icon"/></td>
                    </tr>
                    )}
                </table>
            </div>
        </div>
    );
}

export default hoteltable;
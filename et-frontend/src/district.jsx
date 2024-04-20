import './css/district.css'
import React,{useEffect, useState} from 'react';
import {listdistrict} from './service/districtservice';
import useLocalStorage from "use-local-storage";

    
    const district = () =>{
        const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const [isDark] = useLocalStorage("isDark", preference);

        const[district,setdistrict] = useState([])
        useEffect (() => {
            listdistrict().then((response) => {

                setdistrict(response.data);

            }).catch(error => {

                console.error('Error fetching data: ', error);

            })
        },
        []);
        const handleExploreAll = (districtName) => 
        {
            window.location.href = `/hotel?district=${encodeURIComponent(districtName)}`;
        };
        return(
            <section className="districts" data-theme={isDark ? 'dark' : 'light'}>
            {
                district.map(district =>
                <div className="district" key={district.id}>
                    <p className="dname">{district.name_en}</p>
                    <img src={"./src/assets/district/" + district.dimg} className="districtimg" />
                    <br />
                    <button className="explore" onClick={() => handleExploreAll(district.name_en)}>Explore All</button>
                </div>
                )
            }
            </section>
        );
    }


export default district;
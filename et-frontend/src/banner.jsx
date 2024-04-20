import './css/banner.css';
import './css/about.css'
import Image1 from './assets/Home/1.jpg';
import Image2 from './assets/Home/2.jpg';
import Image3 from './assets/Home/3.jpg';
import Image4 from './assets/Home/4.jpg';
import { useState, useEffect } from 'react';
import useLocalStorage from "use-local-storage";

function Banner() {
    const imageUrls = [Image1, Image2, Image3, Image4];
    const [currentIndex, setCurrentIndex] = useState(0);
    
    const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDark] = useLocalStorage("isDark", preference);

    useEffect(() => 
    {
        const interval = setInterval(() => 
        {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }
        , 5000);

        return () => clearInterval(interval);
    },
    [imageUrls.length]);

    return (
    <div>
        <div className="banner" data-theme={isDark ? 'dark' : 'light'}>
            <div className="banner-text">
                <p className="banner-h">WELCOME TO THE EASY TRAVEL</p>
                <h1 className="banner-m">Find the best hotels in Sri-Lanka</h1>
            </div>
        <div className="banner-image">
            <img className="banner-img" src={imageUrls[currentIndex]} alt="Banner" />
            </div>
        </div>
        <div className='about' data-theme={isDark ? 'dark' : 'light'}>
            <div className='about-txt'>
                <h1 className='about-h'>About  us</h1>
                <p className='about-p'>
                Easy Travel simplifies the daunting task of finding the perfect hotel for your next adventure.
                    With just a few clicks, you can browse through a curated selection of top-rated accommodations tailored to your preferences and budget.
                    Our intuitive interface ensures a seamless booking experience,
                    allowing you to focus on what truly matters - enjoying your trip.
                    Say goodbye to endless scrolling and complicated searches.
                    Easy Travel makes finding your ideal hotel as effortless as a stroll on the beach.
                </p>
            </div>
        </div>
    </div>
    );
}

export default Banner;

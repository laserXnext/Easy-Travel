import './css/head.css'
import Image1 from './assets/Back_sl/b1.jpg';
import Image2 from './assets/Back_sl/b2.webp';
import Image3 from './assets/Back_sl/b3.webp';
import Image4 from './assets/Back_sl/b4.jpg';
import { useState, useEffect } from 'react';
import About from './component/aboutsrilanka.jsx';

function head(){

    const imageUrls = [Image1, Image2,Image3, Image4];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => 
    {
        const interval = setInterval(() => 
        {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
        }
        , 8000);

        return () => clearInterval(interval);
    },
    [imageUrls.length]);


    return(
        <div>
            <div className="head" style={{ backgroundImage: `url(${imageUrls[currentIndex]})` }}>
                <h1 className="head-h">Sri-Lanka</h1>
                <p className='head-p'>Sri Lanka, known by a flotilla of aliases, including the Resplendent Isle,
                is renowned for its stunning beaches, verdant tea plantations,
                and ancient cities. Dive into its crystal-clear waters for a scuba adventure,
                pay a visit to an elephant orphanage, or marvel at the enchanting phenomenon of a lagoon filled with singing fish.
                Explore the dense jungles teeming with wildlife, uncover hidden shrines,
                and immerse yourself in the tranquility of ancient temples. Situated just 20 miles off the coast of India,
                this island, formerly known as Ceylon, is home to a population of 20 million people and boasts eight World Heritage sites.
                The country's long and brutal civil war came to an end in May 2009, ushering in an era of peace, stability,
                and a resurgence in tourism.
                </p>
            </div>
            {/* <About/> */}
            <h1 className="head-txt">Where ?</h1>
        </div>
    );
}

export default head;
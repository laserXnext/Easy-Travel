import { useState } from 'react';
import './searchbar.css'

function  searchbar()
{
    const [search,setSearch] = useState('');
    console.log(search)

    return (
        <div className='search'>
            <input type='text'  placeholder='Search by hotel name' className='searchbar'  onChange={(e) => setSearch(e.target.value)}/>
            <button type='submit' className='search-btn'>Search<i class="uil uil-search"/></button>
        </div>
    );
}

export default searchbar;
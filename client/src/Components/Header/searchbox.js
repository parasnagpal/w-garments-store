import React from 'react'
import {IoSearchOutline} from 'react-icons/io5'

class SearchBox extends React.Component{
    render(){
        return(
            <div className='searchbox border border-dark d-flex'>
                <input className='border-0'/>
                <div className="p-1"><IoSearchOutline/></div>
            </div>
        );
    }
}

export default SearchBox;
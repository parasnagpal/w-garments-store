import React from 'react'
import SearchBox from './searchbox'
import Cart from './cart';

class Header extends React.Component{
    render(){
        return(
            <div className="d-flex justify-content-between p-2 header">
                <SearchBox/>
                <Cart/>
            </div>
        );
    }
}

export default Header;
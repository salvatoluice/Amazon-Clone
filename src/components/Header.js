import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        <div className='header_search'>
            <input 
                className='header_searchInput'
                type='text'
            />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <div className='header_option'>
                <span className='header_optionLineOne'>Hello, guest!</span>
                <span className='header_optionLineTwo'>Sign In</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
        </div>
        <div className='header_optionBasket'>
            <AddShoppingCartIcon />
            <span className='header_optionLineTwo header_basketCount'>0</span>
        </div>
    </div>
  )
}

export default Header
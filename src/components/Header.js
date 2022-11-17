import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import './header.css'
import { Link } from 'react-router-dom';
import { useStateValue } from './Stateprovider';
import {auth} from '../components/firebase'

const Header = () => {

    const [ { basket, user }, dispatch] = useStateValue();

    const handleAuth = () => {
        if (user) {
            auth.signOut();
        }
    }

  return (
    <div className='header'>
        <Link to='/'>
            <img className='header_logo' src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'/>
        </Link>
        <div className='header_search'>
            <input 
                className='header_searchInput'
                type='text'
            />
            <SearchIcon className='header_searchIcon'/>
        </div>
        <div className='header_nav'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuth} className='header_option'>
                    <span className='header_optionLineOne'>Hello, guest!</span>
                    <span className='header_optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>
                </div>
            </Link>
            <div className='header_option'>
                <span className='header_optionLineOne'>Returns</span>
                <span className='header_optionLineTwo'>& Orders</span>
            </div>
            <div className='header_option'>
                <span className='header_optionLineOne'>Your</span>
                <span className='header_optionLineTwo'>Prime</span>
            </div>
        </div>
        <Link to='/checkout'>
            <div className='header_optionBasket'>
                <AddShoppingCartIcon />
                <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
            </div>
        </Link>
    </div>
  )
}

export default Header
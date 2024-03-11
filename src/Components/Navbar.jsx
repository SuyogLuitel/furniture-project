import React, { useState } from 'react'
import logo from '../assets/Meubel House_Logos-05.png';
import userIcon from '../assets/mdi_account-alert-outline.png';
import searchIcon from '../assets/akar-icons_search.png';
import wishlistIcon from '../assets/akar-icons_heart.png';
import cartIcon from '../assets/ant-design_shopping-cart-outlined.png';
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menu, setMenu] = useState("home")
    return (
        <div className='nav w-full bg-white-smoke-500 flex h-16 p-4 items-center justify-between'>
            <div className="logo flex items-center">
                <img src={logo} alt="Furniro Logo" className='w-8' />
                <div className='font-bold text-2xl'>Furniro</div>
            </div>
            <div className="nav-links">
                <ul className='flex gap-8 text-base font-medium'>
                    <li onClick={() => { setMenu("home") }}><Link to='/'>Home</Link> {menu === "home"}</li>
                    <li onClick={() => { setMenu("shop") }}><Link to='/shop'>Shop</Link> {menu === "shop"}</li>
                    <li onClick={() => { setMenu("about") }}><Link to='/about'>About</Link> {menu === "about"}</li>
                    <li onClick={() => { setMenu("contact") }}><Link to='/contact'>Contact</Link> {menu === "contact"}</li>
                </ul>
            </div>
            <div className="icons flex gap-8">
                <img src={userIcon} alt="User Icon" className='w-6' />
                <img src={searchIcon} alt="Search Icon" className='w-6' />
                <img src={wishlistIcon} alt="Wishlist Icon" className='w-6' />
                <img src={cartIcon} alt="Cart Icon" className='w-6' />
            </div>
        </div>
    );
};

export default Navbar;



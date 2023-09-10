import React from 'react'
import {Link} from 'react-router-dom';
import {ShoppingCart} from "phosphor-react";
import '../Navbar.css';

const Navbar = () =>{
    return(
        <div className='Navbar'>
            <div className='links'>
                <Link to ="">Products</Link>
                <Link to ="AddProduct">Add Product</Link>
                <Link to ="OrderProduct"><ShoppingCart size={32}/>
                </Link>
            </div>

        </div>
    );
}

export default Navbar ;
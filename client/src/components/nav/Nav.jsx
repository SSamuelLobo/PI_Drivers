import React from 'react';
import SearchBar from '../searchBar/searchBar';
import Button from '../Button/button';
import "./nav.css"

const Nav = ({onSearch}) => {
    return (
        <nav className='container-nav'>
            <div>
                <Button  link="/home" text="Home" />
                <Button  link="/form" text="Create Driver" />
            </div>
            <div className="container-nav__searchBar">
                <SearchBar onSearch={onSearch} />
            </div>
        </nav>
    )
}

export default Nav;
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <>
            <div className="header w-100 pt-4">
                <div className="container">
                    <h2>Welcome to the <span>Job Fair</span></h2>
                    <p>Here, you can meet multiple companies for getting hired</p>
                    <h2><FontAwesomeIcon icon={faDollarSign} />
                        Total Budget: 100Million</h2>
                    <h2 className="mt-3"><span>So, Why So Late? </span> </h2>
                </div>

            </div>
        </>
    );
};

export default Header;
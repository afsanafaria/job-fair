import React, { useEffect, useState } from 'react';
import Ceo from '../Ceo/Ceo';
import Cart from '../Cart/Cart';
import './Company.css'

const Company = () => {
    const [companyLists, setCompanyLists] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('./jobfair.JSON')
            .then(res => res.json())
            .then(data => setCompanyLists(data))
    }, [])
    const handleCart = (company) => {
        const newList = [...cart, company];
        setCart(newList);
    }
    return (
        <div className="company my-5 container-lg ">
            <div className="row">
                <div className="col-lg-10 col-md-8 ">
                    <div className="row  row-cols-1 row-cols-md-3 g-4 text-center">
                        {
                            companyLists.map(companyList => <Ceo
                                key={companyList._id}
                                ceo={companyList}
                                handleCart={handleCart}
                            />)
                        }
                    </div>

                </div>
                <div className="col-lg-2 col-md-4">
                    <Cart cart={cart} />
                </div>
            </div>


        </div>
    );
};

export default Company;
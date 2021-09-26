import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Ceo.css'

const Ceo = (props) => {
    const { picture, company, name, email, balance, vacancy, salary } = props.ceo || {};
    return (
        <div>
            <div className="col">
                <div className="card h-100 ">
                    <img src={picture} className="card-img-top rounded-circle w-50 mx-auto my-3" height="150px" alt="" />
                    <div className="card-body ">
                        <h5 className="card-title">Company: {company}</h5>
                        <p className="card-text">Name: {name}</p>
                        <p className="card-text"><FontAwesomeIcon icon={faEnvelope} />Email: {email}</p>
                        <p className="card-text">Salary: ${balance}</p>
                        <p className="card-text">Vacancy: {vacancy}</p>
                        <p className="card-text">Salaray Range: ${salary}</p>
                        <button onClick={() => props.handleCart(props.ceo)}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                            Add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Ceo;
import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    const salary = (previous, current) => previous + current.balance;
    const totalSalary = cart.reduce(salary, 0);

    return (
        <div className="cart text-wrap">
            <h5>Company Added: {cart.length}</h5>
            <h6>Salary: ${totalSalary.toFixed(2)}</h6>

            {
                cart.map(cartProps => {
                    return (
                        <>
                            <div className="cart-list d-flex" key={cartProps._id}>
                                <img src={cartProps.picture} className="image rounded-circle border-light" width="50px" height="50px" alt="" />
                                <li className="py-2">{cartProps.name} added</li>
                            </div>

                        </>
                    )
                })
            }

        </div>
    );
};

export default Cart;
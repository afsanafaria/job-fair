import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    const salary = (previous, current) => previous + current.balance;
    const totalSalary = cart.reduce(salary, 0);

    let nameValue = '';
    for (const names of cart) {
        nameValue = nameValue + '  ' + names.name;
    }

    return (
        <div className="cart">
            <h5>Company Added: {cart.length}</h5>
            <h6>Salary: ${totalSalary.toFixed(2)}</h6>
            <h6>CEO of the Companies:
                {/* split the white space */}
                {
                    nameValue.split('  ').map(name => <h6>{name}</h6>)
                }
            </h6>
        </div>
    );
};

export default Cart;
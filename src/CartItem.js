import React from "react";

class CartItem extends React.Component {
    constructor (){
        super(); // this is used to call parent class constructor
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ''
        }
    }
    render() {
        const { price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block" style={styles.image}>
                    <img alt="" />
                </div>
                <div className="right-block">
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: 'grey' }}>Rs {price} </div>
                    <div style={{ color: 'grey' }}>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                        <i className="actions-icons fa-solid fa-plus"></i>
                        <i className="actions-icons fa-solid fa-minus"></i>
                        <i className="actions-icons fas fa-trash-alt"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: 'gray'
    }
}

export default CartItem;
import React from "react";

class CartItem extends React.Component {
    constructor() {
        super(); // this is used to call parent class constructor
        this.state = {
            price: 999,
            title: "Mobile Phone",
            qty: 1,
            img: ''
        }
    }

    increaseQty = () => {
        // setState 1st form
        // this.setState({
        //     qty: this.state.qty + 1
        // });

        // setState 1st form - if previous state required use this.
        this.setState((prevState) => {
            return {
                qty: prevState.qty + 1
            }
        });
    }

    decreaseQty = () => {
        if (this.state.qty > 1) {
            this.setState((prevState) => {
                return {
                    qty: prevState.qty - 1
                }
            });
        } else {
            return;
        }
    }

    render() {
        const { price, title, qty } = this.state;
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
                        <i className="actions-icons fa-solid fa-plus" onClick={this.increaseQty}></i>
                        <i className="actions-icons fa-solid fa-minus" onClick={this.decreaseQty}></i>
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
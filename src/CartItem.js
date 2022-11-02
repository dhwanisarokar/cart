import React from "react";

const CartItem = (props) => {

    const { price, title, qty } = props.product;
    const { product, onIncreaseQty, onDecreaseQty, onDelete } = props;
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
                    <i
                        className="actions-icons fa-solid fa-plus"
                        onClick={() => onIncreaseQty(product)}
                    ></i>
                    <i
                        className="actions-icons fa-solid fa-minus"
                        onClick={() => onDecreaseQty(product)}
                    ></i>
                    <i
                        className="actions-icons fas fa-trash-alt"
                        onClick={() => onDelete(product.id)}
                    ></i>
                </div>
            </div>
        </div>
    );
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
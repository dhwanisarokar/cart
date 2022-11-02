import React from "react";

class CartItem extends React.Component{
    render(){
        return (
            <div className="cart-item">
                <div className="left-block" style={styles.image}>
                    <img alt=""/>
                </div>
                <div className="right-block">
                    <div style={{fontSize: 25}}>Phone</div>
                    <div style={{color: 'grey'}}>Rs 9000 </div>
                    <div style={{color: 'grey'}}>Qty: 1</div>
                    <div className="cart-item-actions">
                        {/* Buttons */}
                    </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 100,
        width: 100,
        borderRadius: 4,
        background: 'gray'
    }
}

export default CartItem;
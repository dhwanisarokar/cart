import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";

class App extends React.Component {
  constructor() {
    super(); // this is used to call parent class constructor
    this.state = {
      products: [
        {
          price: 100,
          title: "Watch",
          qty: 12,
          img: '',
          id: 1
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 1,
          img: '',
          id: 2
        },
        {
          price: 1000,
          title: "Laptop",
          qty: 2,
          img: '',
          id: 3
        }
      ]
    }
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      product
    });
  }

  handleDecreaseQty = (product) => {
    if (product.qty > 1) {
      const { products } = this.state;
      const index = products.indexOf(product);

      products[index].qty -= 1;
      this.setState({
        product
      });
    }
    else return;
  }

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const item = products.filter((item) => item.id !== id);

    this.setState({
      products: item
    });
  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });

    return count;
  }
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart 
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDelete={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;

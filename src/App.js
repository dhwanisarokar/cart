import React from "react";
import Cart from "./Cart";
import Navbar from "./Navbar";
import {db} from './firebase-config'; 
import { collection, onSnapshot, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore"; 

class App extends React.Component {
  constructor() {
    super(); // this is used to call parent class constructor
    this.state = {
      products: [],
      loading: true
    }
  }

  componentDidMount () {
    
    onSnapshot(collection(db, "products") , (snapshot) => {
      const products = snapshot.docs.map((doc) => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });

      this.setState({
        products: products,
        loading: false
      });
    }, 
    (err) => {
      console.log('Error: ',err);
    });
    
  }

  handleIncreaseQty = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;
    // this.setState({
    //   product
    // });
    
    updateDoc(doc(db, 'products', products[index].id), {
      qty: products[index].qty + 1
    })
    .catch((err) => {
      console.log("error in updateing: ", err);
    });
  }

  handleDecreaseQty = (product) => {
    if (product.qty > 1) {
      const { products } = this.state;
      const index = products.indexOf(product);

      // products[index].qty -= 1;
      // this.setState({
      //   product
      // });

      updateDoc(doc(db, 'products', products[index].id), {
        qty: products[index].qty - 1
      })
      .catch((err) => {
        console.log("error in updateing: ", err);
      });
    }
    else return;
  }

  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const item = products.filter((item) => item.id !== id);

    // this.setState({
    //   products: item
    // });

    deleteDoc(doc(db, 'products', id))
    .catch((err) => {
      console.log("error in deleting: ", err);
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

  getCartTotalPrice = () => {
    const { products } = this.state;

    let totalPrice = 0;

    products.forEach((product) => {
      totalPrice = totalPrice + product.qty * product.price;
    });

    return totalPrice;
  }

  addProduct = async() => {
    await addDoc(collection(db, 'products'), {
      img: '',
      qty: 2,
      title: 'Washing Machine',
      price: 9090
    });
  }

  render() {
    const { products, loading } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <button onClick={this.addProduct} style={{ padding: 10, margin: 10 }}>Add Product</button>
        <Cart 
          products={products}
          onIncreaseQty={this.handleIncreaseQty}
          onDecreaseQty={this.handleDecreaseQty}
          onDelete={this.handleDeleteProduct}
        />
        {loading && <h1 style={{margin: 10}}>Loading...</h1>}
        <div style={{fontSize: 20, padding: 20, fontWeight: 'revert'}}>Total: {this.getCartTotalPrice()}</div>

      </div>
    );
  }
}

export default App;

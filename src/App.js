import CartItem from "./CartItem";
import Cart from "./Cart"
import NavBar from "./NavBar"
import React from 'react';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        products:[
            {
                price: 999,
                title: 'smart phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1575695342320-d2d2d2f9b73f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
                id: 1
            },
            {
                price: 99,
                title: 'watch',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
                id: 2
            },
            {
                price: 99999,
                title: 'laptop',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
                id: 3
            }
        ]
    }
}

handleIncreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
        products: products
    })
}

handleDecreaseQuantity = (product) => {
    const {products} = this.state;
    const index = products.indexOf(product);

    if(products[index].qty === 0){
        return;
    }

    products[index].qty -= 1;
    this.setState({
        products: products
    })
}

handleDeleteProduct = (id) => {
    const {products} =this.state;

    const items = products.filter((item) => item.id !== id);

    this.setState({
        products: items
    })
}

getCartCount = () =>{
  const {products} = this.state;

  let count = 0;

  products.forEach((product) => {
    count += product.qty
  });
  return count;
}

getCartTotal = () =>{
  const {products} = this.state;

  let cartTotal = 0;

  products.map((product) => {
    cartTotal = cartTotal + product.qty*product.price;
  });

  return cartTotal;
}

render () {
    const {products} = this.state;
    return (
    <div className="App">
      <NavBar count={this.getCartCount()} />
      <Cart 
        products={products}
        onIncreaseQuantity={this.handleIncreaseQuantity}
        onDecreaseQuantity={this.handleDecreaseQuantity}
        onDeleteProduct={this.handleDeleteProduct}
      />
      <div style={{paddinf: 10, fontSize: 20}}> TOTAL : {this.getCartTotal()}</div>
    </div>
  );
}
}


export default App;

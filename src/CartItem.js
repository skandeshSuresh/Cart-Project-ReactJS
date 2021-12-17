import { reject } from 'lodash';
import React from 'react';


class CartItem extends React.Component {

    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'phone',
            qty: 1,
            img: ''
        }
        // this.increaseQuantity=this.increaseQuantity.bind(this);
        // this.testing();
    }

    // testing (){
    //     const promise = new Promise((resolve, reject) => {
    //         setTimeout(() => {
    //             resolve('done');
    //         }, 5000);
    //     });

    //     promise.then(() => {
    //         // setState acts as a synchronous call
    //         this.setState({qty: 100});

    //         console.log('this.state', this.state)
    //     });
    // }

    increaseQuantity = () => {
        //setState form 1
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        // setState form 2
        // setState acts as an asynchronous call
        this.setState((prevState)=>{
            return {
                qty: prevState.qty + 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    decreaseQuantity = () => {
        const {qty} = this.state;
        if(qty === 0){
            return;
        }
        // setState acts as an asynchronous call
        this.setState((prevState)=>{
            return {
                qty: prevState.qty - 1
            }
        }, () => {
            console.log('this.state', this.state);
        });
    }

    render(){
        const{price, title, qty} = this.state;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{this.state.title}</div>
                    <div style={{ color: 'red' }}>Rs {price}</div>
                    <div style={{ color: 'blue'  }}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/*buttons*/}
                        <img alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1639657987~hmac=a5fdb503e7833b27c0a15508eb9e7f3a' 
                            // onClick={this.increaseQuantity.bind(this)}
                            onClick={this.increaseQuantity}
                        />
                        <img alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick={this.decreaseQuantity} 
                        />
                        <img alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1639658030~hmac=792fd6866bbd99a4301d90cad69a9436' 
                        />
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
      background: 'yellow'
    }
  }


export default CartItem;
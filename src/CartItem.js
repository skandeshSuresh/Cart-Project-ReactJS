import React from 'react';


class CartItem extends React.Component {

    render(){
        const {price, title, qty} = this.props.product;
        const {product,  onDecreaseQuantity, onIncreaseQuantity, onDeleteProduct}=this.props;
        return(
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                    <div style={{ fontSize: 25 }}>{title}</div>
                    <div style={{ color: 'red' }}>Rs {price}</div>
                    <div style={{ color: 'blue'  }}>Qty: {qty}</div>
                    <div className='cart-item-actions'>
                        {/*buttons*/}
                        <img alt='increase' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/3303/premium/3303893.png?token=exp=1639657987~hmac=a5fdb503e7833b27c0a15508eb9e7f3a' 
                            // onClick={this.increaseQuantity.bind(this)}
                            onClick={() => onIncreaseQuantity(product)}
                        />
                        <img alt='decrease' 
                            className='action-icons' 
                            src='https://cdn-icons-png.flaticon.com/512/992/992683.png'
                            onClick={() => onDecreaseQuantity(product)} 
                        />
                        <img alt='delete' 
                            className='action-icons' 
                            src='https://cdn-icons.flaticon.com/png/512/484/premium/484611.png?token=exp=1639658030~hmac=792fd6866bbd99a4301d90cad69a9436' 
                            onClick={() => onDeleteProduct(product.id)}
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
import React from 'react'
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({id, title, image, price, rating }) {
    const [{ basket }, dispatch ] = useStateValue();

    const RemoveFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id:id,
        });
    }


    return (
        <div className = "checkout__product">
            <img className = "checkoutProduct__image" src = {image} />

          <div className = "checkProduct__info">
                <p className = "checkoutProduct__title">{title}</p>

                <p className = "checkoutProduct__price">
                  <small>$</small>
                  <strong>{price}</strong>
                </p>

                <div className = "checkoutProduct__rating">
                  {Array(rating)
                  .fill()
                  .map((_, i) => (
                      <p>⭐</p>
                  ))}
                </div> 
                <button className = "checkoutProduct__remove" onClick = {RemoveFromBasket}>Remove from Cart</button>
          </div>
          
        </div>
    )
}

export default CheckoutProduct

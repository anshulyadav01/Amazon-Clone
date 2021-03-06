import React from 'react'
import './Product.css';
import { useStateValue } from './StateProvider';
function Product({ id , title, image, price, rating}) {
    const [{}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type : 'ADD_TO_BASKET',
            item : {
                id : id,
                title : title,
                image : image,
                price : price,
                rating : rating
            }
        })
    };





    return (
        <div className = "product">
          <div className = "product__info">
                <p>{title}</p>
                <p className = "product__">
                <small>$</small>
                <strong>{price}</strong>
               </p>
               <div className= "product__rating">
                 {
                     Array(rating)
                     .fill()
                     .map((_) => (
                         <img className = "star__image" src = "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/279/star_2b50.png" />
                    //  <p>⭐</p>
                     ))
                 }
               </div>
         </div>
            
            <img src = {image} alt = ""/>
            <button onClick = {addToBasket} >Add to Cart</button>
            
        </div>
    )
}

export default Product

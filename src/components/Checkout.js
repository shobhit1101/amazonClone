import React from 'react'
import { useStateValue } from './StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'
import './Checkout.css'

function Checkout() {

    const [{basket}] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
            <img className='checkout_ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/>
            {/* condition */}
            {basket?.length === 0 ? (
                <div>
                    <h2>Your Shopping Basket is Empty</h2>
                    <p>You have no items in your basket. To buy one or more items, click "Add To Cart" next to then items.</p>
                </div>
            ):(
                <div>
                    <h2 className='checkout_title'>Your Shoping Basket</h2>
                    {/* List of Checkout Products */}
                    {basket.map((item) => (
                        <CheckoutProduct 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                        />
                    ))}
                </div>
            )}
            </div>
            {basket.length > 0 && (
                <div className='checkout-right'>
                    <Subtotal />
                </div>
            )}
            
        </div>
    )
}

export default Checkout

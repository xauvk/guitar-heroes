import CartCard from "./CartCard";

function Cart({cart}) {
    
    const itemsPrice = cart.reduce((a,c) => a + c.price, 0);
    const taxPrice = itemsPrice * 0.14;
    const shippingPrice = itemsPrice > 2000 ? 0 : 5;
    const totalPrice = itemsPrice + taxPrice + shippingPrice;
    
    const cartComponents = cart.map(guitar => {
        return <CartCard guitar={guitar} key={guitar.id} />
    }) 

    return (
        <div className="display-cart">
            <div className="cart-card">
                <h1>In Cart: </h1>
                <div className="grid-container">
                    <div>{cart.length === 0 && <div>Cart is Empty</div>}</div>
                    {cartComponents}
                </div>
            </div>
    
            {cart.legnth !== 0 && (
                <>
                    <hr></hr>
                    <div className="row">
                        <div>Items Price</div>
                        <div>${itemsPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div>Tax Price</div>
                        <div>${taxPrice.toFixed(2)}</div>
                    </div>
                    <div className="row">
                        <div>Shipping Price</div>
                        <div>${shippingPrice.toFixed(2)}</div>
                    </div>
                    <div className="row-price">
                        <div>Total Price</div>
                        <div><strong>${totalPrice.toFixed(2)}</strong></div>
                    </div>
                    <button className="purchase"> Buy</button>
                
                
                </>
            )}
        </div>
    )
}
export default Cart;
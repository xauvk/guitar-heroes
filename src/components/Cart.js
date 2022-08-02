import CartCard from "./CartCard";

function Cart({cart}) {
    
    console.log(cart)
    
    const cartComponents = cart.map(guitar => {
        return <CartCard guitar={guitar} key={guitar.id} />
    }) 

    return (
        <div className="cart">
            <h1>In Cart: </h1>
            {cartComponents}
        </div>
    )
}

export default Cart;
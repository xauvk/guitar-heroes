import CartCard from "./CartCard";

function Cart({cart}) {
    
    const cartComponents = cart.map(guitar => {
        return <CartCard guitar={guitar} key={guitar.id} />
    }) 

    return (
        <div className="cart">
            <h1>In Cart: </h1>
            <div className="grid-container">
                {cartComponents}
            </div>
        </div>
    )
}

export default Cart;
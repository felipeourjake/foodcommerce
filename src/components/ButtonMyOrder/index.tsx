import {Button} from './style'

import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg' 
import useCart from '../../hooks/useCart'

export function ButtonMyOrder(){

    const {cart} = useCart()

    return(
        <Button to="/cart">
            <span>Meu Pedido</span>
            <CartIcon/>
            {cart.length > 0 && <small>{`${cart.length}`.padStart(2, '0')}</small>}
        </Button>
    )
}
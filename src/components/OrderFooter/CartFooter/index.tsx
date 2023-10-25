import useCart from "../../../hooks/useCart";
import { Footer } from "../style";
import {currency} from '../../../helpers/CurrencyFormat'
import { Link } from "react-router-dom";


export function OrderFooter(){

    const {cart} = useCart()

    const total = cart.reduce((inc, item) => inc += (item.price * item.quantity), 0)

    return (
    <Footer>
        <Link to="/payment">Finalizar Pedido</Link>
        <span>Total: <strong>{currency(total)}</strong></span>
    </Footer>
    )
}
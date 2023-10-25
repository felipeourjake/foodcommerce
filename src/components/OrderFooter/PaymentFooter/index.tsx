import useCart from "../../../hooks/useCart";
import { Footer } from "../style";
import {currency} from '../../../helpers/CurrencyFormat'
import { Link } from "react-router-dom";


export function PaymentFooter(){

    const {cart} = useCart()

    const total = cart.reduce((inc, item) => inc += (item.price * item.quantity), 0)

    return (
    <Footer>
        <button type="submit">Efetuar Pagamento</button>
        <span>Total: <strong>{currency(total)}</strong></span>
    </Footer>
    )
}
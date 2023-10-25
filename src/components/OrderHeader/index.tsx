import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-cart.svg'

import {Header} from './style'
import useCart from '../../hooks/useCart'

export function OrderHeader(){

    const {cart} = useCart()

    return (
    <Header>
        <Link to="/">
            <img src={Logo} alt="Food Commerce" />
        </Link>
        <div>
            <div>
                <span>Meu pedido</span>
                <small>{`${cart.length}`.padStart(2, '0')} itens</small>
            </div>
            <CartIcon />
        </div>
    </Header>
    )
}
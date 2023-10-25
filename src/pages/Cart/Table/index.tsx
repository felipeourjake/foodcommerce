import useCart from "../../../hooks/useCart"
import { Container } from "./style"
import {currency} from '../../../helpers/CurrencyFormat'

import { FaTrashAlt } from 'react-icons/fa'
import emptyCartImg from '../../../assets/man-and-burger.svg'

import {ReactComponent as MaisIcon} from '../../../assets/circle-plus.svg'
import {ReactComponent as MenosIcon} from '../../../assets/circle-minus.svg'
import { OrderFooter } from "../../../components/OrderFooter/CartFooter"
import { Link } from "react-router-dom"

export function Table(){
    const {cart, addItem, removeItem, deleteItem} = useCart()

    if(cart.length === 0){
        return (
            <Container className="nenhum-item">
                <h2>Seu carrinho está vazio :(</h2>
                <Link to="/" >Ver cardápio</Link>
                <img src={emptyCartImg} alt="Sem nenhum item no carrinho" />
            </Container>
        )
    }

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th className="hide-mobile"></th>
                        <th>Item</th>
                        <th>Qtd</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(item => {

                        return (
                            <tr key={item.id}>
                                <td className="hide-mobile"><img src={item.image} alt={item.name} /></td>
                                <td className="name-td">{item.name}</td>
                                <td className="quantity-td">
                                    <div>
                                        <button onClick={() => removeItem(item.id)}>{<MenosIcon/>}</button>
                                        <span>{`${item.quantity}`.padStart(2,'0')}</span>
                                        <button onClick={() => addItem(item.id)}>{<MaisIcon/>}</button>
                                    </div>
                                </td>
                                <td className="subtotal-td">
                                    <span>{currency(item.quantity * item.price)}</span><br/>
                                    <small>({currency(item.price)} unit)</small>
                                </td>
                                <td className="actions-td">
                                    <button onClick={() => deleteItem(item.id)}>
                                        <FaTrashAlt/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <OrderFooter />
        </Container>
    )
}
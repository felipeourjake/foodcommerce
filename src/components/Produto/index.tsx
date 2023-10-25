import { currency } from "../../helpers/CurrencyFormat"
import useCart from "../../hooks/useCart"
import { ProdutoType } from "../../interfaces/produto"
import { Container } from "./style"
import { FiPlus } from 'react-icons/fi'

interface ProdutoListaType {
    data: Array<ProdutoType>
}

export const Produto = ({data}: ProdutoListaType) => {

    const {cart, addToCart} = useCart()

    return (
        <Container>
            {data.map(produto => {
                const inCart = cart.find(item => item.id === produto.id)

                return (
                <article key={produto.id} className="produto">
                    {inCart && <span>{inCart.quantity}</span>}
                    <h2>{produto.name}</h2>
                    <img src={produto.image} alt={produto.name} />
                    <p>{produto.description}</p>
                    <div>
                        <strong>{currency(produto.price)}</strong>
                        <button type="button" onClick={() => addToCart(produto)}><FiPlus/></button>
                    </div>
                </article>
            )})}
        </Container>
    )
}
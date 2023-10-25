import { Link } from "react-router-dom"
import { Head } from "../../../components/Head"
import { currency } from "../../../helpers/CurrencyFormat"
import useCart from "../../../hooks/useCart"
import { Container, Main, Box } from "./style"
import { AiFillCheckCircle, AiOutlineWhatsApp } from 'react-icons/ai'

const PaymentSuccess = () => {
    const {cart} = useCart()
    const total = cart.reduce((inc, item) => inc += (item.price * item.quantity), 0)

    return(
        <Container>
            <Head title="Pedido feito com sucesso!"/>
            <Main>
                <Box className="first">
                    <div><AiFillCheckCircle/></div>
                    <h1>Pedido Realizado!</h1>
                    <strong>#123</strong>
                </Box>
                <Box>
                    <h4>Detalhes do pedido</h4>
                    <ul>
                        {cart.map(item => (
                        <li><div>{item.quantity}x - {item.name}</div><div>{currency(item.price)}</div></li>
                        ))}
                        <li className="total"><div>Total:</div> <div>{currency(total)}</div></li>
                        <li><div>Forma de Pagamento:</div> <b>Crédito</b></li>
                    </ul>
                </Box>
                <Box>
                    <h4>Endereço de Entrega</h4>
                    <ul>
                        <li><div>Rua Cecilia Aurora Roque Wacogawa, 68 - Chácara Duchen - Suzano/SP <br/>CEP: 08620-895</div></li>
                    </ul>
                </Box>
                <Box className="ajuda">
                    <a href="https://wa.me/5511987548630">
                        <AiOutlineWhatsApp />
                        <div>
                            <strong>Precisa de ajuda?</strong>
                            <span>Fale conosco no WhatsApp!</span>
                        </div>
                    </a>
                </Box>
                <Link to="/">Voltar para o Início</Link>
            </Main>
        </Container>
    )
}

export default PaymentSuccess
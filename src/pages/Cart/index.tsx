import { Head } from "../../components/Head"
import { OrderHeader } from "../../components/OrderHeader"
import { Table } from "./Table"
import { Container, MainCart } from "./style"

const Cart = () => {
    return (
        <Container>
            <Head title="Meu Pedido"/>
            <MainCart>
                <OrderHeader ></OrderHeader>
                <Table></Table>
            </MainCart>
        </Container>
    )
}

export default Cart
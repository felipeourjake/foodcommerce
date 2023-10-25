import { Head } from "../../../components/Head";
import { Title } from "../../../components/PageTitle/style";
import { Produto } from "../../../components/Produto";
import useProducts from "../../../hooks/useProducts";

const Pizzas = () => {

    const {pizzas} = useProducts()

    return (
        <>
        <Head title="Pizzas" />
        <Title>Pizzas</Title>
        <Produto data={pizzas} />
        </>
    )
}

export default Pizzas;
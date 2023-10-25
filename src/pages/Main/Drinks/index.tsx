import { Head } from "../../../components/Head";
import { Title } from "../../../components/PageTitle/style";
import { Produto } from "../../../components/Produto";
import useProducts from "../../../hooks/useProducts";

const Drinks = () => {

    const {drinks} = useProducts()

    return (
        <>
        <Head title="Drinks" />
        <Title>Drinks</Title>
        <Produto data={drinks} />
        </>
    )
}

export default Drinks;
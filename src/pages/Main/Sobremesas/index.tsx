import { Head } from "../../../components/Head";
import { Title } from "../../../components/PageTitle/style";
import { Produto } from "../../../components/Produto";
import useProducts from "../../../hooks/useProducts";

const Sobremesas = () => {

    const {sobremesas} = useProducts()

    return (
        <>
        <Head title="Sobremesas" />
        <Title>Sobremesas</Title>
        <Produto data={sobremesas} />
        </>
    )
}

export default Sobremesas;
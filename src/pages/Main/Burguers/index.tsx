import { Head } from "../../../components/Head";
import { Title } from "../../../components/PageTitle/style";
import { Produto } from "../../../components/Produto";
import useProducts from '../../../hooks/useProducts';

const Burguers = () => {
    
    const {burguers} = useProducts()

    return (
        <>
        <Head title="Burguers" />
        <Title>Burguers</Title>
        <Produto data={burguers} />
        </>
    )
}

export default Burguers;
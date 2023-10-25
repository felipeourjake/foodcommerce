import { createContext, useState, useEffect, ReactNode } from "react";
import { ProdutoType } from "../interfaces/produto";
import api from "../services/api";

interface ProdutosContextProps {
    burguers: Array<ProdutoType>
    pizzas: Array<ProdutoType>
    drinks: Array<ProdutoType>
    sobremesas: Array<ProdutoType>
}

interface ProdutosProviderContextProps {
    children: ReactNode
}

export const ProdutosContext = createContext({} as ProdutosContextProps)

export default function ProdutosContextProvider({children}: ProdutosProviderContextProps){
    const [burguers, setBurguers] = useState([])
    const [pizzas, setPizzas] = useState([])
    const [drinks, setDrinks] = useState([])
    const [sobremesas, setSobremesas] = useState([])

    useEffect(() => {
        const getBurguers = async () => {
            const apidata = await api.get('/burguers.json');
            setBurguers(apidata.data)
        }
        getBurguers()

        const getPizzas = async () => {
            const apidata = await api.get('/pizzas.json');
            setPizzas(apidata.data)
        }
        getPizzas()

        const getDrinks = async () => {
            const apidata = await api.get('/drinks.json');
            setDrinks(apidata.data)
        }
        getDrinks()

        const getSobremesas = async () => {
            const apidata = await api.get('/sobremesas.json');
            setSobremesas(apidata.data)
        }
        getSobremesas()
    }, [])

    return (
        <ProdutosContext.Provider value={{burguers,pizzas,drinks,sobremesas}}>
            {children}
        </ProdutosContext.Provider>
    )
}

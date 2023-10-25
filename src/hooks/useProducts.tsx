import { useContext } from "react";
import { ProdutosContext } from "../contexts/produto";

export default function useProducts(){
    return useContext(ProdutosContext)
}
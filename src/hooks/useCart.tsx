import { useContext } from "react";
import { CarrinhoContext } from "../contexts/carrinho";

export default function useCart(){
    return useContext(CarrinhoContext)
}
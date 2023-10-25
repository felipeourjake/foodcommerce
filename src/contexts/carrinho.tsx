import { ReactNode, createContext, useState } from "react";
import { ProdutoType } from "../interfaces/produto";
import { toast } from "react-toastify"
import { CustomerProps } from "../interfaces/customerOrder";
import { Navigate } from "react-router-dom";

interface ItemCarrinhoProps extends ProdutoType {
    quantity: number
}

interface CarrinhoContextProps {
    cart: Array<ItemCarrinhoProps>
    addToCart: (item: ProdutoType) => void
    addItem: (id: number) => void
    removeItem: (id: number) => void
    deleteItem: (id: number) => void
    finalizeOrder: (customer: CustomerProps) => void
}

interface CarrinhoProviderProps {
    children: ReactNode
}

export const CarrinhoContext = createContext({} as CarrinhoContextProps)

export default function CarrinhoProvider({children}: CarrinhoProviderProps){

    const [cart, setCart] = useState<Array<ItemCarrinhoProps>>(() => {
        const localStorageCart = localStorage.getItem('@FoodCommerce:cart')
        if(localStorageCart){
            return JSON.parse(localStorageCart)
        }
        return []
    })

    function storageCart(cart: Array<ItemCarrinhoProps>){
        setCart(cart)
        localStorage.setItem('@FoodCommerce:cart', JSON.stringify(cart))
    }

    function addToCart(novoItem: ProdutoType){

        function checkItemExistsInCart(item_id: number): boolean {
            return cart.some(function(item) {
                return item.id === item_id;
            }); 
        }

        if(checkItemExistsInCart(novoItem.id)){
            const newCart = cart.map(itemCart => {
                if(itemCart.id === novoItem.id){
                    return {...itemCart, quantity: itemCart.quantity + 1}
                }
                return itemCart;
            })
            toast.success(`Mais um ${novoItem.name} foi adicionado no pedido`)
            storageCart(newCart)
        }else{
            const newItem = {...novoItem, quantity: 1}
            const newCart = [...cart, newItem]
            toast.success(`Um ${novoItem.name} foi adicionado no pedido`)
            storageCart(newCart)
        }
    }
    function addItem(id: number){
        const newCart = cart.map(item => {
            if(item.id === id){
                return {...item, quantity: item.quantity + 1}
            }
            return item
        })
        storageCart(newCart)
    }

    function removeItem(id: number){
        const newCart = cart.map(item => {
            if(item.id === id){
                if((item.quantity - 1) > 0)
                    return {...item, quantity: item.quantity - 1}
            }
            return item
        })
        storageCart(newCart)
    }
    function deleteItem(id: number){
        const newCart = cart.filter(item => {
            if(item.id !== id){
                return true
            }
            return false
        })
        toast.success(`Item removido do pedido`)
        storageCart(newCart)
    }

    function finalizeOrder(customer: CustomerProps){
        console.log(customer)
        console.log(cart)
        alert('Pedido Feito com Sucesso!')

        localStorage.removeItem('@FoodCommerce:cart')
    }
     
    return (
        <CarrinhoContext.Provider value={{cart,addToCart,addItem,removeItem,deleteItem,finalizeOrder}}>
            {children}
        </CarrinhoContext.Provider>
    )
}
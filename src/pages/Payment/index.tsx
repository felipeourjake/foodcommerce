import { Head } from "../../components/Head"
import { PaymentFooter } from "../../components/OrderFooter/PaymentFooter"
import { OrderHeader } from "../../components/OrderHeader"
import { Container, FormElement, Formulario, Main } from "./style"
import axios from 'axios'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

import {schema, FormData} from './formValidation'
import useCart from "../../hooks/useCart";
import { Navigate } from "react-router-dom"

import {BiCreditCard, BiMoney} from 'react-icons/bi'

const PaymentPage = () => {

    const {finalizeOrder,cart} = useCart()

    const {register, handleSubmit, formState: {errors}, setValue, watch, setFocus} = useForm<FormData>({resolver: yupResolver(schema)})
    const onSubmit = (data: FormData) => {
        finalizeOrder(data);
        
    }

    const zipCode = watch('cep');
    if(zipCode && zipCode.length === 8){
        axios.get(`https://viacep.com.br/ws/${zipCode}/json/`).then(({data}) => {
            setValue("street", data.logradouro)
            setValue("neighborhood", data.bairro)
            setValue("uf", data.uf)
            setValue("city", data.localidade)
            setFocus('number')
        }).catch(err => {
            console.log(err)
        })
    }

    if(cart.length === 0){
        return <Navigate to="/" />
    }

    return (
        <Container>
            <Head title="Pagamento & Finalização"/>
            <Main>
                <OrderHeader />
                <Formulario>
                    <FormElement onSubmit={handleSubmit(onSubmit)}>
                        <h4>Informações Pessoais</h4>
                        <div className="field">
                            <label htmlFor="name">Nome completo</label>
                            <input 
                                type="text" 
                                id="name" 
                                placeholder="Tony Stark"
                                {...register('name')}
                            />
                            {errors.name && <label className="error">{errors.name.message}</label>}
                        </div>
                        <div className="grouped-field">
                            <div className="field">
                                <label htmlFor="email">E-mail</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    placeholder="tony@starkindustries.com"
                                    {...register('email')}
                                />
                                {errors.email && <label className="error">{errors.email.message}</label>}
                            </div>
                            <div className="field">
                                <label htmlFor="tel">Whatsapp</label>
                                <input 
                                    type="tel" 
                                    id="tel" 
                                    placeholder="DDD + Telefone"
                                    {...register('tel')}
                                />
                                {errors.tel && <label className="error">{errors.tel.message}</label>}
                            </div>
                            <div className="field">
                                <label htmlFor="document">CPF/CNPJ</label>
                                <input 
                                    type="tel" 
                                    id="document" 
                                    {...register('document')}
                                />
                                {errors.document && <label className="error">{errors.document.message}</label>}
                            </div>
                        </div>

                        <h4>Endereço de Entrega</h4>
                        <div className="field">
                            <label htmlFor="cep">CEP</label>
                            <input 
                                type="tel" 
                                id="cep" 
                                {...register('cep')}
                                style={{width:'120px'}}
                            />
                            {errors.cep && <label className="error">{errors.cep.message}</label>}
                        </div>
                        <div className="field">
                            <label htmlFor="street">Endereço</label>
                            <input 
                                type="text" 
                                id="street" 
                                {...register('street')}
                            />
                            {errors.street && <label className="error">{errors.street.message}</label>}
                        </div>
                        <div className="grouped-field">
                            <div className="field">
                                <label htmlFor="number">Número</label>
                                <input 
                                    type="tel" 
                                    id="number" 
                                    {...register('number')}
                                />
                                {errors.number && <label className="error">{errors.number.message}</label>}
                            </div>
                            <div className="field">
                                <label htmlFor="complement">Complemento</label>
                                <input 
                                    type="text" 
                                    id="complement" 
                                    {...register('complement')}
                                />
                                {errors.complement && <label className="error">{errors.complement.message}</label>}
                            </div>
                        </div>
                        <div className="grouped-field">
                            <div className="field">
                                <label htmlFor="neighborhood">Bairro</label>
                                <input 
                                    type="text" 
                                    id="neighborhood" 
                                    {...register('neighborhood')}
                                />
                                {errors.neighborhood && <label className="error">{errors.neighborhood.message}</label>}
                            </div>
                            <div className="field">
                                <label htmlFor="city">Cidade</label>
                                <input 
                                    type="text" 
                                    id="city" 
                                    {...register('city')}
                                />
                                {errors.city && <label className="error">{errors.city.message}</label>}
                            </div>
                            <div className="field">
                                <label htmlFor="uf">Estado</label>
                                <input 
                                    type="text" 
                                    id="uf" 
                                    {...register('uf')}
                                />
                                {errors.uf && <label className="error">{errors.uf.message}</label>}
                            </div>
                        </div>
                        
                        <h4>Dados de Pagamento</h4>
                        <div id="payment-forms">
                            <label>
                                <input type="radio" value="money" {...register("paymentForm")} />
                                <div>
                                    <BiMoney />
                                    <span>Dinheiro</span>
                                </div>
                            </label>
                            <label>
                                <input type="radio" value="credit" {...register("paymentForm")} />
                                <div>
                                    <BiCreditCard />
                                    <span>Crédito</span>
                                </div>
                            </label>
                            <label>
                                <input type="radio" value="debit" {...register("paymentForm")} />
                                <div>
                                    <BiCreditCard />
                                    <span>Débito</span>
                                </div>
                            </label>
                        </div>
                        {errors.paymentForm && <label className="error" style={{marginTop: "10px"}}>{errors.paymentForm.message}</label>}
                        <PaymentFooter />
                    </FormElement>
                </Formulario>
            </Main>
        </Container>
    )
}

export default PaymentPage
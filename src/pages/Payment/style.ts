import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #212121;
    color: #fff;
    overflow: auto;
`

export const Main = styled.main`
    width: 100%;
    max-width: 58rem;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`

export const Formulario = styled.div`
    padding: 2rem 2.5rem;
    background-color: #000;
    border-radius: 8px;
    margin-top: 1rem;
`

export const FormElement = styled.form`
    display: flex;
    flex-direction: column;

    .error {
        color: #ff6060;
        font-size: 0.75rem;
        margin-top: -0.625rem;
    }

    h4 {
        margin: 2.5rem 0 2rem;

        &:first-child {margin-top: 0;}
    }

    .grouped-field {
        flex-grow: 1;
        display: flex;
        gap: 1rem;
        width: 100%;
    }

    .field {
        flex-grow: 1;
        margin-bottom: 1rem;
    }

    label {
        display: block;
        color: #fff;
        margin-bottom: 0.5rem;
    }

    input[type='email'],
    input[type='text'],
    input[type='tel'] {
        flex-grow: 1;
        background-color: #1D1E21;
        color: #fff;
        border: 1px solid transparent;
        border-radius: 4px;
        transition: all ease .3s;
        width: 100%;
        height: 42px;
        margin: 0 0 1rem;
        padding: 0.7rem;
        box-sizing: border-box;

        &:focus {border-color: #585858}
    }

    #payment-forms {
        display: flex;
        gap: 1rem;

        label {
            display: flex;
            background-color: rgb(29, 30, 33);
            padding: 0.65rem;
            border-radius: 8px;
            box-sizing: border-box;
            cursor: pointer;
            position: relative;
            overflow: hidden;

            input {margin-right: 0.5rem;zoom:1.5;z-index: 2}

            input:checked + div {
                z-index: 1;
            }

            input:checked + ::before {
                content: "";
                position: absolute;
                border: 3px solid #8f1212;
                border: 3px solid #fff;
                border-radius: 10px;
                width: 100%;
                height: 100%;
                left: 0px;
                top: 0px;
                z-index: 3;
                box-sizing: border-box;
            }

            div {
                display: flex;
                align-items: center;
                gap: 0.65rem;

                svg {
                    width: 1.5rem;
                    height: 1.5rem;
                }
            }
        }
    }

    @media (max-width: 720px){
        .grouped-field {flex-direction: column}
    }
    
`
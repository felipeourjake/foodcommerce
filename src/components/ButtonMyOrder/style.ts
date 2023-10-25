import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Button = styled(Link)`
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    background-color: rgb(224, 49, 49);
    border: 0;
    border-radius: 4px;
    color: #fff;
    padding: 0.5rem 1rem;
    display: flex;
    align-items: center;
    transition: all ease .3s;
    text-decoration: none;

    &:hover {opacity: .8}

    span {
        font-size: 1.25rem;
    }

    svg {
        width: 1.75rem;
        height: 1.75rem;
        margin: 0 5px;
        fill: #fff;
    }

    small {
        font-size: 1.5rem;
        color: rgb(252, 196, 25);
    }

    @media (max-width: 720px){
        bottom: initial;
        top: 0.5rem;

        span {display: none;}

        svg {margin-left: 0;}
    }
`
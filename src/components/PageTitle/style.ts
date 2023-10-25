import styled from 'styled-components'

export const Title = styled.h1`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 3rem;

    font-size: 2.75rem;
    font-weight: 600;
    text-transform: uppercase;
    color: #fff;

    &:before {
        content: "";
        background-color: #fff;
        width: 42px;
        height: 5px;
        flex-shrink: 0;
        border-radius: 4px;
    }

    @media (max-width: 720px){
        font-size: 2rem;
        justify-content: center;

        &::before {display: none;}
    }
`
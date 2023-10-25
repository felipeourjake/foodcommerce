import styled from 'styled-components'

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.75rem;

    a, button {
        background-color: rgb(224, 49, 49);
        text-decoration: none;
        color: #fff;
        width: 100%;
        max-width: 16.5rem;
        min-height: 4rem;
        border: 0;
        font-size: 1.25rem;
        border-radius: 8px;
        font-weight: 700;
        transition: all ease .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;

        &:hover {opacity: .8}
    }

    span {
        font-weight: normal;
        text-transform: uppercase;

        strong {
            margin-left: 0.75rem;
            font-size: 2.25rem;
            font-weight: 700;
        }
    }
`
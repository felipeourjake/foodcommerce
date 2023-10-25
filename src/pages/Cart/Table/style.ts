import styled from 'styled-components'

export const Container = styled.main`
    background-color: #000;
    padding: 2rem 2.5rem;
    border-radius: 8px;
    margin-top: 2rem;

    &.nenhum-item {
        display: flex;
        flex-direction: column;
        align-items: center;

        a {
            background-color: rgb(224, 49, 49);
            color: #fff;
            padding: 0.5rem 1rem;
            border-radius: 4px;
            text-decoration: none;
            margin: 1rem 0;
            transition: all ease .3s;

            &:hover {
                opacity: .8;
            }
        }

        img {
            max-width: 100%;
        }
    }

    table {
        width: 100%;
        border-spacing: 0 0;
        border-collapse: collapse;

        th {
            padding: 0 1rem 0.5rem;
            font-weight: bold;
            font-size: 1.125rem;
            text-transform: uppercase;
            text-align: left;
        }

        tr td {
            border-bottom: 1px solid #ccc;
            padding: 1rem;

            img {
                width: 5.5rem;
                height: 5.5rem;
                border-radius: 4px;
                object-fit: cover;
            }

            &.name-td {
                font-weight: 900;
                font-size: 1.25rem
            }

            &.quantity-td > div {
                display: flex;
                align-items: center;

                button {
                    padding: 0;
                    border: 0;
                    background: none;
                    cursor: pointer;
                }

                span {
                    padding: 1rem;
                    font-weight: 600;
                }
            }

            &.subtotal-td {
                span {
                    font-weight: 900;
                    font-size: 1.25rem
                }

                small {
                    font-weight: 500;
                    font-size: 0.75rem;

                }
            }

            &.actions-td {
                button {
                    cursor: pointer;
                    border: 0;
                    background: none;
                }

                svg {
                    width: 1.5rem;
                    height: 1.5rem;
                    fill: rgb(252, 196, 25);
                }
            }
        }
    }

    @media (max-width: 720px) {
        table tr td {
            padding: 0.5rem;
        }

        table .hide-mobile {
            display: none;
        }

        table tr td.name-td,
        table tr td.subtotal-td span {font-size: 1rem;}
    }
`
import styled, { css } from 'styled-components'

interface SidebarProps {
    isMenuOpen: boolean
}

export const Aside = styled.aside<SidebarProps>`
    ${({isMenuOpen}) => isMenuOpen ? css`width: 16.3rem;` : css`width: 7.75rem;`}
    background-color: #E03131;
    padding: 2rem 0%;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all ease .3s;
    z-index: 10000;

    button {
        background: none;
        border: 0;
        padding: 0;
        cursor: pointer;
    }

    a {
        text-decoration: none;
    }

    nav {
        flex: 1;
        width: 100%;
        height: 100%;

        ul {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            gap: 1.5rem;

            li a {
                width: fit-content;
                position: relative;
                padding: 0 1.875rem;
                display: flex;
                align-items: center;
                gap: 2rem;

                svg {
                    width: 4rem;
                    height: 4rem;
                    fill: #fff;
                    transition: all ease .3s;
                }

                span {color: #fff;}

                &:hover {
                    svg {fill: #FCC419;}
                    span {color: #FCC419;}
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: #FCC419;
                        width: 5px;
                        height: 100%;
                        border-radius: 0 10px 10px 0;
                    }
                }

                &.active {
                    svg {fill: #FCC419;}
                    span {color: #FCC419;}
                    &::before {
                        content: "";
                        position: absolute;
                        left: 0;
                        top: 0;
                        background: #FCC419;
                        width: 5px;
                        height: 100%;
                        border-radius: 0 10px 10px 0;
                    }
                }


            }
        }
    }

    @media screen and (max-width: 720px) {
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
        z-index: 9999px;
        width: 100%;
        height: 5rem;
        padding: 0;
        overflow-y: auto;

        button {display: none;}

        nav {
            height: 100%;

            ul {
                display: flex;
                flex-direction: row;
                align-items: center;

                li a {
                    flex-direction: column;
                    padding: 0;

                    svg {
                        width: 3.25rem;
                        height: 3.25rem;
                    }

                    span {display: none;}

                    &::before {display: none;}
                }
            }
        }
    }
`
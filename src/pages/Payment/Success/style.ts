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
    max-width: 22rem;
    padding: 1rem 0.5rem;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;

    > a {
        width: 100%;
        height: 3rem;
        background-color: rgb(224, 49, 49);
        margin-top: 5px;
        text-decoration: none;
        font-size: 1.2rem;
        color: #fff;
        font-weight: 600;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const Box = styled.div`
    background-color: #000;
    box-sizing: border-box;
    padding: 1rem;
    border-radius: 8px;
    margin: 0.275rem 0;
    display: flex;
    flex-direction: column;

    &:first-child {
        align-items: center;
        position: relative;
        padding-top: 40px;

        >div {
            background-color: rgb(65 100 66);
            display: flex;
            padding: 10px;
            border-radius: 50%;
            position: absolute;
            top: -26px;
        }

        svg {
            background-color: #000;
            border-radius: 50%;
            fill: #4caf50;
            width: 2rem;
            height: 2rem;
        }

        h1 {
            font-size: 2rem;
        }

        strong {
            font-size: 1.2rem;
            margin-top: 0.5rem;
        }
    }

    h4 {
        font-size: 1.15rem;
        font-weight: 400;
        margin-bottom: 0.8rem;
    }

    ul li {
        display: flex;
        justify-content: space-between;
        font-size: 1rem;
        font-weight: 300;
        padding: 0.3rem 0;

        div {
            color: #d3d3d3;
            line-height: 22px;
        }

        &.total {
            padding: 0.5rem 0;
            border-top: 2px dashed #6c6c6c;
            margin-top: 0.5rem;

            div {
                font-weight: 600;
                font-size: 1.2rem
            }
        }
    }

    &.ajuda a {
        display: flex;
        align-items: center;
        text-decoration: none;

        svg {
            fill: #d3d3d3;
            margin: 0 15px 0 0;
            width: 2rem;
            height: 2rem;
        }

        div {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

            strong {
                color: #d3d3d3;
            }

            span {
                color: #d3d3d3;
                font-weight: 300;
                font-size: 0.875rem;
            }
        }
    }
`
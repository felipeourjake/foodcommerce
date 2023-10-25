import styled from 'styled-components'

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;

    img {
        width: 10rem
    }

    svg {
        fill: #fff;
        width: 2rem;
        height: 2rem;
        margin-left: 8px;
    }

    > div {
        display: flex;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
            align-items: flex-end;

            span {
                font-size: 1.2rem;
            }

            small {
                font-size: 1rem;
                color: rgb(252, 196, 25);
                font-weight: bold;
            }
        }
    }
`
import styled from 'styled-components'

export const Containter = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    background-color: #212121;

    > section {
        flex: 1;
        width: 100%;
        height: 100vh;
        overflow-y: auto;
        padding: 2rem 1.875rem;
        box-sizing: border-box;

        img {
            width: 10rem;
            margin-bottom: 2rem;
        }

        @media (max-width: 720px){
            display: flex;
            flex-direction: column;
            padding-bottom: 8rem;

            header {
                display: flex;
                flex-direction: column;
            }

            img {
                align-self: center;
            }
        }
    }
`


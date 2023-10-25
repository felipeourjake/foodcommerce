import styled from 'styled-components'

export const Container = styled.section`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    gap: 1.75rem;

    @media (max-width: 720px){
        grid-template-columns: auto;
    }

    .produto {
        position: relative;
        background-color: #000;
        padding: 1.75rem;
        border-radius: 4px;

        > span {
            color: rgb(255, 255, 255);
            position: absolute;
            background-color: #e03131;
            width: 2rem;
            height: 2rem;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 50%;
            top: -0.5rem;
            left: -0.5rem;;
            font-size: 1rem;
            font-weight: bold;
        }

        h2 {
            margin-bottom: 0.75rem;
            font-weight: 700;
            font-size: 1.5rem;
            text-align: center;
            color: #fff;
        }

        img {
            object-fit: cover;
            width: 100%;
            height: 11.25rem;
            border-radius: 4px;
            margin-bottom: 3.75rem;
        }

        p {
            font-size: 0.875rem;
            color: #fff;
        }

        div {
            margin-top: 0.875rem;
            display: flex;
            justify-content: space-between;
            align-items: center;

            strong {
                color: #fff;
                font-size: 2rem;
                font-weight: 600;
            }

            button {
                background-color: rgb(224, 49, 49);
                border: 0;
                width: 3rem;
                height: 3rem;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                color: #fff;
                font-size: 2rem;
                cursor: pointer;
                transition: all ease .3s;

                &:hover {
                    opacity: .8;
                }
            }
        }
    }
`
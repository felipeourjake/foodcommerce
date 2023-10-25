import { ReactNode } from "react"
import { Title } from "./style"

interface TitleProps {
    children: ReactNode
}

export const PageTitle = ({children}: TitleProps) => {
    return <Title>{children}</Title>
}
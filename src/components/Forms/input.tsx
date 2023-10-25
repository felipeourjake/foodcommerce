import { UseFormRegisterReturn } from "react-hook-form"

interface TextInputProps {
    type: string
    id?: string
    placeholder?: string
    register: UseFormRegisterReturn<"name">
}

export const TextInput = ({type, id, placeholder, register}: TextInputProps) => {
    return (
        <input 
            type={type} 
            id={id} 
            placeholder={placeholder}

        />
    )
}
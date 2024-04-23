import { useId } from "react"

export function Input ({type, label, ...props}) {
    const id = useId()
    const InputComponent = type === 'textarea' ? 'textarea' : 'input'
    return <div className="mb-3">
        {label && <label htmlFor={id} className="form-label">{label}</label>}
        <InputComponent className = 'form-control' id={id}  {...props} />
        
    </div>
}